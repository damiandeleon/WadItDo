import React from "react";


function Header() {
    var current = new Date();
    //pull the year and call it "year"
    var YYYY = current.getFullYear();
    //pull the current month and call it "month" (remember that January is represented by 0, so add 1 to the code)
    var MM = current.getMonth() + 1;
    // pull the date and call it "date"
    var DD = current.getDate();
    let day = current.getDay();

    switch(day){
        case 0: day='Sunday'
        break;
        case 1: day='Monday'
        break;
        case 2: day="Tuesday"
        break;
        case 3: day="Wednesday"
        break;
        case 4: day="Thursday"
        break;
        case 5: day="Friday"
        break;
        case 6: day="Saturday"
        break;
        default: day="Today is"
    }

    current = day + ':  ' + MM + '/' + DD + '/' + YYYY;
    
    return (
        <div>
            <header className="jumbotron">
                <h1 className="display-3">Work Day Scheduler</h1>
                <p className="lead">A simple calendar app for scheduling your work day</p>
                <p>{current}</p>
            </header>
        </div>
    )
}

export default Header;