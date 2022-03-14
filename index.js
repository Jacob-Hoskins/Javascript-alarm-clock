function Time(){
    let currentTime = new Date
    let h = currentTime.getHours()
    let m = currentTime.getMinutes()
    let s = currentTime.getSeconds()
    let clock = document.getElementById('Time')
    let currentTimeR = h + ':' +m + ':' + s

    clock.innerHTML = currentTimeR

    setTimeout(Time, 1000)
};

function changeView(view){

    //if statement checks to see if view if alarm or stopwatch is clicked
    if(view === 'alarmClock'){

        //get alarmclock class
        const alarm = document.getElementsByClassName('alarmClock')
        //change the display value of alarm, to do this you must access the element through a array
        alarm[0].style.display='block'
        
        //sets the stopwatch display property to none so both views dont show up
        // const stopwatch = document.getElementsByClassName('stopwatch')
        // stopwatch[0].style.display='none'

    }
};

function createAlarmView(){
    const addAlarmView = document.getElementsByClassName('addAlarms')
    addAlarmView[0].style.display = 'block'
}

function changeAlarmHour(value){
    //array for number of hours in a day
    let hour = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]
    //gets the content of Hour Time ID
    let hourChange = document.getElementById('hourTime').textContent
    //gets the hourTime element to update
    let changeHour = document.getElementById('hourTime')
    //takes the hourchange and finds it in the array and adds 1
    let newHour = hour[hourChange] + +value

    //wont let new hour go above 23 hours, the user should go back to zero on their own
    if(newHour <=  23){
        console.log(newHour)
        //updates html
        changeHour.innerHTML = newHour
    }else if(newHour === 0){
        changeHour.innerHTML = newHour
    }
    
}

function changeAlarmMinute(value){
    //array for number of minutes in a day
    let minute = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
    25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
    51, 52, 53, 54, 55, 56, 57, 58, 59]
    //gets the content of Minute Time ID
    let minuteChange = document.getElementById('minuteTime').textContent
    //gets the minuteTime element to update
    let changeMinute =document.getElementById('minuteTime')
    //takes the minutechange and finds it in the array and adds 1
    let newMinute = minute[minuteChange] + +value

    //wont let new minute go above 59, the user should go back to zero on their own
    if(newMinute <=  59){
        
        //updates html
        changeMinute.innerHTML = newMinute
    }else if(newMinute === 0){
        changeMinute.innerHTML = newMinute
    }
}

function addNewAlarm(){
    //get the time for the alarm the user set
    const hour = document.getElementById('hourTime').textContent
    const minute = document.getElementById('minuteTime').textContent
    let newAlarm = hour + ':' + minute
    
    //adds element onto page
    const node = document.createElement('p')
    const nodeDiv = document.createElement('div')
    const textNode = document.createTextNode(newAlarm)
    nodeDiv.appendChild(node)
    node.appendChild(textNode)
    document.getElementById('currentAlarms').appendChild(nodeDiv)
    document.getElementById('currentAlarms').appendChild(node)

    //close create alarm window
    const closeWindow = document.getElementsByClassName('addAlarms')

    closeWindow[0].style.display = 'none'
    
    

    // pTag.innerText = newAlarm
    // document.alarmDiv.appendChild(pTag)


}



Time()