var unirest = require("unirest");

var req = unirest("POST", "https://genword.ru/generators/anime/new/");

req.headers({
    'accept-language': 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7',
    'x-requested-with': 'XMLHttpRequest'
});

req.form({});

req.end(function (res) {
	if (res.error) throw new Error(res.error);

    console.log(res.body);
    
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));
