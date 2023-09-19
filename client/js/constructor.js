//J A V A S C R I P T:  H O W  W E   A D D   I N T E R A C T I V  T O  O U R  W E B S I T

// PROFILE CLASS: Reprisent 
class Profile {
    wallImage = "";
    userImage = "";
    name_ = "";
    description = "";

    //Properties(State): what they have
    constructor(wallImage, userImage, name_, description) {
        // super(fields)
        this.wallImage = wallImage;
        this.userImage = userImage;
        this.name_ = name_;
        this.description = description;
        this.id = Math.random();
    }
    // Self-Thought Vanilla, React & Node JS Developer

    //Method(Behaviour): what they do (I take the username from the user class then inseart the username to the profile class) 
    // setUsername(user) {
    //     if(user instanceof User) {
    //         this.username = user.username,
    //         console.log(`Username: "${this.username}" set successfully.`); 
    //     } else {
    //         console.error(`invalid user object`);
    //     }
    // }

     
    // //Method(Behaviour): what they do (Getter: To get back the user, username from the locallstorage/database)
    retreveInfo() {
        return{
            wallImage: this.wallImage,
            userImage: this.userImage,
            name_: this.name_,
            description: this.description,
        }
    }

    //Method(Behaviour): what they do (Setter: To update(edit/change and save) the user to the locallstorage/database)
    UpdateInfo(wallImage, userImage, name_, description) {
        this.wallImage = wallImage;
        this.userImage = userImage;
        this.name_ = name_;
        this.description = description;
    }
};

//INHERITANCE & EXTEND CLASSES (subclass)
class Oro extends Profile {
    text = "";
    image = "";
    date = "";

    constructor(text, image, date, userImage) {
        super(userImage);
        this.text = text;
        this.image = image;
        this.date = date;
        // this.username = null;
        this.id = Math.random();
    };
    
    //Method(Behaviour): what they do (I take the username from the user class then inseart the username to the profile class) 
    // setUsername(user) {
    //     if(user instanceof User) {
    //         this.username = user.username;

    //         console.log(`Username: "${this.username}" set successfully.`); 
    //     } else {
    //         console.error(`invalid user object`);
    //     }
    // }

    // setProfile(profile) {
    //     if(profile instanceof Profile) {
    //         this.userImage = profile.userImage_;
    //         this.name_ = profile.name;

    //         console.log(`Profile: "${this.userImage}" and "${this.name_} set successfully.`);
    //     } else {
    //         console.error(`invalid profile object`);
    //     }
    // }
};
