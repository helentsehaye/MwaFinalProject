const mongoose = require('mongoose');
// const dbString = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0-rhrki.mongodb.net/test?retryWrites=true&w=majority`;
const dbString = `mongodb+srv://samuel:samuel@cluster0.ll7sr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
mongoose.connect(dbString,(err)=>{
    if(!err){
        console.log('Database Connected Successfully');
    }else{
        console.log('Database Failed to connect');
    }
});

module.exports = mongoose;

