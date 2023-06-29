const express = require ('express')
const fs = require('fs');
const pdf = require('html-pdf');
const app = express();

app.get('/home', async (req,res,next)=>{
    // console.log("middle");
var html = fs.readFileSync('./invoice.html','utf-8')
let result = {
    id: 12,
    name: 'Test Demo'
}
let options = {
    format: 'Letter'
}
pdf.create(html, options).toFile('./invoice.pdf',function(err,res) {
    if (err) return console.log(err.message);
    return console.log(res);
})
res.status(200).json(result)
})

module.exports = app;