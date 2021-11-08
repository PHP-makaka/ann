let btn =document.getElementById("btn")
let textArera = document.getElementById("test")
let textOtvet = document.getElementById("otvet")

btn.addEventListener("click",fun)
const arr =[
// ['affectionate','ласковый'],["ambitious",'амбициозный'],["anxious",'тревожный'],['bossy','властная'],['charming','очаровательный'],['competitive','конкурентноспособный'],['honest','честный'],['imaginative','творческий'],['independent','независимый'],['insecure','ненадёжный'],['mature','взрослый'],['moody','угрюмый'],
// ['patient','терпеливый'],['rebellious','упрямый'],['reliable','надежный'],['self-confident','самоуверенный'],['selfish','эгоистичный'],['sensible','здравомыслящий'],['senstive','чувствительный'],['socoable','общительный'],['spoilt','испорченный'],['stubborn','упрямый'],['miniscule','крошечный'],['ginormous','огромноый'],['tiny','крошечный'],
// ['jubilant','ликующий'],['felicitous','счастливый'],['certainly','несомненно '],['fictional','вымышленный'],['prevent','предотвращать'],['particular','конкретный'],['disease','болезнь'],
// ['насильственный','насильственный,жестокий']
    [ 'a fortune','make'],
[' charge','make'],
[' money','make'],
[' an efforts','make'],
[' friends','make'],
[' a decision','make'],
[' fun of sby','make'],
[' breakfast','make'],
[' love','make'],
[' lunch','make'],
[' a mess','make'],
[' dinner','make'],
[' a mistake','make'],
[' a choice','make'],
[' an exception','make'],
[' a sound','make'],
[' an excuse','make'],
[' a phone call','make'],
[' plans','make'],
[' a mistake','make'],
[' progress','make'],
[' a profit','make'],
[' the bed','make'],
[' a suggestion','make'],
[' a wish','make'],
[' an attempt','make'],
[' a point','make'],
[' an offer','make'],
[' business.','do'],
['nothing.','do'],
[' the cooking.','do'],
[' the housework','do'],
['the shopping','do'],
['your best','do'],
['your hair','do'],
['home work','do'],
['damage','do'],
['laundry','do'],
['the dishes','do'],
['harm','do'],
['good','do'],
[' the exam','do'],
['business','do'],
['nothing','do'],
['the cooking','do'],
['the housework','do'],
['the shopping','do'],
['your best','do'],
['your hair','do'],
['home work','do'],
['damage','do'],
['laundry','do'],
['the dishes','do'],
['harm','do'],
['good','do'],
['the exam','do' ]

]

function fun(){
    let num =Math.floor(Math.random() * arr.length)
    textOtvet.innerText=arr[num][1];
    textArera.innerText=arr[num][0];
}
