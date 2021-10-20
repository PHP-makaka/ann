let btn =document.getElementById("btn")
let textArera = document.getElementById("test")
btn.addEventListener("click",fun)
const arr =['affectionate',"ambitious","anxious",'bossy','charming','competitive','honest','imaginative','independent','insecure','mature','moody,\n' +
'patient','rebellious','reliable','self-confident','selfish','sensible','sensible','socoable','spoilt','stubborn']

function fun(){
    let num =Math.floor(Math.random() * arr.length)

    textArera.innerText=arr[num]
}
