//Bài tập lập trình: xây dựng website quản lý học sinh( 3 route: Hiện thị`xóa button``sửa button`,
// thêm, sửa )

const express = require('express')
const app = express()
const port = 3000

var manage = require('./routes/manage')

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({  extended: true}));

app.set('view engine', 'pug')
app.set('views', './views')

app.get('/', (req, res) => res.render('addAcc')   );

// app.get('/manage/search', (req, res) => {
//         let q = req.query.q;
//         var matchedName = myList.filter(function(myList){
//             return myList.name.indexOf(q) != -1;
//         }) ;
        
//         res.render('manage', {myList: matchedName});
// });

app.use('/manage', manage);

app.listen(port, () => console.log(`Example app listening on port port!`));

