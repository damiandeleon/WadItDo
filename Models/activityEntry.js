const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const activityEntrySchema = new Schema({
    //Create a user_id to link the activities with (later)
    // user: { type: String, required: true},
    date: { type: String, required: true },
    time: { type: String, required: true },
    text: { type: String, required: true },
});

const ActivityEntry = mongoose.model("ActivityEntry", activityEntrySchema);

module.exports = ActivityEntry;