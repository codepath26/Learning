let body = document.getElementsByTagName("body")[0];




document.getElementById("btn").addEventListener('click',function changecolor() {
  console.log("we in")
  let hexcode = "";
  let hex_num = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];
  for (let i = 0; i < 6; i++) {
    let random_hexanum = Math.floor(Math.random() * hex_num.length);
    console.log(random_hexanum);
    hexcode += hex_num[random_hexanum];
  }
  console.log(hexcode)
  
 
   document.querySelector("#code").innerHTML = "#"+hexcode 
   document.getElementsByTagName('body')[0].style.backgroundColor = "#"+ hexcode

}
)
