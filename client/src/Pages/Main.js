import React from "react";
import Header from "../Components/Header";

function Main() {
    return (
        <div>
        {/* // load the header */}
        <Header/>
        {/* //  load the navigation feature to move to the different days */}
            <div>the nav to the different days go here</div>
        {/* // load the day's calendar */}
            <div>I am the main page window</div>
        </div>

    )
}

export default Main;