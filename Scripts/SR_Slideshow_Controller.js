//Check which page the slideshow controller was called from, and set captions accordingly
if (document.documentElement.style.getPropertyValue("--Current_Page") == "Stones") {
      var Slide_Captions_1 = ["Stones on display", "Green Agate", "Crystal animals", "Celestite", "Carnelian?", "Brown Crystal?", "Jasper?"];
      var Slide_Captions_2 = ["Jewelry on display", "Bracelet kaliedoscope", "Moldavite", "Celestite", "Carnelian?", "Brown Crystal?", "Jasper?"];
}
else if (document.documentElement.style.getPropertyValue("--Current_Page") == "Decor") {
      var Slide_Captions_1 = ["Stones on display", "Green Agate", "Crystal animals", "Celestite", "Carnelian?", "Brown Crystal?", "Jasper?"];
      var Slide_Captions_2 = ["Stones on display", "Green Agate", "Crystal animals", "Celestite", "Carnelian?", "Brown Crystal?", "Jasper?"];
}

//Initialize and 'start the heart'
propose("--Heartbeat", 0);
propose("--Slide_Autoplay_1", true);
propose("--Slide_Index_1", 0);
propose("--Slide_Autoplay_2", true);
propose("--Slide_Index_2", -1);
Slideshow(1);
Slideshow(0);
Heartbeat();

//A regularly timed alternating pulse so that the slideshows maintain sync (2 beats every 5 seconds)
function Heartbeat() {
      if (document.documentElement.style.getPropertyValue("--Heartbeat") == "0") {
            propose("--Heartbeat", 1);
            Slideshow_Autoplay(1);
      }
      else {
            propose("--Heartbeat", 0);
            Slideshow_Autoplay(0);
      }
      wait(2500).then(() => { Heartbeat(); });
}

//Slide controllers
function Slideshow(beat) {
      switch (beat) {
            case 0:
                  var slides = document.getElementById("Slideshow_1").getElementsByClassName("Slide");
                  var dots = document.getElementById("Slideshow_1").getElementsByClassName("Dot");
                  for (i = 0; i < slides.length; i++) {
                        if (Number(document.documentElement.style.getPropertyValue("--Slide_Index_1")) == i) {
                              slides[i].style.display = "block";
                              dots[i].className += " active";
                              document.getElementById("Slideshow_Caption_1").innerHTML = Slide_Captions_1[i];
                        }
                        else {
                              slides[i].style.display = "none";
                              dots[i].className = dots[i].className.replace(" active", "");
                        }
                  }
                  break;
            case 1:
                  var slides = document.getElementById("Slideshow_2").getElementsByClassName("Slide");
                  var dots = document.getElementById("Slideshow_2").getElementsByClassName("Dot");
                  for (i = 0; i < slides.length; i++) {
                        if (Number(document.documentElement.style.getPropertyValue("--Slide_Index_2")) == i) {
                              slides[i].style.display = "block";
                              dots[i].className += " active";
                              document.getElementById("Slideshow_Caption_2").innerHTML = Slide_Captions_2[i];
                        }
                        else {
                              slides[i].style.display = "none";
                              dots[i].className = dots[i].className.replace(" active", "");
                        }
                  }
                  break;
      }
}
function Slideshow_Autoplay(beat) {
      switch (beat){
            case 0:
                  if (document.documentElement.style.getPropertyValue("--Slide_Autoplay_1") == "true") {
                        var Index = Number(document.documentElement.style.getPropertyValue("--Slide_Index_1")) + 1;
                        if (Index > Slide_Captions_1.length - 1) Index = 0;
                        propose("--Slide_Index_1", Index);
                        Slideshow(0);
                  }
                  break;
            case 1:
                  if (document.documentElement.style.getPropertyValue("--Slide_Autoplay_2") == "true") {
                        var Index = Number(document.documentElement.style.getPropertyValue("--Slide_Index_2")) + 1;
                        if (Index > Slide_Captions_2.length - 1) Index = 0;
                        propose("--Slide_Index_2", Index);
                        Slideshow(1);
                  }
                  break;
      }
}

//Button controllers
function Slideshow_Back(beat) {
      switch (beat) {
            case 0:
                  var Index = Number(document.documentElement.style.getPropertyValue("--Slide_Index_1")) - 1;
                  if (Index < 0) Index = document.getElementById("Slideshow_1").getElementsByClassName("Slide").length - 1;
                  propose("--Slide_Index_1", Index);
                  propose("--Slide_Autoplay_1", false);
                  if (!document.getElementById("Toggle_1").className.includes(" active")) document.getElementById("Toggle_1").className += " active";
                  Slideshow(0);
                  break;
            case 1:
                  var Index = Number(document.documentElement.style.getPropertyValue("--Slide_Index_2")) - 1;
                  if (Index < 0) Index = document.getElementById("Slideshow_2").getElementsByClassName("Slide").length - 1;
                  propose("--Slide_Index_2", Index);
                  propose("--Slide_Autoplay_2", false);
                  if (!document.getElementById("Toggle_2").className.includes(" active")) document.getElementById("Toggle_2").className += " active";
                  Slideshow(1);
                  break;
      }
}
function Slideshow_Forward(beat) {
      switch (beat) {
            case 0:
                  var Index = Number(document.documentElement.style.getPropertyValue("--Slide_Index_1")) + 1;
                  if (Index > document.getElementById("Slideshow_1").getElementsByClassName("Slide").length - 1) Index = 0;
                  propose("--Slide_Index_1", Index);
                  propose("--Slide_Autoplay_1", false);
                  if (!document.getElementById("Toggle_1").className.includes(" active")) document.getElementById("Toggle_1").className += " active";
                  Slideshow(0);
                  break;
            case 1:
                  var Index = Number(document.documentElement.style.getPropertyValue("--Slide_Index_2")) + 1;
                  if (Index > document.getElementById("Slideshow_2").getElementsByClassName("Slide").length - 1) Index = 0;
                  propose("--Slide_Index_2", Index);
                  propose("--Slide_Autoplay_2", false);
                  if (!document.getElementById("Toggle_2").className.includes(" active")) document.getElementById("Toggle_2").className += " active";
                  Slideshow(1);
                  break;
      }
}
function Slideshow_Pick(beat, Index) {
      switch (beat) {
            case 0:
                  if (Index > document.getElementById("Slideshow_1").getElementsByClassName("Slide").length - 1) Index = 0;
                  else if (Index < 0) Index = document.getElementById("Slideshow_1").getElementsByClassName("Slide").length - 1;
                  propose("--Slide_Index_1", Index);
                  propose("--Slide_Autoplay_1", false);
                  if (!document.getElementById("Toggle_1").className.includes(" active")) document.getElementById("Toggle_1").className += " active";
                  Slideshow(0);
                  break;
            case 1:
                  if (Index > document.getElementById("Slideshow_2").getElementsByClassName("Slide").length - 1) Index = 0;
                  else if (Index < 0) Index = document.getElementById("Slideshow_2").getElementsByClassName("Slide").length - 1;
                  propose("--Slide_Index_2", Index);
                  propose("--Slide_Autoplay_2", false);
                  if (!document.getElementById("Toggle_2").className.includes(" active")) document.getElementById("Toggle_2").className += " active";
                  Slideshow(1);
                  break;
      }
}
function Slideshow_Toggle(beat) {
      switch (beat){
            case 0:
                  if (document.documentElement.style.getPropertyValue("--Slide_Autoplay_1") == "true") {
                        propose("--Slide_Autoplay_1", false);
                        if (!document.getElementById("Toggle_1").className.includes(" active")) document.getElementById("Toggle_1").className += " active";
                  }
                  else {
                        propose("--Slide_Autoplay_1", true);
                        document.getElementById("Toggle_1").className = document.getElementById("Toggle_1").className.replace(" active", "");
                  }
                  break;
            case 1:
                  if (document.documentElement.style.getPropertyValue("--Slide_Autoplay_2") == "true") {
                        propose("--Slide_Autoplay_2", false);
                        if (!document.getElementById("Toggle_2").className.includes(" active")) document.getElementById("Toggle_2").className += " active";
                  }
                  else {
                        propose("--Slide_Autoplay_2", true);
                        document.getElementById("Toggle_2").className = document.getElementById("Toggle_2").className.replace(" active", "");
                  }
                  break;
      }
}