var express = require('express');
var router = express.Router();
const path = require('path');


router.get('/logger', function (req, res){


    var dir = __dirname;
    var p = path.resolve( dir, "../public/pages/", "loggerlist");
    res.render(p )


})

router.get("", function(req, res){
    res.redirect("logger");
});


module.exports = router;