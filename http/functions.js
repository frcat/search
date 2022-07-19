const SITES = require("./sites");

function encodeChars(text) {
    return text.replace(/( |\+)/g, encodeURIComponent);
}

function redir(res, loc) {
    res.writeHead(301, { location: loc });
    res.end();
}

const requestListener = function (req, res) {
    const query = new URLSearchParams(req.url.replace("/", "")).get("q") ?? "";
    if (query.startsWith("!")) {
        const split = query.split(" ");
        const site = SITES[split[0].toLowerCase().replace("!", "")];
        if (site) {
            const [, ...rest] = split;
            const joined = rest.join(" ");
            const parsed = typeof site === "function" ? site(joined) : site;
            redir(res, parsed.replace("{q}", encodeChars(joined)));
        }
    }
    redir(res, SITES.duck.replace("{q}", encodeChars(query)));
}

require('http').createServer(requestListener).listen(6183);