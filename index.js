import express from 'express'; 
import bodyParser from 'body-parser';

import newsRoutes from './routes/news.js';
import otomotifRoutes from './routes/otomotif.js'

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.text({type:'text/*'}));


app.use('/otomotif',otomotifRoutes);
app.use('/news',newsRoutes);

app.get('/',(req,res) =>{
    res.send("Hello Welcome to news server bro");
})

app.listen(PORT,() => console.log(`Server running in port`,PORT));
