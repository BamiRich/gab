//J A V A S C R I P T:  H O W  W E   A D D   I N T E R A C T I V  T O  O U R  W E B S I T

let oros;
let userObj;

//User Storage Class
class store3 {
    static getUser() {
        //initialize an empty array to store users
        // let userObj;

        if (localStorage.getItem('basket_') === null) {
            userObj = [];
        } else {
            userObj = JSON.parse(localStorage.getItem('basket_'));
        }
        return userObj;
    }

    static addUser(U) {
        let userObj = store3.getUser();
        // if (U === 1) return;

        userObj.push(U);
        localStorage.setItem('basket_', JSON.stringify(userObj));
    };

    static removeUser(id) {
        let userObj = store3.getUser();

        userObj.forEach((t, index) => {
            if (t.id === id) {
                userObj.splice(index, 1);
            }
            localStorage.setItem('basket_', JSON.stringify(userObj));
        })
    }

}

//Profile Storage Class
// class store2 {
//     static getProfile() {
//         let profileObj1
        
//         if (localStorage.getItem('basket_talk1') === null) {
//             profileObj1 = [];
//         } else {
//             profileObj1 = JSON.parse(localStorage.getItem('basket_talk1'));
//         }
//         return profileObj1; 
//     };

//     static addProfile(s) {
//         let profileObj1 = store2.getProfile();
//         if (s === 1) return;
        
//         profileObj1.push(s);
//         localStorage.setItem('basket_talk1', JSON.stringify(profileObj1));
//     };

//     static removeProfile(id) {
//         let profileObj1 = store2.getProfile();

//         profileObj1.forEach((s, index) => {
//             if (s.id === id) {
//                 profileObj1.splice(index, 1);
//             }
//             localStorage.setItem('basket_talk1', JSON.stringify(profileObj1));
//         });
//     }
// };

// //Storage Class
// class store1 {
    
//     static getProfile() {
//         let profileX
        
//         if (localStorage.getItem('basket_1') === null) {
//             profileX = [];
//         } else {
//             profileX = JSON.parse(localStorage.getItem('basket_1'));
//         }
//         return profileX; 
//     };

//     static addProfile(profile) {
//         let profileX = store1.getProfile();
//         if (profile === 1) return;
        
//         profileX.push(profile);
//         localStorage.setItem('basket_1', JSON.stringify(profileX));
//     };

//     static removeProfile(id) {
//         let profileX = store1.getProfile();

//         profileX.forEach((profile, index) => {
//             if (profile.id === id) {
//                 profileX.splice(index, 1);
//             }
//         });
//         localStorage.setItem('basket_1', JSON.stringify(profileX));
//     }
// };

//Open Profile Input event.
class store {

    static getOro() {
        // let oros;
        if (localStorage.getItem('basket') === null) {
            oros = [];
        } else {
            oros = JSON.parse(localStorage.getItem('basket'));
        }
        return oros; 
    };

    static addNewOro(oro) {
        let oros = store.getOro();

        oros.push(oro);
        localStorage.setItem('basket', JSON.stringify(oros));
    };

    static removeOro(id) {
        let oros = store.getOro();
        oros.forEach((oro, index) => {
            if (oro.id === id) {
                oros.splice(index, 1);
            }
            localStorage.setItem('basket', JSON.stringify(oros));
        })
    };
};

    
// oros = JSON.parse(localStorage.getItem('basket'));
// // userObj = JSON.parse(localStorage.getItem('basket_'));

// const finalObj = {
//     ...oros,
//     ...userObj,
    
// };

// console.log(finalObj);

//Storage Class
// class store3 {
//     static getProfile2() {
//         let wallX
//         // let profileX;
//         if (localStorage.getItem('basket_talk2') === null) {
//             wallX = [];
//         } else {
//             wallX = JSON.parse(localStorage.getItem('basket_talk2'));
//         }
//         return wallX; 
//     };

//     static addWall(s) {
//         let wallX = store3.getProfile2();
//         if (s === 1) return;
        
//         wallX.push(s);
//         localStorage.setItem('basket_talk2', JSON.stringify(wallX));
//     };

//     static removeProfile2(id) {
//         let wallX = store3.getProfile2();

//         wallX.forEach((s, index) => {
//             if (s.id === id) {
//                 wallX.splice(index, 1);
//             }
//             localStorage.setItem('basket_talk2', JSON.stringify(wallX));
//         });
//     }
// };
