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
var datetime=new Date().toString(); 

 function validate() {

  // body...

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

 let pwd=prompt("Please Enter Password To Add dhayiName");
      //confirmation password
      if (pwd!= "tntj"){
        
        if (confirm("ℹ️INCORRECT PASSWORD❗  \n Press 'OK' to TRY AGAIN 🔄...")) {
          validate();
        }else{
          alert("If You Want To Add dhayiname,Please Enter The Correct Password...");
          name.value='';
        }
        
      }else{
        alert("_AUTHENTICATED SUCCESSFULLY_✔️")
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
// function prompt1(){
//       let text;
//       let person=prompt("edit dhayi name :");
//       if (person==null||person=="")
//       {
//         text="";
        
//         if (confirm("if u want to edit dhayi  Name 😢")) {
//           prompt1();
//         }else{
//           alert("sorry, for the Trouble ! 🤞🤐");
//         }
        
//       }else{
//         text="Hello  "+ person +"! successfully edited";
//         alert(text);
//       }}
//  function editData(key){
//     prompt1();
//     console.log()
//    firebase.database().ref('DHAYINAMES/'+key).once('value',(snapshot)=>{
//    name.value=snapshot.val().dhayiname;

//  })
//  return false;
//  }
// console.log(table)
function removeData(key,uservalue){
      console.log()
       if (confirm("Do You Want To Delete?"+"\n"+uservalue)) {
         navigator.vibrate([50,100,50]);
       setTimeout(()=>{alert("Deleted Successfully...")},200);

         
          document.getElementById('delete_message').style.display="block";
         setTimeout(()=>{document.getElementById('delete_message').style.display = "none" ;},4500);
           firebase.database().ref('DHAYINAMES/'+key).remove();
           return false;
          
        }else{
          // else part
       // console.log(table)


        }

}
$(window).on('scroll',function(){
            if($(window).scrollTop()){
                $('nav').addClass('black');
            }
            else{
                $('nav').removeClass('black');
            }
        })
  /*menu button onclick function*/        
$(document).ready(function(){
                $('.menu h4').click(function(){
                    $("nav ul").toggleClass("active")
            })
            })
  
