Iconst fs = require('fs-extra')
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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_13_34_12_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDYwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMzEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNjcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDU4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDI3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMixcbiAgICAgICAgODgsXG4gICAgICAgIDI1MixcbiAgICAgICAgNjUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDMyLFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTExLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDgxLFxuICAgICAgICAzMSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDk2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjM0LFxuICAgICAgICA5MCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDMwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDM4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNTAsXG4gICAgICAgIDMyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDU2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjM4LFxuICAgICAgICA4NyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNTksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDc1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE3LFxuICAgICAgICAxMzksXG4gICAgICAgIDE0NixcbiAgICAgICAgNzcsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MCxcbiAgICAgICAgNjksXG4gICAgICAgIDUyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDI1MixcbiAgICAgICAgNSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTMsXG4gICAgICAgIDgyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMCxcbiAgICAgICAgMjksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNTksXG4gICAgICAgIDUxLFxuICAgICAgICAyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICA4MSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDExNyxcbiAgICAgICAgOTUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjUzLFxuICAgICAgICA4NCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDQxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDYwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjUsXG4gICAgICAgIDkxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDYsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxOTksXG4gICAgICAgIDQ2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDQ1LFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjUsXG4gICAgICAgIDQ4LFxuICAgICAgICAxODYsXG4gICAgICAgIDc5LFxuICAgICAgICA5MCxcbiAgICAgICAgMTExLFxuICAgICAgICAyNSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEyLFxuICAgICAgICA5NSxcbiAgICAgICAgMTIzLFxuICAgICAgICA0LFxuICAgICAgICA2NCxcbiAgICAgICAgMTc4LFxuICAgICAgICA0MyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxODEsXG4gICAgICAgIDc5LFxuICAgICAgICAxODAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTYxLFxuICAgICAgICAzOCxcbiAgICAgICAgMTY3LFxuICAgICAgICA3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTYzLFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDg0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEyNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MixcbiAgICAgICAgMTg1LFxuICAgICAgICAzNSxcbiAgICAgICAgMTExLFxuICAgICAgICAxNTUsXG4gICAgICAgIDExNixcbiAgICAgICAgMTI0LFxuICAgICAgICA4MyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMyxcbiAgICAgICAgNDAsXG4gICAgICAgIDU4LFxuICAgICAgICA1LFxuICAgICAgICAxNTksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDExOCxcbiAgICAgICAgODYsXG4gICAgICAgIDUyLFxuICAgICAgICAyMjksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTAsXG4gICAgICAgIDcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDc2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgOTUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNDQsXG4gICAgICAgIDQ4LFxuICAgICAgICA0LFxuICAgICAgICAxNixcbiAgICAgICAgMTY1LFxuICAgICAgICA2NyxcbiAgICAgICAgOTYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTk3LFxuICAgICAgICA0OCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDM5LFxuICAgICAgICA3NSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDc4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDU1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTg0LFxuICAgICAgICA5MCxcbiAgICAgICAgMTQyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMTksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiOGFwZzhuL3NHa3BkL0VVdkJUdkNwMk03bS9ocmp2cDR6SzIxS0lsSHhCTT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwidEF0eGc1eU9SbEtvdUNhNVlIVnhPUVwiLFxuICBcInBob25lSWRcIjogXCI2ZDEwZjRiZi1mNWJkLTQ4MTktYjNlOS03ZWNhMDExMmEzOTVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDgsXG4gICAgICAxNTYsXG4gICAgICAxOTcsXG4gICAgICAxOTYsXG4gICAgICAxNzQsXG4gICAgICAxNzgsXG4gICAgICAyMzUsXG4gICAgICA2MixcbiAgICAgIDcxLFxuICAgICAgMjIyLFxuICAgICAgMjEsXG4gICAgICAzMSxcbiAgICAgIDEwMSxcbiAgICAgIDE2NixcbiAgICAgIDIwMCxcbiAgICAgIDEzMyxcbiAgICAgIDE5MCxcbiAgICAgIDI1MyxcbiAgICAgIDI1MCxcbiAgICAgIDY5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDAsXG4gICAgICAyNTUsXG4gICAgICAxNzUsXG4gICAgICA1LFxuICAgICAgMTU5LFxuICAgICAgOTEsXG4gICAgICAxMCxcbiAgICAgIDIwOSxcbiAgICAgIDIzOCxcbiAgICAgIDM1LFxuICAgICAgODgsXG4gICAgICAyNTEsXG4gICAgICA2MixcbiAgICAgIDE2NyxcbiAgICAgIDExNixcbiAgICAgIDU3LFxuICAgICAgMjM5LFxuICAgICAgMTUzLFxuICAgICAgMzUsXG4gICAgICAxODRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTTNXVzRRQjFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgwNzc4MjU1OTU6MjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLmrbtf77yu77yl77yt77yl77yz77yp77y4XCIsXG4gICAgXCJsaWRcIjogXCI2MDk3NjA4NjkzMzczODoyOEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJT3M0aWtRemJUQnVnWVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkJGTTNmS1FJU1dHYU1CMjlMb0MvR0drR2s1cnk3V0tLaU9DVzc5TUJ4R0E9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwibWJ2bG5RZU5HcjNtbFduZC9rOUc2T24renZFOVBzTno5OXJ1RlM3NVJEMnUxQ25EVTRhNmRubXVNdUdSSEpOeUVCYmVEbGFlN1NrbzhtbkIwcGRLQXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiL1hhRGNrNFVOcWt4YnBNN3ZqQnNPeWpRbWlYdXhUbW5iSmo0OEpDdTVLV0hrbFVxZmVPYTlTNXhoVGgvdVc1V1htZnNuUTZsL3Jhdmk1aURJQ3JLaUE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODA3NzgyNTU5NToyOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgOTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMzMxOTI0OSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUJtUlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQm1SLmpzb24iOiAie1wia2V5RGF0YVwiOlwiL055ejJuMWt5eU9sOEc1ZlJDN3NwT2RMUUtIWU9Gc1dsSmdhcVFpRUNYZz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo4NzU5NDQ5OCxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


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
