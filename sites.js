var main = {
  npm: "https://npmjs.org/package/{q}",
  github: "https://github.com/search?q={q}",
  stackoverflow: "https://stackoverflow.com/search?q={q}",
  discordjs: "https://discord.js.org/#/docs/main/stable/search?query={q}",
  lighthouse: "https://developers.google.com/speed/pagespeed/insights/?url={q}",
  dns: "https://www.nslookup.io/dns-records/{q}",
  mdn: "https://developer.mozilla.org/en-US/search?q={q}",
  duckduckgo: "https://duckduckgo.com/?q={q}",
  spotify: "https://open.spotify.com/search/{q}",
  invite: "https://discord.gg/{q}",
  youtube: "https://www.youtube.com/results?search_query={q}&page={startPage?}&utm_source=opensearch",
  twitch: "https://www.twitch.tv/{q}",
  amazon: "https://www.amazon.com/s?k={q}",
  repo: "https://repo.new",
  gist: "https://gist.new",
  repl: "https://replit.new/{q}",
  presencedb: "https://www.presencedb.com/search?q={q}",
  translate: "https://translate.google.com/?sl=auto&tl=en&text={q}&op=translate",
  tweet: "https://mobile.twitter.com/compose/tweet?text={q}",
};

var alt = {
  gh: "https://github.com/search?q={q}",
  git: "https://github.com/search?q={q}",
  djs: "https://discord.js.org/#/docs/main/stable/search?query={q}",
  ddg: "https://duckduckgo.com/?q={q}",
  duck: "https://duckduckgo.com/?q={q}",
  yt: "https://www.youtube.com/results?search_query={q}",
}

var SITES = Object.assign(main, alt)

export { SITES }