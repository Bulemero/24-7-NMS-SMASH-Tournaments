//CREATE VARIABLES

var myVueObject = new Vue({
    el: "#app",
    data: {

        active: 'home',
        players: [
            {
                GoogleLogin: "Joel Humphries",
                DyscordUserNTag: "JoelBenj2002#1083",
                SwitchFC: "SW-8012-1748-3614",
                Timezone: "UTC",
            }, {
                GoogleLogin: "Dragonite13",
                DyscordUserNTag: "Dragonite13#7324",
                SwitchFC: "SW-2640-1308-6327",
                Timezone: "UTC",
            }, {
                GoogleLogin: "The green luma",
                DyscordUserNTag: "The Green Luma#8222",
                SwitchFC: "SW-3281-9397-9217",
                Timezone: "UTC",
            }, {
                GoogleLogin: "Hellboy Graham",
                DyscordUserNTag: "Hellboy#1222",
                SwitchFC: "SW-6514-2138-4224",
                Timezone: "UTC",
            }, {
                GoogleLogin: "Smear Loaf",
                DyscordUserNTag: "smear#1349",
                SwitchFC: "SW-6518-1017-9898",
                Timezone: "UTC",
            }, {
                GoogleLogin: "Miss Medic",
                DyscordUserNTag: "Mad Miss Medic#7143",
                SwitchFC: "SW-3631-8403-9423",
                Timezone: "UTC",
            }, {
                GoogleLogin: "Dystify Music",
                DyscordUserNTag: "Dystify#7850",
                SwitchFC: "SW-2029-0243-8915",
                Timezone: "CET",
            }, {
                GoogleLogin: "Jasper",
                DyscordUserNTag: "Jasper#7698",
                SwitchFC: "SW-7153-7390-4629",
                Timezone: "CET",
            }, {
                GoogleLogin: "Avoltance",
                DyscordUserNTag: "Avoltance#9425",
                SwitchFC: "SW-8047-4227-4612",
                Timezone: "CET",
            }, {
                GoogleLogin: "Inazuma78",
                DyscordUserNTag: "Inazuma78#2821",
                SwitchFC: "SW-2798-8681-8584",
                Timezone: "CET",
            }, {
                GoogleLogin: "Satoya",
                DyscordUserNTag: "Satoya#6075",
                SwitchFC: "SW-1931-4642-4127",
                Timezone: "CET",
            }, {
                GoogleLogin: "Yoep van Loenen",
                DyscordUserNTag: "Torchic#4875",
                SwitchFC: "SW-2600-4002-2262",
                Timezone: "CET",
            }, {
                GoogleLogin: "Mythra",
                DyscordUserNTag: "Mythra#2506",
                SwitchFC: "SW-5943-3671-6212",
                Timezone: "CET",
            }, {
                GoogleLogin: "Nintenrock",
                DyscordUserNTag: "Nintenrock#5379",
                SwitchFC: "SW-5268-5453-5899",
                Timezone: "CET",
            }, {
                GoogleLogin: "Paul Lenihan-Leveille",
                DyscordUserNTag: "Paullen#8743",
                SwitchFC: "SW-7568-3065-1217",
                Timezone: "CET",
            }, {
                GoogleLogin: "Andy_MineP",
                DyscordUserNTag: "Andy_MineP#3890",
                SwitchFC: "SW-5852-5354-4801",
                Timezone: "CET",
            },

    ]
    },

    methods: {

        //document.querySelectorAll("[data-page]")

        setPage(activePage) {

            this.active = activePage;

        }
    }


})



//CALL FUNCTIONS

getPosts();


//DISPLAY FUNCTIONS


//document.getElementById("login").addEventListener("click", login);
//document.getElementById("create-post").addEventListener("click", writeNewPost);




function login() {

    // https://firebase.google.com/docs/auth/web/google-signin

    //Provider

    var provider = new firebase.auth.GoogleAuthProvider();

    //How to signin

    firebase.auth().signInWithPopup(provider)


        //to push messages into chat page

        .then(function (result) {
            if (result.credential) {
                getPosts()
                document.getElementById("login").style.display = "none"
            }
        })


        .catch(console.log("error"))


    console.log("login")




}


function writeNewPost() {

    // https://firebase.google.com/docs/database/web/read-and-write

    //Values from HTML

    var text = document.getElementById("textInput").value;
    var name = firebase.auth().currentUser.displayName;
    var avatar = firebase.auth().currentUser.photoURL;

    var objectToSend = {
        message: text,
        author: name,
        image: avatar,
        time: Date.now()
    };

    //change the ref below to create different databases on firebase

    firebase.database().ref("chupiChat2").push(objectToSend);

    console.log(objectToSend);


    // Values


    console.log("write");

}


function getPosts() {

    //Get messages

    firebase.database().ref('chupiChat2').on('value', function (data) {
        var posts = document.getElementById("posts");
        posts.innerHTML = "";
        console.log(data.val());
        var messages = data.val();

        for (var key in messages) {
            var element = messages[key];

            var text = document.createElement("div");
            if (element.author == firebase.auth().currentUser.displayName) {
                text.classList.add("ownMessage");
            } else {
                text.classList.add("foreignerMessage");

            }
            var divBox = document.createElement("div");
            divBox.setAttribute("class", "avatar")
            var name = document.createElement("p");
            
            var logo = document.createElement("img");
            logo.setAttribute("src", element.image);
            logo.setAttribute("alt", "avatar");
            
            var mess = document.createElement("p");
            
            var newDate = new Date(element.time);
            console.log(formatDate(newDate));
            
            mess.append(element.message);
            name.append(element.author);
            divBox.append(logo, name);

            text.append(divBox, mess, formatDate(newDate));
            posts.append(text);

        }
        
        document.getElementById("chat").scrollTop = document.getElementById("chat").scrollHeight
    })

    console.log("getting posts");

}


function reset() {
    var resetButton = document.getElementById("textInput");
    if (resetButton) {
        resetButton.value = "";
    }
}

function formatDate(date) {

    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    const strTime = hours + ":" + minutes + " " + ampm;
    return (
//        date.getMonth() +
//        1 +
//        "/" +
//        date.getDate() +
//        "/" +
//        date.getFullYear() +
//        "  " +
        strTime
    );
}

//if (window.navigator.standalone) {
//    // The app is running in standalone mode.
//}
//

