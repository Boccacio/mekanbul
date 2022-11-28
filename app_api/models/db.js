var mongoose = require("mongoose");
//var dbURI= 'mongodb+srv://enes:3532@mekanbul.8ndgwom.mongodb.net/mekanbul?retryWrites=true&w=majority'
var dbURI= 'mongodb://localhost/mekanbul';
//
mongoose.connect(dbURI);
mongoose.connection.on("connected", function(){
    console.log(dbURI + " adresindeki veritabanına baglandi!");
})

mongoose.connection.on("error", function(){
    console.log(dbURI + "Bağlantı Hatası!!\n");
})

mongoose.connection.on("disconnected", function(){
    console.log(dbURI + " Bağlantı Kesildi\n");
})


function kapat(msg, callback){
    mongoose.connection.close(function () {
        console.log(msg);
        callback();
    });
}

process.on("SIGNINT", function(){
    kapat("Uygulama Kapatıldı!", function(){
        process.exit(0);
    });
});









require("./mekansema");