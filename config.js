IIconst fs = require('fs-extra')
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
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/E3qlnNzNXRFDPwzkpp7LR9";
global.website=process.env.GURL || "https://chat.whatsapp.com/E3qlnNzNXRFDPwzkpp7LR9" ; 
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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_11_05_12_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICA0OCxcbiAgICAgICAgODQsXG4gICAgICAgIDEwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxODYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTIxLFxuICAgICAgICA5OCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE5MixcbiAgICAgICAgODEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxODgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTIzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDM4LFxuICAgICAgICAxMjksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjYsXG4gICAgICAgIDM1LFxuICAgICAgICAzOSxcbiAgICAgICAgMzcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjEsXG4gICAgICAgIDYzLFxuICAgICAgICA1MCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDgsXG4gICAgICAgIDYzLFxuICAgICAgICA5NSxcbiAgICAgICAgNzIsXG4gICAgICAgIDM3LFxuICAgICAgICAxNjksXG4gICAgICAgIDkyLFxuICAgICAgICA5OCxcbiAgICAgICAgNixcbiAgICAgICAgMTI3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTkwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICA2MyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjM3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDM5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNDksXG4gICAgICAgIDQ4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDMyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTcxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDU0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDczLFxuICAgICAgICA3MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNyxcbiAgICAgICAgNTQsXG4gICAgICAgIDYxLFxuICAgICAgICA1OSxcbiAgICAgICAgMTUwLFxuICAgICAgICA1NSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDgzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDI1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNjgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNzUsXG4gICAgICAgIDk1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEyNixcbiAgICAgICAgOTMsXG4gICAgICAgIDkyLFxuICAgICAgICA0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDkzLFxuICAgICAgICAxNTksXG4gICAgICAgIDEzOCxcbiAgICAgICAgOTMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjI5LFxuICAgICAgICA1N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICA0MCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDExMCxcbiAgICAgICAgOTUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTc0LFxuICAgICAgICA1MSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA0MixcbiAgICAgICAgMjI1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNDEsXG4gICAgICAgIDQ0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDQzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjA5LFxuICAgICAgICAzMCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNixcbiAgICAgICAgNDAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxODMsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTk3LFxuICAgICAgICA0NSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDg1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDgsXG4gICAgICAgIDkyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTEwLFxuICAgICAgICAzMSxcbiAgICAgICAgMjIyLFxuICAgICAgICA4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDkwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDczLFxuICAgICAgICAxMjIsXG4gICAgICAgIDI1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjAwLFxuICAgICAgICAxOTksXG4gICAgICAgIDMxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMTRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA1NixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgOTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxOSxcbiAgICAgICAgMjIsXG4gICAgICAgIDM1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxOCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNjksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDM4LFxuICAgICAgICAyNCxcbiAgICAgICAgMjE4LFxuICAgICAgICA1NixcbiAgICAgICAgMTUsXG4gICAgICAgIDM5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNTksXG4gICAgICAgIDI1LFxuICAgICAgICA2MyxcbiAgICAgICAgMTI1LFxuICAgICAgICAzNSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjIzLFxuICAgICAgICA3NyxcbiAgICAgICAgMTUwLFxuICAgICAgICAzNixcbiAgICAgICAgMTAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgODgsXG4gICAgICAgIDI5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNDAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjI2LFxuICAgICAgICA5NCxcbiAgICAgICAgNTIsXG4gICAgICAgIDI1MixcbiAgICAgICAgNjQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTE2LFxuICAgICAgICAxNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjQ0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjg4RGJBT2MwdjR3QlRTZ21ibGsrSXR4bm1weFlVSWl5MWJDYjRwOU5STVE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMixcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMixcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInVwTS1FdmtkUjRlYXJPVzltTHQ4dHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiODJhMTJiY2MtOTVhMC00MWQzLWFkNjUtODEzMTZiYTNmMzJhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzOSxcbiAgICAgIDEwNyxcbiAgICAgIDYxLFxuICAgICAgMTI5LFxuICAgICAgMTA1LFxuICAgICAgODgsXG4gICAgICAyNixcbiAgICAgIDE0MSxcbiAgICAgIDM1LFxuICAgICAgNSxcbiAgICAgIDc5LFxuICAgICAgNzQsXG4gICAgICAzOSxcbiAgICAgIDIxOSxcbiAgICAgIDExLFxuICAgICAgMTI5LFxuICAgICAgMjMyLFxuICAgICAgNTAsXG4gICAgICA2MyxcbiAgICAgIDE3MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTgsXG4gICAgICA3OCxcbiAgICAgIDE2OCxcbiAgICAgIDEwNCxcbiAgICAgIDUsXG4gICAgICAyNTIsXG4gICAgICAxNzIsXG4gICAgICA2NSxcbiAgICAgIDIxMCxcbiAgICAgIDMxLFxuICAgICAgMTYzLFxuICAgICAgMTM1LFxuICAgICAgMTcyLFxuICAgICAgMjM2LFxuICAgICAgNDIsXG4gICAgICAxMTcsXG4gICAgICA5NCxcbiAgICAgIDIyNixcbiAgICAgIDIwMSxcbiAgICAgIDMxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIllMNDJTVzdLXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MDc3ODI1NTk1OjMyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi5q27X++8ru+8pe+8re+8pe+8s++8qe+8uFwiLFxuICAgIFwibGlkXCI6IFwiNjA5NzYwODY5MzM3Mzg6MzJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSU9zNGlrUStxbnd1Z1lZQlNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJCRk0zZktRSVNXR2FNQjI5TG9DL0dHa0drNXJ5N1dLS2lPQ1c3OU1CeEdBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIk0wQVl6RTBlZ0x3eEtJc3ZUMEM1d0VRRmpIdDExZnlPNUY0UTRZVW9aU2lKRnR1Q05TNXp5dGtOdnBTR1hGeXhOeVNpQVFiL0NGem5weWJzU0o5T0NBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjVTNkFRNlZ5NFJ3MERSWjRWNjdNcE9kQnQyTm5vV0RNUDRTUTRLQ0UwQWlaVUZrbGNYckdGejRCblgwN2xicTRHZnRNZEtjcktNQ0QvYm14Nkg2eEJRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgwNzc4MjU1OTU6MzJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDk2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzQwODc5MzQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFCbVJcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUJtUi5qc29uIjogIntcImtleURhdGFcIjpcIi9OeXoybjFreXlPbDhHNWZSQzdzcE9kTFFLSFlPRnNXbEpnYXFRaUVDWGc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6ODc1OTQ0OTgsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
