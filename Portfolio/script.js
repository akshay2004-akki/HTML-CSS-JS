// Sticky Navigation Menu JS Code
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
console.log(scrollBtn);
let val;
window.onscroll = function() {
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  }else{
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }

}

// Side NavIgation Menu JS Code
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = function(){
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
}
cancelBtn.onclick = function(){
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
}

// Side Navigation Bar Close While We Click On Navigation Links
let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click" , function() {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
  });
}

// .all{
//   /* background-image: url(https://media.istockphoto.com/id/1303977757/photo/light-blue-paper-texture-background.jpg?b=1&s=612x612&w=0&k=20&c=o8XgNPtqU18LaD8LGBC-tpB77kgnyMBGs_zRP87Ar9U=); */
//   height: 900px;
//   border-radius: 15px;
// }


// .mnu-btn{
//   color: purple;
//   text-decoration: none;
//   transition-duration: .3s;
  
// }
// .nameio{
//   color: paleturquoise;
// }
// #head{
//   margin-top: -8px;
//   position: fixed;
//   overflow: hidden;
//   top:-53px;
//   width: 100%;
//   background-color: #111;
//   height: 61px;
//   border-radius: 15px;
//   transition: top 0.3s;
//   transition: all;
//   transition:0.3s ;
// }
// #head a{
//   float:left;
//   display:block;
// }
// #head:hover{
//   transition: all;
//   transition:0.3s ;
//   background-color: #333;

// }

// .in{
//   color: lavender;
//   margin-top: -3px;
//   margin-left: 30px;
//   text-decoration: none;
//   width: 741px;
//   font-size: 30px;
// }
// .topmain{
//   /* background-image: url(./backmain.jpg); */
//   background-size: 100%;
//   height: 589px;
//   border-radius: 10px;
//   /* box-shadow: 7px 7px skyblue; */
// }
// #mynam{
//   color:purple;
//   font-size: 20px;
// }
// .iam{
//   color: #050400;
// }
// .hire{
//   background-color: #111;
//   width: 140px;
//   text-align: center;
//   padding: 2px;
//   border-radius: 10px;
//   font-size:21px;
//   color: white;
//   transition: all;
//   transition-duration: 0.5s;
//   text-decoration: none;
// }
// .hire:hover{
//   padding:6px;
//   background-color: #fff;
//   color: #050400;
// }
// .skip:focus{
//   left: 50%;
//   transform: translateX(-50%);
//   opacity: 1;
// }
// .abt{
//   color: black;
// }


// .logo{
//   height: 60px;
//   width: 60px;
//   border: 3px solid #808080;
//   border-radius: 15px;
// }

// .contain{
//   display: flex;
//   width: -52px;
//   justify-content: right;
//   gap: 60px;
//   font-weight: 700;
//   margin-right: 40px;
//   list-style: none;
//   font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
//   font-size: 19px;
//   transition: all;
  
  
// }
// .top{
//   font-size: 20px;
//   font-family: 'Times New Roman', Times, serif;
//   height: 77%;
//   width: 100%;
//   margin-top: -32px;
//   background:fixed;
// }


// .insidetop{
//   display: block;
//   gap: 500px;
//   margin-top: -61px;
//   /* margin-left: 116px; */
//   /* padding: 86px; */
//   width: 100%;
//   height: 104%;
//   background-image: url(./home3.jpg);
//   background-size: cover;
//   background-position: center center;
  
// }
// .contents{
//   padding: 100px;
//   width:24%;
// }
// .mypic{
//   border-radius: 5px;
//   transition: all;
//   transition-duration: 0.3s;
// }
// .mypic:hover{
//   border-radius: 15px;
//   height: 400px;
//   width: 210px;
// }

// .img1{
//   margin-top: 50px;
//   border: 3px solid #77b2cc;
//   border-radius: 300px;
// }
// .skills{
//   box-shadow: 5px 5px #f10202;
//   background-color: black;
//   border-radius: 7px;
//   height: 700px;
// }
// .sec1{
//   height: 330px;
//   /* background-color: #8ad4f7;
//   box-shadow: 3px 3px #024260 ; */
//   border-radius: 15px;
//   width: 100%;
//   font-family:Verdana, Geneva, Tahoma, sans-serif ;
  
// }
// .main{
//   display: flex;
//   gap: 261px;
//   margin-top: 40px;
//   height: 280px;
//   width: 1503px;
//   /* background-image: url(https://www.manfrottoschoolofxcellence.com/wp-content/uploads/2017/06/Header-Morning-Sky-Derwentwater.jpg); */
//   border-radius: 15px;
//   text-align: center;
// }
// .inside{
//   margin-top: 100px;
//   margin-left: 200px;

// }
// .chk{
//   color:#050400;
//   font-weight: 900;
//   font-family: 'Courier New', Courier, monospace;
//   width: 564px;
//   font-size: 20px;
  
// }
// h1{
//   color: #f30303 ;
//   font-family: cursive;
//   background-image: url(https://images.pexels.com/photos/1670187/pexels-photo-1670187.jpeg?auto=compress&cs=tinysrgb&w=600);
//   font-weight: 900;
//   font-size: 40px;
//   background-clip: text;
//   -webkit-background-clip: text;
//   color: transparent;
//   text-align: center;
// }
// .about{
//   color: #f30303 ;
//   font-family: cursive;
//   background-image: url(https://images.pexels.com/photos/1670187/pexels-photo-1670187.jpeg?auto=compress&cs=tinysrgb&w=600);
//   /* font-weight: ;
//   font-size: 40px; */
//   background-clip: text;
//   -webkit-background-clip: text;
//   color: transparent;
//   text-align: center;
//   font-family: 'Courier New', Courier, monospace;
//   margin-top: 5px;
// }
// .sk{
//   display: flex;
//   gap:400px;
//   margin-top: 60px;
//   /* background-color: #030000; */
// }
// .my1,.my2{
//   text-align: center;
// }
// .my1{
//   font-size: 30px;
// }
// .my2{
//   margin-top: 3px;
// }
// .para1{
//   width: 500px;
//   gap: 10px;
//   font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
//   font-size: 25px;
//   margin-left: 200px;
//   color: #fff;
// }
// .exp{
//   font-size: 30px;
//   margin-left: 50px;
//   margin-left: 200px;
//   color: #fff;

// }
// .prog{
//   font-size: 20px;
//   font-weight: 400;
//   color: #fff;
//   margin-left: -100px;
// }
// .more{
//   color: white;
//   text-decoration: none;
// }
// .mor{
//   width: 120px;
//   background-color: #f0a401;
//   color:  #fdfdfd;
//   padding: 9px;
//   border-radius: 15px;
//   align-items: center;
//   transition-property: all;
//   transition-duration: 0.5s;
  
// }
// .mor:hover{
//   background-color: #77b2cc;
//   color:#fa0707;
//   padding:12px;
//   box-shadow: 3px 3px #fff;
  
// }
// .lave{
//   color: #050400;
//   font-size: 55px;
//   font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
// }

// a{
//   color: rgb(3, 0, 0);
// }
// .cnct{
//   text-align: center;
// }
// .cncts{
//   text-align: center;
//   font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
// }
// .cnnct{
//   display: flex;
//   flex-direction: column;
//   gap: 70px;
//   margin-top: 100px;
//   margin-left: 200px;
//   font-weight: 900;
//   font-size: 20px;
// }
// .mor1{
//   color:  #fff;
//   background-color: #070000;
//   border: 3px solid black;
//   border-radius: 15px;
//   padding: 8px;
//   transition-property: all;
//   transition-duration: 0.3s;
//   text-decoration: none;

// }
// .mor2{

//   color:  #fff;
//   background-color: #070000;
//   border: 3px solid black;
//   border-radius: 15px;
//   padding: 8px;
//   transition-property: all;
//   transition-duration: 0.3s;
//   text-decoration: none;

// }
// .mor3{
//   color:  #fff;
//   background-color: #070000;
//   border: 3px solid black;
//   border-radius: 15px;
//   padding: 8px;
//   transition-property: all;
//   transition-duration: 0.3s;
//   text-decoration: none;

// }
// .github{
//   display: flex;
//   gap: 20px;
// }
// .mor4{
//   color:  #fff;
//   background-color: #070000;
//   border: 3px solid black;
//   border-radius: 15px;
//   padding: 8px;
//   transition-property: all;
//   transition-duration: 0.3s;
//   text-decoration: none;

// }
// .mor1:hover{
//   background-color: #77b2cc;
//   transition-property: all;
//   transition-duration: 0.3s;
//   color: black;
//   padding:12px;
//   box-shadow: 3px 3px #808080;
// }
// .mor2:hover{
//   background-color: #77b2cc;
//   transition-property: all;
//   transition-duration: 0.3s;
//   color: black;
//   padding:12px;
//   box-shadow: 3px 3px #808080;
// }
// .mor3:hover{
//   background-color: #77b2cc;
//   transition-property: all;
//   transition-duration: 0.3s;
//   color: black;
//   padding:12px;
//   box-shadow: 3px 3px #808080;
// }
// .mor4:hover{
//   background-color: #77b2cc;
//   transition-property: all;
//   transition-duration: 0.3s;
//   color: black;
//   padding:12px;
//   box-shadow: 3px 3px #808080;
// }
// .logo1{
//   display: flex;
//   gap: 20px;
//   margin-top: 30px;
// }
// .logo2{
//   display: flex;
//   gap: 20px;
// }
// .ilogo{
//   border-radius: 15px;
// }
// .tlogo{
//   display: flex;
//   gap: 20px;
// }
// .para3{
//   width: 500px;
//   margin-left: 600px;
//   margin-top: -300px;
//   font-size: 25px;
//   font-family: cursive;
// }
// .foot{
//   margin-top: 70px;
//   color: white;
//   background-color: black;
//   padding:1px;
//   border-radius: 15px;
// }
// .cpy{
//   text-align: center;
// }
// a:hover{
//   color: #fc0404;
// }
// marquee{
//   font-size: 25px;
//   color: #fa0707;
//   font-family: cursive;
//   border: 3px ;
//   border-radius: 15px;
//   width: 600px;;
//   color: #070000;
//   margin-left: 420px;
//   margin-bottom: 20px;
  
// }
// marquee{
//   animation: change 6s infinite;
// }
// @keyframes change{
//   0%{
//       color:#070000;
//   }
//   25%{
//       color: #f30303;
//   }
//   50%{
//       color: #a10a88;
//   }
//   75%{
//       color: #690339;
//   }
//   100%{
//       color: #3a0352;
//   }
// }

// #element{
//   font-size: 30px;
// }
// .typed{
//   font-size: 20px;
// }
// #element2{
//   font-size: 30px;
//   font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
//   color: #a10a88;
// }
// .typed2{
//   font-size: 20px;
// }

// .typewriter{
//   overflow: hidden; /* Ensures the content is not revealed until the animation */
//   border-right: .15em solid #060400; /* The typwriter cursor */
//   white-space:nowrap; /* Keeps the content on a single line */
//   margin: 0 auto; /* Gives that scrolling effect as the typing happens */
//   letter-spacing: .15em; /* Adjust as needed */
//   animation:typing 3.5s steps(40,end) infinite;
//   animation-delay: 2ms;
// }

// @keyframes typing {
//   from { width: 0 }
//   to { width: 100% }
// }

//    /* The typewriter cursor effect */
// @keyframes blink-caret {
//   from, to { border-color: transparent }
//   50% { border-color: #050400; }
// }
// .typed{
//   width:586px;
//   margin-left: 57px;
//   text-align: left;
//   margin-top: 60px;
//   padding: 70px;
// }

// .services{
//   width: auto;
//   background-color: #111;
//   height: 60%;
//   border-radius: 5px;
//   box-shadow: 5px 5px skyblue;
//   text-align: center;
// }

// .serv{
//   display: flex;
//   gap: 200px;
//   justify-content: center;
//   color: #fff;
//   font-weight:600;
// }

// .a{
//   background-color: #222;
//   margin-top: 5%;
//   text-align: center;
//   padding: 10px;
//   border-radius: 6px;
//   box-shadow: 3px 3px lavender;
//   width: 250px;
//   height: 190px;
//   transition: all;
//   transition-duration: .4s;
// }
// .b{
//   background-color: #222;
//   margin-top: 4%;
//   text-align: center;
//   padding: 10px;
//   border-radius: 6px;
//   box-shadow: 3px 3px lavender;
//   width: 250px;
//   height: 225px;
//   transition: all;
//   transition-duration: .4s;
// }
// .c{
//   background-color: #222;
//   margin-top: 5%;
//   text-align: center;
//   padding: 10px;
//   border-radius: 6px;
//   box-shadow: 3px 3px lavender;
//   width: 250px;
//   height: 190px;
//   transition: all;
//   transition-duration: .4s;
// }
// .d{
//   margin-left: 20px;
//   margin-right: 20px;
// }
// .a:hover{
//   background-color:#050400;
//   padding: 15px;
//   size: 10px;
// }
// .b:hover{
//   background-color:#050400;
//   padding: 15px;
// }
// .c:hover{
//   background-color:#050400;
//   padding: 15px;
// }


// .serve{
//   font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
//   color: white;
//   display:block ;
// }

// .editor,.design,.Teaching{
//   border-radius: 30px;
//   margin-top: 30px;
// }
// .mypic{
//   box-shadow:1px 1px lavender;
// }

