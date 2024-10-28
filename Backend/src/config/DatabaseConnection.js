const mongoose = require('mongoose')


const DbConnection = async() => {
    await mongoose.connect(process.env.MongoDb_URL)
}

module.exports = {
    DbConnection
}