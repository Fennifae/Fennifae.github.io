//Initializing the variables this way (as inline variables) allows for using selectors, like :root[style*="--variable: mode;"] #Nav
window.onload = propose("--Nav_Hover", false);
window.onload = propose("--Shade_Button_Hover", false);
window.onload = propose("--Shade_Open", false);
window.onload = propose("--Shade_Locked", false);
//The Nav bar prefab.
//Note that line feeds must be escaped with '\'
document.write('\
\
<table id="Nav" class="ContrastBox PrimaryFont ContrastGradient" onmouseenter="mouseEnterShade()" onmouseleave="mouseLeaveShade()">\
   <tr id="Nav_Row">\
      <td id="Nav_Cell">\
         <!-- Current page -->\
         <table class="Nav_Panel">\
            <tr>\
               <td id="Nav_Page_Icon">&nbsp;</td>\
               <td id="Nav_Page_Label" class="Nav_Label"></td>\
            </tr>\
         </table>\
         <!-- List of Buttons -->\
         <table id="Nav_Dropdown">\
            <tr>\
               <td id="Nav_Header_Holder"><div id="Nav_Header"><i>Sweet ReLEAF</i></div></td>\
            </tr>\
         </table>\
         <!-- Open/Close Shade -->\
         <table class="Nav_Panel">\
            <tr>\
               <td id="Nav_Shade_Label" class="Nav_Label">Pages</td>\
               <td id="Nav_Shade_Toggle" onmouseenter="mouseEnterShadeButton()" onmouseleave="mouseLeaveShadeButton()" onclick="toggleShade()"></td>\
            </tr>\
         </table>\
      </td>\
   </tr>\
   <tr>\
      <td id="Nav_Buttons_Holder">\
         <ul>\
            <li><button id="Nav_Button_1" class="InverseBox AccentFont Nav_Button" type="button"></button></li>\
            <li><button id="Nav_Button_2" class="InverseBox AccentFont Nav_Button" type="button"></button></li>\
            <li><button id="Nav_Button_3" class="InverseBox AccentFont Nav_Button" type="button"></button></li>\
            <li><button id="Nav_Button_4" class="InverseBox AccentFont Nav_Button" type="button"></button></li>\
         </ul>\
      </td>\
   </tr>\
</table>\
\
');
//Obtain the current page, establish which labels to use for nav buttons.
var path = window.location.pathname;
if (path.endsWith('/')) path = path.substring(0, path.length - 1);
var page = path.split('/').pop().split('.')[0];
var root = "getComputedStyle(document.documentElement).getPropertyValue('--Path')";
switch (page) {
   case "Home":
      propose("--Current_Page", "Home");
      document.getElementById("Nav_Page_Icon").style.backgroundImage = "url('../Images/Icons/Icon_Home.png')";
      document.getElementById("Nav_Page_Label").innerHTML = "Home";
      document.getElementById("Nav_Button_1").innerHTML = "Peace Lounge";
      document.getElementById("Nav_Button_1").setAttribute("onclick", "window.location.replace(" + root + " + '/Pages/Peace_Lounge.html')");
      document.getElementById("Nav_Button_2").innerHTML = "Stones";
      document.getElementById("Nav_Button_2").setAttribute("onclick", "window.location.replace(" + root + " + '/Pages/Stones.html')");
      document.getElementById("Nav_Button_3").innerHTML = "Decor";
      document.getElementById("Nav_Button_3").setAttribute("onclick", "window.location.replace(" + root + " + '/Pages/Decor.html')");
      document.getElementById("Nav_Button_4").innerHTML = "CBD";
      document.getElementById("Nav_Button_4").setAttribute("onclick", "window.location.replace(" + root + " + '/Pages/CBD.html')");
      break;

   case "Peace_Lounge":
      propose("--Current_Page", "Peace_Lounge");
      document.getElementById("Nav_Page_Icon").style.backgroundImage = "url('../Images/Icons/Icon_Peace_Lounge.png')";
      document.getElementById("Nav_Page_Label").innerHTML = "Peace Lounge";
      document.getElementById("Nav_Button_1").innerHTML = "Home";
      document.getElementById("Nav_Button_1").setAttribute("onclick", "window.location.replace(" + root + " + '/Pages/Home.html')");
      document.getElementById("Nav_Button_2").innerHTML = "Stones";
      document.getElementById("Nav_Button_2").setAttribute("onclick", "window.location.replace(" + root + " + '/Pages/Stones.html')");
      document.getElementById("Nav_Button_3").innerHTML = "Decor";
      document.getElementById("Nav_Button_3").setAttribute("onclick", "window.location.replace(" + root + " + '/Pages/Decor.html')");
      document.getElementById("Nav_Button_4").innerHTML = "CBD";
      document.getElementById("Nav_Button_4").setAttribute("onclick", "window.location.replace(" + root + " + '/Pages/CBD.html')");
      break;

   case "Stones":
      propose("--Current_Page", "Stones");
      document.getElementById("Nav_Page_Icon").style.backgroundImage = "url('../Images/Icons/Icon_Stones.png')";
      document.getElementById("Nav_Page_Label").innerHTML = "Stones";
      document.getElementById("Nav_Button_1").innerHTML = "Home";
      document.getElementById("Nav_Button_1").setAttribute("onclick", "window.location.replace(" + root + " + '/Pages/Home.html')");
      document.getElementById("Nav_Button_2").innerHTML = "Peace Lounge";
      document.getElementById("Nav_Button_2").setAttribute("onclick", "window.location.replace(" + root + " + '/Pages/Peace_Lounge.html')");
      document.getElementById("Nav_Button_3").innerHTML = "Decor";
      document.getElementById("Nav_Button_3").setAttribute("onclick", "window.location.replace(" + root + " + '/Pages/Decor.html')");
      document.getElementById("Nav_Button_4").innerHTML = "CBD";
      document.getElementById("Nav_Button_4").setAttribute("onclick", "window.location.replace(" + root + " + '/Pages/CBD.html')");
      break;

   case "Decor":
      propose("--Current_Page", "Decor");
      document.getElementById("Nav_Page_Icon").style.backgroundImage = "url('../Images/Icons/Icon_Decor.png')";
      document.getElementById("Nav_Page_Label").innerHTML = "Decor";
      document.getElementById("Nav_Button_1").innerHTML = "Home";
      document.getElementById("Nav_Button_1").setAttribute("onclick", "window.location.replace(" + root + " + '/Pages/Home.html')");
      document.getElementById("Nav_Button_2").innerHTML = "Peace Lounge";
      document.getElementById("Nav_Button_2").setAttribute("onclick", "window.location.replace(" + root + " + '/Pages/Peace_Lounge.html')");
      document.getElementById("Nav_Button_3").innerHTML = "Stones";
      document.getElementById("Nav_Button_3").setAttribute("onclick", "window.location.replace(" + root + " + '/Pages/Stones.html')");
      document.getElementById("Nav_Button_4").innerHTML = "CBD";
      document.getElementById("Nav_Button_4").setAttribute("onclick", "window.location.replace(" + root + " + '/Pages/CBD.html')");
      break;

   case "CBD":
      propose("--Current_Page", "CBD");
      document.getElementById("Nav_Page_Icon").style.backgroundImage = "url('../Images/Icons/Icon_CBD.png')";
      document.getElementById("Nav_Page_Label").innerHTML = "CBD";
      document.getElementById("Nav_Button_1").innerHTML = "Home";
      document.getElementById("Nav_Button_1").setAttribute("onclick", "window.location.replace(" + root + " + '/Pages/Home.html')");
      document.getElementById("Nav_Button_2").innerHTML = "Peace Lounge";
      document.getElementById("Nav_Button_2").setAttribute("onclick", "window.location.replace(" + root + " + '/Pages/Peace_Lounge.html')");
      document.getElementById("Nav_Button_3").innerHTML = "Stones";
      document.getElementById("Nav_Button_3").setAttribute("onclick", "window.location.replace(" + root + " + '/Pages/Stones.html')");
      document.getElementById("Nav_Button_4").innerHTML = "Decor";
      document.getElementById("Nav_Button_4").setAttribute("onclick", "window.location.replace(" + root + " + '/Pages/Decor.html')");
      break;
}

//Feature Highlight - A debugging tool for showcasing features
if (getComputedStyle(document.documentElement).getPropertyValue("--Feature_Highlight") == "true") {
   //Turn the background of the nav shade red if it is in auto-open mode
   var css = ":root[style*='--Nav_Hover: true;']:not([style*='--Shade_Button_Hover: true;'], [style*='--Shade_Open: false;'], [style*='--Shade_Locked: true;']) #Nav, :root[style*='--Shade_Locked: true;']:not([style*='--Shade_Open: false;']) #Nav { background-color: hsl(0, 25%, 70%) !important; }";
   //Turn the background of the nav bar purple when hovering over the shade button, with the shade not being locked.
   css += ":root[style*='--Shade_Button_Hover: true;']:not([style*='--Shade_Locked: true;']) #Nav { background-color: hsl(280, 25%, 70%) !important; }";
   //Turn the background of the nav shade green if it is locked open
   css += ":root[style*='--Shade_Locked: true;']:not([style*='--Shade_Open: false;']) #Nav { background-color: hsl(125, 25%, 70%) !important; }";
   //Turn the background of the nav shade blue when the shade is locked closed, waiting for the user to stop hovering over the nav bar before resuming auto-open.
   css += ":root[style*='--Shade_Locked: true;']:not([style*='--Shade_Open: true;']) #Nav { background-color: hsl(190, 25%, 70%) !important; }";
   var head = document.head || document.getElementsByTagName('head')[0], style = document.createElement('style');
   head.appendChild(style);
   style.appendChild(document.createTextNode(css));
}

//This is called when the user is hovering over the nav bar.
function mouseEnterShade() {
   propose("--Nav_Hover", true);
   propose("--Shade_Open", true);
}
//This is called when the user is no longer hovering over the nav bar, to prevent it from immediately re-opening if the shade button was pressed.
function mouseLeaveShade() {
   propose("--Nav_Hover", false);
   if (document.documentElement.style.getPropertyValue("--Shade_Open") == "false") {
      propose("--Shade_Locked", false);
   }
}
//This is called when the user is hovering over the shade button.
function mouseEnterShadeButton() {
   propose("--Shade_Button_Hover", true);
   if (document.documentElement.style.getPropertyValue("--Shade_Locked") == "false") {
      propose("--Shade_Open", false);
   }
}
//This is called when the user presses the shade button.
function toggleShade() {
   if (document.documentElement.style.getPropertyValue("--Shade_Open") == "true") {
      propose("--Shade_Open", false);
      propose("--Shade_Locked", true);
   }
   else {
      propose("--Shade_Open", true);
      propose("--Shade_Locked", true);
   }
}
//This is called when the user is no longer hovering over the shade button.
function mouseLeaveShadeButton() {
   propose("--Shade_Button_Hover", false);
   if (document.documentElement.style.getPropertyValue("--Shade_Locked") == "false") {
      mouseEnterShade();
   }
}