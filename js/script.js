let block = document.querySelectorAll('.block')
let button = document.querySelector('#button')
let step = document.querySelector('#step')
let winX = document.querySelector('#x')
let winO = document.querySelector('#o')
let nosen = document.querySelector('#nosen')

button.addEventListener('click',removeFunc)

function removeFunc(){
    for(i=0;i<block.length;i++){
        block[i].innerHTML = ' '
        block[i].addEventListener('click',XFunc)
    }
}

for(i=0;i<block.length;i++){
    block[i].addEventListener('click',XFunc)
}

let hod = 0

function XFunc(e){
    if(hod % 2 == 0){
        e.target.innerHTML = 'X'
        step.innerHTML = 'Ходит: O'  
        this.removeEventListener('click',XFunc)
    }
   else{
        e.target.innerHTML = 'O'
        step.innerHTML = 'Ходит: X'   
        this.removeEventListener('click',XFunc)
   }
   console.log(hod);
   hod++
   Win(hod)
}

function Win(hod){
    let strX = winX.innerHTML
    let strO = winO.innerHTML
    let strNosen = nosen.innerHTML
    for(i=0;i<block.length;i++){
    if (block[0].innerHTML == 'X' && block[1].innerHTML == 'X' && block[2].innerHTML == 'X' ){
        step.innerHTML = 'Выиграл: X'
        winX.innerHTML = parseInt(strX)+1
        block[i].removeEventListener('click',XFunc)   
    }
    else if (block[3].innerHTML == 'X' && block[4].innerHTML == 'X' && block[5].innerHTML == 'X' ){
        step.innerHTML = 'Выиграл: X'
        winX.innerHTML = parseInt(strX)+1
        block[i].removeEventListener('click',XFunc)   
    }
    else if(block[6].innerHTML == 'X' && block[7].innerHTML == 'X' && block[8].innerHTML == 'X' ){
        step.innerHTML = 'Выиграл: X'
        winX.innerHTML = parseInt(strX)+1
        block[i].removeEventListener('click',XFunc)   
    }
    else if(block[0].innerHTML == 'X' && block[3].innerHTML == 'X' && block[6].innerHTML == 'X' ){
        step.innerHTML = 'Выиграл: X'
        winX.innerHTML = parseInt(strX)+1
        block[i].removeEventListener('click',XFunc)   
    }
    else if(block[1].innerHTML == 'X' && block[4].innerHTML == 'X' && block[7].innerHTML == 'X' ){
        step.innerHTML = 'Выиграл: X'
        winX.innerHTML = parseInt(strX)+1
        block[i].removeEventListener('click',XFunc)   
    }
    else if(block[0].innerHTML == 'X' && block[4].innerHTML == 'X' && block[8].innerHTML == 'X' ){
        step.innerHTML = 'Выиграл: X'
        winX.innerHTML = parseInt(strX)+1
        block[i].removeEventListener('click',XFunc)   
    }
    else if(block[2].innerHTML == 'X' && block[4].innerHTML == 'X' && block[6].innerHTML == 'X' ){
        step.innerHTML = 'Выиграл: X'
        winX.innerHTML = parseInt(strX)+1
        block[i].removeEventListener('click',XFunc)   
    }
    //null
    else if(block[0].innerHTML == 'O' && block[1].innerHTML == 'O' && block[2].innerHTML == 'O' ){
        step.innerHTML = 'Выиграл: O'
        winO.innerHTML = parseInt(strO)+1
        block[i].removeEventListener('click',XFunc)   
    }
    else if(block[3].innerHTML == 'O' && block[4].innerHTML == 'O' && block[5].innerHTML == 'O' ){
        step.innerHTML = 'Выиграл: O'
        winO.innerHTML = parseInt(strO)+1
        block[i].removeEventListener('click',XFunc)   
    }
    else if(block[6].innerHTML == 'O' && block[7].innerHTML == 'O' && block[8].innerHTML == 'O' ){
        step.innerHTML = 'Выиграл: O'
        winO.innerHTML = parseInt(strO)+1
        block[i].removeEventListener('click',XFunc)   
    }
    else if(block[0].innerHTML == 'O' && block[3].innerHTML == 'O' && block[6].innerHTML == 'O' ){
        step.innerHTML = 'Выиграл: O'
        winO.innerHTML = parseInt(strO)+1
        block[i].removeEventListener('click',XFunc)   
    }
    else if(block[1].innerHTML == 'O' && block[4].innerHTML == 'O' && block[7].innerHTML == 'O' ){
        step.innerHTML = 'Выиграл: O'
        winO.innerHTML = parseInt(strO)+1
        block[i].removeEventListener('click',XFunc)   
    }
    else if(block[0].innerHTML == 'O' && block[4].innerHTML == 'O' && block[8].innerHTML == 'O' ){
        step.innerHTML = 'Выиграл: O'
        winO.innerHTML = parseInt(strO)+1
        block[i].removeEventListener('click',XFunc)   
    }
    else if(block[2].innerHTML == 'O' && block[4].innerHTML == 'O' && block[6].innerHTML == 'O' ){
        step.innerHTML = 'Выиграл: O'
        winO.innerHTML = parseInt(strO)+1
        block[i].removeEventListener('click',XFunc)   
    }
    else if(hod === 9){
        step.innerHTML = 'Ничья'
        nosen.innerHTML = parseInt(strNosen)+1
        
    }

}
}



