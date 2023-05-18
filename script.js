 
 
//inialize firebase

const firebaseConfig = {
    apiKey: "AIzaSyAKc72biSrwu8AndfjL3CVCPu9q-65bEVU",
    authDomain: "jummah-70c65.firebaseapp.com",
    projectId: "jummah-70c65",
  databaseURL: "    https://jummah-70c65-default-rtdb.firebaseio.com/",
    storageBucket: "jummah-70c65.appspot.com",
    messagingSenderId: "79719605617",
    appId: "1:79719605617:web:b21b6ca95d718d627582d0"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

  //DHAYI names fetch
var contactformDB=firebase.database().ref("DHAYINAMES");
contactformDB.on('value',(snapshot)=>{
  var i=1;
  var optionsfirebase="";
  snapshot.forEach((usersdata)=>{
    key = usersdata.key;
    uservalue=usersdata.val();
     optionsfirebase +=`
  <option value='${i}'>${uservalue.dhayiname}</option>`;
       i++;
    // console.log(key)
    // console.log(usersdata)
    // console.log(uservalue.dhayiname)
  })
   //remove duplicate values........
$(document).ready(function(){
$('select').on('change', function(event ) {
   var prevValue = $(this).data('previous');
$('select').not(this).find('option[value="'+prevValue+'"]').removeAttr('disabled');    
   var value = $(this).val();
  $(this).data('previous',value); $('select').not(this).find('option[value="'+value+'"]').attr('disabled', 'disabled');
});
});
    var dhayi_names=`<select>
    <option >NIL</option>
     <optgroup label="---தாஃயிக்களின் பெயர்கள்---">
    ${optionsfirebase}</optgroup></select>`
    // console.log(optionsfirebase)
    document.getElementById("kilai_1").insertAdjacentHTML("afterbegin",dhayi_names);
 document.getElementById("kilai_2").insertAdjacentHTML("afterbegin",dhayi_names);
 document.getElementById("kilai_3").insertAdjacentHTML("afterbegin",dhayi_names);
 document.getElementById("kilai_4").insertAdjacentHTML("afterbegin",dhayi_names);
 document.getElementById("kilai_5").insertAdjacentHTML("afterbegin",dhayi_names);
 document.getElementById("kilai_6").insertAdjacentHTML("afterbegin",dhayi_names);
 document.getElementById("kilai_7").insertAdjacentHTML("afterbegin",dhayi_names);
 document.getElementById("kilai_8").insertAdjacentHTML("afterbegin",dhayi_names);
 document.getElementById("kilai_9").insertAdjacentHTML("afterbegin",dhayi_names);
 document.getElementById("kilai_10").insertAdjacentHTML("afterbegin",dhayi_names);
 document.getElementById("kilai_11").insertAdjacentHTML("afterbegin",dhayi_names);
 document.getElementById("kilai_12").insertAdjacentHTML("afterbegin",dhayi_names);
 document.getElementById("kilai_13").insertAdjacentHTML("afterbegin",dhayi_names);
 document.getElementById("kilai_14").insertAdjacentHTML("afterbegin",dhayi_names);
 document.getElementById("kilai_15").insertAdjacentHTML("afterbegin",dhayi_names);
 document.getElementById("kilai_16").insertAdjacentHTML("afterbegin",dhayi_names);
 document.getElementById("kilai_17").insertAdjacentHTML("afterbegin",dhayi_names);
 document.getElementById("kilai_18").insertAdjacentHTML("afterbegin",dhayi_names);
 document.getElementById("kilai_19").insertAdjacentHTML("afterbegin",dhayi_names);
 document.getElementById("kilai_20").insertAdjacentHTML("afterbegin",dhayi_names);
 document.getElementById("kilai_21").insertAdjacentHTML("afterbegin",dhayi_names);
 document.getElementById("kilai_22").insertAdjacentHTML("afterbegin",dhayi_names);
 document.getElementById("kilai_23").insertAdjacentHTML("afterbegin",dhayi_names);
 document.getElementById("kilai_24").insertAdjacentHTML("afterbegin",dhayi_names);
  
// console.log(key)

})
  // dhayi names change HERE....
  
 
 // page preventDefault 
 document.getElementById("submitbtn").addEventListener("click",function(event){event.preventDefault()});
 // validate the form
 function validateloginpage() {
  let content_table=document.getElementById('content');
  let btn_table=document.getElementById('button');
  let invalid=document.getElementById('check');
  let valid=document.getElementById('success');
  let loginpage=document.getElementById('form_container');
   let userName=document.getElementById('uname');
   let pass_word=document.getElementById('password');
   let loginbtn=document.getElementById('submitbtn');
   // CHANGE HERE user name and pass word!
   var admin= "admin";
   var pass= "tntj";
  // check the user name and password...
  if (userName.value != admin || pass_word.value != pass ) {
    //vibrate
     navigator.vibrate([350]);
    // border colors
    userName.style.border= "2px solid red";
        pass_word.style.border = "2px solid red";
        // outline colors
        userName.style.outline= "2px solid red";
        pass_word.style.outline = "2px solid red";
        //animation
        userName.style. animation = "shake 0.2s ease-in-out 0s 2";
        pass_word.style.animation="shake 0.2s ease-in-out 0s 2";
        invalid.style.animation= "shake 0.2s ease-in-out 0s 2";
         loginbtn.style.background ="red";
       invalid.style.display = "block";
  //login failed Error message

    function loginfailed(){
        invalid.style.display = "none";
        userName.style.border= "none";
        pass_word.style.border = "none";
        userName.style.outline= "none";
        pass_word.style.outline = "none";
         loginbtn.style.background ="yellow";
       userName.focus();

  }
     setTimeout(loginfailed,1500);
        // alert("Incorrect Details")
        userName.value='';
        pass_word.value='';
  }
  else if (userName.value == admin || pass_word.value == pass ) {
         //vibrate
        navigator.vibrate([200,50,200,50,200]);

        userName.style.border= "4px solid #29f013";
        pass_word.style.border = "4px solid #29f013";
        userName.style.outline= "2px solid green";
        pass_word.style.outline = "2px solid green";
        valid.style.display = "block";
         loginbtn.style.color ="white";
         loginbtn.style.background ="#29f013";
  
        valid.style. animation = "shake 1s ease-in-out 0s 5";
        valid.focus();
        //alert("✳️👍Login Successfully👍✳️");
        //login success message
        function loginsuccess(){
          loginbtn.style.color ="black";
          loginbtn.style.background ="yellow";
        content_table.style.display = "block" ;
          btn_table.style.display = "block";
          loginpage.style.display= "none";
        document.getElementById('input-file').style.display = "block";
        document.getElementById('dhayilistlink').style.display = "block";
        document.getElementById('navpdf').style.display = "block";

        }
      setTimeout(loginsuccess,1500);
  }
  //unnecessary part
  else{
       alert("SYSTEM ERROR ! !")
          
  }
 }
 //show password
function showpassword() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    navigator.vibrate([50]);
    x.type = "text";
  } else {
    navigator.vibrate([50]);
    x.type = "password";
  }
}

//Session timeout
function refresh(){
    navigator.vibrate([200]);
    alert("_SESSION_EXPIRED_\n\n_PLEASE RE-LOGIN🔄_");
    location.reload();
    }
//print the page
function printing(){
       //vibrate
       navigator.vibrate([50]);

      let pwd=prompt("Please Enter Password To download 'PDF' File");
      var session_expired=document.getElementById('session');
      //confirmation password
      if (pwd!= "tntj"){
        
        if (confirm("ℹ️INCORRECT PASSWORD❗  \n Press 'OK' to TRY AGAIN 🔄...")) {
          printing();
        }else{
          alert("If You Want To Download PDF file,Please Enter The Correct Password...");
        }
        
      }else{
        alert("_AUTHENTICATED SUCCESSFULLY_✔️\n\nReady to Previewing your PDF File...")
        print();
     //    // for ip address
     //  $.getJSON("https://api.ipify.org?format=json", function(data) {
         
     //    // Setting text of element P with id gfg
     //    var ipaddress= data.ip;
     //    var pdfdownloadTime=new Date().toString(); 

     //    // console.log(a)

     //  var ipDBform=firebase.database().ref("PdfDownloadTime");
     // const save= (ip,PdfDownloadTime)=>{
     // var ipform=ipDBform.push();
     // ipform.set({
     //   IP  :ip,
     //   PdfDownloadTime:PdfDownloadTime
     //  }); };
     //  save(ipaddress,pdfdownloadTime)     
     //  })
       setTimeout(refresh,50000);
       setTimeout(()=>{session_expired.style.display = "block" ;},42000);
     }
   }



   //on online
function online(){
      // alert("🌐Back online...");
       //vibrate
       navigator.vibrate([100,100,100]);

      var online=document.getElementById('online');
      var offline=document.getElementById('offline');
      offline.style.display="none";
      online.style.display="block"
      setTimeout(()=>{online.style.display="none";},2000);
    }
    //on offline
    function offline(){
       //vibrate
      navigator.vibrate([200,100,200]);

      // alert("OOPS ! 😯\n Something Went Wrong!\nPlease,Check Your Network Connection....\n_ERROR_CONNECTION_");
       var online=document.getElementById('online');
      var offline=document.getElementById('offline');
      offline.style.display="block";
    }
 
 

 // feedback confirmation
  function feedback(){
       if (confirm("Opening Gmail or Email")) {
          document.getElementById('fb').href ="mailto:ithris615@yahoo.com";
          navigator.vibrate([50,100,50]);
          setTimeout(()=>{document.getElementById('fb').href ="#";},2000);
        }else{document.getElementById('fb').href ="#";navigator.vibrate([100]);}
}
    

// function autoClick(){
//         $("#dwnld").click();
//       }
//       $(document).ready(function(){
//         var element = $("#content");

//         $("#dwnld").on('click', function(){
//            // document.getElementById('downloadsucc').style.display="block";
//           // setTimeout(()=>{document.getElementById('downloadsucc').style.display="none";},5000);
//           html2canvas(element, {
//               onrendered: function(canvas) {
//               var imageData = canvas.toDataURL("image/jpg");
//               var newData = imageData.replace(/^data:image\/jpg/, "data:application/octet-stream");
//              $("#dwnld").attr("download", "Jummah Chart").attr("href", newData);
             
//             }
//           });
//         });
//       });

$(window).on('scroll',function(){
            if($(window).scrollTop()){
                $('nav').addClass('black');
            }
            else{
                $('nav').removeClass('black');
            }
        })
  /*menu button onclick function*/         $(document).ready(function(){
                $('.menu h4').click(function(){
                    $("nav ul").toggleClass("active")
            })
            })


  function checkBrowser(){
        var browsername=platform.name;
        console.log(browsername)
        if (platform.name==="Chrome Mobile"||platform.name==="Chrome"||platform.name==="Microsoft Edge"||platform.name==="Opera Mobile"||platform.name==="") {
            console.log("its chrome")
               }else if( platform.name==="Samsung Internet"){
                           alert("SAMSUNG INTERNET BROWSER \n Please switch dark mode to light mode in your Browser Settings or mobile settings,in dark mode this webpage doesn't work properly.\nwe recommend the chrome browser to Access this Webpage :)")

               }
        else{
             // alert("please open this website in chrome or install chrome")
             // document.getElementById('body').style.display="none";
            window.open('error.html','_self')
             setTimeout(()=>{location.reload();},2000);

        }
     }


function preview() {
    frame.style.display="block";
    document.getElementById('input-file').style.display="none"
    document.getElementById('choose_different').style.display="block"
    frame.src=URL.createObjectURL(event.target.files[0]);
 
  

}
function diff_file(){
    frame.src="";
    document.getElementById('input-file').style.display="block"
    document.getElementById('choose_different').style.display="none"

}
