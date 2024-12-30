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
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" ;  // Make it "false" for disable WELCOME 

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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_17_33_12_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICA1MSxcbiAgICAgICAgNyxcbiAgICAgICAgNjMsXG4gICAgICAgIDc0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjI2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDcxLFxuICAgICAgICA1OSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgOTYsXG4gICAgICAgIDQxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNDgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTY5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjI2LFxuICAgICAgICA3NSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzQsXG4gICAgICAgIDk3LFxuICAgICAgICA1NixcbiAgICAgICAgOCxcbiAgICAgICAgMSxcbiAgICAgICAgNTYsXG4gICAgICAgIDYwLFxuICAgICAgICA1NCxcbiAgICAgICAgMjA2LFxuICAgICAgICA5NSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMTksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjE3LFxuICAgICAgICAyOCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDk2LFxuICAgICAgICA3MCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIyLFxuICAgICAgICAxNzksXG4gICAgICAgIDE4NyxcbiAgICAgICAgODYsXG4gICAgICAgIDUyLFxuICAgICAgICA1OCxcbiAgICAgICAgMjI3LFxuICAgICAgICA1MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDQ2LFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDc4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDUxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDUwLFxuICAgICAgICAxODIsXG4gICAgICAgIDU1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjE5LFxuICAgICAgICAyMzksXG4gICAgICAgIDQ3LFxuICAgICAgICA0NixcbiAgICAgICAgNjUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDI0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjM4LFxuICAgICAgICAzMCxcbiAgICAgICAgOTgsXG4gICAgICAgIDQ1LFxuICAgICAgICA5OCxcbiAgICAgICAgMzAsXG4gICAgICAgIDY5LFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMixcbiAgICAgICAgODksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTg4LFxuICAgICAgICA5MyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMTksXG4gICAgICAgIDE2MSxcbiAgICAgICAgNTAsXG4gICAgICAgIDg2LFxuICAgICAgICA3MSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNjksXG4gICAgICAgIDExNyxcbiAgICAgICAgMTAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTI2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNDksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDI4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjEyLFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAyMyxcbiAgICAgICAgNzQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjI3LFxuICAgICAgICA1MCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgODAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDQzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMzgsXG4gICAgICAgIDgwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDEzMixcbiAgICAgICAgNCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTIsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDMxLFxuICAgICAgICA4MyxcbiAgICAgICAgNzIsXG4gICAgICAgIDYyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDY0LFxuICAgICAgICAzMixcbiAgICAgICAgNzIsXG4gICAgICAgIDg2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDMxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMSxcbiAgICAgICAgMTUwLFxuICAgICAgICA3LFxuICAgICAgICA5MCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNTksXG4gICAgICAgIDEyOCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgOThcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDI3LFxuICAgICAgICAzNyxcbiAgICAgICAgMjAwLFxuICAgICAgICA4MSxcbiAgICAgICAgMjM5LFxuICAgICAgICAzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDExNixcbiAgICAgICAgMTU1LFxuICAgICAgICAxNyxcbiAgICAgICAgOTYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAzMixcbiAgICAgICAgMjI3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDMwLFxuICAgICAgICA5MCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDI0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMzgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTE0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDI0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDkxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMCxcbiAgICAgICAgMzksXG4gICAgICAgIDYxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDg1LFxuICAgICAgICAxODEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNTUsXG4gICAgICAgIDgzLFxuICAgICAgICAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA3NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJmaXRBZW14U3V6K1VROXVNek0vSStRMEtITmFhU1RIaWxycTExaEUzK1VvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI4ZkttX3EtRFRZR0RpRktmMDJaSGlnXCIsXG4gIFwicGhvbmVJZFwiOiBcImFmOTQ1YTQwLWQ0MGItNGM5NS04NGZmLWZlM2MxMTZjNzcxOFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzYsXG4gICAgICAyMDgsXG4gICAgICAxMjcsXG4gICAgICAyNSxcbiAgICAgIDE4MSxcbiAgICAgIDIzNCxcbiAgICAgIDIxOSxcbiAgICAgIDgxLFxuICAgICAgODIsXG4gICAgICAyNDQsXG4gICAgICAxMzksXG4gICAgICAxNjksXG4gICAgICAyMzYsXG4gICAgICAxMzUsXG4gICAgICA2NSxcbiAgICAgIDE2NSxcbiAgICAgIDIxNixcbiAgICAgIDc0LFxuICAgICAgMTQ5LFxuICAgICAgMjUzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDY1LFxuICAgICAgMjQ0LFxuICAgICAgMjMyLFxuICAgICAgMjQyLFxuICAgICAgNTAsXG4gICAgICAxNjcsXG4gICAgICAxNjQsXG4gICAgICAxODcsXG4gICAgICA3NixcbiAgICAgIDc1LFxuICAgICAgNTIsXG4gICAgICA3NixcbiAgICAgIDIxNCxcbiAgICAgIDExLFxuICAgICAgNTksXG4gICAgICAyMTMsXG4gICAgICAxNyxcbiAgICAgIDE1NyxcbiAgICAgIDI1NCxcbiAgICAgIDc0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjZYODdKN01RXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MDc3ODI1NTk1Ojg0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi5q27X++8ru+8pe+8re+8pe+8s++8qe+8uFwiLFxuICAgIFwibGlkXCI6IFwiNjA5NzYwODY5MzM3Mzg6ODRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUDY1anIwRUVMcXl5N3NHR0FnZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJuZnlMQ1JQbGs0U1FNKy96NS9KTkpyMUlHMDJDRzFvZzNHdElBV3U4T2dzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjg4SW5ZVitDZEhlMmNSa0R0aExYdW9tNzlJaHpiUmdubnhndWg2bVdaOXY2UTdFRGlKT244OWxXbUw0djczV0FIeTJWY25OeTZIc3JqYmVBbjBxMEFBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImRNTHgzNWt0cENaNXdtU2ZDMDFVREFLVGJmREtRVFYrVllyRVA0QzBvdjNvMUIrSkExR3pvalN4MXkrSFBRMjNWVll6WUVyc1U2UDUvQjl2QkhzaER3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgwNzc4MjU1OTU6ODRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM1NTc5OTczXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "X",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "死_ＮＥＭＥＳＩX",
  packname: process.env.PACK_NAME || "Suhail-Xmd",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "死_ＮＥＭＥＳＩX",


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
