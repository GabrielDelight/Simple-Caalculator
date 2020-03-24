var input = document.getElementById('dataInput')
var outcome = document.getElementById('resInput')
var numbers = document.querySelectorAll('.operators')



window.addEventListener('load', () => {
    setInterval(()=>{
        
        function checkLength(){
            //1. check the length of input;
            var len = input.value.trim().length;
            if(len > 12){
                input.style.fontSize = '20px'
                if(len > 20){
                input.style.fontSize = '15px'
                }
            }else if(len > 12 && len < 20)      {
                input.style.fontSize = '20px'
            }else {
                input.style.fontSize = '30px'
            }           
        }
        checkLength()
        
        //checking if field start with 0
            var firstIndex = input.value                                                            
            for(i = 0; i < firstIndex.length; i++){
                if(firstIndex[0] === '0'){
                    firstIndex[0] = '0'                
                     document.getElementById('dataInput').value = ''                                       
                }
            }

            
            
    }, 0)
    

})

var arrNum = Array.prototype.slice.call(numbers)
arrNum.forEach(function(cur){
    cur.addEventListener('click', () => {        
        var content = cur.innerHTML                 
        input.value += content            
    })
})







//Clearing the item
document.getElementById('clear').addEventListener('click', () =>{
    let x = input.value.substr(0, input.value.length -1);
    input.value = x
})



//calculating 
document.getElementById('result').addEventListener('click', () => {    
    var calcValue = input.value.trim()
    var x = eval(calcValue)
    var y = x.toLocaleString()
    outcome.value = y

    //checking if field ends with operators(+-/*)


})


document.getElementById('close').addEventListener('click', () => {    
    document.getElementById('dataInput').value = " "
})



document.getElementById('owner').addEventListener('click', () => {    
    alert('Hello There Gabriel craeted this app')
})
