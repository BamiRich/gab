//J A V A S C R I P T:  H O W  W E   A D D   I N T E R A C T I V  T O  O U R  W E B S I T

const transContent = document.querySelector('.trans_content');

// O R O

// //UI Class: Handel UI tasks
class UI {

    static displayOro() {
        const oros = store.getOro();
        oros.forEach((x) => UI.addOro(x));
    };

    static addOro(x) {
        console.log(x)
        
        const talkmeNewUI = document.createElement('div'); //classList(add class without affecting any other class) vs className (set class, however if there is any other class it will remove the previous class)
        talkmeNewUI.classList.add('conversation'); //vs talkMe.className = 'conversation';
            
            const mainUI = document.createElement('div'); //classList(add class without affecting any other class) vs className (set class, however if there is any other class it will remove the previous class)
            mainUI.classList.add('mainUI'); //vs talkMe.className = 'conversation';

                const span1 = document.createElement('ojo');
                span1.classList = `hidden1`; //add

                    const span1Node = document.createTextNode(`${x.id}`); //create text node
                span1.append(span1Node);
            mainUI.append(span1);

                const div1 = document.createElement('div');
                div1.classList.add('close_btn'); //add class

                    const div1Node = document.createTextNode(`x`); //create text node
                div1.append(div1Node);
            mainUI.append(div1);

// USER IMAGE
                const div2 = document.createElement('div');
                div2.classList.add('user_detailes'); //add class
                console.log(div2)        

                    const a1 = document.createElement('a');
                    a1.classList = "call1";
                    a1.href = "profile.html";
                        const image1 = document.createElement('img');
                        image1.classList.add("user_image1");
                        image1.src = `${x.userImage}`;
                        image1.width = `50`;
                    a1.append(image1);
                div2.append(a1);
                console.log(`${x.userImage}`)

    // NAME DETAILES
                    const nameDetailes = document.createElement('div');
                    nameDetailes.classList.add("name_detailes");
    // NAME                    
                        const nameXX = document.createElement('span');
                        nameXX.classList.add("name1");
                            const name1Node = document.createTextNode(`${x.name_}`); //create text node
                            nameXX.append(name1Node);
                        nameDetailes.append(nameXX);
                div2.append(nameDetailes);
            mainUI.append(div2);
            console.log(`${x.name_}`)
    // USER NAME
                        const userName = document.createElement('span');
                        userName.classList.add("user_name");
                        // userName.id = "username";
                            const usernameX2 = document.createElement('a');
                            usernameX2.id = "username_x2";
                            usernameX2.href = "profile.html";
                                const username1Node = document.createTextNode(`${x.username}`); //create text node
                            usernameX2.append(username1Node);
                            
                    userName.append(usernameX2);
                    nameDetailes.append(userName);

    // INPUT TEXT
                const textTalkMe = document.createElement('div');
                textTalkMe.classList.add("text_trance");
                textTalkMe.id = "text_trance";
                const textTalk1Node = document.createTextNode(`${x.text}`); //create text node
                textTalkMe.append(textTalk1Node);
                mainUI.append(textTalkMe);

    // INPUT IMAGE            
                const a2 = document.createElement('a');
                a2.href = "";
                const image2 = document.createElement('img');
                image2.id = "image_trance";
                image2.src = `${x.image}`;
                a2.append(image2);
                mainUI.append(a2);

    // DATE INPUT            
                const dataTalkMe = document.createElement('div');
                dataTalkMe.id = "date_trance";
                const dateXNode = document.createTextNode(`${x.date}`); //create text node
                dataTalkMe.append(dateXNode);
                mainUI.append(dataTalkMe);

    // INTERACTIONS
                const interactions = document.createElement('div');
                interactions.classList.add("interactions");
                mainUI.append(interactions);

    // COMMENT
                    const smallTalk1 = document.createElement('small');

                        const imageCommentBtn1 = document.createElement('img');
                        imageCommentBtn1.classList.add("comment_btn");
                        imageCommentBtn1.id = "comment";
                        imageCommentBtn1.src = "image/comment.png";
                        imageCommentBtn1.width = "30";
                        smallTalk1.append(imageCommentBtn1);

                        const spanTalk1 = document.createElement('span');
                        spanTalk1.classList.add("comment_count");
                        // spanTalk1.id = `${x.id}`;
                        const oNode1 = document.createTextNode("0"); //create text node
                        spanTalk1.append(oNode1);
                        smallTalk1.append(spanTalk1);
                        interactions.append(smallTalk1);
                        
    // LIKE
                    const smallTalk2 = document.createElement('small');

                        const imageCommentBtn2 = document.createElement('img');
                        imageCommentBtn2.classList.add("like_btn");
                        imageCommentBtn2.id = "like";
                        imageCommentBtn2.src = "image/like.png";
                        imageCommentBtn2.width = "30";
                        smallTalk2.append(imageCommentBtn2);
                        
                        const spanTalk2 = document.createElement('span');
                        spanTalk2.classList.add("quantity");
                        spanTalk2.id = `${x.id}`;
                        const oNode2 = document.createTextNode(`0`); //create text node
                        spanTalk2.append(oNode2);
                        smallTalk2.append(spanTalk2);
                        interactions.append(smallTalk2);

                        const smallTalk3 = document.createElement('small');
                        const imageTalk3 = document.createElement('img');
                        imageTalk3.className = "share_btn";
                        imageTalk3.src = "image/share.png";
                        imageTalk3.id = "share";
                        imageTalk3.width = "45";
                        smallTalk3.append(imageTalk3);
                        interactions.append(smallTalk3);

    // SHAREING OPTION
                        const shareOptionsTalk3 = document.createElement('div');
                        shareOptionsTalk3.classList.add("share_options");
                        smallTalk3.append(shareOptionsTalk3);

                            const socialMediaTalk3 = document.createElement('div');
                            socialMediaTalk3.classList.add('social_media');
                            shareOptionsTalk3.append(socialMediaTalk3);

                                const facebookTalk3 = document.createElement('img');
                                facebookTalk3.className = 'social_media_btn facebook';
                                facebookTalk3.src = "image/facebook.png";
                                facebookTalk3.width = "35";
                                socialMediaTalk3.append(facebookTalk3);

                                const instagramTalk3 = document.createElement('img');
                                instagramTalk3.className = "social_media_btn instagram";
                                instagramTalk3.src = "image/instagram.png";
                                instagramTalk3.width = "35";
                                socialMediaTalk3.append(instagramTalk3);

                                const whatsappTalk3 = document.createElement('img');
                                whatsappTalk3.className = "social_media_btn whatsapp";
                                whatsappTalk3.src = "image/whatsapp.png";
                                whatsappTalk3.width = "35";
                                socialMediaTalk3.append(whatsappTalk3);

                                const twitterTalk3 = document.createElement('img');
                                twitterTalk3.className = "social_media_btn twitter";
                                twitterTalk3.src = "image/call.png";
                                twitterTalk3.width = "35";
                                socialMediaTalk3.append(twitterTalk3);
                
                talkmeNewUI.append(div1);
                talkmeNewUI.append(div2);
                talkmeNewUI.append(mainUI);

                const dateiTalkMe = document.createElement('div');
                dateiTalkMe.id = "date_trance_i";
                mainUI.append(dateiTalkMe);
                
    transContent.appendChild(talkmeNewUI);
    // console.log(talkmeNewUI)

    //         talkmeNewUI.innerHTML =
    //         `
    //             <span hidden>${x.id}</span>
    //             <div class="close_btn">&times;</div>
    //             <div class="user_detailes">
    //                 <a href="/dashboard/profile.html"><img class="user_image1" width="55" src=${x.imgProfile}></a>
    //                 <div class="name_detailes">
    //                     <span class="name">${x.profileName}</span>
    //                     <span class="user_name" id="username"><a id="username_x2" href="/dashboard/profile.html">${x.profileUserName}</a></span> 
    //                 </div>
    //             </div>
    //             <div id="text_trance">${x.text}</div>
    //             <a href=""><img id="image_trance" src=${x.image}></a>
    //             <div id="date_trance">${x.date}</div>
    //             <div class="interactions" id="">
    //                 <small>
    //                     <img id="comment" class='comment_btn' width="30" src="image/comment.png">
    //                     <span class="comment_count" id=${x.id}>0</span>
    //                 </small>

    //                 <small>
    //                     <img id="like" class='like_btn' width="30" src="image/js/like.png">
    //                     <span class="quantity" id=${x.id}>0</span>
    //                 </small>

    //                 <small><img id="share" class='share_btn' width="45" src="image/share.png"></small>
    //                 <div class="share_options" id="">
    //                     <div class="social_media">
    //                         <img class="social_media_btn facebook" width="35" src="image/facebook.png">
    //                         <img class="social_media_btn instagram" width="35" src="image/instagram.png">
    //                         <img class="social_media_btn whatsapp" width="35" src="image/whatsapp.png">
    //                         <img class="social_media_btn twitter" width="35" src="image/call.png">
    //                     </div>
    //                 </div>
    //             </div>
    //             <div id="date_trance_i"></div>
    //         `;
    //         //transContent IS A GLOBAL VARIABLE
    //         transContent.appendChild(talkmeNewUI);
    };

    // static commentActive(currentTextTrance, currentImage) {

    //         const username = document.createElement('div');
    //         username.classList.add('username');

    //         username.innerHTML = 
    //         `
    //             <div class="comment_name">Replying to <a id="username" href="profile.html">${profileUserName}</a></div>
    //         `;
    //         commentNameDetailes.appendChild(username);

    //         const replyingImage = document.createElement('div');
    //         replyingImage.classList.add('replying_image');

    //         replyingImage.innerHTML = 
    //         `
    //             <div class="textarea_input">
    //                 <a href="profile.html"><img class="comment_user_image" width="55" src=${imgProfile}></a>
    //                 <textarea class="user_textarea" name="" id="user_textarea" cols="30" rows="10" placeholder="Add your comment"></textarea>
    //             </div>
    //         `;
    //         inputComment.appendChild(replyingImage);
        
    //         const inputBoost = document.createElement('div');
    //         inputBoost.classList.add('input_boost');
        
    //         inputBoost.innerHTML =
    //         `
    //             <div class="flexer">
    //              <a href="profile.html"><img class="user_image" width="55" src=${imgProfile}></a>
                 
    //              <div class="name_detailes">
    //                  <span class="name">${profileName}</span>
    //                  <span class="user_name" id="username"><a href="profile.html">${profileUserName}</a></span>
    //              </div>
    //              </div>
    //         `;
    //         userDetailes.appendChild(inputBoost);

    //         // document.body.appendChild('.comment_x')
    // };

    static interactions(shareOptions, socialMedia) {
    
        shareOptions.classList.toggle('active');
        socialMedia.classList.toggle('active');
    };

    static deleteOro(el) {
        if (el.classList.contains('close_btn')) {
            el.parentElement.remove();
        };

        if (el.classList.contains('close_btn')) {
            const currentConversation = el.closest('.conversation');
            console.log(currentConversation)
            const id = currentConversation.querySelector('ojo').textContent;
            store.removeOro(Number(id));
        };
    };

    static clearFild() {
        formBtn.reset();
        // document.querySelector('#text').value = "";
        // document.querySelector('#image_').src = "";
        // document.querySelector('#text').focus;
    };
};


// //Open Profile Input event.
// class store {

//     static getOro() {
//         let oros;
//         if (localStorage.getItem('basket') === null) {
//             oros = [];
//         } else {
//             oros = JSON.parse(localStorage.getItem('basket'));
//         }
//         return oros; 
//     };

//     static addNewOro(oro) {
//         let oros = store.getOro();
//         if (oros === 1) return;
        
//         oros.push(oro);
//         localStorage.setItem('basket', JSON.stringify(oros));
//     };

//     static removeOro(id) {
//         let oros = store.getOro();
//         oros.forEach((oro, index) => {
//             if (oro.id === id) {
//                 oros.splice(index, 1);
//             }
//             localStorage.setItem('basket', JSON.stringify(oros));
//         })
//     };
// };

//Event: Loads
document.addEventListener('DOMContentLoaded', UI.displayOro);

transContent.addEventListener("click", (e) => {

    //INTERACTIONS
    const facebook = document.querySelector('.facebook');
    const instagram = document.querySelector('.instagram');
    const whatsapp = document.querySelector('.whatsapp');
    const twitter = document.querySelector('.twitter');

    const pageurl = location.href;
    const message = 'great content';

    const facebookApi = `https://wa.ma/?text-${pageurl}-${message}`
    const instagramApi = `https://wa.ma/?text-${pageurl}_${message}`
    const whatsappApi = `https://wa.ma/?text-${pageurl}_${message}`
    const twitterApi = `https://twitter.com/intent/tweet-${pageurl}-${message}`

    if (e.target.classList.contains('facebook')) {
        window.open(url = facebookApi, target='blank');
    } else if (e.target.classList.contains('instagram')) {
        window.open(url = instagramApi, target='blank');
    } else if (e.target.classList.contains('whatsapp')) {
        window.open(url = whatsappApi, target='blank');
    } else if (e.target.classList.contains('twitter')) {
        window.open(url = twitterApi, target='blank');
    };

 
    if (e.target.classList.contains('comment_btn')) {

        const textTransact = document.querySelector('.text_transact');
        const imageTransact = document.querySelector('.image_transact');

        const currentConversation = e.target.closest('.conversation');

        const currentTextTrance = currentConversation.querySelector('#text_trance').textContent;
        const currentImage = currentConversation.querySelector('#image_trance').src;
        UI.commentActive(currentTextTrance, currentImage);
        
        textTransact.textContent = currentTextTrance;
        imageTransact.src = currentImage;
        
        //Global variable (commentContainer)
        commentContainer.classList.add('active');
            
        transact.addEventListener('click', ()=>{
            imgProfile.className = 'btn'
        });

        const interactions = currentConversation.querySelector('.interactions');
        const comment = currentConversation.querySelector(".comment_btn");

        if (comment.classList.toggle('x')) {
            let count = 0;

                if (e.target.classList.contains("comment_btn")) {
                    const currentConversation = e.target.closest('.interactions');
                    const commentCount = currentConversation.querySelector('.comment_count');
                    console.log(count +1)
                    commentCount.textContent = count +1;
                }
            } else {
            let count = 0;

                if (e.target.classList.contains("comment_btn")) {
                    const currentConversation = e.target.closest('.interactions');
                    const commentCount = currentConversation.querySelector('.comment_count');
                    console.log(count -0)
                    commentCount.textContent = count -0;
                }
            };

    } else if (e.target.classList.contains('like_btn')) {
        const currentConversation = e.target.closest('.conversation');
        const interactions = currentConversation.querySelector('.interactions');
        const like = currentConversation.querySelector(".like_btn");
            if (like.classList.toggle('x')) {
                like.src = "like_.png";
                let count = 0;

                if (e.target.classList.contains("like_btn")) {
                    const currentConversation = e.target.closest('.interactions');
                    const quantity = currentConversation.querySelector('.quantity');
                    quantity.textContent = count +1;
                }
            } else {
                like.src = "like.png";
                let count = 0;

                if (e.target.classList.contains("like_btn")) {
                    const currentConversation = e.target.closest('.interactions');
                    const quantity = currentConversation.querySelector('.quantity');
                    quantity.textContent = count -0;
                }
            };

    } else if (e.target.classList.contains('share_btn')) {
        const currentConversation = e.target.closest('.conversation');
        const shareOptions = currentConversation.querySelector('.share_options');
        const socialMedia = currentConversation.querySelector('.social_media');
    UI.interactions(shareOptions, socialMedia);
    };
    
    //Remove Oro in UI
    UI.deleteOro(e.target);
});
