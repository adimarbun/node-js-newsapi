import express from "express";
const router = express.Router();
import Parser from "rss-parser";
let parser = new Parser();

router.get("/", async (_, res) => {
  const feedUrl = "https://www.antaranews.com/rss/otomotif.xml";
  const source = "ANTARA News";
  let data = [];
  let feed = await parser.parseURL(feedUrl);
  feed.items.forEach((item) => {
    let news = {
      title: item.title,
      link: item.link,
      img: item.enclosure.url,
      lastUpdate: item.pubDate,
      source: source,
    };
    data.push(news);
  });
  res.send(data);
});

export default router;
