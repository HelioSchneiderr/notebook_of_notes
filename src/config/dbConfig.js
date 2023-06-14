const mongoose = require('mongoose')

const dbConfig = 'mongodb+srv://usuario:usuario@cluster0.mvx7p8d.mongodb.net/annotations?retryWrites=true&w=majority'

const connection = mongoose.connect(dbConfig,{
    useNewUrlParse: true,
    useUnifiedTopology: true
});

module.exports = connection