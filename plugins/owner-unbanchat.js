//import db from '../lib/database.js'

let handler = async (m, { conn, isOwner, isAdmin, isROwner }) => {
  if (!(isAdmin || isOwner)) return dfail('admin', m, conn)
  global.db.data.chats[m.chat].isBanned = false
  m.reply('✅ 𝑺𝑨𝑴𝑺𝑼𝑵𝑮_𝑴𝑫 is active in this group')
}
handler.help = ['unbanchat']
handler.tags = ['owner']
handler.command = ['chaton', 'unbanchat']

export default handler
