let handler  = async (m, { conn, usedPrefix }) => { 
conn.reply(m.chat, `
╭═══════════════════════
║╭──❉ 〔 INFO OWNER 〕 ❉────── 
║│➸ ```NAMA``` : Burhanuddin Zain
║│➸ ```UMUR``` : 14thn
║│➸ ```ASAL``` : Purbalingga
║│➸ ```ISTAGRAM``` : http://instagram.com/dnzainn
║│➸ ```WHATSAPP``` : http://wa.me/6285728581059
╰────────❉
`.trim(), m)
}

handler.help = ['infozain']
handler.tags = ['main', 'utama']
handler.command = /^(infozain|zain)$/i

handler.exp = 150

module.exports = handler
