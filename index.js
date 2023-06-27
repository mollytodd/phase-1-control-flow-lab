function scuberGreetingForFeet(distanceInFeet)
{ 
  
   if(distanceInFeet<=400) return "This one is on me!"
  else if (distanceInFeet>400 && distanceInFeet <=2000)
 return "That will be twenty bucks."
  else if (distanceInFeet>2000) 
 return "I will gladly take your thirty bucks."
else if (distanceInFeet > 2000 && distanceInFeet <= 2500) 
  return "No can do.";
 
}

function ternaryCheckCity(city) {
  return city === 'NYC' ? "Ok, sounds good." : "No go.";
  
}

ternaryCheckCity('NYC');

function switchOnCharmFromTip(tip) {
  if (tip === 'generous')
  return "Thank you so much.";
   else return "Bye.";
}


  

  
switchOnCharmFromTip('generous');
