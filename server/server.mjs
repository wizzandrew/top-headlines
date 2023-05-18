import { translate } from '@vitalets/google-translate-api';
import express from 'express';
import body_parser from 'body-parser'
const app = express();

app.use(body_parser.json())
app.use(function (_, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PATCH");
    next();
});

const translateFunc = async (title, description, content) => {

    const translateQuery = "@" + title + "@" + description + "@" + content;

    const { text } = await translate(translateQuery, { to: 'en' });

    return text.split("@");
}

app.get("/translate", async (req, res) => {

    let title = req.query.title;
    let description = req.query.description;
    let content = req.query.content;

    const result = await translateFunc(title, description, content);

    console.log(result)

    res.json({
        "result": {
            "title": result[1],
            "description": result[2],
            "content": result[3]
        }
    });
})

app.listen(5000, () => { console.log("Server started on port 5000"); })