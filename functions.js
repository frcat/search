import { SITES } from "./sites.js";

function encodeChars(text) {
  return text.replace(/( |\+)/g, encodeURIComponent);
}
function handleRequest() {
  const url = new URL(window.location.href);
  const query = url.searchParams.get("q") ?? "";
  const engine = url.searchParams.get("engine") ?? SITES.duck;
  if (query.startsWith("!")) {
    const split = query.split(" ");
    const site = SITES[split[0].toLowerCase().replace("!", "")];
    if (site) {
      const [, ...rest] = split;
      const joined = rest.join(" ");
      const parsed = typeof site === "function" ? site(joined) : site;
      window.location.href = parsed.replace("{q}", encodeChars(joined));
    }
  }
  window.location.href = engine.replace("{q}", encodeChars(query));
}

export { handleRequest };