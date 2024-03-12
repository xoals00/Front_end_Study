let boxEl = document.querySelector('.box')
console.log(boxEl);
boxEl.addEventListener('click', function(){
    console.log('click 발생');
    //active클래스 추가
    boxEl.classList.add('active') // box , active
    // console.log(boxEl.classList);
    //avtive 클래스 제거
    // boxEl.classList.remove('active')
    // console.log(boxEl.classList); // box
 })