/** @format */
// SIdebar
const menuItems = document.querySelectorAll(".menu-item");
//MESSAGES
const messageNotification = document.getElementById("messages-notification");
const messages = document.querySelector(".messages");
const message = messages.querySelectorAll(".message");
const messageSearch = document.querySelector("#message-search");

//removing active class from all menu items
const removeActiveClass = () => {
    menuItems.forEach((item) => {
        item.classList.remove("active");
    });
};

menuItems.forEach((item) => {
    item.addEventListener("click", () => {
        removeActiveClass();
        item.classList.add("active");
        if (item.id != "notification") {
            document.querySelector(".notification-popup").style.display =
                "none";
        } else {
            document.querySelector(".notification-popup").style.display =
                "block";
            document.querySelector(".notification-count").style.display =
                "none";
        }
    });
});

// -----------------messages---------
messageNotification.addEventListener("click", () => {
    messages.style.boxShadow = "0 0 1rem var(--primary-color)";
    messageNotification.querySelector(".notification-count").style.display =
        "none";
    setTimeout(() => {
        messages.style.boxShadow = "none";
    }, 2000);
});

// searching a mesages========================

const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach((chat) => {
        let userNames = chat.querySelectorAll("h5");
        userNames.forEach((user) => {
            let name = user.innerText.toLowerCase();
            if (name.indexOf(val) != -1) {
                chat.style.display = "flex";
            } else {
                chat.style.display = "none";
            }
        });
    });
};

//search chat
messageSearch.addEventListener("keyup", searchMessage);

//----------------THEME CUSTOM---------------------------------

const theme = document.querySelector("#theme");
const themeModal = document.querySelector(".custom-theme");

//font sizes
const fontSizes = document.querySelectorAll(".choose-size span");
const root = document.querySelector(":root");

const openModal = () => {
    themeModal.style.display = "grid";
};

const closeModal = (e) => {
    if (e.target.classList == "custom-theme") themeModal.style.display = "none";
};

theme.addEventListener("click", openModal);
themeModal.addEventListener("click", closeModal);

//font sizes-----------------------------
const removeClasslist = () => {
    fontSizes.forEach((size) => {
        size.classList.remove("active");
    });
};
fontSizes.forEach((size) => {
    size.addEventListener("click", () => {
        removeClasslist();
        let fontSize;
        size.classList.toggle("active");

        if (size.classList.contains("font-size-1")) {
            fontSize = "10px";
            root.style.setProperty("--sticky-top-left", "5.4rem");
            root.style.setProperty("--sticky-top-right", "5.4rem");
        } else if (size.classList.contains("font-size-2")) {
            fontSize = "13px";
            root.style.setProperty("--sticky-top-left", "5.4rem");
            root.style.setProperty("--sticky-top-right", "-7rem");
        } else if (size.classList.contains("font-size-3")) {
            fontSize = "16px";
            root.style.setProperty("--sticky-top-left", "-2rem");
            root.style.setProperty("--sticky-top-right", "-17rem");
        } else if (size.classList.contains("font-size-4")) {
            fontSize = "19px";
            root.style.setProperty("--sticky-top-left", "-5rem");
            root.style.setProperty("--sticky-top-right", "-25rem");
        } else if (size.classList.contains("font-size-5")) {
            fontSize = "22px";
            root.style.setProperty("--sticky-top-left", "10rem");
            root.style.setProperty("--sticky-top-right", "-30rem");
        }
        //changing the size of font in html element
        document.querySelector("html").style.fontSize = fontSize;
    });
});

//----------------changing primry colors-------------
const colors = document.querySelectorAll(".chose-color span");

const removeColorActive = () => {
    colors.forEach((color) => {
        color.classList.remove("active");
    });
};

colors.forEach((color) => {
    color.addEventListener("click", () => {
        let primaryHue;
        removeColorActive();
        if (color.classList.contains("color-1")) {
            primaryHue = 252;
        } else if (color.classList.contains("color-2")) {
            primaryHue = 52;
        } else if (color.classList.contains("color-3")) {
            primaryHue = 352;
        } else if (color.classList.contains("color-4")) {
            primaryHue = 152;
        } else if (color.classList.contains("color-5")) {
            primaryHue = 202;
        }
        color.classList.add("active");
        root.style.setProperty("--primary-color-hue", primaryHue);
    });
});

//=====================CHANGING BACKGOROUND=======================================
const bg1 = document.querySelector(".bg-1");
const bg2 = document.querySelector(".bg-2");
const bg3 = document.querySelector(".bg-3");

let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

const changBg = () => {
    root.style.setProperty("--light-color-lightness", lightColorLightness);
    root.style.setProperty("--white-color-lightness", whiteColorLightness);
    root.style.setProperty("--dark-color-lightness", darkColorLightness);
};

bg1.addEventListener("click", () => {
    //adding activeclass
    bg1.classList.add("active");
    //removing active class
    bg2.classList.remove("active");
    bg3.classList.remove("active");
    window.location.reload();
});

bg2.addEventListener("click", () => {
    lightColorLightness = "15%";
    whiteColorLightness = "20%";
    darkColorLightness = "95%";

    //adding activeclass
    bg2.classList.add("active");
    //removing active class
    bg1.classList.remove("active");
    bg3.classList.remove("active");
    changBg();
});

bg3.addEventListener("click", () => {
    lightColorLightness = "0%";
    whiteColorLightness = "10%";
    darkColorLightness = "95%";

    //adding activeclass
    bg2.classList.add("active");
    //removing active class
    bg1.classList.remove("active");
    bg2.classList.remove("active");
    changBg();
});

// =========================create post====================

const addPostOnFeeds = (feedPhtoUrl, caption) => {
    const feeds = document.querySelector(".feeds");

    const feed = document.createElement("div");

    feed.setAttribute("class", "feed");

    feed.innerHTML = `<div>
                            <div class="head">
                                <div class="user">
                                    <div class="profile-picture">
                                        <img
                                            src="https://cdn.pixabay.com/photo/2015/06/22/08/40/child-817373_1280.jpg"
                                            alt="" />
                                    </div>
                                    <div class="info">
                                        <h3>Example</h3>
                                        <small>Dubi, 15 MINITS AGO</small>
                                    </div>
                                </div>
                                <div class="edit">
                                    <i class="fa-solid fa-ellipsis"></i>
                                </div>
                            </div>
                            <div class="feed-body">
                                <img
                                    src=${feedPhtoUrl}
                                    alt="" />
                            </div>
                            <div class="feed-footer">
                                <div class="interaction">
                                    <div class="interaction-btns">
                                        <span
                                            ><i class="fa-regular fa-heart like"></i
                                        ></span>
                                        <span
                                            ><i
                                                class="fa-regular fa-comment-dots"></i
                                        ></span>
                                        <span
                                            ><i
                                                class="fa-sharp fa-solid fa-share-nodes"></i
                                        ></span>
                                    </div>
                                    <div class="bookmark">
                                        <span
                                            ><i
                                                class="fa-regular fa-bookmark"></i
                                        ></span>
                                    </div>
                                </div>
                                <div class="liked-by">
                                    <span
                                        ><img
                                            src="https://cdn.pixabay.com/photo/2015/06/22/08/40/child-817373_1280.jpg"
                                            alt=""
                                    /></span>
                                    <span
                                        ><img
                                            src="https://cdn.pixabay.com/photo/2015/06/22/08/40/child-817373_1280.jpg"
                                            alt=""
                                    /></span>
                                    <span
                                        ><img
                                            src="https://cdn.pixabay.com/photo/2015/06/22/08/40/child-817373_1280.jpg"
                                            alt=""
                                    /></span>

                                    <p>
                                        Liked by <b>Krishna kolapte</b> and
                                        <b>2,4367 others</b>
                                    </p>
                                </div>
                                <div class="caption">
                                    <p>
                                        ${caption}
                                        <span class="hashtag">#motivation</span>
                                    </p>
                                </div>
                                <div class="comments text-muted">
                                    View all 277 comments
                                </div>
                            </div>
                        </div>`;

    feeds.prepend(feed);
};

const create = document.querySelector("#create");
const createbtn2 = document.querySelector(".create-post");
const createModal = document.querySelector(".create-post-popup");

const openCreateModal = () => {
    createModal.style.display = "grid";
};

const closeCreateModal = (e) => {
    if (e.target.classList == "create-post-popup")
        createModal.style.display = "none";
};

create.addEventListener("click", openCreateModal);
createbtn2.addEventListener("click", openCreateModal);
createModal.addEventListener("click", closeCreateModal);

const getPostData = () => {
    const file = document.getElementById("file").value;

    const caption = document.getElementById("create-post").value;

    setTimeout(() => {
        createModal.style.display = "none";
    }, 1000);

    setTimeout(() => {
        addPostOnFeeds(file, caption);
    }, 2000);
};

// ------------------- CHAT POPUP FEATURE-----------------------
const cahtAction = document.querySelector("#chat");
const cahtModal = document.querySelector(".chat-popup");

const openChatModal = () => {
    cahtModal.style.display = "grid";
};

const closeChatModal = (e) => {
    if (e.target.classList == "chat-popup") cahtModal.style.display = "none";
};

cahtAction.addEventListener("click", openChatModal);
cahtModal.addEventListener("click", closeChatModal);

// ---------------------------CHATING MESSAGE-----------------
const chatMessage = document.querySelector("#chat-message");
const sendMessage = document.querySelector("#sendMessage");

const addToChat = () => {
    const value = chatMessage.value;
    if (value == "") return;
    const chatMessages = document.querySelector(".chat-box");
    const div = document.createElement("div");
    div.setAttribute("class", "chat-message");
    div.innerHTML = `<p>${value}</p>`;

    chatMessages.append(div);
};

sendMessage.addEventListener("click", addToChat);

// -------------------------------SEARCH USER IN CHAT-----------------------

const users = document.querySelector(".chat-users");
const user = users.querySelectorAll(".user");
const userSearch = document.querySelector("#search-user");

const searchUser = () => {
    const val = userSearch.value.toLowerCase();
    user.forEach((chat) => {
        let userNames = chat.querySelectorAll("h5");
        userNames.forEach((user) => {
            let name = user.innerText.toLowerCase();
            if (name.indexOf(val) != -1) {
                chat.style.display = "flex";
            } else {
                chat.style.display = "none";
            }
        });
    });
};

//search chat
userSearch.addEventListener("keyup", searchUser);

// ==========================STORIES ACTIONS====================

const stories = [
    {
        userImage:
            "https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        userName: "Akash madival",
        storyImage:
            "https://images.pexels.com/photos/13416152/pexels-photo-13416152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        userImage:
            "https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        userName: "Narayan Kadam",
        storyImage:
            "https://c4.wallpaperflare.com/wallpaper/562/460/955/god-lord-krishna-wallpaper-thumb.jpg",
    },
    {
        userImage:
            "https://cdn.pixabay.com/photo/2015/06/22/08/40/child-817373_1280.jpg",
        userName: "Rahul Juvekar",
        storyImage:
            "https://c4.wallpaperflare.com/wallpaper/256/800/863/god-people-jai-hanuman-people-other-hd-art-wallpaper-preview.jpg",
    },
    {
        userImage:
            "https://cdn.pixabay.com/photo/2015/06/22/08/40/child-817373_1280.jpg",
        userName: "Krishna Kolapte",
        storyImage:
            "https://c4.wallpaperflare.com/wallpaper/148/1015/618/god-lord-krishna-wallpaper-thumb.jpg",
    },
];
let clutter = "";
stories.forEach((item, index) => {
    const stories = document.querySelector(".stories");
    const story = document.createElement("div");
    story.setAttribute("class", "story");
    story.setAttribute("id", `${index}`);
    const data = `<div class="info">
                                <div class="profile-picture">
                                    <img id="${index}"
                                        src=${item.userImage} />
                                </div>

                                <p class="name">${item.userName}</p>
                            </div>`;
    story.innerHTML = data;
    story.style.background = `url("${item.storyImage}") no-repeat center center/cover`;
    stories.append(story);
});

document.querySelector(".stories").addEventListener("click", (dets) => {
    document.querySelector(".story-popup").style.display = "grid";
    document.querySelector(".story-card").style.background = `url("${
        stories[dets.target.parentElement.id].storyImage
    }") no-repeat center center/cover`;
    setTimeout(() => {
        document.querySelector(".story-popup").style.display = "none";
    }, 3000);
});

// =======================LOGIN ACTION PAGE==========================================

const loginBtn = document.querySelector("#login-btn");
const loginPopup = document.querySelector(".login");

const openLoginModal = () => {
    loginPopup.style.display = "grid";
};

const closeLoginModal = (e) => {
    if (e.target.classList == "login") loginPopup.style.display = "none";
};

loginBtn.addEventListener("click", openLoginModal);
loginPopup.addEventListener("click", closeLoginModal);

// =======================SIGNUP ACTION PAGE==========================================

const signupBtn = document.querySelector("#signup-btn");
const loginBtn2 = document.querySelector("#login-btn2");
const SignupPopup = document.querySelector(".signup");

const openSignupModal = () => {
    SignupPopup.style.display = "grid";
    loginPopup.style.display = "none";
};

const openLoginModal2 = () => {
    loginPopup.style.display = "grid";
    SignupPopup.style.display = "none";
};

const closeSignupModal = (e) => {
    if (e.target.classList == "signup") SignupPopup.style.display = "none";
};

signupBtn.addEventListener("click", openSignupModal);
loginBtn2.addEventListener("click", openLoginModal2);
SignupPopup.addEventListener("click", closeSignupModal);

// =========================================Profile Page actions==========================

const profileBtn = document.querySelector("#profile-action");
const profileBtn2 = document.querySelector("#profile-a");
const profilePopup = document.querySelector(".profile-page");

const openProfileModal = () => {
    profilePopup.style.display = "grid";
};

const closeProfileModal = (e) => {
    if (e.target.classList == "profile-page")
        profilePopup.style.display = "none";
};

profileBtn.addEventListener("click", openProfileModal);
profileBtn2.addEventListener("click", openProfileModal);
profilePopup.addEventListener("click", closeProfileModal);

// =====================================Requests===================

const request = document.querySelector(".request");
const requestAction = document.querySelector(".request-action");
const accept = document.querySelector("#accept");
const decline = document.querySelector("#decline");

accept.addEventListener("click", () => {
    requestAction.style.display = "none";
});
decline.addEventListener("click", () => {
    request.style.display = "none";
});

// ==============================================ABOUT PAGE======================
const aboutAction = document.querySelector("#about");
const aboutPopUp = document.querySelector(".about-us");

const openAboutModal = () => {
    aboutPopUp.style.display = "grid";
};

const closeAboutModal = (e) => {
    if (e.target.classList == "about-us") aboutPopUp.style.display = "none";
};

aboutAction.addEventListener("click", openAboutModal);
aboutPopUp.addEventListener("click", closeAboutModal);

// =========================Update profile and update password PAGE======================
const updateProfileAction = document.querySelector("#update-profile-id");
const updatePasswordAction = document.querySelector("#update-password-id");
const updateProfilePopUp = document.querySelector(".update-profile");
const updatePasswordPopUp = document.querySelector(".update-password");

const openUpdateProfileModal = () => {
    updateProfilePopUp.style.display = "grid";
};

const closeUpdateProfileModal = (e) => {
    if (e.target.classList == "update-profile")
        updateProfilePopUp.style.display = "none";
};

const openUpdatePasswordModal = () => {
    updatePasswordPopUp.style.display = "grid";
};

const closeUpdatePasswordModal = (e) => {
    if (e.target.classList == "update-password")
        updatePasswordPopUp.style.display = "none";
};

updateProfileAction.addEventListener("click", openUpdateProfileModal);
updateProfilePopUp.addEventListener("click", closeUpdateProfileModal);
updatePasswordAction.addEventListener("click", openUpdatePasswordModal);
updatePasswordPopUp.addEventListener("click", closeUpdatePasswordModal);

// ------------------------------------Like event------------------

const like = document.querySelector(".like");

like.addEventListener("click", () => {
    like.classList.toggle("like-active");
});

// -------------------------LOGIN CLOSE-------------------
const closeLoginAction = document.querySelector("#login");
const loginPopUp2 = document.querySelector(".login");
const closeLoginModal2 = (e) => {
    loginPopUp2.style.display = "none";
};
closeLoginAction.addEventListener("click", closeLoginModal2);

// -------------------------signup CLOSE-------------------
const closeSignUpAction = document.querySelector("#signup");
const signupPopUp2 = document.querySelector(".signup");
const closeSignUpModal2 = (e) => {
    signupPopUp2.style.display = "none";
};
closeSignUpAction.addEventListener("click", closeSignUpModal2);
