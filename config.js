//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "charithkavinda080@gmail.com";
global.location = "asia,colombo.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/colombo";
global.github = process.env.GITHUB || "";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaglXx3LikgF18gU651T";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaglXx3LikgF18gU651T";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/a8f400de01d6c1ec4e742.jpg";
global.devs = "94754015815";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "94754015815";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/0a776b2a20271ec6d93b4.jpg";
global.waPresence = process.env.WAPRESENCE || "unavailable";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "false";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0VwNlZHamd6UDVEb3pRenZPR3Z6cVd1N2RNY0NUOGJTS1FuSktSblMzVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRlZVL252Qzk0UjIrNnlNWlR5T25JNHJrOGh0Sk9SYW14V1NqVUJ5Z2tsRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpQVprM2dCWjh6Ti9VbEZNbUx3QzA0S1dkbUhRTjZ1eFF4R1ZrL0FFNTNNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhZzZkM09oNXdpanpJVDBXOXBybVpHbkVkZUEySWU5Rm80VGV0SE9YaHpJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklMUmZQWVNQSWZJR0ttOG9wR0VGc2NoUkVFVGNVL283VkRSTlBrb1F6WGM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InM3SkxjcFFTN0cxZE44aTcxSi8yWDE4Y0VzTEkwOUxxYVdGRWRtN1NTaTQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0pwUmt5ZmRTbUl6Y0JtR00zMzhYdVRTdGdHeHlUbU1kbzc4aWwvcTMwbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieG5Lb2Nab011UFJSMFl3cWxUKzViNWdLdmt2eUY2TkZRT3ZzYjVxSnVRQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlBiM2tZeVRoenI2U3hwcG5KY2pQV1Z2NTlWRWVLVFNQTmZleExkNTU2UGVQdUtSZkQrQWRSVVpLcGgrNHdFU1U3UVR5eFF4cUFpQ2MzVTh4cHFRNEJRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTEwLCJhZHZTZWNyZXRLZXkiOiJxaUFIUVVUbVNnM255RzMwV2IxVWU5bEtVbHNVdSs3UGxHTUVvQW5VcEdjPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJwQ3JRazFjbVFGV1pGODNSNW44d0dBIiwicGhvbmVJZCI6IjU0YTRjMDdlLWFkYTMtNDk1ZS04MTlhLTdkZWVjYWEyMjMxNSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI1TWFRR3RqTWEzdDFkaUZNZWxlR0JqRmRTTUk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS1Z5eFdEK0JzRGI2UjhXL0pacFMxdWNsTW5jPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkVUQlJBQktNIiwibWUiOnsiaWQiOiI5NDc1NDAxNTgxNTo5MkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJjaGFywqF0aCBrYXfCoW5kYeKApuGdsC7hkJ8ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tpNC82d0lFTlRpcWJRR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InFoNTZoQVczVGt4YU01Q2I1VDB4Q3BqYVVEZEVFdU11SnNQMnVjZ0RsQlE9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkpDa2dVZm9xcDcvMVV6OXh5bndnWHVGMk0rM09hMEEzcDBJK0tqUUdxTEpEN3lpSm5mcUhSRVJNdTRpOWZvWG12WnNWQW9la1dGbUJuTGQrNVJZL2lRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJDaER2WXpETnpXOUZOZGkyby9PRGs3SmtxZEg3S3FheFdYS0hrenU1TVp2a21JWVRjUDYzbFJWZDVIQnZLbXFzQ0dkcnhpUHcxTGhGTlU5YitPaW1EQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzU0MDE1ODE1OjkyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmFvZWVvUUZ0MDVNV2pPUW0rVTlNUXFZMmxBM1JCTGpMaWJEOXJuSUE1UVUifX1dLCJwbGF0Zm9ybSI6InNtYmkiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjAzNDkwMjQsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRTJxIn0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || "@",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "ꜰɪʟᴇ ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ ᴍʀ.ᴄᴋ",
  author: process.env.PACK_AUTHER || "ᴍʀ.ᴄᴋ",
  packname: process.env.PACK_NAME || "🫰🏻",
  botname: process.env.BOT_NAME || "ᴍʀ.ᴄᴋ",
  ownername: process.env.OWNER_NAME || "🄲🄷🄰🅁¡🅃🄷 🄺🄰🅆¡🄽🄳🄰…ᝰ.ᐟ",
  errorChat: process.env.ERROR_CHAT || "94767015961",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "false",
  LANG: (process.env.THEME || "mr~ck").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
