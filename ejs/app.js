const ejs = require('ejs')
const express = require('express')
const app = express()
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')

const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    port: '3306',
    database: 'mydb'
});

connection.connect(); // mysql 접속

app.use(cookieParser());
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs')
app.set('views', './views')

app.use(bodyParser.urlencoded({
    extended: false
}))
//   app.get(`/index`)
app.get('/', function (req, res) { //로그인창 ,, 로그아웃겸
      connection.query(
        'SELECT * FROM emp', (error, result) => {
         if (error) throw error;
            console.log(result);
            res.render('register',{data : result})
        }
    );
})

app.get('/register', function (req, res) {
      
   res.render('register')

})
app.listen(4000, () => { // 4000포트에서 실행

    console.log("서버가 실행되었습니다.");

})