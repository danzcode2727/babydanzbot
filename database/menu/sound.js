const sound = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `🔰 -----[ *SOUND MENU* ]----- 🔰
Hallo, ${pushname} 👋
Semoga harimu Menyenangkan User, ${sender.split("@")[0]}
┏━━━━━━━━━━━━━━━━━━━━┓
┃╭───────────────────
┃│➸ NAMA : ${pushname}
┃│➸ LEVEL : ${getLevelingLevel(sender)}
┃│➸ USER ${botName} : ${_registered.length}
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
Berikut adalah fitur yang ada pada bot ini!✨
┏━━━━━━━━━━━━━━━━━━━━┓
┃╭───────────────────
┃│➸ *${prefix}iri*
┃│➸ *${prefix}pale*
┃│➸ *${prefix}abangjago*
┃│➸ *${prefix}kangcopet*
┃│➸ *${prefix}tariksis*
┃│➸ *${prefix}jirolupat*
┃│➸ *${prefix}bomaye*
┃│➸ *${prefix}wib*
┃│➸ *${prefix}shopee*
┃│➸ *${prefix}pagi*
┃│➸ *${prefix}rapbitch*
┃│➸ *${prefix}pota*
┃│➸ *${prefix}potaimut*
┃│➸ *${prefix}haiphuthon*
┃│➸ *${prefix}yamete*
┃│➸ *${prefix}avocados*
┃│➸ *${prefix}despacifyp*
┃│➸ *${prefix}sapeteam*
┃│➸ *${prefix}sound*
┃│➸ *${prefix}sound1*
┃│➸ *${prefix}sound2*
┃│➸ *${prefix}sound3*
┃│➸ *${prefix}sound4*
┃│➸ *${prefix}sound5*
┃│➸ *${prefix}sound6*
┃│➸ *${prefix}sound7*
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
🔰 -----[ *POWERED BY ${ownerName}* ]----- 🔰`
}
exports.sound = sound
