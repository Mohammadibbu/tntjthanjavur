// Get the button:
let mybutton = document.getElementById("myBtntop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Your web app's Firebase configuration
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

var contactformDB=firebase.database().ref("DHAYINAMES");
document.getElementById('form').addEventListener('submit',validate);


document.getElementById("add").addEventListener("click",function(event){event.preventDefault()}); 
const table=document.getElementById("tableBody");

 function validate() {

  // body...
var datetime=new Date().toString(); 

var name=document.getElementById('name');

const save= (name,datetime)=>{
  var newform=contactformDB.push();
  newform.set({
    dhayiname :name.value,
    datetime:datetime
  });
  };
if(name.value===""){
  alert("Please Enter Dhayi Name")}
else{
//recently changed...................................
 let pwd=prompt("Please Enter Password To Add \n"+name.value);
      //confirmation password
      if (pwd!= "tntj"){
        
        if (confirm("ℹ️INCORRECT PASSWORD❗  \n Press 'OK' to TRY AGAIN 🔄...")) {
          validate();
        }else{
          alert("If You Want To Add "+name.value+"\nPlease Enter The Correct Password...");
          name.value='';
        }
        
      }else{
        // alert("_AUTHENTICATED SUCCESSFULLY_✔️")
       save(name,datetime);
       setTimeout(()=>{alert("Added successfully....")},100);

       document.getElementById('added_message').style.display="block";
       setTimeout(()=>{document.getElementById('added_message').style.display = "none" ;},3000);

       name.value='';}
     }
   }
  //      document.getElementById('added_message').style.display="block";
  //     setTimeout(()=>{document.getElementById('added_message').style.display = "none" ;},4500);
  // save(name,datetime);
  // name.value='';}}

//read data in database(firebase)
contactformDB.on('value',(snapshot)=>{
  var i=1;
   table.innerHTML ="";
  snapshot.forEach((usersdata)=>{
    key = usersdata.key;
    uservalue=usersdata.val();
    document.getElementById("fetch").style.display="none";
     table.innerHTML +=`<tr>
     <td>${i}</td><td>${uservalue.dhayiname}</td>
     <td onclick="removeData('${this.key}','${this.uservalue.dhayiname}')" id="del_btn">Delete
     </tr>`;
 document.getElementById("total").innerHTML=i;

    i++;
// console.log(key)
  })
})

console.log(table)
//remove data in firebase

function removeData(key,uservalue){
      // console.log()
       // if (confirm("Do You Want To Delete?"+"\n"+uservalue)) {
        let pwd=prompt("Please Enter Password To Delete" +"\n"+uservalue);
      //confirmation password
      if (pwd!= "tntj"){
        
        if (confirm("ℹ️INCORRECT PASSWORD❗ \n Press 'OK' to TRY AGAIN 🔄...")) {
          removeData(key,uservalue);
        }else{
          alert("If You Want To Delete\n"+uservalue+"\nPlease Enter The Correct Password...");
        }
      }else{
        // alert("_AUTHENTICATED SUCCESSFULLY_✔️")
        navigator.vibrate([50,100,50]);
       setTimeout(()=>{alert("Deleted Successfully...")},250);

        
//     // for ipaddress   
     //         $.getJSON("https://api.ipify.org?format=json", function(data) {
         
     //    // Setting text of element P with id gfg
     //    var ipaddress= data.ip;
     //    var DeletedTime=new Date().toString(); 

     //    // console.log(a)

     //  var ipDBform=firebase.database().ref("Dhayikal names-Deleted Time");
     // const save= (ip,DeletedTime,uservalue)=>{
     // var ipform=ipDBform.push();
     // ipform.set({
     //   IP  :ip,
     //   DeletedName:uservalue,
     //   DeletedTime:DeletedTime
     //  }); };
     //  save(ipaddress,DeletedTime,uservalue)     
     //  })
         
          document.getElementById('delete_message').style.display="block";
         setTimeout(()=>{document.getElementById('delete_message').style.display = "none" ;},4500);
           firebase.database().ref('DHAYINAMES/'+key).remove();
           return false;
          
        }

}
//nav bar responsive
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

 // feedback confirmation jummah.js
  function feedback(){
       if (confirm("opening Gmail or Email")) {
          document.getElementById('fb').href ="mailto:ithris615@yahoo.com";
          navigator.vibrate([50,100,50]);
          setTimeout(()=>{document.getElementById('fb').href ="#";},2000);
        }else{document.getElementById('fb').href ="#";navigator.vibrate([100]);}
}


//browser check
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
            window.open('error.html','_self')

             setTimeout(()=>{location.reload();},2000);

        }
     }
