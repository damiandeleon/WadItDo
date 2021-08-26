import React from 'react';

function PageNav () {

const journalDay = new Date;
const month = journalDay.getMonth() + 1;
const day = journalDay.getDate();
const year = journalDay.getFullYear();
const journalEntryDate = month + "/" + day + "/" + year;

    return <div class="row">
        <div class="col-1"></div>
        <button type="button" class="col-1 btn btn-info btn-outline-dark" id="previousBtn"><span>&#10232;</span> Prev</button>
        <h1 class="col-8">{journalEntryDate} </h1>
        <button type="button" class="col-1 btn btn-info btn-outline-dark" id="nextBtn">Next <span>&#10233;</span></button>
        <div class="col-1"></div>
    </div>
};

export default PageNav;