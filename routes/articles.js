var express = require('express');
var router = express.Router();

router.get('/list', function (req, res, next) {
    res.send('Router 전체 게시글 목록 페이지')
});

router.get('/write', function (req, res, next) {
    res.send('Router 게시글 작성 페이지')
});

router.get('/look', function (req, res, next) {
    res.send('Router 게시글 조회 페이지')
});

router.get('/edit', function (req, res, next) {
    res.send('Router 게시글 수정 페이지')
});

module.exports = router;