const express = require('express');
const session = require('express-session');	// session, cookie 처리를 위한 모듈
const bodyParser = require('body-parser');		// post 데이터 처리 모듈
const ejs = require('ejs');
const fs = require('fs');						// 파일 오픈을 위한 모

const path = require('path');
const app = express();

app.set('views', path.join(__dirname, 'public'));
app.set('view engine', 'ejs');
app.engine('html', ejs.renderFile);

app.use(express.static('public'));	// static 폴더 설정
app.use(bodyParser.json());
app.use(session({
	secret: '',
	resave: false,
	saveUninitialized: true
}));

const port = process.env.PORT || 8080;
const router = require('./Router')(app, fs);
const server = app.listen(port, function () {
	console.log("Express server has started on port " + port);
});
