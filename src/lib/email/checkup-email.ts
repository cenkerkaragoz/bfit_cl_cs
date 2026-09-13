import { SITE } from "@/lib/seo/site";

export type CheckupEmailData = {
  audience: string;
  parentName: string;
  phone: string;
  participantAge: string;
  note: string;
  timestamp: string;
};

const GREEN = "#164C35";
const INK = "#241D18";
const INK_SUPPORT = "rgba(36, 29, 24, 0.64)";
const PAPER = "#F4EEE6";
const CARD_LINE = "rgba(36, 29, 24, 0.1)";
const ROSE = "#F5927E";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** Turkish local number -> E.164 digits (90...) for a wa.me link, or null if unparseable. */
function toWhatsAppDigits(phone: string) {
  const digits = phone.replace(/\D/g, "");
  if (!digits) return null;
  if (digits.startsWith("90") && digits.length === 12) return digits;
  if (digits.startsWith("0") && digits.length === 11) return `90${digits.slice(1)}`;
  if (digits.length === 10) return `90${digits}`;
  return digits.length >= 10 ? digits : null;
}

export function buildCheckupEmailText({
  audience,
  parentName,
  phone,
  participantAge,
  note,
  timestamp,
}: CheckupEmailData) {
  const isAdult = audience === "adults";

  return [
    isAdult ? "Yeni Yetişkin CogMap Başvurusu" : "Yeni CogMap Başvurusu",
    "",
    `Adı Soyadı: ${parentName}`,
    `Telefon: ${phone}`,
    `${isAdult ? "Katılımcı Yaşı" : "Çocuğun Yaşı"}: ${participantAge}`,
    `${isAdult ? "Katılımcı Notu" : "Veli Notu"}: ${note}`,
    `Başvuru Tarihi: ${timestamp}`,
  ].join("\n");
}

export function buildCheckupEmailHtml({
  audience,
  parentName,
  phone,
  participantAge,
  note,
  timestamp,
}: CheckupEmailData) {
  const isAdult = audience === "adults";
  const heading = isAdult ? "Yeni Yetişkin CogMap Başvurusu" : "Yeni CogMap Başvurusu";
  const ageLabel = isAdult ? "Katılımcı Yaşı" : "Çocuğun Yaşı";
  const noteLabel = isAdult ? "Katılımcı Notu" : "Veli Notu";
  const logoUrl = `${SITE.origin}${SITE.logoImage}`;
  const whatsappDigits = toWhatsAppDigits(phone);
  const whatsappHref = whatsappDigits
    ? `https://wa.me/${whatsappDigits}?text=${encodeURIComponent(
        `Merhaba ${parentName}, BrainFit Karşıyaka'dan yazıyoruz. CogMap başvurunuz için sizi arayabiliriz.`,
      )}`
    : null;

  const rows: Array<[string, string]> = [
    ["Adı Soyadı", parentName],
    ["Telefon", phone],
    [ageLabel, participantAge],
    [noteLabel, note],
  ];

  const rowsHtml = rows
    .map(
      ([label, value], index) => `
        <tr>
          <td style="padding:14px 20px; ${index > 0 ? `border-top:1px solid ${CARD_LINE};` : ""} font:700 12px/1.4 -apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif; letter-spacing:.02em; color:${INK_SUPPORT}; white-space:nowrap; vertical-align:top; width:130px;">
            ${escapeHtml(label)}
          </td>
          <td style="padding:14px 20px 14px 0; ${index > 0 ? `border-top:1px solid ${CARD_LINE};` : ""} font:700 15px/1.55 -apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif; color:${INK};">
            ${label === "Telefon"
              ? `<a href="tel:${escapeHtml(phone.replace(/\s+/g, ""))}" style="color:${INK}; text-decoration:none;">${escapeHtml(value)}</a>`
              : escapeHtml(value)}
          </td>
        </tr>`,
    )
    .join("");

  return `<!doctype html>
<html lang="tr">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${escapeHtml(heading)}</title>
  </head>
  <body style="margin:0; padding:0; background:${PAPER}; -webkit-text-size-adjust:100%;">
    <div style="display:none; max-height:0; overflow:hidden; opacity:0;">
      ${escapeHtml(parentName)} · ${escapeHtml(phone)} · ${escapeHtml(ageLabel)}: ${escapeHtml(participantAge)}
    </div>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${PAPER};">
      <tr>
        <td align="center" style="padding:32px 16px;">
          <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="width:560px; max-width:100%; background:#ffffff; border-radius:24px; overflow:hidden; box-shadow:0 24px 60px rgba(22,10,8,0.1);">
            <tr>
              <td style="background:${GREEN}; padding:24px 28px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="vertical-align:middle;">
                      <img src="${logoUrl}" alt="BrainFit Karşıyaka" height="28" style="height:28px; width:auto; display:block; border:0;" />
                    </td>
                    <td align="right" style="vertical-align:middle;">
                      <span style="display:inline-block; font:800 11px/1 -apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif; letter-spacing:.06em; text-transform:uppercase; color:#ffffff; background:rgba(255,255,255,0.16); border-radius:999px; padding:7px 12px;">
                        Yeni Başvuru
                      </span>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <tr>
              <td style="padding:32px 28px 8px;">
                <h1 style="margin:0; font:800 21px/1.35 -apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif; color:${INK};">
                  ${escapeHtml(heading)}
                </h1>
                <p style="margin:8px 0 0; font:600 13px/1.6 -apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif; color:${INK_SUPPORT};">
                  Web sitesindeki "Size Ulaşalım" formundan gönderildi · ${escapeHtml(timestamp)}
                </p>
              </td>
            </tr>

            <tr>
              <td style="padding:20px 28px 4px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#FEFBF8; border:1px solid ${CARD_LINE}; border-radius:18px; overflow:hidden;">
                  ${rowsHtml}
                </table>
              </td>
            </tr>

            <tr>
              <td style="padding:24px 28px 8px;">
                <table role="presentation" cellpadding="0" cellspacing="0">
                  <tr>
                    ${
                      whatsappHref
                        ? `<td style="padding-right:10px;">
                            <a href="${whatsappHref}" style="display:inline-block; font:800 14px/1 -apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif; color:#ffffff; background:${GREEN}; border-radius:999px; padding:14px 22px; text-decoration:none;">
                              WhatsApp&#39;tan Yanıtla
                            </a>
                          </td>`
                        : ""
                    }
                    <td>
                      <a href="tel:${escapeHtml(phone.replace(/\s+/g, ""))}" style="display:inline-block; font:800 14px/1 -apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif; color:${INK}; background:${ROSE}; border-radius:999px; padding:14px 22px; text-decoration:none;">
                        Ara
                      </a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <tr>
              <td style="padding:20px 28px 28px;">
                <p style="margin:0; font:600 12px/1.7 -apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif; color:${INK_SUPPORT};">
                  Bu e-posta ${escapeHtml(SITE.brandName)} web sitesindeki başvuru formu tarafından otomatik olarak oluşturuldu.
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}
