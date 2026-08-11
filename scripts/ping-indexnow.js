const fs = require("fs");
const path = require("path");

async function pingIndexNow() {
  console.log("🚀 Initializing IndexNow Ping for vyzma.in...");
  const sitemapPath = path.join(__dirname, "../public/sitemap.xml");

  if (!fs.existsSync(sitemapPath)) {
    console.error("❌ Sitemap file not found at public/sitemap.xml");
    return;
  }

  const sitemapContent = fs.readFileSync(sitemapPath, "utf-8");
  const urlMatches = sitemapContent.match(/<loc>(.*?)<\/loc>/g) || [];
  const urls = urlMatches.map((m) => m.replace("<loc>", "").replace("</loc>", ""));

  if (urls.length === 0) {
    console.log("⚠️ No URLs found in sitemap.xml to ping.");
    return;
  }

  console.log(`Found ${urls.length} URLs in sitemap.xml. Preparing IndexNow payload...`);

  // IndexNow API key (using standard 32-hex key format for vyzma.in)
  const apiKey = "e4e3a890471b4a098c4b22c7104b2b1a";
  const host = "vyzma.in";

  const payload = {
    host: host,
    key: apiKey,
    keyLocation: `https://${host}/${apiKey}.txt`,
    urlList: urls.slice(0, 1000), // IndexNow allows up to 10,000 URLs per batch
  };

  // Also write the key file into public directory for verification
  const keyFilePath = path.join(__dirname, `../public/${apiKey}.txt`);
  fs.writeFileSync(keyFilePath, apiKey, "utf-8");
  console.log(`  ✓ Written verification file: public/${apiKey}.txt`);

  try {
    const response = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(payload),
    });

    if (response.ok || response.status === 200 || response.status === 202) {
      console.log(`✅ IndexNow Ping Successful! (${response.status}) — ${urls.length} URLs submitted to Bing & ChatGPT Search.`);
    } else {
      console.log(`ℹ️ IndexNow Ping response status: ${response.status} (${response.statusText})`);
    }
  } catch (err) {
    console.warn("⚠️ IndexNow ping network note:", err.message);
  }
}

pingIndexNow();
