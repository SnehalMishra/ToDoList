// jshint esversion:6 
//  module.exports.getDate = getDate;   --> We can remove module. it will do the same thing.
//  function getDate(){  -->  We are removing this redundancy of getDate()... by making the function nameless. 

   
 exports.getDate = function(){

      const today = new Date();

      const options = {
      weekday : 'long',
      year : 'numeric',
      month: 'long', 
      day : 'numeric'
     };  
     
     return  today.toLocaleDateString("en-US", options);
}

 exports.getDay = function(){

    const today = new Date();

    const options = {
        weekday : 'long'
   };  
   
   return  today.toLocaleDateString("en-US", options);

}
 
 
 
 
 
 /* if(currentDay === 6 || currentDay === 0){
       day = "Weekend";
     } else {
       day = "Weekday";
      }
      if(currentDay === 0) {day = "Sunday";}
      if(currentDay === 1) {day = "Monday";}
      if(currentDay === 2) {day = "Tuesday";}
      if(currentDay === 3) {day = "Wednesday";}
      if(currentDay === 4) {day = "Thursday";}
      if(currentDay === 5) {day = "Friday";}
      if(currentDay === 6) {day = "Saturday";}
       */
   