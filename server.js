const mongoose = require('mongoose')
const express = require('express')
// Import the library aLLOW CROS Policy orign:
var cors = require('cors');

const app = express()

// Then use it before your routes are set up:
app.use(cors());


//middleware
app.use(express.json())


//Database Setup
const db = 'mongodb+srv://dbUser:dbUser@cluster0.nnvxc.mongodb.net/todos?retryWrites=true&w=majority';

mongoose.connect(process.env.MONGODB_URI || db, {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true
})
    .then(() => console.log("Connected to MonogoDB Dababase..."))
    .catch(err => console.log("Database connection error :" + err));


//Router Setup
app.use('/api/todo', require('./routes/toto'))


//Production Setup
if (process.env.NODE_ENV == 'production') {
    //Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}



const port = process.env.PORT || 5000;

app.listen(port, () => console.log("server started port : " + port));