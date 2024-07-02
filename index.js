function shout(string) {
    return string.toUpperCase();
  }
  function whisper(string) {
      return string.toLowerCase();
    }
  shout ("HELLO");
  whisper ("hello");
  function logShout(string) {
      const shoutedString = string.toUpperCase();
      console.log(shoutedString); 
      return shoutedString; // 
    }
  function logWhisper(string) {
      const whisperString = string.toLowerCase();
      console.log(whisperString); 
      return whisperString;  
    }
  function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()) {
      return "I can't hear you!";
      }
      if (string === string.toUpperCase()) {
        return"YES INDEED!";
        }
      else if (string.includes("Let's have dinner together!")) {
        return"I would love to!";
        }
      else {
        return "Unknown input";
        }
      console.log(whisper)
   }
  