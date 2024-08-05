let box = document.getElementById("store-items");

(function(){
  let imagesdiv = document.getElementById("stored-item");
 let buttons = document.querySelectorAll(".btn");
 
 buttons.forEach((button)=>{
     button.addEventListener("click",(e)=>{
      let filter = e.target.dataset.filter
         imagesdiv.forEach((item)=>{
          if(filter == 'all'){
              item.style.display = 'block';
            }
            else{
              if(item.classList.contains(filter)){
                item.style.display= 'block'
              }
              else{
                item.style.display = 'none'
              }
          }

         })
     })

 })




})();

const btn  = document.getElementById('btn')
btn.addEventListener('click',()=>{
  axios.get('https://api.unsplash.com/search/photos?page=1&query=cat&client_id=KSu80WK6o42vPUhBsOZJW3aOUC3j95i5TLoTbfHuxLM')
  .then((res)=>{
  res.data.results.forEach(photo=>{
    console.log(photo.urls.small)
    box.innerHTML +=`<div class="stored-item cat">
    <img
      src="${photo.urls.small}" class="stored-img"
      alt="" widht='200px' height="250px"
    />
  </div>`
    })
  }).catch(err=>console.log(err));
})