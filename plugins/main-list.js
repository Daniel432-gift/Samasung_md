let handler = async (m, { conn, usedPrefix, command }) => {
  let who = m.quoted
    ? m.quoted.sender
    : m.mentionedJid && m.mentionedJid[0]
      ? m.mentionedJid[0]
      : m.fromMe
        ? conn.user.jid
        : m.sender
  if (!(who in global.db.data.users)) throw `✳️ The user is not found in my database`

  let pp = './Assets/firemd.jpg'
  let more = String.fromCharCode(8206)
  let readMore = more.repeat(850)

  let lkr
  switch (command) {
    case 'list':
      lkr =
        '*Get ready for the ride, here are your ticket options:*\n\n' +
        '🤖 *' +
        usedPrefix +
        "botmenu* - The Bot's secret control panel. What's your command, oh great one?\n\n" +
        '👑 *' +
        usedPrefix +
        "ownermenu* - The sacred scroll only for the chosen one. Yep, that's you, Boss!\n\n" +
        '🧑‍🤝‍🧑 *' +
        usedPrefix +
        'groupmenu* - Group shenanigans central! Unite, chat, conquer!\n\n' +
        '📥 *' +
        usedPrefix +
        "dlmenu* - 'DL' stands for 'Delicious Loot'. Come grab your goodies!\n\n" +
        '🎉 *' +
        usedPrefix +
        "funmenu* - The bot's party hat. Games, jokes and instant ROFLs. Let's get this party started!\n\n" +
        '💰 *' +
        usedPrefix +
        'economymenu* - Bling bling! Your personal vault of virtual economy. Spend or save? Choose wisely!\n\n' +
        '🎮 *' +
        usedPrefix +
        'gamemenu* - Enter the gaming arena. May the odds be ever in your favor!\n\n' +
        '🎨 *' +
        usedPrefix +
        'stickermenu* - A rainbow of stickers for your inner artist. Make your chats pop!\n\n' +
        '🧰 *' +
        usedPrefix +
        "toolmenu* - Your handy-dandy toolkit. What's your pick, genius?\n\n" +
        '🎩 *' +
        usedPrefix +
        'logomenu* - Create a logo that screams YOU. Or whispers. You choose the volume.\n\n' +
        '🌙 *' +
        usedPrefix +
        'nsfwmenu* - The After Dark menu. But remember, sharing adult secrets must be consent-based.'
      break

    case 'botmenu':
      lkr = `❀° ┄─────•••───╮
          𝑺𝑨𝑴𝑺𝑼𝑵𝑮_𝑴𝑫 𝑴𝑬𝑵𝑼  
   ╰─────────•••──┄ °❀     
   ┏━━━ʕ•♤•ʔ━━━┓
   ⎪¤📱 _${usedPrefix}gita_
   ⎪¤📱 _${usedPrefix}ping_
   ⎪¤📱_${usedPrefix}uptime_
   ⎪¤📱 _${usedPrefix}bot_
   ⎪¤📱 _${usedPrefix}owner_
   ⎪¤📱 _${usedPrefix}script_
   ⎪¤📱 _${usedPrefix}runtime_
   ⎪¤📱 _${usedPrefix}infobot_
   ⎪¤📱 _${usedPrefix}donate_
   ⎪¤📱 _${usedPrefix}groups_
   ⎪¤📱 _${usedPrefix}blocklist_
   ⎪¤📱_${usedPrefix}listprem_
   ⎪*■𝒔𝒂𝒎𝒔𝒖𝒏𝒈_𝒎𝒅 𝒄𝒓𝒆𝒂𝒕𝒆𝒅 𝒃𝒚 𝒅𝒂𝒏𝒏𝒚■* 
   ┗━━━ʕ•♤•ʔ━━━┛` // Your bot menu message here
      break
    case 'ownermenu':
      lkr = `❀° ┄────────•••───╮
         𝑺𝑨𝑴𝑺𝑼𝑵𝑮 𝑶𝑾𝑵𝑬𝑹 𝑴𝑬𝑵𝑼 
     ╰───────────•••──┄ °❀     
     ┏━━━ʕ•♤•ʔ━━━┓
     ⎪¤📱 _${usedPrefix}banchat_
     ⎪¤📱 _${usedPrefix}unbanchat_
     ⎪¤📱 _${usedPrefix}banuser_
     ⎪¤📱 _${usedPrefix}unbanuser_
     ⎪¤📱 _${usedPrefix}Broadcast_
     ⎪¤📱 _${usedPrefix}Broadcastgc_
     ⎪¤📱 _${usedPrefix}join_
     ⎪¤📱 _${usedPrefix}setppbot_
     ⎪¤📱 _${usedPrefix}setprefix_
     ⎪¤📱 _${usedPrefix}resetprefix_
     ⎪¤📱 _${usedPrefix}getfile_
     ⎪¤📱 _${usedPrefix}getplugin_
     |*■𝒔𝒂𝒎𝒔𝒖𝒏𝒈_𝒎𝒅 𝒄𝒓𝒆𝒂𝒕𝒆𝒅 𝒃𝒚 𝒅𝒂𝒏𝒏𝒚■*
     ┗━━━ʕ•♤•ʔ━━━┛` //
      break
    case 'groupmenu':
      lkr = `❀° ┄──────•••───╮
        𝑺𝑨𝑴𝑺𝑼𝑵𝑮 𝑮𝑹𝑶𝑼𝑷 𝑴𝑬𝑵𝑼 
    ╰───────────•••──┄ °❀     
    ┏━━━ʕ•♤•ʔ━━━┓
    ⎪¤📱_${usedPrefix}kick *<@tag>*_
    ⎪¤📱_${usedPrefix}promote *<@tag>*_
    ⎪¤📱 _${usedPrefix}demote *<@tag>*_
    ⎪¤📱 _${usedPrefix}infogroup_
    ⎪¤📱 _${usedPrefix}resetlink_
    ⎪¤📱 _${usedPrefix}link_
    ⎪¤📱 _${usedPrefix}setpp *<image>*_
    ⎪¤📱 _${usedPrefix}setname *<text>*_
    ⎪¤📱 _${usedPrefix}setdesc *<text>*_
    ⎪¤📱 _${usedPrefix}setwelcome *<text>*_
    ⎪¤📱 _${usedPrefix}setbye *<text>*_
    ⎪¤📱 _${usedPrefix}hidetag *<text/image/audio/vid>*_
    ⎪¤📱 _${usedPrefix}warn *<@tag>*_
    ⎪¤📱 _${usedPrefix}unwarn *<@tag>*_
    ⎪¤📱 _${usedPrefix}group *<open/close>*_
    ⎪¤📱 _${usedPrefix}enable
    |*■𝒔𝒂𝒎𝒔𝒖𝒏𝒈_𝒎𝒅 𝒄𝒓𝒆𝒂𝒕𝒆𝒅 𝒃𝒚 𝒅𝒂𝒏𝒏𝒚■*
    ┗━━━ʕ•♤•ʔ━━━┛` //
      break
    case 'downloadermenu':
    case 'dlmenu':
      lkr = `❀°───────┄──•••───╮
       𝑺𝑨𝑴𝑺𝑼𝑵𝑮 𝑫𝑶𝑼𝑵𝑳𝑶𝑨𝑫 𝑴𝑬𝑵𝑼
   ╰───────────────•••──┄ °❀     
   ┏━━━ʕ•♤•ʔ━━━┓
   ⎪¤📱_${usedPrefix}play_
   ⎪¤📱_${usedPrefix}song_
   ⎪¤📱 _${usedPrefix}yta <link>_
   ⎪¤📱 _${usedPrefix}ytv <link>_
   ⎪¤📱 _${usedPrefix}ytmp3 <link>_
   ⎪¤📱_${usedPrefix}ytmp4 <link>_
   ⎪¤📱 _${usedPrefix}gimage_
   ⎪¤📱 _${usedPrefix}pinterest_
   ⎪¤📱 _${usedPrefix}mediafire <link>_
   ⎪¤📱 _${usedPrefix}gdrive <link>_
   ⎪¤📱 _${usedPrefix}gitclone <link>_
   ⎪¤📱 _${usedPrefix}twitter <link>_
   ⎪¤📱 _${usedPrefix}tiktok <link>_
   ⎪¤📱 _${usedPrefix}tiktokstalk_
   ⎪¤📱 _${usedPrefix}instagram <link>_
   ⎪¤📱 _${usedPrefix}spotify_
   ⎪¤📱 _${usedPrefix}facebook <link>_
   |*■𝒔𝒂𝒎𝒔𝒖𝒏𝒈_𝒎𝒅 𝒄𝒓𝒆𝒂𝒕𝒆𝒅 𝒃𝒚 𝒅𝒂𝒏𝒏𝒚■*
   ┗━━━ʕ•♤•ʔ━━━┛` //
      break
    case 'economymenu':
      lkr = `❀° ┄──•••───╮
     𝑺𝑨𝑴𝑺𝑼𝑵𝑮 𝑬𝑪𝑶𝑵𝑶𝑴𝒀
   ╰───•••──┄ °❀     
   ┏━━━ʕ•♤•ʔ━━━┓
   ⎪¤📱 _${usedPrefix}claim/daily_
   ⎪¤📱 _${usedPrefix}weekly_
   ⎪¤📱 _${usedPrefix}monthly_
   ⎪¤📱 _${usedPrefix}leaderboard_
   ⎪¤📱 _${usedPrefix}bet_
   ⎪¤📱 _${usedPrefix}heal_
   ⎪¤📱 _${usedPrefix}craft_
   ⎪¤📱 _${usedPrefix}balance_
   ⎪¤📱 _${usedPrefix}shop_
   ⎪¤📱 _${usedPrefix}sell_
   ⎪¤📱 _${usedPrefix}adventure_
   ⎪¤📱 _${usedPrefix}opencrate_
   ⎪¤📱 _${usedPrefix}mine_
   ⎪¤📱 _${usedPrefix}work_
   ⎪¤📱 _${usedPrefix}transfer_
   ⎪¤📱 _${usedPrefix}todiamond_
   ⎪¤📱 _${usedPrefix}tomoney_
   |*■𝒔𝒂𝒎𝒔𝒖𝒏𝒈_𝒎𝒅 𝒄𝒓𝒆𝒂𝒕𝒆𝒅 𝒃𝒚 𝒅𝒂𝒏𝒏𝒚■*
   ┗━━━ʕ•♤•ʔ━━━┛` //
      break
    case 'funmenu':
      lkr = `❀° ┄──•••────────╮
       𝑺𝑨𝑴𝑺𝑼𝑵𝑮_𝑴𝑫 𝑭𝑼𝑵 𝑴𝑬𝑵𝑼
    ╰───────────•••──┄ °❀     
    ┏━━━ʕ•♤•ʔ━━━┓
    ⎪¤📱 _${usedPrefix}character_
    ⎪¤📱 _${usedPrefix}truth_
    ⎪¤📱 _${usedPrefix}dare_
    ⎪¤📱 _${usedPrefix}flirt_
    ⎪¤📱 _${usedPrefix}gay_
    ⎪¤📱 _${usedPrefix}shayeri_
    ⎪¤📱 _${usedPrefix}ship_
    ⎪¤📱 _${usedPrefix}waste_
    ⎪¤📱 _${usedPrefix}simpcard_
    ⎪¤📱 _${usedPrefix}hornycard_
    ⎪¤📱 _${usedPrefix}ytcomment_
    ⎪¤📱 _${usedPrefix}stupid_
    ⎪¤📱 _${usedPrefix}lolicon_
    |*■𝒔𝒂𝒎𝒔𝒖𝒏𝒈_𝒎𝒅 𝒄𝒓𝒆𝒂𝒕𝒆𝒅 𝒃𝒚 𝒅𝒂𝒏𝒏𝒚■*
    ┗━━━ʕ•♤•ʔ━━━┛` //
      break
    case 'animemenu':
      lkr = `❀° ┄──•••──────╮
      𝑺𝑨𝑴𝑺𝑼𝑵𝑮 𝑨𝑵𝑰𝑴𝑬 𝑴𝑬𝑵𝑼
    ╰─────────•••──┄ °❀     
    ┏━━━ʕ•♤•ʔ━━━┓
    ⎪¤📱 _${usedPrefix}waifu_
    ⎪¤📱 _${usedPrefix}neko_
    ⎪¤📱 _${usedPrefix}loli_
    ⎪¤📱 _${usedPrefix}couplepp_
    ⎪¤📱 _${usedPrefix}toanime_
    ⎪¤📱 _${usedPrefix}naruto_
    ⎪¤📱 _${usedPrefix}itachi_
    ⎪¤📱 _${usedPrefix}akira_
    ⎪¤📱 _${usedPrefix}asuna_
    ⎪¤📱 _${usedPrefix}akiyama_
    ⎪¤📱 _${usedPrefix}boruto_
    ⎪¤📱 _${usedPrefix}hornycard_
    ⎪¤📱 _${usedPrefix}ayuzawa_
    ⎪¤📱 _${usedPrefix}anna_
    ⎪¤📱 _${usedPrefix}chiho_
    ⎪¤📱 _${usedPrefix}chitoge_
    ⎪¤📱 _${usedPrefix}deidara_
    ⎪¤📱 _${usedPrefix}erza_
    ⎪¤📱 _${usedPrefix}elaina_
    ⎪¤📱 _${usedPrefix}emilia_
    ⎪¤📱 _${usedPrefix}hestia_
    ⎪¤📱 _${usedPrefix}hinata_
    ⎪¤📱 _${usedPrefix}inori_
    ⎪¤📱 _${usedPrefix}isuzu_
    ⎪¤📱 _${usedPrefix}kagura_
    ⎪¤📱 _${usedPrefix}kaori_
    ⎪¤📱 _${usedPrefix}keneki_
    ⎪¤📱 _${usedPrefix}kurumi_
    ⎪¤📱 _${usedPrefix}madara_
    ⎪¤📱 _${usedPrefix}mikasa_
    ⎪¤📱 _${usedPrefix}miku_
    ⎪¤📱 _${usedPrefix}minato_
    ⎪¤📱 _${usedPrefix}nezuko_
    ⎪¤📱 _${usedPrefix}sagiri_
    ⎪¤📱 _${usedPrefix}sasuke_
    ⎪¤📱 _${usedPrefix}sakura_
    ⎪¤📱 _${usedPrefix}kotori_
    |*■𝒔𝒂𝒎𝒔𝒖𝒏𝒈_𝒎𝒅 𝒄𝒓𝒆𝒂𝒕𝒆𝒅 𝒃𝒚 𝒅𝒂𝒏𝒏𝒚■*
    ┗━━━ʕ•♤•ʔ━━━┛
    `
      break
    case 'gamemenu':
      lkr = `❀° ┄──•••───────╮
       𝑺𝑨𝑴𝑺𝑼𝑵𝑮 𝑮𝑨𝑴𝑬 𝑴𝑬𝑵𝑼 
    ╰─────────•••──┄ °❀     
    ┏━━━ʕ•♤•ʔ━━━┓
    ⎪¤📱 _${usedPrefix}tictactoe_
    ⎪¤📱 _${usedPrefix}delttt_
    ⎪¤📱 _${usedPrefix}math_
    ⎪¤📱 _${usedPrefix}math answer_
    ⎪¤📱 _${usedPrefix}ppt_
    ⎪¤📱 _${usedPrefix}slot_
    ⎪¤📱 _${usedPrefix}casino_
    ⎪¤📱 _${usedPrefix}yourmom_
    ⎪¤📱 _${usedPrefix}teri mummy_
    |*■𝒔𝒂𝒎𝒔𝒖𝒏𝒈_𝒎𝒅 𝒄𝒓𝒆𝒂𝒕𝒆𝒅 𝒃𝒚 𝒅𝒂𝒏𝒏𝒚■*
    ┗━━━ʕ•♤•ʔ━━━┛` //
      break
    case 'stickermenu':
      lkr = `❀° ┄──•••─────────╮
       𝑺𝑨𝑴𝑺𝑼𝑵𝑮 𝑺𝑻𝑰𝑪𝑲𝑬𝑹 𝑴𝑬𝑵𝑼
     ╰───────────•••──┄ °❀     
     ┏━━━ʕ•♤•ʔ━━━┓
     ⎪¤📱 _${usedPrefix}sticker_
     ⎪¤📱 _${usedPrefix}take_
     ⎪¤📱 _${usedPrefix}scircle_
     ⎪¤📱 _${usedPrefix}smaker_
     ⎪¤📱 _${usedPrefix}sremovebg_
     ⎪¤📱 _${usedPrefix}getsticker_
     ⎪¤📱 _${usedPrefix}emojimix_
     ⎪¤📱 _${usedPrefix}toimg_
     ⎪¤📱 _${usedPrefix}tovid_
     ⎪¤📱 _${usedPrefix}ttp_
     ⎪¤📱 _${usedPrefix}telesticker_
     ⎪¤📱 _${usedPrefix}attp_
     ⎪¤📱 _${usedPrefix}attp2_
     ⎪¤📱 _${usedPrefix}attp3_
     |*■𝒔𝒂𝒎𝒔𝒖𝒏𝒈_𝒎𝒅 𝒄𝒓𝒆𝒂𝒕𝒆𝒅 𝒃𝒚 𝒅𝒂𝒏𝒏𝒚■*
     ┗━━━ʕ•♤•ʔ━━━┛`
      break
    case 'toolmenu':
      lkr = `❀° ┄──────•••───╮
       𝑺𝑨𝑴𝑺𝑼𝑵𝑮 𝑻𝑶𝑶𝑳𝑺 𝑴𝑬𝑵𝑼
     ╰─────────•••──┄ °❀     
     ┏━━━ʕ•♤•ʔ━━━┓
     ⎪¤📱 _${usedPrefix}autosticker_
     ⎪¤📱 _${usedPrefix}pdf_
     ⎪¤📱 _${usedPrefix}whatmusic_
     ⎪¤📱 _${usedPrefix}calc_
     ⎪¤📱 _${usedPrefix}google_
     ⎪¤📱 _${usedPrefix}lyrics_
     ⎪¤📱 _${usedPrefix}readmore_
     ⎪¤📱 _${usedPrefix}ssweb_
     ⎪¤📱 _${usedPrefix}tts_
     ⎪¤📱 _${usedPrefix}translate_
     ⎪¤📱 _${usedPrefix}tourl_
     ⎪¤📱 _${usedPrefix}wikipedia_
     ⎪¤📱 _${usedPrefix}nowa_
     ⎪¤📱 _${usedPrefix}qrmaker_
     ⎪¤📱 _${usedPrefix}readqr_
     ⎪¤📱 _${usedPrefix}fancy_
     ⎪¤📱 _${usedPrefix}weather_
     ⎪¤📱 _${usedPrefix}siri_
     ⎪¤📱 _${usedPrefix}alexa_
     ⎪¤📱 _${usedPrefix}dalle_
     ⎪¤📱 _${usedPrefix}tocartoon_
     ⎪¤📱 _${usedPrefix}quote_
     ⎪¤📱 _${usedPrefix}technews_
     ⎪¤📱 _${usedPrefix}define_
     ⎪¤📱 _${usedPrefix}pokedex_
     ⎪¤📱 _${usedPrefix}removebg_
     ⎪¤📱 _${usedPrefix}apk_
     ⎪¤📱 _${usedPrefix}tinyurl/shorturl_
     ⎪¤📱 _${usedPrefix}readvo_
     ⎪¤📱 _${usedPrefix}true_
     |*■𝒔𝒂𝒎𝒔𝒖𝒏𝒈_𝒎𝒅 𝒄𝒓𝒆𝒂𝒕𝒆𝒅 𝒃𝒚 𝒅𝒂𝒏𝒏𝒚■*
     ┗━━━ʕ•♤•ʔ━━━┛` //
      break
    case 'nsfwmenu':
      lkr = `use command ${usedPrefix}nsfw` //
      break
    case 'logomenu':
      lkr = `use ${usedPrefix}logo to see all options \ngfx cmd upto 12` //
      break
    default:
      lkr = `Invalid command. Type ${usedPrefix}list to see available options.`
  }

  conn.sendFile(m.chat, pp, 'perfil.jpg', lkr, m, false, { mentions: [who] })

  let done = '👍'
  m.react(done)
}

handler.help = [
  'list',
  'botmenu',
  'ownermenu',
  'groupmenu',
  'dlmenu',
  'downloadermenu',
  'economymenu',
  'funmenu',
  'gamemenu',
  'stickermenu',
  'nsfwmenu',
  'logomenu',
  'toolmenu',
]
handler.tags = ['main']
handler.command = [
  'list',
  'botmenu',
  'ownermenu',
  'groupmenu',
  'dlmenu',
  'downloadermenu',
  'economymenu',
  'funmenu',
  'gamemenu',
  'stickermenu',
  'nsfwmenu',
  'logomenu',
  'toolmenu',
]

export default handler
