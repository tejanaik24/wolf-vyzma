const https = require("https");

const INDEXNOW_KEY = "0a7b3c9d8e2f1a4b5c6d7e8f9a0b1c2d";
const SITE_URL = "https://vyzma.in";
const INDEXNOW_URL = `https://api.indexnow.org/indexnow?url=${encodeURIComponent(SITE_URL)}&key=${INDEXNOW_KEY}`;

const urls = [
  SITE_URL,
  `${SITE_URL}/blog`,
  `${SITE_URL}/sitemap.xml`,
  `${SITE_URL}/blog/openclaw-vs-hermes-agent-india-2026`,
];

const payload = JSON.stringify({
  host: "vyzma.in",
  key: INDEXNOW_KEY,
  keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
  urlList: urls,
});

const req = https.request(
  INDEXNOW_URL,
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Content-Length": Buffer.byteLength(payload),
    },
  },
  (res) => {
    console.log(`IndexNow: HTTP ${res.statusCode}`);
    if (res.statusCode === 200) {
      console.log("  OK  URLs submitted to IndexNow");
    } else {
      console.log(`  WARN  IndexNow returned ${res.statusCode}`);
    }
    res.resume();
  }
);

req.on("error", (err) => {
  console.error(`  FAIL  IndexNow submission error: ${err.message}`);
});

req.write(payload);
req.end();
