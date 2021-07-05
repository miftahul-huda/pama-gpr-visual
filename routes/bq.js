var express = require('express');
var router = express.Router();

const BqLogic = require('../modules/logic/bqlogic')

router.get('/blasted-material/:site/:location/:date', function (req, res){

    let site = req.params.site;
    let location = req.params.location;
    let date = req.params.date;
  
    BqLogic.getBlastedMaterialRemain(site, location, date).then(function (blastedMaterial)
    {
      res.send(blastedMaterial);

    }).catch(function (err){
      console.log("error")
      res.send(err);
    })
})


//Frag2 table
router.get('/breakage/:site/:location/:date', function (req, res){

    let site = req.params.site;
    let location = req.params.location;
    let date = req.params.date;

    BqLogic.getBreakageInfo(site, location, date).then(function (breakageInfo)
    {
      res.send(breakageInfo);

    }).catch(function (err){
      console.log("error")
      console.log(err)
      res.send(err);
    })
})

module.exports = router;