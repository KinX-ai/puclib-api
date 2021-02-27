'use strict';

var express = require('express');
var app = express();
var fs = require('fs');
var cadao = JSON.parse(fs.readFileSync("./cadao.json","utf-8"));
var cosplay = JSON.parse(fs.readFileSync("./cosplay.json","utf-8"));
var meme = JSON.parse(fs.readFileSync("./meme.json","utf-8"));
var jimmy = JSON.parse(fs.readFileSync("./jimmy.json","utf-8"));
var duckbo = JSON.parse(fs.readFileSync("./duckbo.json","utf-8"));
var gai = JSON.parse(fs.readFileSync("./gai.json","utf-8"));
var trai = JSON.parse(fs.readFileSync("./trai.json","utf-8"));
app.set("port", process.env.PORT || 4000);
var author = "TEAM AUTHOR: \nMai Huy Bảo, \nNguyễn Thế Nam, \nNH Tiến Lâm, \nMinh Mẫn, \nĐặng Văn Hùng"
var contact = "CONTACT AT:\nhttps://www.facebook.com/JustOnly.MaiHuyBao.Unofficial\nhttps://www.facebook.com/NNam13\nhttps://www.facebook.com/tienlam.nh.9\nhttps://www.facebook.com/MinhMan.4\nhttps://www.facebook.com/hungchodz99"
// app.get('/', function (req, res) {
//    res.writeHead(200, {'Content-Type': 'application/json'});
//    var response = `LIST API:\n• https://api.berver.tech/meme\nAPI meme việt\n• https://api.berver.tech/cosplay\nAPI ảnh cosplay\n• https://api.berver.tech/lyrics/title/artist\nAPI lời bài hát\n• https://api.berver.tech/cadao\nAPI ca dao\n• https://api.berver.tech/avatar/id=\nAPI lấy avatar Facebook không cần token\n• https://api.berver.tech/duckbo\nAPI ảnh Trần Đức Bo\n• https://api.berver.tech/jimmy\nAPI ảnh Jimmy Nguyễn\n• https://api.berver.tech/sim/[text]\nAPI simsimi Tiếng Việt\n• https://api.berver.tech/simteach/[hoi]/[dap]\nAPI dạy simsimi nói\n• https://api.berver.tech/gai\nAPI ảnh gái\n• https://api.berver.tech/trai\nAPI ảnh trai\n\n\n${author}\n\n\n${contact}`
//    console.log('/',req.ip);
//    res.end(response);
// })
var path = require('path');

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
app.get('/style.css', function(req, res) {
  res.sendFile(__dirname + "/style.css");
});
app.get('/script.js', function(req, res) {
  res.sendFile(__dirname + "/script.js");
});
app.get('/cadao', async function (req, res) {
  var lenght = Number(cadao.lenght);
  var random = await Math.floor(Math.random() * lenght) + 1
  var cadaorq = await cadao.data[String(random)]
   res.writeHead(200, {'Content-Type': 'application/json'});
   var response = {"data": `${cadaorq}`,"author":"Mai Huy Bảo, Nguyễn Thế Nam, NH Tiến Lâm, Đặng Văn Hùng, Minh Mẫn","contact":"https://www.facebook.com/JustOnly.MaiHuyBao.Unofficial, https://www.facebook.com/NNam13, https://www.facebook.com/tienlam.nh.9, https://www.facebook.com/hungchodz99, https://www.facebook.com/MinhMan.4","Homepage":"berver.tech"}
   console.log('/cadao',req.ip)
   res.end(JSON.stringify(response));
})
app.get('/cosplay', async function (req, res) {
  var length = Number(cosplay.lenght);
  var random = await Math.floor(Math.random() * length) + 1;
  var cosplayrq = await cosplay.data[String(random)]
   res.writeHead(200, {'Content-Type': 'application/json'});
   var response = {"data": `${cosplayrq}`,"author":"Mai Huy Bảo, Nguyễn Thế Nam, NH Tiến Lâm, Đặng Văn Hùng, Minh Mẫn","contact":"https://www.facebook.com/JustOnly.MaiHuyBao.Unofficial, https://www.facebook.com/NNam13, https://www.facebook.com/tienlam.nh.9, https://www.facebook.com/hungchodz99, https://www.facebook.com/MinhMan.4","Homepage":"berver.tech"}
   console.log('/cosplay',req.ip)
   res.end(JSON.stringify(response));
})
app.get('/meme', async function (req, res) {
  var lenght = Number(meme.lenght);
  var random = await Math.floor(Math.random() * lenght)
  var memerq = await meme.data[String(random)]
   res.writeHead(200, {'Content-Type': 'application/json'});
   var response = {"data":`${memerq}`,"author":"Mai Huy Bảo, Nguyễn Thế Nam, NH Tiến Lâm, Đặng Văn Hùng, Minh Mẫn","contact":"https://www.facebook.com/JustOnly.MaiHuyBao.Unofficial, https://www.facebook.com/NNam13, https://www.facebook.com/tienlam.nh.9, https://www.facebook.com/hungchodz99, https://www.facebook.com/MinhMan.4","Homepage":"berver.tech"}
   console.log('/meme',req.ip)
   res.end(JSON.stringify(response));
})
app.get('/avatar/id=:id',async function (req, res) {
  var axios = require("axios");
var out = (await axios.get(`https://graph.facebook.com/${req.params.id}/picture?width=512&height=512&access_token=189655722803715|2400ebb5a25db44693e713d45506aa9d`,{ responseType: 'arraybuffer' })).data
   res.writeHead(200, {'Content-Type': 'image/jpg'});
   console.log('/avatar/id=',req.params.id,req.ip)
   res.end(out);
})
app.get('/jimmy', async function (req, res) {
  var lenght = Number(jimmy.lenght);
  var random = await Math.floor(Math.random() * lenght)
  var jimmyrq = await jimmy.data[String(random)]
   res.writeHead(200, {'Content-Type': 'application/json'});
   var response = {"data":`${jimmyrq}`,"author":"Mai Huy Bảo, Nguyễn Thế Nam, NH Tiến Lâm, Đặng Văn Hùng, Minh Mẫn","contact":"https://www.facebook.com/JustOnly.MaiHuyBao.Unofficial, https://www.facebook.com/NNam13, https://www.facebook.com/tienlam.nh.9, https://www.facebook.com/hungchodz99, https://www.facebook.com/MinhMan.4","Homepage":"berver.tech"}
   console.log('/jimmy',req.ip)
   res.end(JSON.stringify(response));
})
app.get('/lyrics/:title/:artist', async function (req, res) {
const lyricsFinder = require('lyrics-finder');
    let lyrics = await lyricsFinder(req.params.artist, req.params.title) || "Not Found!";
   res.writeHead(200, {'Content-Type': 'application/json'});
   var response = {"data":`${lyrics}`,"author":"Mai Huy Bảo, Nguyễn Thế Nam, NH Tiến Lâm, Đặng Văn Hùng, Minh Mẫn","contact":"https://www.facebook.com/JustOnly.MaiHuyBao.Unofficial, https://www.facebook.com/NNam13, https://www.facebook.com/tienlam.nh.9, https://www.facebook.com/hungchodz99, https://www.facebook.com/MinhMan.4","Homepage":"berver.tech"}
   console.log('/lyrics',req.ip)
   res.end(JSON.stringify(response));
})
app.get('/duckbo', async function (req, res) {
  var lenght = Number(duckbo.lenght);
  var random = await Math.floor(Math.random() * lenght)
  var duckborq = await duckbo.data[String(random)]
   res.writeHead(200, {'Content-Type': 'application/json'});
   var response = {"data":`${duckborq}`,"author":"Mai Huy Bảo, Nguyễn Thế Nam, NH Tiến Lâm, Đặng Văn Hùng, Minh Mẫn","contact":"https://www.facebook.com/JustOnly.MaiHuyBao.Unofficial, https://www.facebook.com/NNam13, https://www.facebook.com/tienlam.nh.9, https://www.facebook.com/hungchodz99, https://www.facebook.com/MinhMan.4","Homepage":"berver.tech"}
   console.log('/duckbo',req.ip)
   res.end(JSON.stringify(response));
})
app.get('/gai', async function (req, res) {
  var lenght = Number(gai.lenght);
  var random = await Math.floor(Math.random() * lenght)
  var gairq = await gai.data[String(random)]
   res.writeHead(200, {'Content-Type': 'application/json'});
   var response = {"data":`${gairq}`,"author":"Mai Huy Bảo, Nguyễn Thế Nam, NH Tiến Lâm, Đặng Văn Hùng, Minh Mẫn","contact":"https://www.facebook.com/JustOnly.MaiHuyBao.Unofficial, https://www.facebook.com/NNam13, https://www.facebook.com/tienlam.nh.9, https://www.facebook.com/hungchodz99, https://www.facebook.com/MinhMan.4","Homepage":"berver.tech"}
   console.log('/gai',req.ip)
   res.end(JSON.stringify(response));
})
app.get('/sim/:text', function (req, res) {
  var request = require('request')
  res.writeHead(200, {'Content-Type': 'application/json'})
  var request = require('request');
var options = {
  'method': 'GET',
  'url': `https://api.simsimi.net/v1/?key=API-blP4EedaRusH95y1-NWFLKDE7teC6PT84&text=${encodeURI(req.params.text)}&cf=false`,
  'headers': {
    'Cookie': '__cfduid=d8d367ccb2fc7b5ce3b19e20201bcc8f71614227927; PHPSESSID=mvnf3crdcurvlocujcknj0vud1'
  }
};
request(options, function (error, rp) {
  if (error) throw new Error(error);
 var response = {"data":`${JSON.parse(rp.body).msg}`,"author":"Mai Huy Bảo, Nguyễn Thế Nam, NH Tiến Lâm, Đặng Văn Hùng, Minh Mẫn","contact":"https://www.facebook.com/JustOnly.MaiHuyBao.Unofficial, https://www.facebook.com/NNam13, https://www.facebook.com/tienlam.nh.9, https://www.facebook.com/hungchodz99, https://www.facebook.com/MinhMan.4","Homepage":"berver.tech"}
   console.log('/sim/',req.params.text,rp.body.msg,req.ip);
   res.end(JSON.stringify(response));});
})
app.get('/simteach/:hoi/:dap', function (req, res) {
  res.writeHead(200, {'Content-Type': 'application/json'})
  var request = require('request');
var options = {
  'method': 'GET',
  'url': `https://api.simsimi.net/v1/save.php?key=API-blP4EedaRusH95y1-NWFLKDE7teC6PT84&hoi=${encodeURI(req.params.hoi)}&dap=${encodeURI(req.params.dap)}&author=BerVer`,
  'headers': {
    'Cookie': '__cfduid=d8d367ccb2fc7b5ce3b19e20201bcc8f71614227927; PHPSESSID=mvnf3crdcurvlocujcknj0vud1'
  }
};
request(options, function (error, rp) {
  if (error) throw new Error(error);
 var response = {"data":`Simsimi đã tiếp thu câu trả lời của bạn`,"author":"Mai Huy Bảo, Nguyễn Thế Nam, NH Tiến Lâm, Đặng Văn Hùng, Minh Mẫn","contact":"https://www.facebook.com/JustOnly.MaiHuyBao.Unofficial, https://www.facebook.com/NNam13, https://www.facebook.com/tienlam.nh.9, https://www.facebook.com/hungchodz99, https://www.facebook.com/MinhMan.4","Homepage":"berver.tech"}
   console.log('/sim/',req.params.text,rp.body.msg,req.ip);
   res.end(JSON.stringify(response));});
})
app.get('/trai', async function (req, res) {
  var lenght = Number(trai.lenght);
  var random = await Math.floor(Math.random() * lenght)
  var trairq = await trai.data[String(random)]
   res.writeHead(200, {'Content-Type': 'application/json'});
   var response = {"data":`${trairq}`,"author":"Mai Huy Bảo, Nguyễn Thế Nam, NH Tiến Lâm, Đặng Văn Hùng, Minh Mẫn","contact":"https://www.facebook.com/JustOnly.MaiHuyBao.Unofficial, https://www.facebook.com/NNam13, https://www.facebook.com/tienlam.nh.9, https://www.facebook.com/hungchodz99, https://www.facebook.com/MinhMan.4","Homepage":"berver.tech"}
   console.log('/gai',req.ip)
   res.end(JSON.stringify(response));
})
var server = app.listen(app.get("port"), function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Node.js API app listening at http://%s:%s", host, port)
})
