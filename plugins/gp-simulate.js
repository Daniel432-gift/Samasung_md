let handler = async (m, { conn, usedPrefix, command, args: [event], text }) => {
  let chat = global.db.data.chats[m.chat]
  if (!chat.welcome)
    throw `✳️ To use this command you must activate the Welcomes with *${usedPrefix}on* welcome`
  let te = `
  ┌─⊷ *𝑺𝑨𝑴𝑺𝑼𝑵𝑮 EVENTS*
  ■ welcome
  ■ bye
  ■ promote
  ■ demote
  ■𝑺𝑨𝑴𝑺𝑼𝑵𝑮_𝑴𝑫 created by 𝑫𝑨𝑵𝑵𝒀_𝑻𝑬𝑪𝑯™■
  └────────────────────────────
  
  📌 Example :
  
  *${usedPrefix + command}* welcome @user`

  if (!event) return await m.reply(te)

  let mentions = text.replace(event, '').trimStart()
  let who = mentions ? conn.parseMention(mentions) : []
  let part = who.length ? who : [m.sender]
  let act = false
  m.reply(`✅ simulating ${event}...`)
  switch (event.toLowerCase()) {
    case 'add':
    case 'bienvenida':
    case 'invite':
    case 'welcome':
      act = 'add'
      break
    case 'bye':
    case 'despedida':
    case 'leave':
    case 'remove':
      act = 'remove'
      break

    case 'promote':
    case 'promover':
      act = 'promote'
      break

    case 'demote':
    case 'degradar':
      act = 'demote'
      break

    default:
      throw te
  }
  if (act)
    return conn.participantsUpdate({
      id: m.chat,
      participants: part,
      action: act,
    })
}
handler.help = ['simulate <event> @user']
handler.tags = ['group']
handler.command = ['simular', 'simulate']
handler.admin = true
handler.group = true

export default handler
