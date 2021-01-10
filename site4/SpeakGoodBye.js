
// var byeSpeaker =

// DO NOT attach the speakWord variable to the 'byeSpeaker' object.
(function(window){
   var byeSpeaker = {};
   byeSpeaker.speakWord = "Good Bye";
   byeSpeaker.speak = function (name) {
    console.log(byeSpeaker.speakWord + " " + name);
  }
  window.byeSpeaker =byeSpeaker;
})(window);


// STEP 9: Expose the 'byeSpeaker' object to the global scope. Name it
// 'byeSpeaker' on the global scope as well.
// xxxx.xxxx = byeSpeaker;
