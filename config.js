const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "242068312525"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://ahil1:787191784abhi@ahil1.kzr1tt3.mongodb.net/?retrywrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'lordbgpo@gmail.com'
global.github = 'https://github.com/Equal-Heaven/XLICON-MD'
global.location = 'Congo'
global.gurl = 'https://instagram.com/b_r_y_a_n.x/' // add your username
global.sudo = process.env.SUDO || '242068312525' 
global.devs = '242068312525';
global.website = 'https://github.com/Equal-Heaven/XLICON-MD' //wa.me/+242068312525
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3c341828d86ee7a89c73f.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "XLICON-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0MrWUNwSndkRUE3RTZoSmxRQm5zNDJOVjBRcmpUSTUvOXJaYUxVUXdVWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN1hiRXhOcSswcElUME9wVDN6eUlIZHptcEFUK2tzMGVEQk4yd3c5M3NuOD0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNSGJqZW9XZHd1c0U1aVJNUHZ0M2hhTE82b0xVOFFXazJXWldwZE5jaW5FPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJIa0VYbVFlTFVQNWUxWWVhUDNHUXZYNW0ydHgweDBRK004RFBwbDcxRkhRPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklPZm9uZ0JKcUxYa2FCd2lkOEJDOGNmQU43dzNyM2VlOUZIRWEzSnRiVTQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZ3bVlSdElBRyswcVFGU25ZdUNScEMrVGlZM0hRR1RwNjRRV3ZsN2I3Uzg9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJoZ2tKTWZZcGdTVGxkK1hCeWtKaU51WDJKeTZta3J1U3EvSHNmM015OUJESG4wZ1N0cExTeTFGajAwVDJQL3dkWk5adTZOSkcxbSt3WS9ERDJlRWpoQT09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjE3NywiYWR2U2VjcmV0S2V5IjoiaFU0Mnkrd0Z4citzUzdIZU1nQ25xTDErR2piN1N4TitxRkR0MjdDcWo2WT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoibEtrUElENmtUcWVpeE9ub1ZIb21BUSIsInBob25lSWQiOiI5MTY1NDk5NS0zZTIyLTQ2YTItYmUyNS0zYjQwZDI2MzQwYzkiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVFpqYis3Z2ZkK0x3UDRWYUVUcWxzREhDSEw4PSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVWDlDQ1A3NjdEQk41cWRETUJEN3BvVzJpNnM9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNMUEVnb1FCRUwzbG1LZ0dHQUk9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IldNNC9qRGhqbG4xN3lOWnhrUGpDSGhWYTJ5VnlGcTBQSVpDKzJIajNBazQ9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ilk2eDMxODNPVjFyLzIwMWtCQVFBVjk3clJUUE4xYnljZjhjUC9Lb1hRRW1ONHloQm1tYXFsM0xzL0QwbGYyN1dYcW43UlA4YTdrWUV3dHlEcWduTEJ3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJyNEU5MzM4MFc1Vjc1dXF6ZmFQRlozYkZNc2U4aEpUUkpTdzdDeVNJc1h4aFhLWThnNkoyRlRGeUd6SVNvZ25Qbmx6WmFHMkVwTzRFVk1PMFZVUUhqUT09In0sIm1lIjp7ImlkIjoiMjQyMDY4MzEyNTI1OjI1QHMud2hhdHNhcHAubmV0In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI0MjA2ODMxMjUyNToyNUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJWak9QNHc0WTVaOWU4aldjWkQ0d2g0Vld0c2xjaGF0RHlHUXZ0aDQ5d0pPIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNjk0OTA1MDIzfQ== ",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  'XLICON BOT',
  packname:  process.env.PACK_NAME || 'MADE BY BRYAN INC',
   
  botname:   process.env.BOT_NAME === undefined ? "Xlicon-Md" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'Bryan dev ' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'private' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
