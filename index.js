//Bài tập lập trình: xây dựng website quản lý học sinh( 3 route: Hiện thị`xóa button``sửa button`,
// thêm, sửa )

const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'pug')
app.set('views', './views')

app.get('/', (req, res) => res.render('addAcc')   );//!-->>xem lai cach truyen tham so trong ham render
app.get('/manage', (req, res) => res.render('manage'));

app.listen(port, () => console.log(`Example app listening on port port!`));