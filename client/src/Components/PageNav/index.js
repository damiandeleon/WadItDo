import React from 'react';

function PageNav () {
    return <div class="row">
        <div class="col-1"></div>
        <button type="button" class="col-1 btn btn-info btn-outline-dark" id="previousBtn"><span>&#10232;</span> Prev</button>
        <div class="col-8"> </div>
        <button type="button" class="col-1 btn btn-info btn-outline-dark" id="nextBtn">Next <span>&#10233;</span></button>
        <div class="col-1"></div>
    </div>
};

export default PageNav;