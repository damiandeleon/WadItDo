express = require("express");
const ActivityEntry = require("../models/activityEntry.js");

router.post("/api/activity", ({body}, res) => {
    ActivityEntry.create(body)
    .then(dbActivity => {
        res.json(dbActivity);
    });
});