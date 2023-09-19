// const { createElement } = require("react");
//J A V A S C R I P T:  H O W  W E   A D D   I N T E R A C T I V  T O  O U R  W E B S I T

const talkmeNav = document.querySelector(".talkme_nav");
const talkmeHome = document.querySelector(".talkme_home");
const _menu = document.querySelector(".profile_menu");

const formEdit = document.querySelector(".talkme_form_edit");
const talkmeProcess = document.querySelector(".talkme_process");
const formInput = document.querySelector(".form_input");
const profileBtn_ = document.querySelector(".profile_btn_");
const nameText = document.querySelector(".name_text");
const bioText = document.querySelector(".bio_text");
const talkemEditContaner = document.querySelector(".talkem_edit_contaner");

const headar = document.querySelector(".headar"); 
const wallEditOpen = document.querySelector(".wall_edit_open");
const _data = document.querySelector("._data");
const _description = document.querySelector("._description");
const fileX = document.querySelector("#file_x");
const fileUser = document.querySelector("#file_user");
const closeBtnProfile = document.querySelector("#close_btn_profile");

window.onload = () => {
    talkmeNav.style.background = "transparent";
    talkmeNav.style.boxShadow = "none";
    talkmeHome.style.color = "rgb(255, 255, 255)";
    _menu.style.color = "rgb(255, 255, 255)";

    window.onscroll = () => {
        if (window.pageYOffset > 0) {
            talkmeNav.style.background = "#fff";
            talkmeNav.style.boxShadow = "0px 0px 5px 3px rgba(15, 15, 15, 0.8)";
            talkmeHome.style.color = "rgb(28, 27, 27)";
            _menu.style.color = "rgb(28, 27, 27)";
        } else {
            talkmeNav.style.background = "transparent";
            talkmeNav.style.boxShadow = "none";
            talkmeHome.style.color = "rgb(255, 255, 255)";
            _menu.style.color = "rgb(255, 255, 255)";
        }
    };
};

// const talkmeProcess = document.createElement("div");
// talkmeProcess.classList.add("talkme_process");

//         const closeBtnProfile = document.createElement("span");
//         closeBtnProfile.id = "close_btn_profile";
//             const closeBtnProfileNode = document.createTextNode("x");
//         closeBtnProfile.appendChild(closeBtnProfileNode);
//         talkmeProcess.appendChild(closeBtnProfile);

//         const profileBtn = document.createElement("input");
//         profileBtn.classList.add("profile_btn_");
//         profileBtn.id = "profile_btn_";
//         profileBtn.value = "Save";
//         profileBtn.disabled = true;
//         profileBtn.type = "submit";

//     talkmeProcess.appendChild(profileBtn);

// const headarContaner = document.createElement('div');
// headarContaner.classList.add("header_contaner");

//         const wallImage = document.createElement("img");
//         wallImage.id = "wall_image";
//      headarContaner.appendChild(wallImage);

//         const fileY = document.createElement("input");
//         fileY.type = "file";
//         fileY.id = "file_x";
//         fileY.accept = "image/*";
//         fileY.multiple;
//         fileY.capture = "camera";
//         fileY.style = "display: none";
//     headarContaner.appendChild(fileY);

//         const labelEdite = document.createElement("label");
//         labelEdite.classList.add("label_edite");
//         labelEdite.for = "file_x";

//             const edit1 = document.createElement("img");
//             edit1.classList.add("edit");
//             edit1.src = "image/upload.png";
//             edit1.width = "20";
//         labelEdite.appendChild(edit1);
//     headarContaner.appendChild(labelEdite);

// const data1 = document.createElement("div");
// data1.classList.add("_data_");

//         let image1 = document.createElement("img");
//         image1.id = "_image_x";
//     data1.appendChild(image1);

//         const fileUser = document.createElement("input");
//         fileUser.type = "file";
//         fileUser.id = "file_user";
//         fileUser.accept = "image/*";
//         fileUser.multiple;
//         fileUser.capture = "camera";
//         fileUser.style = "display: none";
//     data1.appendChild(fileUser);

//         const label2 = document.createElement("label");
//         label2.classList.add("label_x");
//         label2.for = "file_user";

//             const dataUpload = document.createElement("img");
//             dataUpload.classList.add("data_upload");
//             dataUpload.src = "image/upload.png";
//             dataUpload.width = "20";
//         label2.appendChild(dataUpload);
//     data1.appendChild(label2);

//         let nameText = document.createElement("input");
//         nameText.classList.add("name_text");
//         nameText.type = "text";
//         nameText.readonly = true;
//         nameText.placeholder = "Name cannot be empty";
//         nameText.value = "BO";

//         let bioText = document.createElement("input");
//         bioText.classList.add("bio_text");
//         bioText.type = "text";
//         bioText.value = "";
//         bioText.placeholder = "Add your description";
//         bioText.readonly = "false";
        
// wallEdit.appendChild(talkmeProcess);
// wallEdit.appendChild(headarContaner);
// wallEdit.appendChild(data1);
// wallEdit.appendChild(nameText);
// wallEdit.appendChild(bioText);

// PROFILE DISPLAY
class UI2 {
    static displayPro()  { 
        let profileObj = store3.getUser(); //addProfile()
        profileObj.forEach((s) => UI2.imageProfile(s));
    };

    static imageProfile(s) {
        // console.log(s);

        const talkDiv = document.createElement("div");
        talkDiv.className = "talk_div";

                let wallImg = document.createElement("img");
                wallImg.classList.add("wall_img");
                wallImg.src = `${s.wallImage}`;
                wallImg.readOnly = false; //parameter 1 is not of type "node"
            talkDiv.appendChild(wallImg);  
        headar.appendChild(talkDiv);
        console.log(`${s.wallImage}`);

        const talkDiv2 = document.createElement("div");
        talkDiv2.classList.add("talk_div2");
                
            const ximage = document.createElement("div");
            ximage.classList.add("x_image");

                let userImg = document.createElement("img");
                userImg.classList.add("_image");
                userImg.src = `${s.userImage}`;
                userImg.readOnly = false; //parameter 1 is not of type "node"
            ximage.appendChild(userImg);  
        talkDiv2.appendChild(ximage);
        console.log(`${s.userImage}`);
    
            const nameUsername = document.createElement("div");
            nameUsername.classList.add("name_username");
    
                let _textName = document.createElement("div");
                _textName.id = "_name_";
                _textName.readonly = false; //parameter 1 is not of type "node"
                    let textNameNode = document.createTextNode(`${s.name_}`);
                _textName.appendChild(textNameNode);
            nameUsername.appendChild(_textName);
            console.log(`${s.name_}`);

                let _userName = document.createElement("a");
                _userName.classList.add("_username");
                _userName.href = "profile.html";
                    let userNameNode = document.createTextNode(`${s.username}`);
                _userName.appendChild(userNameNode);
            nameUsername.appendChild(_userName);
            console.log(`${s.username}`);

        talkDiv2.appendChild(nameUsername);

            const talkDiv3 = document.createElement("div");
            talkDiv3.classList.add("talk_div3");
        
                let _descript = document.createElement("div");
                _descript.classList.add("descript_");
                _descript.readOnly = false; //parameter 1 is not of type "node"
                    let textDescriptNode = document.createTextNode(`${s.description}`);
                _descript.appendChild(textDescriptNode);
            talkDiv3.appendChild(_descript);
        talkDiv2.appendChild(talkDiv3);
         
    _data.appendChild(talkDiv2);
   };
};

// let tall1 = document.querySelector("#try1");
// let tall2 = document.querySelector("#try2");
    
// document.querySelector(".kkk").onclick = () => {
//     document.querySelector("#result1").textContent = tall1.value;
//     document.querySelector("#result2").textContent = tall2.value;
// };

//  //
// function activeTalk(currentImage, currentName, currentDescription) {
//     console.log(currentImage, currentName, currentDescription)

//     const talkImage = document.querySelector('._image_x');

//     let talkName = document.querySelector('.name_text');
//     let talkDescription = document.querySelector('.bio_text');
    
//     talkName.textContent = currentName;
//     talkDescription.textContent = currentDescription;
//     console.log(currentName)
    
//     formEdit.classList.add('active');
// };

// currentImage
// // PROFILE DISPLAY
// class UI3 {
//     static displayWallp() { 
//         const wallObj = store3.getProfile2();
//         wallObj.forEach(s => UI3.imageWall(s));
//     };

//     static imageWall(s){

//         const talkDiv = document.createElement("div");
//         talkDiv.className = "talk_div";

//             let imgWall = document.createElement('img');
//             imgWall.classList.add('wall_img');
//             imgWall.src = `${s.wallImage}`;
//             imgWall.width = "470";
//             imgWall.readOnly; //parameter 1 is not of type "node"
//         talkDiv.appendChild(imgWall);

//     headar.appendChild(talkDiv);
//     }
// };

document.addEventListener('DOMContentLoaded', UI2.displayPro);

//Click the "Open Edit Profile" Botton here
wallEditOpen.addEventListener("click", () => {

    formEdit.style.display = 'flex'; //Open Edit Profile
    
//Click the "Open Edit Profile" Botton here
    closeBtnProfile.addEventListener('click', ()=>{
        formEdit.style.display = 'none'; //Close Edit Profile
    });

    fileX.addEventListener('change', function(e){

        let wallImage_ = document.querySelector("#wall_image");

        if (e.target.files.length > 0) {
            wallImage_.style.display = "flex";
        //image entry to html
            wallImage_.src = URL.createObjectURL(this.files[0]);
        }
    });

    fileUser.addEventListener('change', function(e){

        let userImage_ = document.querySelector("#_image_x");

        console.log(userImage_)
        if (e.target.files.length > 0) {
            userImage_.style.display = "flex";
        //image entry to html
            userImage_.src = URL.createObjectURL(this.files[0]);
        }
    });
    
    let oneWall = document.createElement("div");
    oneWall.className = "one_wall";

        let oneInput = document.createElement("input");
        oneInput.name_ = "name_";
        oneInput.id = "name_";
        oneInput.class = "input";
        oneInput.type = "text";
        oneInput.placeholder = "Name cannot be empty";
        oneInput.value = "BO";
        oneInput.autocomplete = "on";
        oneInput.readOnly = false;
        oneWall.append(oneInput);
    nameText.appendChild(oneWall);

    let twoWall = document.createElement("div");
    twoWall.className = "two_wall";

        let oneTextarea = document.createElement("textarea");
        oneTextarea.id = "descript_";
        oneTextarea.autocomplete = "on";
        oneInput.type = "text";
        oneTextarea.readOnly = false;
        // oneTextarea.value = "";
        oneTextarea.placeholder = "Bio";
        twoWall.append(oneTextarea);
    bioText.appendChild(twoWall);

})

// // Self-Taught Vanilla JS | React JS | Noda JS Developer 
profileBtn_.onclick = () => {

    let wallImage = document.querySelector("#wall_image").src;
    let userImage = document.querySelector("#_image_x").src;
    let name_ = document.querySelector("#name_").value; 
    let description = document.querySelector("#descript_").value;

    if (wallImage === "" && userImage === "" && name_ === "" && description === "") {
        alert('Please input image');
        // profileBtn_.disabled = "true";
    } else {
        // profileBtn_.disabled = "false";
        const profile_ = new Profile(wallImage, userImage, name_, description);
        // profile_.setUsername(user);

        // profile_.retreveInfo();
        // profile_.UpdateInfo(wallImage, userImage, name_, description);

        UI2.imageProfile(profile_)
        store3.addUser(profile_);
    }
};

