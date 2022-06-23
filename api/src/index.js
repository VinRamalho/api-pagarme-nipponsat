const express = require('express');
const cors = require('cors');
const app = express();
const morgan = require('morgan');
const route = require('/home/all/Documentos/apiPG-yarn/api/src/routes/main.routes');

//DATABASE
require('./database');


app.use(express.json());
app.listen(8000)
app.use(cors());
app.use(morgan('dev'));




app.use('/', route);



app.listen(app.get, () => {
    console.log('Server is Up.');
})


