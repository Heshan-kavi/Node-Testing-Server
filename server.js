var http = require('http');
var url = require('url');
var fs = require('fs');
var formidable = require('formidable');
var nodemailer = require('nodemailer');

http.createServer(function (req, res){

    //to check the file system
    // var q = url.parse(req.url, true)
    // var fileName = '.' + q.pathname;
    // fs.readFile(fileName, function(err, data){
    //     console.log("hello page")
    //     if(err){
    //         res.writeHead(404, {'Content-Type': 'text/html'});
    //         return res.end('error not found the page');
    //     }
    //     res.writeHead(200, {'Content-Type': 'text/html'});
    //     res.write(data);
    //     return res.end();
    // });
    // console.log("hello");

    //to understand callback functions
    // setTimeout(function(){
    //     console.log("1");
    //     setTimeout(function(){
    //         console.log("3")
    //     },1000)
    //     console.log("4")
    // },1000);
    // console.log("2");

    //to check the upload file functionality
    // if(req.url == '/fileUpload'){
    //     var form = new formidable.IncomingForm();
    //     form.parse(req, function(err, fields, files){
    //         var oldPath = files.filetoupload.filepath;
    //         console.write(oldPath);
    //         var newPath = 'Machintosh HD/Users/heshankavinda/Desktop/' + files.filetoupload.orginalFilename;
    //         fs.rename(oldPath, newPath, function(err){
    //             if (err) throw err;
    //             res.write('File uploaded and moved!');
    //             res.end();
    //         })
    //     });
    // }else{
    //     res.writeHead(200, {'Content-Type': 'text/html'});
    //     res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    //     res.write('<input type="file" name="filetoupload"><br>');
    //     res.write('<input type="submit">')
    //     res.write('</form>');
    //     return res.end();
    // }

    //to send mails
    // var transporter = nodemailer.createTransport({
    //     service: 'gmail',
    //     auth: {
    //       user: 'tilangierangika@gmail.com',
    //       pass: 'tilangi1009-T'
    //     }
    //   });
      
    //   var mailOptions = {
    //     from: 'tilangierangika@gmail.com',
    //     to: 'kavindaheshan96@gmail.com',
    //     subject: 'Sending Email using Node.js',
    //     text: 'That was easy!'
    //   };
      
    //   transporter.sendMail(mailOptions, function(error, info){
    //     if (error) {
    //       console.log(error);
    //     } else {
    //       console.log('Email sent: ' + info.response);
    //     }
    //   });
}).listen(8080)