// const EventEmiter = require('events');
// const customEvent = new EventEmiter();
// const onCustomEvent = (message)=>{
//  console.log(1)
//   console.log(`this message from the event : ${message}`)
// }
// customEvent.on('customEvent' , onCustomEvent);
// customEvent.emit('customEvent' , "hello from the customEvent");
// customEvent.removeListener('customEvent' , onCustomEvent)
// customEvent.emit('customEvent' , "hello from the customEvent");



const EventEmiter = require('node:events');
const emiter = new EventEmiter();


emiter.on('order-pizza' , (size , topping)=>{
    console.log(`order is book for the pizza with size of ${size} and ${topping}`)
})
emiter.on('order-pizza' , (size)=>{
    console.log(`Servinh the  ${size} pizza`)
})


emiter.emit('order-pizza',"large" , "mashwroms")