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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkpnUlAxRlJlWHB2VjY1U0RFS20wRWwySUZrV0NGMDdKL2pNNmt4UzdYUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVXdxOXdTRmpERzd6Z05sa21jQk8zaE1FeDM4QUREK2Y5OTFQOUlia25rYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2RnU4dmkvZGtNaE9WbVplcmc5enZrZ3p1bHUvWHpHSnMyYytNMExTWkVVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjQ2xrVXNXOTJIOVpZRkJ0SWlKR0dpZnNHMHpXeE9rRmJiR1RLblI4WjBrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFPMTRRZVJ0Qjg3ak0vZjBZTlBXdnZzR3ZHNVZIOTY4aGpyckowWFVnMm89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlBnWkcyM2JPSXkwVk40cnFjQ2w5bUd0cFpKbDZKTzl3cC80N0ZDcGQ5UTg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUhTeWJqY24rUFE3WUdibEU0b1AwTjVyb1VkNndxajNLTjAyM0xlNXhWUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZnBidEwzYzNodHhwNmFteHRqb3NwMEZPSWoybFBVWjMxQ1UxWHdybUh3az0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlRmQ0JrclpjZmJ3K1RRUmZqQlBFRWhEOW5yUFllYTUyNktadjdOZVQ4dFlsdkxSMjNnSjNXRzVlaHpCcUZqUmQ5aStuT2VDQ0VrTFRiM0dUclBXZGhRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTMsImFkdlNlY3JldEtleSI6IkVaU3dFTjA0SUYxckJOZUxpSjh2aDFubFBURjA3bkNWb0dkK0xmNjVoNk09IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Iko0RUZSUDdmUkkyR3ZIS05wZzByTmciLCJwaG9uZUlkIjoiOTIzZTBkNWUtOWJkMC00NTY4LTg5YmYtMGQ1ZmI1NTFjNTdkIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhIb1lpRTUrdXJVU2lWRUJsQWhOUndwTUFsMD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJSWThjK1VXdnhrNnJ5Q2YrOXNLbnVPNkMraUE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTUtaV0tDQVkiLCJtZSI6eyJpZCI6Ijk0NzU0MDE1ODE1OjE3QHMud2hhdHNhcHAubmV0IiwibmFtZSI6ImNoYXLCoXRoIGthd8KhbmRh4oCm4Z2wLuGQnyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTUtpaFlJTkVLYnczYlFHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoicWg1NmhBVzNUa3hhTTVDYjVUMHhDcGphVURkRUV1TXVKc1AydWNnRGxCUT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiY2dSQWdtbG1nbndlcWRnZFRSVzBxVXgrTGtTKzVjTTdMTzQwY3puYmo1REdLZ2NuU1g3LzZSWWlIamtRcWJ3QlQ1VGcyTVhmdVM1N0I5emh3Y25taXc9PSIsImRldmljZVNpZ25hdHVyZSI6IkIrcHRibUdhNUlMVi9RQ1JpcmEvOXVMZnY2ZGVVTDlmR09kVUtkVGhNOEFoQ1MrK1ozVDdDTmJiSGt6eGNram0vMnV5TUFjQ292WGtuTmNQS0Nza2dBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NTQwMTU4MTU6MTdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYW9lZW9RRnQwNU1Xak9RbStVOU1RcVkybEEzUkJMakxpYkQ5cm5JQTVRVSJ9fV0sInBsYXRmb3JtIjoic21iaSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMTIwMjczOCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFQcmkifQ=="
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
