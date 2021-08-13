import React from "react";
import Header from "../Components/Header";
import Table from "../Components/Table";
import PageNav from "../Components/PageNav";
import "./main.css";
function Main() {
    return (
        <div>
        {/* // load the header */}
        <Header/>
        {/* //  load the navigation feature to move to the different days */}
        <PageNav/>
        {/* // load the day's calendar */}
        <Table/>

            <div>I am the main page window</div>
        </div>

    )
}

export default Main;