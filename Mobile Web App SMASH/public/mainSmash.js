//CREATE VARIABLES

var myVueObject = new Vue({
    el: "#app",
    data: {

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
        
        setPage(activePage){
            console.log("Hi",activePage)
        }
    }
})



//CALL FUNCTIONS





//DISPLAY FUNCTIONS

/* EXAMPLE OF HIDE/SHOW FUNCTION

<button onclick="myFunction()">Click Me</button>

<div id="myDIV">
  This is my DIV element.
</div>



function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

*/

/*function hideNShowHo() {

    var toggle = document.getElementById("home");
    
    if (toggle.style.display === "none") {
        toggle.style.display = "block";
    } else {
        toggle.style.display = "none";
    }
}

function hideNShowRo() {

    var toggle = document.getElementById("rounds");
    
    if (toggle.style.display === "none") {
        toggle.style.display = "block";
    } else {
        toggle.style.display = "none";
    }
}


function hideNShowLe(){
    
    var toggle = document.getElementById("leaders");
    
    if (toggle.style.display === "none") {
        toggle.style.display = "block";
    } else {
        toggle.style.display = "none";
    } 
}

function hideNShowRules(){
    
    var toggle = document.getElementById("rules");
    
    if (toggle.style.display === "none") {
        toggle.style.display = "block";
    } else {
        toggle.style.display = "none";
    } 
    
}



function hideNShowAll(){
    
    var buttons = ["#home", "#rounds", "#leaders", "#rules"]; 
    
    for (i = 0; i < buttons.length; i++){
        
        if (buttons[i].style.display === "none") {
            buttons.style.display = "block";
        } else {
            buttons.style.display = "none";
        }
    }

}*/





