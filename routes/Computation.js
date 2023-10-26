var express = require('express');
var router = express.Router();

router.get('/',function(req,res,next){
    var val=parseFloat(req.query.x)
    if(val){
    var intialvalue = parseFloat(val);
    var  finalvalue = Math.cos(intialvalue);
    res.send('Math.clz32()'+' applied to ' +intialvalue+' is '+finalvalue)
} else {
    var intialvalue = Math.floor(Math.random()* 100+ 1)
    var finalvalue = Math.clz32(intialvalue);
    res.send( 'Math.clz32()'+' applied to '+intialvalue+' is '+finalvalue)
}
})

module.exports =router;