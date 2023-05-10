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
  alert("please enter dhayi name")}
else{

 let pwd=prompt("Please Enter Password To add dhayiname");
      //confirmation password
      if (pwd!= "tntj"){
        
        if (confirm("ℹ️INCORRECT PASSWORD❗  \n Press 'OK' to TRY AGAIN 🔄...")) {
          validate();
        }else{
          alert("If You Want To Add dhayiname,Please Enter The Correct Password...");
        }
        
      }else{
        alert("_AUTHENTICATED SUCCESSFULLY_✔️")
       save(name,datetime);
       alert("Added successfully....")

       name.value='';}
     }
   }


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
     <td><button type="submit" onclick="removeData('${this.key}')">del</button></td>
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
function removeData(key){
    console.log()
  

   firebase.database().ref('DHAYINAMES/'+key).remove();
   return false;
  }
