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
  youtube: "https://www.youtube.com/results?search_query={q}",
  twitch: "https://www.twitch.tv/{q}",
  amazon: "https://www.amazon.com/s?k={q}",
  repo: "https://repo.new",
  gist: "https://gist.new",
  repl: "https://replit.new/{q}",
  glitch: "https://glitch.new/{q}",
  presencedb: "https://www.presencedb.com/search?q={q}",
  translate: "https://translate.google.com/?sl=auto&tl=en&text={q}&op=translate",
  tweet: "https://mobile.twitter.com/compose/tweet?text={q}",
  pages: "https://dash.cloudflare.com/?account=pages",
  workers: "https://dash.cloudflare.com/?account=workers",
  cloudflare: "https://dash.cloudflare.com"
};

var alt = {
  gh: "https://github.com/search?q={q}",
  git: "https://github.com/search?q={q}",
  djs: "https://discord.js.org/#/docs/main/stable/search?query={q}",
  ddg: "https://duckduckgo.com/?q={q}",
  duck: "https://duckduckgo.com/?q={q}",
  yt: "https://www.youtube.com/results?search_query={q}",
  cfpages: "https://dash.cloudflare.com/?account=pages",
  cfworkers: "https://dash.cloudflare.com/?account=workers",
  cf: "https://dash.cloudflare.com",
  pdb: "https://www.presencedb.com/search?q={q}",
  presdb: "https://www.presencedb.com/search?q={q}",
  trans: "https://translate.google.com/?sl=auto&tl=en&text={q}&op=translate",
}

var SITES = Object.assign(main, alt)

export { SITES }