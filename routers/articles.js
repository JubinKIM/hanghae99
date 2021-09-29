const express = require("express");
const Articles = require("../schemas/articles");


const router = express.Router();

router.get("/articles", async (req, res, next) => {
  try {
    const { title } = req.query;
    const articles = await Articles.find({ title }).sort("-date");
    res.json({ articles: articles });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.get("/articles/:usersId", async (req, res) => {
  const { usersId } = req.params;
  const articles = await Articles.findOne({ usersId: usersId });
  res.json({ articles: articles });
});

router.post('/articles', async (req, res) => {
    const { usersId, name, password, title, date, text} = req.body;

    isExist = await Articles.find({usersId});
    if (isExist.length == 0) {
        await Articles.create({ usersId, name, title, date, password, text});
    }
    res.send({ result: "success"});
});

router.delete("/articles/:usersId", async (req, res) => {
  const {usersId} = req.params;

  const isUsersId = await Articles.find({usersId});
  if (isUsersId.length > 0) {
      await Articles.deleteOne({usersId});
  }
  res.send({result : "success"});
});

router.patch("/articles/:usersId", async (req, res) => {
  const {usersId} = req.params;
  const {name} = req.body;
  const {text} = req.body;

  isText = await Articles.find({usersId});
  console.log(isText, text);
  if (isText.length) {
    await Articles.updateOne({usersId}, {$set: {text}});
  }
  res.send({result: "success"});
})

module.exports = router;