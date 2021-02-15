var express = require('express');
var router = express.Router();

var myList=[{name:"tung"}, {name:'tuan'}];

router.get('/', (req, res) =>{
    res.render('manage', {myList}); 
    
}
);

router.post('/', (req, res) =>{
    var newAcc = req.body;
    myList.push(newAcc);
    console.log(newAcc);
    res.render('manage', {myList});
});


module.exports = router;