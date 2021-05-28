const express = require('express');
const app = express();
const port = 5000;
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

// 설정
const config = require('./config/key');

// mongoose
const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');

// Schema
const { User } = require('./models/User');
const { Board } = require('./models/Board');
const { auth } = require('./middleware/auth');

// 크롤링
const axios = require("axios");
const cheerio = require("cheerio");

//application/x-www-form-urlencoded   body에 url담음
app.use(bodyParser.urlencoded({ extended: true }));

//application.json
app.use(bodyParser.json());
app.use(cookieParser());

mongoose
    .connect(config.mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    })
    .then(() => console.log('MongoDB Connected...')) //에러 안뜨게 작성, 잘연결됬을때 출력, 에러 출력
    .catch((err) => console.log(err));

// 추후 auto-increment 사용 고민
// autoIncrement.initialize(mongoose.connection);

app.get('/', (req, res) => res.send('안녕하세요~ 다들 새해복 많이 받으세요!!!'));

app.get('/api/hello', (req, res) => {
    res.send('안녕하세요~');
});

//회원가입
app.post('/api/users/register', (req, res) => {
    //회원가입할때 필요한 정보들을 클라이언트에서 가져오면 그것들을 DB에 넣어줌
    const user = new User(req.body);

    user.save((err, userInfo) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).json({
            success: true,
        }); //성공했을시
    });
});

//로그인
app.post('/api/users/login', (req, res) => {
    //로그인 라우터
    //요청된 이메일을 데이터베이스에서 있는지 찾음
    User.findOne({ email: req.body.email }, (err, user) => {
        if (!user) {
            return res.json({
                loginSuccess: false,
                message: '제공된 이메일에 해당하는 유저가 없습니다.',
            });
        }

        //요청된 이메일이 데이터 베이스에 있다면 비밀번호가 맞는 비밀번호인지 확인
        user.comparePassword(req.body.password, (err, isMatch) => {
            if (!isMatch)
                return res.json({
                    loginSuccess: false,
                    message: '비밀번호가 틀렸습니다.',
                });

            //비밀번호 까지 맞다면 토큰을 생성
            user.generateToken((err, user) => {
                if (err) return res.status(400).send(err);

                //token을 저장 -> 쿠키에
                res.cookie('x_auth', user.token)
                    .status(200)
                    .json({ loginSuccess: true, userId: user._id });
            });
        });
    });
});

app.get('/api/users/auth', auth, (req, res) => {
    // 여기 까지 미들웨어를 통과해 왔다는 이야기를 authentication 이 true 라는 말.

    res.status(200).json({
        _id: req.user._id,
        isAdmin: req.user.role === 0 ? false : true,
        isAuth: true,
        email: req.user.email,
        name: req.user.name,
        lastname: req.user.lastname,
        role: req.user.role,
        image: req.user.image,
    });
});

app.get('/api/users/logout', auth, (req, res) => {
    User.findOneAndUpdate({ _id: req.user._id }, { token: '' }, (err, user) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).send({
            success: true,
        });
    });
});

// 게시글 작성
app.post('/api/board/write', (req, res) => {
    // 게시글을 작성할 때 필요한 정보들을 클라이언트에서 가져오면 그것들을 DB에 넣어줌
    const board = new Board(req.body);

    board.save((err, writeBoard) => {
        if (err)
            return res.json({ boardWriteSuccess: false, err });
        return res.status(200).json({
            boardWriteSuccess: true,
            id: writeBoard.id,
            title: writeBoard.title,
            content: writeBoard.content,
            user_email: writeBoard.user_email,
            user_name: writeBoard.user_name
        });
    });
});

// 게시글 조회
app.post('/api/board/select', (req, res) => {
    Board.findOne({ id: req.body.id }, (err, selectBoard) => {
        if (!selectBoard) {
            return res.json({
                boardSelectSuccess: false,
                message: '조회할 게시글이 없습니다.',
            });
        }

        return res.status(200).json({
            boardSelectSuccess: true,
            id: selectBoard.id,
            title: selectBoard.title,
            content: selectBoard.content,
            user_email: selectBoard.user_email,
            user_name: selectBoard.user_name
        });
    });
});

// 게시글 업데이트
app.post('/api/board/update', (req, res) => {
    Board.findOne({ id: req.body.id }, (err, board) => {
        if (err)
            return res.json({ boardUpdateSuccess: false, err });

        if (!board) {
            return res.json({
                boardSelectSuccess: false,
                message: '수정할 게시글이 없습니다.',
            });
        }


        board.title = req.body.title
        board.content = req.body.content

        board.save((err, updateBoard) => {
            if (!updateBoard) {
                return res.json({
                    boardSelectSuccess: false,
                    message: '수정할 게시글이 없습니다.',
                });
            }

            return res.status(200).json({
                boardUpdateSuccess: true,
                id: updateBoard.id,
                title: updateBoard.title,
                content: updateBoard.content,
                user_email: updateBoard.user_email,
                user_name: updateBoard.user_name
            });
        })
    })
});

// 게시글 삭제 
app.post('/api/board/delete', (req, res) => {

    Board.deleteOne({ id: req.body.id }, (err, result) => {

        if (err)
            return res.json({ boardDeleteSuccess: false, err });
        if (result.deletedCount == 0)
            return res.json({
                boardDeleteSuccess: false,
                message: "삭제할 게시글이 없습니다."});
        return res.json({
            boardDeleteSuccess: true,
            deleteId: req.body.id
        });
    })
});



// 크롤링
// 기사 url에 따라 각각의 태그들 모두 변경해야 함.
// utf-8이 아닌 인코딩 방식의 경우 디코딩 해주어야 함. ex) euc-kr 등

const getHtml = async () => {
    try {
        return await axios.get("https://www.yna.co.kr/economy/finance?site=navi_economy_depth02");
    } catch (error) {
        console.error(error);
    }
  };
  
  app.get('/api/crawling/news', (req, res) => {
    getHtml()
    .then(html => {
        let ulList = [];
        const $ = cheerio.load(html.data);
        const $bodyList = $("div.list-type038 ul").children("li");
  
        $bodyList.each(function(i, elem) {
            ulList[i] = {
                image: $(this).find('figure.img-con a img').attr('src'),
                title: $(this).find('div.news-con a strong.tit-news').text(),
                url: $(this).find('div.news-con a').attr('href'),
                summary: $(this).find('div.news-con p.lead').text().slice(0, 200),
                date: $(this).find('div.info-box01 span.txt-time').text()
            };
        });
  
        const data = ulList.filter(n => n.title);
        return data;
    })
    .then(result => res.send(result));
  })

app.listen(port, () => console.log(`Express app listening on port ${port}!`));
