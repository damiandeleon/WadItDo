import React from "react";


function Header() {
    return (
        <div>
            <header class="jumbotron">
                <h1 class="display-3">Work Day Scheduler</h1>
                <p class="lead">A simple calendar app for scheduling your work day</p>
                <p id="currentDay" class="lead"></p>
            </header>
        </div>
    )
}

export default Header;