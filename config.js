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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_22_46_12_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDkwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDMxLFxuICAgICAgICAyMixcbiAgICAgICAgMjMyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDExNixcbiAgICAgICAgOSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMzYsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQzLFxuICAgICAgICA1LFxuICAgICAgICAyNDksXG4gICAgICAgIDY5LFxuICAgICAgICAyNyxcbiAgICAgICAgMTQsXG4gICAgICAgIDk5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIzNixcbiAgICAgICAgODQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjUsXG4gICAgICAgIDc2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDU3LFxuICAgICAgICAzNCxcbiAgICAgICAgMzksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgODMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDExMixcbiAgICAgICAgMTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDgyLFxuICAgICAgICAxNyxcbiAgICAgICAgMTc2LFxuICAgICAgICA4MyxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDcyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgODIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNyxcbiAgICAgICAgMTMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNDksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMzQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTgxLFxuICAgICAgICA3NCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTgxLFxuICAgICAgICAzMSxcbiAgICAgICAgMjI1LFxuICAgICAgICA4NSxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MixcbiAgICAgICAgOSxcbiAgICAgICAgOCxcbiAgICAgICAgMjI1LFxuICAgICAgICA2NixcbiAgICAgICAgMTMzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMyxcbiAgICAgICAgMTI1LFxuICAgICAgICA3OCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgOCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDU3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDUzLFxuICAgICAgICAxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxOTksXG4gICAgICAgIDE1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDQ2LFxuICAgICAgICAzNixcbiAgICAgICAgNzQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjEsXG4gICAgICAgIDkxLFxuICAgICAgICAzOSxcbiAgICAgICAgMzMsXG4gICAgICAgIDM0LFxuICAgICAgICAxMTksXG4gICAgICAgIDIzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIxNixcbiAgICAgICAgNDMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTgzLFxuICAgICAgICA4OSxcbiAgICAgICAgMjM4LFxuICAgICAgICA1OCxcbiAgICAgICAgOTIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE1LFxuICAgICAgICAyMDksXG4gICAgICAgIDE3NyxcbiAgICAgICAgNzMsXG4gICAgICAgIDEyNixcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODYsXG4gICAgICAgIDYyLFxuICAgICAgICAxMTksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMjksXG4gICAgICAgIDE5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDI1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTkyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTY2LFxuICAgICAgICAyNDksXG4gICAgICAgIDI1LFxuICAgICAgICAxODQsXG4gICAgICAgIDY2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDI3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDgzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjU1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDM1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDcxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTAxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDc5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjEwLFxuICAgICAgICA2MSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTExLFxuICAgICAgICA1LFxuICAgICAgICAxNSxcbiAgICAgICAgOTEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjE0LFxuICAgICAgICAzMyxcbiAgICAgICAgOTgsXG4gICAgICAgIDUxLFxuICAgICAgICAwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDk3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDQwLFxuICAgICAgICAyMjksXG4gICAgICAgIDE2MixcbiAgICAgICAgMTAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTgyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMzYsXG4gICAgICAgIDM2LFxuICAgICAgICAxOTksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDQzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDk4LFxuICAgICAgICA4NyxcbiAgICAgICAgMTg5LFxuICAgICAgICA4NyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMzMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDUxLFxuICAgICAgICA1MSxcbiAgICAgICAgNjYsXG4gICAgICAgIDkwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxODYsXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE2MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJXTGZpSGlFTzZSeVNzeks4Y1dxaFI1OXhubEhuU1c0ZVM5VkpwdS90VDBVPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ3b0VrR2xfYlR6V1VJMk1ITEFPYkR3XCIsXG4gIFwicGhvbmVJZFwiOiBcImQ3YzE2MzdjLTQ1OTYtNDQ2MS1hMGQ2LThjMTFiMWRhOTc0MVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3MyxcbiAgICAgIDEyNCxcbiAgICAgIDIxNCxcbiAgICAgIDE3MCxcbiAgICAgIDExNyxcbiAgICAgIDEyOCxcbiAgICAgIDMyLFxuICAgICAgMjE3LFxuICAgICAgMTIyLFxuICAgICAgNjksXG4gICAgICAxNTUsXG4gICAgICA0OCxcbiAgICAgIDU4LFxuICAgICAgMjMzLFxuICAgICAgNjIsXG4gICAgICAyNTMsXG4gICAgICA4OCxcbiAgICAgIDU4LFxuICAgICAgMjQwLFxuICAgICAgOTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTc3LFxuICAgICAgMjgsXG4gICAgICA5NyxcbiAgICAgIDE4NixcbiAgICAgIDUsXG4gICAgICAxMzksXG4gICAgICA0NSxcbiAgICAgIDIwMyxcbiAgICAgIDIyOCxcbiAgICAgIDU0LFxuICAgICAgNzEsXG4gICAgICAxMDEsXG4gICAgICAzMixcbiAgICAgIDc5LFxuICAgICAgMTQ2LFxuICAgICAgMjE3LFxuICAgICAgMTEzLFxuICAgICAgMTYwLFxuICAgICAgMTQsXG4gICAgICAxOTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiR0NGQVBINFlcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgwNzc4MjU1OTU6MjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLmrbtf77yu77yl77yt77yl77yz77yp77y4XCIsXG4gICAgXCJsaWRcIjogXCI2MDk3NjA4NjkzMzczODoyN0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJS3M0aWtRd1pTK3VnWVlBaUFBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkJGTTNmS1FJU1dHYU1CMjlMb0MvR0drR2s1cnk3V0tLaU9DVzc5TUJ4R0E9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwieElraDBKWGRKNzYxcXZRTHZIZ0pPVzA5Zm1SWCsvdnRqZEJMWXFweWlSMUpNRjRVUHI4OGJ3bnJwaXF0R3NBTXRQY1JKZzNUSVovd2srcmRFVTVmRGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiMWlxNHdOejZXcXNDb3NOcGcybzA3SG5FeHF1WjlmaDNqOGdKaHNESDAyZDJZdWZDQjdiSHFJcXRMdXhkclNGNXRpdnpMYS9SeE1Ib2ZZRUFnRS9VRGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODA3NzgyNTU5NToyN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgOTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMzI2NTk4OVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
