let handler = async(m, { conn }) => {
conn.sendContact(m.chat, 6285728581059, Burhanuddin Zain, m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(owner|creator)$/i

module.exports = handler
