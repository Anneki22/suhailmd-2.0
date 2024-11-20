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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_09_53_11_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICA3MCxcbiAgICAgICAgMTMyLFxuICAgICAgICA2MCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDgsXG4gICAgICAgIDI1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDc3LFxuICAgICAgICAxOTksXG4gICAgICAgIDE3MyxcbiAgICAgICAgOTIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTYwLFxuICAgICAgICAxNzksXG4gICAgICAgIDEwMyxcbiAgICAgICAgNjksXG4gICAgICAgIDMyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjgsXG4gICAgICAgIDUzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTQwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgOTQsXG4gICAgICAgIDQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTY3LFxuICAgICAgICAzNyxcbiAgICAgICAgMTcyLFxuICAgICAgICA2NyxcbiAgICAgICAgMTQzLFxuICAgICAgICAzOCxcbiAgICAgICAgMjAwLFxuICAgICAgICA4NyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDUwLFxuICAgICAgICAyMzksXG4gICAgICAgIDIxMSxcbiAgICAgICAgNzYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxODAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMzgsXG4gICAgICAgIDYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxOSxcbiAgICAgICAgNzMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNzksXG4gICAgICAgIDEwNixcbiAgICAgICAgNzYsXG4gICAgICAgIDk1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTQwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjIyLFxuICAgICAgICAwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNSxcbiAgICAgICAgNDcsXG4gICAgICAgIDQwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgOTQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgODEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTYsXG4gICAgICAgIDI1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNDMsXG4gICAgICAgIDIzMixcbiAgICAgICAgODUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNzgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDYyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMTksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTc5LFxuICAgICAgICA4NixcbiAgICAgICAgOTQsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMjA4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNzUsXG4gICAgICAgIDYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTE0LFxuICAgICAgICA2MixcbiAgICAgICAgMjUsXG4gICAgICAgIDIzMixcbiAgICAgICAgNjUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMyxcbiAgICAgICAgMTg0LFxuICAgICAgICAzOSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDY1LFxuICAgICAgICAxMixcbiAgICAgICAgMTgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjU1LFxuICAgICAgICA5OSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTQwLFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTExLFxuICAgICAgICAxMzEsXG4gICAgICAgIDg4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDU4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMzUsXG4gICAgICAgIDg3LFxuICAgICAgICAxNixcbiAgICAgICAgOTksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDYxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDMxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDI1LFxuICAgICAgICA2NCxcbiAgICAgICAgODYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjA0LFxuICAgICAgICA5OSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyOSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA5MVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTEwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDU2LFxuICAgICAgICAxODEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNjMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTc0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDYyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNzksXG4gICAgICAgIDg2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNSxcbiAgICAgICAgMTEsXG4gICAgICAgIDc1LFxuICAgICAgICAzNSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNzQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMzAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMzEsXG4gICAgICAgIDYxLFxuICAgICAgICA2NixcbiAgICAgICAgMTMzLFxuICAgICAgICA4LFxuICAgICAgICAxMCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTcxLFxuICAgICAgICA4OSxcbiAgICAgICAgMTczLFxuICAgICAgICA2MSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxODUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE0MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI4WUx3NXVQaTE1RFZ0V3hVcE5IcktDNzZXdTBZZ0d0ZGtpeU5hN0cyT09ZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJYSGJFcVQwaVFSYTVJSUxsY0wzbDhRXCIsXG4gIFwicGhvbmVJZFwiOiBcImQ5MGEzMmE5LTliM2UtNDg0YS05YWQ5LWEwMjZkZmQwMjU4NlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNixcbiAgICAgIDE0MyxcbiAgICAgIDIzNixcbiAgICAgIDAsXG4gICAgICAxNDgsXG4gICAgICAxNTcsXG4gICAgICA3NCxcbiAgICAgIDgzLFxuICAgICAgMTAzLFxuICAgICAgMTYsXG4gICAgICAyMDIsXG4gICAgICAxODMsXG4gICAgICAxMzEsXG4gICAgICAxMzEsXG4gICAgICAxOTMsXG4gICAgICAyNTUsXG4gICAgICA3NixcbiAgICAgIDE1NCxcbiAgICAgIDIxLFxuICAgICAgMTE3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxMixcbiAgICAgIDIyLFxuICAgICAgMjI2LFxuICAgICAgMzUsXG4gICAgICA4NSxcbiAgICAgIDQzLFxuICAgICAgNjYsXG4gICAgICAxNjMsXG4gICAgICAxNzIsXG4gICAgICA2MCxcbiAgICAgIDExNyxcbiAgICAgIDI1NSxcbiAgICAgIDI3LFxuICAgICAgNDUsXG4gICAgICAxMTcsXG4gICAgICA1OSxcbiAgICAgIDIxNyxcbiAgICAgIDE1OCxcbiAgICAgIDEwNixcbiAgICAgIDQ4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlRHSjVETlAxXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MDc3ODI1NTk1OjE0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi5q27X++8ru+8pe+8re+8pe+8s++8qe+8uFwiLFxuICAgIFwibGlkXCI6IFwiNjA5NzYwODY5MzM3Mzg6MTRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSi9la1hnUW91UDJ1UVlZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJOZFhEa3JwWkdTMWxJdk1JWHB0SzR1aEp5RFRZNEtZZ1ZiN2dkczQxQURBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInRURTV2dENUejZZY3NNaVZoL0VINSswL3EzYVpBSENQTDc2di92bVhXbnE5blZ5Wmt6WVc0emsrVU9OYmFDTU1pVjVCR2F5cFZManh1UEhJbXhoVUF3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIk1WaUYrU2NYYktkYVBaekZ1RTNkSVltMzQwQ0dtZkZNTDU5YU9HTmNjWGJqM0YwRFhxZ1pBSSthTWFteFZEMmhCZmkwT1ZUZS91OThrNjVaejBRU2pnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgwNzc4MjU1OTU6MTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAzMixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA0OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMyMDk2NDIxXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
