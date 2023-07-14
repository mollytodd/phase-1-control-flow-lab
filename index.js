function scuberGreetingForFeet(distanceInFeet) {;
  if (distanceInFeet <= 400) {
    return "This one is on me!";
  } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {;
    return "That will be twenty bucks.";
  } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {;
    return "I will gladly take your thirty bucks.";
  } else if (distanceInFeet > 2500) {;
    return "No can do.";
  }
}

function ternaryCheckCity(city) {;
  return city === ('NYC') ? ("Ok, sounds good.") : ("No go.");
}

function switchOnCharmFromTip(tipSize) {;
 if (tipSize === 'generous') {;
  return "Thank you so much.";
}
else if (tipSize === 'not as generous') {
  return "Thank you."
}
else
  return "Bye.";
}