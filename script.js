function warn(){
  console.warn("%c⚠️ WARNING ⚠️ \n%cDon't Paste Anything Here Except If You Know What You Are Doing \nSometime Hacker Will Convince You To Paste Scripts Here To Steal Personal Info! \nIf You Know What You Are Doing Come Work With Us At https://goldencube.dev",
    "color: red; font-size: 40px; font-weight: bold;",
    "color: #a2a8d3; font-size: 20px;");
    
}
warn()
setInterval(warn, 10000);
var a = "a"
var darkMode = false
if(document.cookie){
  let darkMode = document.cookie; 
}
darkModeBtn = document.getElementById('DarkModeBtn')


function changeBtn(){
  if(darkMode==false){ darkModeBtn.innerText = '☀️' }
  else{ darkModeBtn.innerText = '🌙' }
}
function toggleDarkMode(){
  if(darkMode==false){
    darkMode = true
    changeBtn()
    document.body.classList.toggle('dark-mode');
    document.cookie = "darkmode=true;path=/"
  }
  else{
    darkMode = false
    changeBtn()
    document.body.classList.toggle('dark-mode');
    document.cookie = "darkmode=false;path=/" 
  }
}
toggleDarkMode()
changeBtn()

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function addSlide(){
  plusSlides(1)
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

setInterval(addSlide, 10000); 


const translations = {
    en: {
      about: "Its a traditional guest house in Makrinitsa, just next to the famous main square of the village. You get to walk a traditional kalderimi- which is a path made of stone - to reach the astonishing view that the house offers. In the interior a series of windows give you a perfect view of the city of Volos and the sea laying in front. There will be no wasted day during your stay. Even bad weather like a storm is a special experience. I really love the house i am offering becouse it is my favorite part of my childhood. As a child i loved running on the traditional village paths. They may seem difficult but it's amazing how familiar you get and then love it!! I am up to help and answer any questions you might have during your stay. We can be in touch through telephone. its actually the place and the view - but also the main feeling you have when you are at mountain Pelion and its gem - Makrinitsa! its not easy to describe this feeling..!! It,s like living in heaven among clouds and birds.",
      directionsNav: "Directions",
      contactNav: "Contact",
      aboutTitle: "About Us",
      caption1: "Caption Text",
      caption2: "Caption Two",
      caption3: "Caption Three",
      dir1: "You will park in the village parking lot, and from there, the central cobblestone street begins at the village entrance, which leads to the square. Just before you reach the square, turn left at the point shown in the first photo",
      dir2:"Follow this cobblestone street.",
      dir4: "It's the one you see in the background (keep going to the left to find the entrance) The yard door is open, and the keys are on the window, above the main unit of the air conditioner."
    },
    el: {
      about: "Είναι ένας παραδοσιακός ξενώνας στη Μακρινίτσα, ακριβώς δίπλα στην διάσημη κεντρική πλατεία του χωριού. Θα περπατήσετε σε ένα παραδοσιακό καλντερίμι - που είναι ένα μονοπάτι από πέτρα - για να φτάσετε στην καταπληκτική θέα που προσφέρει το σπίτι. Στο εσωτερικό, μια σειρά παραθύρων σας δίνει μια τέλεια θέα της πόλης του Βόλου και της θάλασσας που απλώνεται μπροστά σας. Καμία μέρα δεν θα είναι χαμένη κατά τη διάρκεια της διαμονής σας. Ακόμα και ο κακός καιρός, όπως μια καταιγίδα, είναι μια ξεχωριστή εμπειρία. Αγαπώ πραγματικά το σπίτι που προσφέρω γιατί είναι το αγαπημένο μου μέρος από την παιδική μου ηλικία. Ως παιδί, μου άρεσε να τρέχω στα παραδοσιακά μονοπάτια του χωριού. Μπορεί να φαίνονται δύσκολα, αλλά είναι καταπληκτικό πώς τα συνηθίζεις και μετά τα αγαπάς!! Είμαι πρόθυμος να βοηθήσω και να απαντήσω σε οποιεσδήποτε ερωτήσεις μπορεί να έχετε κατά τη διάρκεια της διαμονής σας. Μπορούμε να είμαστε σε επαφή μέσω τηλεφώνου. Είναι πραγματικά ο τόπος και η θέα - αλλά και το κύριο συναίσθημα που έχεις όταν βρίσκεσαι στο βουνό Πήλιο και στο στολίδι του - τη Μακρινίτσα! Δεν είναι εύκολο να περιγράψεις αυτό το συναίσθημα...!! Είναι σαν να ζεις στον παράδεισο ανάμεσα στα σύννεφα και τα πουλιά.",
      directionsNav: "Οδηγίες",
      contactNav: "Επικοινωνία",
      aboutTitle: "Σχετικά με εμάς",
      caption1: "Κείμενο Λεζάντας",
      caption2: "Λεζάντα Δύο",
      caption3: "Λεζάντα Τρία",
      dir1: "Θα παρκάρετε στο πάρκινγκ του χωριού  πάρκινγκ και από εκεί ξεκινάει το κεντρικο καλντερίμι στην είσοδο του χωριού το οποίο οδηγεί στην πλατεία. Λίγο πριν φτάσετε στην πλατεία στρίβετε αριστερά στο σημείο που δείχνει η πρώτη φωτογραφία",
      dir2: "Ακολουθήστε αυτό το καλντερίμι",
      dir4: "Είναι αυτό που φαίνεται στο βάθος (συνεχίζετε προς τα αριστερά να βρείτε την είσοδο) Η πόρτα της αυλής είναι ακοιχτη και τα κλειδιά βρίσκονται στο παράθυρο , πάνω από την κεντρική μονάδα του κλιματιστικού"
    }
  };
  
  function switchLanguage() {
    const selectedLanguage = document.getElementById("language-select").value;
    const translationKeys = Object.keys(translations[selectedLanguage]);
    
    translationKeys.forEach(key => {
      const element = document.getElementById(key);
      if (element) {
        element.innerText = translations[selectedLanguage][key];
      }
    });
  }

function toggleDirections() {
  var slides = document.getElementById('slides');
  var controlls = document.getElementById('controlls');
  var directions = document.getElementById('directions');
  var dots = document.getElementById('dots');
  var about = document.getElementById('aboutDiv')
  var where = document.getElementById('where')
  var social = document.getElementById('social')

  if (slides.style.display === 'none') {
      slides.style.display = 'block'; // Show About page
      controlls.style.display = 'block'; // Show About page
      directions.style.display = 'none'; // Hide products list
      dots.style.display = 'block'; // Show Under Construction message
      about.style.display = 'block'
      where.style.display = 'block'
      social.style.display = 'block'
      //document.getElementById("directionsNav").href = "/index.html?";
  } else {
      slides.style.display = 'none'; // Hide About page
      controlls.style.display = 'none'; // Show About page
      directions.style.display = 'block'; // Show products list
      dots.style.display = 'none'; // Hide Under Construction message
      about.style.display = 'none'
      where.style.display = 'none'
      social.style.display = 'none'
      //document.getElementById("directionsNav").href = "/index.html?dir";
    }
}
