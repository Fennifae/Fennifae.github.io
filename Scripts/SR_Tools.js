//'propose' - A useful tool for assigning global variables on the fly.
//Adds a global variable to :root with the value specified. If the variable already exists, it is overwritten.
function propose(variable, mode) {
      document.documentElement.style.setProperty(variable, mode);
}

//'wait' - A useful tool for delaying execution.
//Allows the use of: wait(5000).then(() => { function(); });.
function wait(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
}

//'getMode' - A tool for tracking the display mode.
//Switches between Classic and Compact mode while updating the mode holder.
function getMode() {
      var mode = getComputedStyle(document.documentElement).getPropertyValue("--Mode");
      if (mode == "Desktop" || mode == "Laptop") {
            propose("--Visual_Style", "Classic");
      } else {
            propose("--Visual_Style", "Compact");
      }
}
window.onload = getMode();

//These can be used to compare with the viewer's width and height to detect if the website is windowed or fullscreen.
propose("--Device_Width", screen.width);
propose("--Device_Height", screen.height);

/* Parallaxer
window.onload = function () {
   window.onscroll = function () {
      var focus = document.getElementById("Main_Panel").style;
      var h = document.documentElement, 
      b = document.body,
      st = 'scrollTop',
      sh = 'scrollHeight';
      var percent = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
      
      var a = Number(focus.backgroundSize.substring(0, focus.backgroundSize.length - 1));
      var b = Number(focus.height.substring(0, focus.height.length - 1));
      {
         document.getElementById("Main_Panel").style.top = (percent * 1.25) + "%";
         document.getElementById("Main_Panel").style.backgroundPositionY = (percent * 1) + "%";
      }
   };
};
*/
