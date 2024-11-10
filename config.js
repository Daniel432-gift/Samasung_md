import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'

import dotenv from 'dotenv'
dotenv.config()

const ownervb = process.env.OWNERS || "255697608274; 𝒅𝒂𝒏𝒏𝒚"


const ownerlist = ownervb.split(';');

global.owner = [];
for (let i = 0; i < ownerlist.length; i += 2) {
    const owner = [
        ownerlist[i],            
        ownerlist[i + 1],         
        true                        
    ];
    global.owner.push(owner);
}

//global.pairingNumber = "" //put your bot number here

global.mods = ['255697608274', '255697608274']
global.prems = ['255697608274', '255697608274', '255697608274']
global.allowed = ['255697608274', '255697608274', '255697608274']
global.keysZens = ['c2459db922', '37CC845916', '6fb0eff124']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = [
  '29d4b59a4aa687ca',
  '5LTV57azwaid7dXfz5fzJu',
  'cb15ed422c71a2fb',
  '5bd33b276d41d6b4',
  'HIRO',
  'kurrxd09',
  'ebb6251cc00f9c63',
]
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = ['GataDios']

global.APIs = {
  // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz',
  dzx: 'https://api.dhamzxploit.my.id',
  lol: 'https://api.lolhuman.xyz',
  violetics: 'https://violetics.pw',
  neoxr: 'https://api.neoxr.my.id',
  zenzapis: 'https://zenzapis.xyz',
  akuari: 'https://api.akuari.my.id',
  akuari2: 'https://apimu.my.id',
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net',
}
global.APIKeys = {
  // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://api.lolhuman.xyz': '85faf717d0545d14074659ad',
  'https://api.neoxr.my.id': `${keysneoxr}`,
  'https://violetics.pw': 'beta',
  'https://zenzapis.xyz': `${keysxxx}`,
  'https://api-fgmods.ddns.net': 'fg-dylux',
}

// Sticker WM
global.botname = process.env.BOTNAME
global.premium = 'false'
global.packname = '𝑺𝑨𝑴𝑺𝑼𝑵𝑮_𝑴𝑫'
global.author = '𝑫𝑨𝑵𝑵𝒀_𝑻𝑬𝑪𝑯™'
global.menuvid = 'https://files.catbox.moe/y4meeu.jpg'
global.igfg = '■ Follow on Instagram\nhttps://www.instagram.comMrblender5/\n'
global.dygp = 'https://whatsapp.com/channel/0029VacQFw65Ui2gGv0Kwk1r'
global.fgsc = 'https://github.com/Daniel432-gift/Samasung_md'
global.fgyt = 'https://www.youtube.com/@creepy_technology'
global.fgpyp = 'https://www.youtube.com/@creepy_technology'
global.fglog = 'https://api.shannmoderz.xyz/server/file/XyjKP6IA0VnyFZF.jpg'
global.thumb = fs.readFileSync('./Assets/fire.jpg')

global.wait = '*🕑 _processing..._*\n*▰▰▰▱▱▱▱▱*'
global.rwait = '🕑'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌'
global.xmoji = '🔥'

global.multiplier = 69
global.maxwarn = '3'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
