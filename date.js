function startTime() {
    const clock = new Date();

    const option1 = { hour: '2-digit', minute: '2-digit' };
    const option2 = { second: '2-digit' }; //Does not display 2 digits
    
    time = clock.toLocaleTimeString([], option1);
    second = clock.toLocaleTimeString([], option2); 
    
    /* Might be usefull 
    hours = clock.getHours(); 
    minutes = clock.getMinutes()
    second = clock.getSeconds();*/

    second = checkTime(second)
    
    document.querySelector('.time').textContent = time;
    document.querySelector('.second').textContent = second;

    function checkTime(i) {
        if (i < 10) {i = "0" + i};
        return i;
    }
}

function startDate() {
    const today = new Date();

    const option3 = { weekday: 'long', day: 'numeric', month: 'long' };
    
    date = today.toLocaleDateString([], option3);
    
    document.querySelector('.date').textContent = date;

}

function greeting() {
    const greet = new Date();
    const hours = greet.getHours();
    
    if ( hours < 12){
        document.querySelector('.greeting').textContent = 'Good Morning';
     } else if (hours < 23 ){
        document.querySelector('.greeting').textContent = 'Good Afternoon';
     }  else {
        document.querySelector('.greeting').textContent = 'Good Evening';
     }
}

function startAll() {
    startTime();
    startDate();
    greeting();
}

window.onload = startAll();

setInterval(startAll, 1000);
