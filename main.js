let body = document.body
let tekst = document.getElementById("tekst")
let count = 2
let div1 = document.getElementById("div1")
let div2 = document.getElementById("div2")
let div3 = document.getElementById("div3")
tekst.textContent =count


let svitaforInterval = setInterval(()=>{
  count-=1
  tekst.textContent =count

  
},1000)
setTimeout(()=>{
  clearInterval(svitaforInterval)
  div1.style.backgroundColor="red";
},count*1000)

