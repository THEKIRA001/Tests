// console.log('Before');

// alert('blah blah blah');

// console.log('after');

const btn = document.getElementById('button1');
const text = document.getElementById('textt');
const text2 = document.getElementById('text2');

btn.addEventListener('click',() => {
    text.textContent = 'Button is Pressed';

    setTimeout(()=>{
        text.textContent = '';
    },1500);
})

// for(var i = 0; i<5; i++){
//     setTimeout(()=> {
//         console.log(i);
//     },1000);
// }

// for(let i = 0; i<5; i++){
//     setTimeout(()=> {
//         console.log(i);
//     },1000);
// }

let seconds = 0;
text.textContent = seconds;
text2.textContent = seconds;

const timer = setInterval(()=>{
    seconds++;
    text.textContent = seconds;
    console.log(timer);
    if(seconds>=5){
        clearInterval(timer);
    }
},1000);

// const timer2 = setInterval(()=>{
//     seconds++;
//     text2.textContent = seconds;
//     console.log(timer2);
//     if(seconds>=5){
//         clearInterval(timer2);
//     }
// },1000);