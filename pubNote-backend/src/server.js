import express from 'express';
import session from 'express-session';	// session, cookie 처리를 위한 모듈
import bodyParser from 'body-parser';	// post 데이터 처리 모듈

import httpErrors from 'http-errors';
import logger from 'morgan';
import ejs from 'ejs';
import fs from 'fs';
import path from 'path';
import router from './router';

export default class Server {
	constructor() {
		this.app = express();
		this.setMiddleware();
	}

	setRouter() {
		const { app } = this;
		const context = process.env.CONTEXT;
		const path = process.env.DEFAULT_PATH;

		app.use('/' + [context, path].join('/'), router);
	}

	setBodyParser() {
		const { app } = this;
		app.use(bodyParser.urlencoded({ extended: true }));
		app.use(bodyParser.json());
	}

	setMiddleware() {
		this.setBodyParser();
		this.setRouter();
	}

	listen(port) {
		const { app } = this;
		app.listen(port, function () {
			console.log("Express server has started on port " + port);
		});
	}
}




// app.set('views', path.join(__dirname, 'public'));
// app.set('view engine', 'ejs');
// app.engine('html', ejs.renderFile);

// app.use(logger('dev'));
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(bodyParser.json());
// app.use(session({
// 	secret: '',
// 	resave: false,
// 	saveUninitialized: true
// }));


// catch 404 and forward to error handler
// app.use(function(req, res, next) {
// 	next(httpErrors(404));
// });



// var createError = require('http-errors');
// var path = require('path');
// var cookieParser = require('cookie-parser');
//
//
// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');
//
// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
//
//
// app.use('/', indexRouter);
// app.use('/users', usersRouter);
//
// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
// 	next(createError(404));
// });
//
// // error handler
// app.use(function(err, req, res, next) {
// 	// set locals, only providing error in development
// 	res.locals.message = err.message;
// 	res.locals.error = req.app.get('env') === 'development' ? err : {};
//
// 	// render the error page
// 	res.status(err.status || 500);
// 	res.render('error');
// });
//
// module.exports = app;
