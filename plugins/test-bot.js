let handler = async (m, { conn }) => {
let caption = `*Aku tau kmu cuman coba jaringan 🗿*`

conn.sendButton( m.chat, caption, `©️ CEMARA`, `Semangat`, `.👍`, m)

       }
       
handler.customPrefix = /^(tes)/i
handler.command = new RegExp
module.exports = handler
