const boldword = document.querySelectorAll("strong")
function highlight() {
    //Write your code here
boldword.forEach((word)=>{
            word.style.color = "green"
        })

}


function return_normal() {
    //Write your code here
boldword.forEach((word)=>{
            word.style.color = "black"
        })
    
}
