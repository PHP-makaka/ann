let btn =document.getElementById("btn")
let textArera = document.getElementById("test")
btn.addEventListener("click",fun)
const arr =['Submitted',"For_Review","For_Review",'For_Pre_Interview','For_Interview','Interviewed','For_Training','In_training','For_Placement','Under_Evaluation','Hired','Postponed,\n' +
'Rejected','Fired','Associated','For_Test','In_Testing','Test_Evaluation','Tested']

function fun(){
    let num =Math.floor(Math.random() * arr.length)

    textArera.innerText=arr[num]
}