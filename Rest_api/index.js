const app = require('./app');
const config = require('./config/config');

const PORT = config.app.port;

const db = require('./config/db');
console.log(db);

app.listen(PORT,()=>{
    console.log(`APP is listening at port ${PORT}`);
})



