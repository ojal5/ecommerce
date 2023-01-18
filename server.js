import express from 'express';
import dotenv from 'dotenv';
import DefaultData from './default.js';
import Connection from './database/db.js';
import Router from './routes/route.js';
import cors from 'cors';
import bodyParser from 'body-parser';
import {v4 as uuid} from 'uuid';

const app=express();                         //initializing express as a function

dotenv.config();                            //initializing dotenv

app.use(cors());
app.use(bodyParser.json({extended: true}));   //post API body is in json format
app.use(bodyParser.urlencoded({extended:true}))
app.use('/',Router);

const PORT=process.env.PORT || 8000;

const USERNAME=process.env.DB_USERNAME;
const PASSWORD=process.env.DB_PASSWORD;

const URL=process.env.MONGODB_URI || `mongodb://${USERNAME}:${PASSWORD}@ac-7lb3nce-shard-00-00.p98sykq.mongodb.net:27017,ac-7lb3nce-shard-00-01.p98sykq.mongodb.net:27017,ac-7lb3nce-shard-00-02.p98sykq.mongodb.net:27017/?ssl=true&replicaSet=atlas-yhu9j1-shard-0&authSource=admin&retryWrites=true&w=majority`;

Connection(URL);   

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))
}

app.listen(PORT,() => console.log(`server is running successfully on port ${PORT}`));

DefaultData();

export let paytmMerchantkey = process.env.PAYTM_MERCHANT_KEY;
export let paytmParams = {};
paytmParams['MID'] = process.env.PAYTM_MID;
paytmParams['WEBSITE'] = process.env.PAYTM_WEBSITE;
paytmParams['CHANNEL_ID'] = process.env.PAYTM_CHANNEL_ID;
paytmParams['INDUSTRY_TYPE_ID'] = process.env.PAYTM_INDUSTRY_TYPE_ID;
paytmParams['ORDER_ID'] = uuid();
paytmParams['CUST_ID'] = process.env.PAYTM_CUST_ID;
paytmParams['TXN_AMOUNT'] = '1';
paytmParams['CALLBACK_URL'] = 'callback';
paytmParams['EMAIL'] = 'ojal.mittal5@gmail.com';
paytmParams['MOBILE_NO'] = '8630065546';