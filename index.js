function scuberGreetingForFeet(someValue){
  // Write your code here!
  let result
  if (someValue <=400) {
    result = 'This one is on me!';
    return result
  }
  else if (someValue > 2000 && someValue < 2500) {
    result = 'I will gladly take your thirty bucks.';
    return result
  }
  else if (someValue >2500) {
    return 'No can do.';
  }  
}
function ternaryCheckCity(city){
return city === 'NYC'?  "Ok, sounds good." : "No go."
}
function switchOnCharmFromTip(tip) {
  switch (tip) {
  case 'generous':
  return 'Thank you so much.'
  case 'not as generous':
   return 'Thank you.'
  default:
    return 'Bye.'
}
}




 

  
