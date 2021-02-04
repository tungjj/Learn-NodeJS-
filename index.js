//Bài tập lập trình: xây dựng website quản lý học sinh( 3 route: Hiện thị`xóa button``sửa button`,
// thêm, sửa )

const express = require('express')
const app = express()
const port = 3000

var myList=[{name:"tung"}, {name:'tuan'}];

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({  extended: true}));

app.set('view engine', 'pug')
app.set('views', './views')

app.get('/', (req, res) => res.render('addAcc')   );
app.get('/manage', (req, res) => res.render('manage', {myList}));


app.post('/manage', (req, res) =>{
    var newAcc = req.body;
    myList.push(newAcc);
    res.render('manage', {myList});
});

app.listen(port, () => console.log(`Example app listening on port port!`));