//MongoClient
// const MongoClient = require('mongodb').MongoClient;
// const url = "mongodb://localhost:27017/";


const mongoose = require('mongoose');
const URI = 'mongodb://localhost:27017/database_pagarme';

// mongoose.set('useNewUrlParser', true);
// mongoose.set('useFindAndModify', false);
// mongoose.set('useCreateIndex', true);
// mongoose.set('useUnifieldTopology', true);
// mongoose.set('debug', true);

// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     let dbo = db.db("data-base-pagarme");
//     dbo.createCollection("pagarme", function(err, res) {
//       if (err) throw err;
//       console.log("Collection created!");
//       db.close();
//     });
//   });
  


mongoose
    .connect(URI, 
        {useNewUrlParser: true},
        {useFindAndModify: false},
        {useCreateIndex: true},
        {useUnifieldTopology: true},
        {debug: true}
        )
    .then(() => console.log('DB is up.'))
    .catch((err) => console.log(err));