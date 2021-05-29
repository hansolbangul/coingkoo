const mongoose = require('mongoose');
var moment = require('moment');
require('moment-timezone');
moment.tz.setDefault('Asia/Seoul');
const autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);

const boardSchema = mongoose.Schema({
    id: {
        // 게시글 ID (게시글 구분)
        type: Number,
        unique: 1,
    },
    title: {
        // 게시글 제목
        type: String,
        maxlength: 100,
    },
    content: {
        // 게시글 내용
        type: String,
        maxlength: 1000,
    },
    user_email: {
        // 게시글 작성자 이메일
        type: String,
        trim: true,
    },
    user_name: {
        // 게시글 작성자
        type: String,
        maxlength: 50,
    },
    write_date: {
        // 작성일
        type: String,
        default: moment().format('YYYY-MM-DD HH:mm:ss'),
    },
});

boardSchema.plugin(autoIncrement.plugin, {
    model: 'Board',
    field: 'id',
    startAt: 1, //시작
    increment: 1, // 증가
});

const Board = mongoose.model('Board', boardSchema); // 모델에 게시글 스키마를 담음

module.exports = { Board };
