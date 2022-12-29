import express from "express";
const router = express.Router();
import Parser from 'rss-parser';
let parser = new Parser();

let data = [];

router.get('/',async (req,res) =>{
    let feed = await parser.parseURL('https://www.antaranews.com/rss/otomotif.xml');
    feed.items.forEach(item =>{
        let news = {
            title : item.title,
            link : item.link,
            img : item.enclosure.url
        }
        data.push(news);
    })
    res.send(data);
})

export default router;