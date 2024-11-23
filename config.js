const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348077825595";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_19_43_11_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgODcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNyxcbiAgICAgICAgNzksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTExLFxuICAgICAgICAxNDQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNTksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTUsXG4gICAgICAgIDIzNixcbiAgICAgICAgNjAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxLFxuICAgICAgICAxNTksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjIzLFxuICAgICAgICA2NyxcbiAgICAgICAgMTgzLFxuICAgICAgICA1NCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIxLFxuICAgICAgICAzNSxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzUsXG4gICAgICAgIDU0LFxuICAgICAgICA3NSxcbiAgICAgICAgMzUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTAzLFxuICAgICAgICA3NSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDc5LFxuICAgICAgICAyMDksXG4gICAgICAgIDM3LFxuICAgICAgICAzOCxcbiAgICAgICAgMTcxLFxuICAgICAgICA2MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTksXG4gICAgICAgIDYxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNyxcbiAgICAgICAgNDksXG4gICAgICAgIDExMyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxODEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTA5LFxuICAgICAgICA0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE2LFxuICAgICAgICA3MyxcbiAgICAgICAgOTIsXG4gICAgICAgIDE1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjA5LFxuICAgICAgICA0MCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDcxLFxuICAgICAgICAxODEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjI5LFxuICAgICAgICAxODgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgOSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMyxcbiAgICAgICAgODcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjI2LFxuICAgICAgICA3MSxcbiAgICAgICAgNjYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDYzLFxuICAgICAgICA1OCxcbiAgICAgICAgMTgzLFxuICAgICAgICA3MSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTYsXG4gICAgICAgIDY5LFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTgxLFxuICAgICAgICA1LFxuICAgICAgICAxODYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgODAsXG4gICAgICAgIDU4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDQ2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEsXG4gICAgICAgIDcxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjMwLFxuICAgICAgICA3MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDgyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE3MixcbiAgICAgICAgNzcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNjksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDk3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTksXG4gICAgICAgIDksXG4gICAgICAgIDM4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDkwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjEyLFxuICAgICAgICA1NixcbiAgICAgICAgMjA3LFxuICAgICAgICA1MixcbiAgICAgICAgMTM0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDc0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDUxLFxuICAgICAgICAxODMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNjgsXG4gICAgICAgIDEyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE1NixcbiAgICAgICAgOCxcbiAgICAgICAgMjQzLFxuICAgICAgICAzNSxcbiAgICAgICAgNjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTE5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMjFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MixcbiAgICAgICAgMTk4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDk5LFxuICAgICAgICA3MyxcbiAgICAgICAgMTc0LFxuICAgICAgICA0NCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjM0LFxuICAgICAgICA0MyxcbiAgICAgICAgNjcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTc4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxOSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNixcbiAgICAgICAgMjcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTQzLFxuICAgICAgICA0OSxcbiAgICAgICAgMzksXG4gICAgICAgIDIwNyxcbiAgICAgICAgNzEsXG4gICAgICAgIDE1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDM2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjksXG4gICAgICAgIDE5MSxcbiAgICAgICAgNjEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyNDksXG4gICAgICAgIDM2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjYsXG4gICAgICAgIDczLFxuICAgICAgICAxMjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDg2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjY2ZWF4YmxuL2hJbzh5dUlSWG1kT3F4RitLQkhjWkpXYXZIYTRRUWMrS1U9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjVJclo2cjZEUjUyV09JXzZYdU9hOWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiM2ZkOThkN2YtZmFiMi00YTFjLTk0MWYtZTJiMWNiZmI2YzgyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDMwLFxuICAgICAgMTA4LFxuICAgICAgMjQzLFxuICAgICAgNzIsXG4gICAgICAxNjAsXG4gICAgICAxODAsXG4gICAgICAxODgsXG4gICAgICA2NyxcbiAgICAgIDUzLFxuICAgICAgMjQyLFxuICAgICAgNDksXG4gICAgICAxNjMsXG4gICAgICA0MCxcbiAgICAgIDkwLFxuICAgICAgOCxcbiAgICAgIDIyMixcbiAgICAgIDEwOCxcbiAgICAgIDEzNyxcbiAgICAgIDIzLFxuICAgICAgMTQ4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI1MixcbiAgICAgIDY1LFxuICAgICAgMTMyLFxuICAgICAgODksXG4gICAgICAxNjUsXG4gICAgICAxMjUsXG4gICAgICAyMDgsXG4gICAgICAyNDMsXG4gICAgICAxMzIsXG4gICAgICAxNjYsXG4gICAgICAxMTMsXG4gICAgICAxODksXG4gICAgICAxNyxcbiAgICAgIDI0NixcbiAgICAgIDMxLFxuICAgICAgNjYsXG4gICAgICAxNjcsXG4gICAgICAyMDYsXG4gICAgICAxMTUsXG4gICAgICAxMDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNlhXQVlGS0hcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgwNzc4MjU1OTU6MThAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLmrbtf77yu77yl77yt77yl77yz77yp77y4XCIsXG4gICAgXCJsaWRcIjogXCI2MDk3NjA4NjkzMzczODoxOEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLRGVrWGdRdnVDSXVnWVlBeUFBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIk5kWERrcnBaR1MxbEl2TUlYcHRLNHVoSnlEVFk0S1lnVmI3Z2RzNDFBREE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZUNoTkN5Nm1Xb0xlZFNvOTNPS1dPaEw3TkQ4aTk0YW8yVUVqSmtwUnlGOEI0QXpON3ZLTENTSUpxN28zZHhHczBBSXRTNkRjYUZUWnlQQWM4cnZpQkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwic1NXMTB5THYxMTJpRG5RTHczemxzOXNkVHd5blpHb0h5c2UrUi8zTGRJOGozN2paYXN6Y1FONTlUWUlOb0cvcmNBNkhPalVPVlZaRXhzOG5tSWMwZ2c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODA3NzgyNTU5NToxOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDQ4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzIzOTA5NzgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFOaitcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU5qKy5qc29uIjogIntcImtleURhdGFcIjpcIjMwSmlwdlFmcmJMT3YzNDVEUUJmUU5YU0V4Vks1c1FNU1d6V1dxbk4vU1E9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjUxOTQ4ODMyLFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzIzOTA4MjI3NjFcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "-",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "死_ＮＥＭＥＳＩＸ",
  packname: process.env.PACK_NAME || "ENMA",
  botname : process.env.BOT_NAME  || "ENMA",
  ownername:process.env.OWNER_NAME|| "死_ＮＥＭＥＳＩＸ"


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
