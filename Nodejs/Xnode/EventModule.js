const EventEmiter = require("events");
const emiter = new EventEmiter();

emiter.on("message", (data) => {
  console.log("Hey, this is hte data =>", data);
});
emiter.emit("message", "this is the first message");
