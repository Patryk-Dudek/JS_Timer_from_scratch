// const CLOCK_CONTAINER = document.querySelector(".clock");
const TIMER_CONTAINER = document.querySelector(".timer");
const TIMER_CONTAINER_2 = document.querySelector(".timer_2");
const START_BUTTON = document.querySelector(".start_button");

// console.log(date);

// const CLOCK = () => {
//     let today = new Date();
//     let date = 
//         today.getHours() + 
//         ":" + 
//         today.getMinutes() + 
//         ":" + 
//         today.getSeconds();
//     CLOCK_CONTAINER.innerText = date;
//     setTimeout(CLOCK, 1000)
// }
// CLOCK();


let time = [
    0,
    0,
    0,
    0
];

// TIMER CONTAINER BEFORE SRART - 00:00
TIMER_CONTAINER.innerText =
    time[0] + "" + 
    time[1] + "" + 
    ":" + 
    time[2] + "" + 
    time[3];

// TIMER
const TIMER = (start) => {
    let time = [
        0,
        0,
        0,
        0
    ]
    if (start == 1) {
        return time;
    } else {
        setInterval(
            () => {
                if (time[3] < 9) {
                    time[3] = time[3] + 1;
                } else {
                    if (time[2] < 5) {
                        time[2] = time[2] + 1;
                        time[3] = 0;
                    } else {
                        if (time[1] < 9) {
                            time[1] = time[1] + 1;
                            time[2] = 0;
                        } else {
                            time[0] = time[0] + 1;
                            time[1] = 0;
                        }
                    }
                }
        
                TIMER_CONTAINER.innerText =
                    time[0] + "" + 
                    time[1] + "" + 
                    ":" + 
                    time[2] + "" + 
                    time[3];
                    console.log(time + " inside function")
                return time;
            }, 1000
        )
    }
    return time;
}

// TEST TIMER PRINTER
setInterval(
    () => {
        console.log(time + " oustide function")
    }, 1000
)


// START STOP BUTTON
let stoper_is_working = 0;

START_BUTTON.addEventListener("click", () => {
    if (stoper_is_working == 0) {
        TIMER(0);
        stoper_is_working = 1;
    } else if (stoper_is_working == 1) {
        TIMER(1);
        stoper_is_working = 0;
    }
});