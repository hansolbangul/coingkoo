const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const boardSchema = mongoose.Schema({
    id: { // 게시글 ID (게시글 구분)
        type: Number,
        unique: 1
    },
    title: { // 게시글 제목
        type: String,
        maxlength: 100
    },
    content: { // 게시글 내용
        type: String,
        maxlength: 1000
    },
    user_email: { // 게시글 작성자 이메일
        type: String,
        trim: true,
    },
    user_name: { // 게시글 작성자
        type: String,
        maxlength: 50
    }
});

const Board = mongoose.model('Board', boardSchema); // 모델에 게시글 스키마를 담음

module.exports = { Board };
