interface UserInterface { // interface defining the structure of a user object
    username: string;
    email?: string;// optional property

    attendsMeeting(): void;// function declaration in interface

} // interface UserInterface closed

const newUser: UserInterface = { // object implementing the interface
    username: "john_doe",
    // email: "john@example.com",s
    attendsMeeting: function() {
        console.log(`${this.username} is attending the meeting.`);
    }   
};






console.log(`User: ${newUser.username}, Email: ${newUser.email}`);
newUser.attendsMeeting();

