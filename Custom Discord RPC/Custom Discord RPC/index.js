var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('online', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "type your text here", // Description On your custom status
assets : {
large_image : "image file name", // This is your logo image on your custom status, open Rich Presence and choose menu; Art Assets and upload your file. copy your file name to this 
large_text : "type you text here" // This is your status on image status
},
buttons : [{label : "name button 1" , url : "link in button 1"},{label : "name button 2",url : "link in button 2"}]
}
})
})
client.login({ clientId : "type your ClientId here" }).catch(console.error);