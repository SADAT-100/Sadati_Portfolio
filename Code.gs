/**
 * Portfolio contact form → Gmail.
 *
 * Deploy: Extensions/Apps Script → paste this file → Deploy → New deployment
 * → type "Web app" → Execute as: Me → Who has access: Anyone → Deploy.
 * Copy the Web app URL (ends in /exec) into contact.formEndpoint in data.js.
 */
const TO = "sadatimalk50@gmail.com";
const MAX_PER_HOUR = 20; // simple flood guard across all visitors

function doPost(e) {
  try {
    const d = JSON.parse((e && e.postData && e.postData.contents) || "{}");
    // Hidden "company" field: real people leave it empty, bots fill it.
    if (d.company) return reply({ ok: true });

    const name = clean(d.name, 100), email = clean(d.email, 200);
    const subject = clean(d.subject, 150), message = clean(d.message, 5000);
    if (name.length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) || subject.length < 3 || message.length < 10) {
      return reply({ ok: false, error: "invalid" });
    }

    const cache = CacheService.getScriptCache();
    const count = Number(cache.get("count") || 0);
    if (count >= MAX_PER_HOUR) return reply({ ok: false, error: "busy" });
    cache.put("count", String(count + 1), 3600);

    MailApp.sendEmail({
      to: TO,
      replyTo: email,
      name: "Portfolio contact form",
      subject: "[Portfolio] " + subject,
      body: message + "\n\n— " + name + " <" + email + ">\nSent from your portfolio contact form.",
    });
    return reply({ ok: true });
  } catch (err) {
    return reply({ ok: false, error: "server" });
  }
}

// Opening the URL in a browser shows this, so you can check the deployment.
function doGet() {
  return reply({ ok: true, info: "Portfolio contact endpoint is running." });
}

function clean(v, max) {
  return String(v == null ? "" : v).trim().slice(0, max);
}

function reply(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
