let btn =document.getElementById("btn")
let textArera = document.getElementById("test")
let textOtvet = document.getElementById("otvet")

btn.addEventListener("click",fun)
const arr =[['affectionate','ласковый'],["ambitious",'амбициозный'],["anxious",'тревожный'],['bossy','властная'],['charming','очаровательный'],['competitive','конкурентноспособный'],['honest','честный'],['imaginative','творческий'],['independent','независимый'],['insecure','ненадёжный'],['mature','взрослый'],['moody,'],
['patient','терпеливый'],['rebellious','упрямый'],['reliable','надежный'],['self-confident','самоуверенный'],['selfish','эгоистичный'],['sensible','здравомыслящий'],['senstive','чувствительный'],['socoable','общительный'],['spoilt','испорченный'],['stubborn','упрямый']]

function fun(){
    let num =Math.floor(Math.random() * arr.length)
    textOtvet.innerText=arr[num[1]];
    textArera.innerText=arr[num[0]];
}
