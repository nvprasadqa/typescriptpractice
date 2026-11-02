"use strict";
const newUser = {
    username: "john_doe",
    // email: "john@example.com",s
    attendsMeeting: function () {
        console.log(`${this.username} is attending the meeting.`);
    }
};
console.log(`User: ${newUser.username}, Email: ${newUser.email}`);
newUser.attendsMeeting();
