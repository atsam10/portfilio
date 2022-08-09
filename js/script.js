// for scroll effect
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
};


function Get_info(work_place){
  var   wp = document.getElementById("work_place");
  var   wr = document.getElementById("work_role");
  var   wpe = document.getElementById("work_period");
  var   wd = document.getElementById("work_description");

  if(work_place = "909IT"){
      wr.innerHTML = "Software Developer (Intern)";
      wpe.innerHTML = "Feb 2022 - Present (6 months +)"

  }


}

//________________________________________
//test for adding work a
// idk but sth like this garney ho


function myF(){
  var x = document.getElementById("work_description");
  x.innerHTML = ` <ul> 
     <li>HTML</li>
     <li>Cascading Style Sheets (CSS)</li>
     <li>PHP </li>
     <li>PhpMyAdmin</li>
     <li>JavaScript</li>
     <li>JavaScript frameworks </li>
     <li>Java</li>
 </ul>;`
}


// function myFunction() {
//   var x = document.getElementById("myDIV");
//   if (x.innerHTML === "Hello") {
//     x.innerHTML = ` <ul> 
//     <li>HTML</li>
//     <li>Cascading Style Sheets (CSS)</li>
//     <li>PHP </li>
//     <li>PhpMyAdmin</li>
//     <li>JavaScript</li>
//     <li>JavaScript frameworks </li>
//     <li>Java</li>
// </ul>;`
//   } else {
//     x.innerHTML = "Hello";
//   }
// }
//_____________________________________