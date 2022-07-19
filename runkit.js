var main = {
  amazon: "https://www.amazon.com/s?k={q}",
  cloudflare: "https://dash.cloudflare.com",
  discordjs: "https://discord.js.org/#/docs/main/stable/search?query={q}",
  dns: "https://search.smol.win/tools/dns",
  duckduckgo: "https://duckduckgo.com/?q={q}",
  gist: "https://gist.new",
  github: "https://github.com/search?q={q}",
  glitch: "https://glitch.new/{q}",
  invite: "https://discord.gg/{q}",
  lighthouse: "https://developers.google.com/speed/pagespeed/insights/?url={q}",
  mdn: "https://developer.mozilla.org/en-US/search?q={q}",
  npm: "https://npmjs.org/package/{q}",
  pages: "https://dash.cloudflare.com/?account=pages",
  presencedb: "https://www.presencedb.com/search?q={q}",
  repl: "https://replit.new/{q}",
  repo: "https://repo.new",
  spotify: "https://open.spotify.com/search/{q}",
  stackoverflow: "https://stackoverflow.com/search?q={q}",
  translate: "https://translate.google.com/?sl=auto&tl=en&text={q}&op=translate",
  tweet: "https://mobile.twitter.com/compose/tweet?text={q}",
  twitch: "https://www.twitch.tv/{q}",
  workers: "https://dash.cloudflare.com/?account=workers",
  youtube: "https://www.youtube.com/results?search_query={q}",
};

var alt = {
  cf: "https://dash.cloudflare.com",
  cfpages: "https://dash.cloudflare.com/?account=pages",
  cfworkers: "https://dash.cloudflare.com/?account=workers",
  ddg: "https://duckduckgo.com/?q={q}",
  djs: "https://discord.js.org/#/docs/main/stable/search?query={q}",
  duck: "https://duckduckgo.com/?q={q}",
  gh: "https://github.com/search?q={q}",
  git: "https://github.com/search?q={q}",
  pdb: "https://www.presencedb.com/search?q={q}",
  presdb: "https://www.presencedb.com/search?q={q}",
  trans: "https://translate.google.com/?sl=auto&tl=en&text={q}&op=translate",
  yt: "https://www.youtube.com/results?search_query={q}"
};

var SITES = Object.assign(main, alt);

function encodeChars(text) {
  return text.replace(/( |\+)/g, encodeURIComponent);
}

function redir(res, loc) {
res.writeHead(301, {location: loc});
res.end();
}

function handleRequest(req, res) {
  const query = new URLSearchParams(req.url.replace("/","")).get("q");
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

exports.endpoint = function(req, res) {
    handleRequest(req, res)
}
