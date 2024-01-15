// Get the button:
let mybutton = document.getElementById("myBtntop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

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
  appId: "1:79719605617:web:b21b6ca95d718d627582d0",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var contactformDB = firebase.database().ref("DHAYINAMES");
document.getElementById("form").addEventListener("submit", validate);

document.getElementById("add").addEventListener("click", function (event) {
  event.preventDefault();
});
const table = document.getElementById("tableBody");

function validate() {
  // body...
  var datetime = new Date().toString();

  var name = document.getElementById("name");

  const save = (name, datetime) => {
    var newform = contactformDB.push();
    newform.set({
      dhayiname: name.value,
      datetime: datetime,
    });
  };
  if (name.value === "") {
    alert("Please Enter Dhayi Name");
  } else {
    let pwd = prompt("Please Enter Password To Add dhayiName");
    //confirmation password
    if (pwd != "tntj") {
      if (confirm("ℹ️INCORRECT PASSWORD❗  \n Press 'OK' to TRY AGAIN 🔄...")) {
        validate();
      } else {
        alert(
          "If You Want To Add dhayiname,Please Enter The Correct Password..."
        );
        name.value = "";
      }
    } else {
      alert("_AUTHENTICATED SUCCESSFULLY_✔️");
      save(name, datetime);
      setTimeout(() => {
        alert("Added successfully....");
      }, 100);

      document.getElementById("added_message").style.display = "block";
      setTimeout(() => {
        document.getElementById("added_message").style.display = "none";
      }, 3000);

      name.value = "";
    }
  }
}
//      document.getElementById('added_message').style.display="block";
//     setTimeout(()=>{document.getElementById('added_message').style.display = "none" ;},4500);
// save(name,datetime);
// name.value='';}}

//read data in database(firebase)
contactformDB.on("value", (snapshot) => {
  var i = 1;
  table.innerHTML = "";
  snapshot.forEach((usersdata) => {
    key = usersdata.key;
    uservalue = usersdata.val();
    document.getElementById("fetch").style.display = "none";
    table.innerHTML += `<tr>
     <td>${i}</td><td>${uservalue.dhayiname}</td>
     <td onclick="removeData('${this.key}','${this.uservalue.dhayiname}')" id="del_btn">Delete
     </tr>`;
    document.getElementById("total").innerHTML = i;

    i++;
    // console.log(key)
  });
});

console.log(table);
//remove data in firebase

function removeData(key, uservalue) {
  // console.log()
  // if (confirm("Do You Want To Delete?"+"\n"+uservalue)) {
  let pwd = prompt("Please Enter Password To Delete" + "\n" + uservalue);
  //confirmation password
  if (pwd != "tntj") {
    if (confirm("ℹ️INCORRECT PASSWORD❗ \n Press 'OK' to TRY AGAIN 🔄...")) {
      removeData(key, uservalue);
    } else {
      alert(
        "If You Want To Delete\n" +
          uservalue +
          "\nPlease Enter The Correct Password..."
      );
    }
  } else {
    // alert("_AUTHENTICATED SUCCESSFULLY_✔️")
    navigator.vibrate([50, 100, 50]);
    setTimeout(() => {
      alert("Deleted Successfully...");
    }, 250);

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

    document.getElementById("delete_message").style.display = "block";
    setTimeout(() => {
      document.getElementById("delete_message").style.display = "none";
    }, 4500);
    firebase
      .database()
      .ref("DHAYINAMES/" + key)
      .remove();
    return false;
  }
}
//nav bar responsive
$(window).on("scroll", function () {
  if ($(window).scrollTop()) {
    $("nav").addClass("black");
  } else {
    $("nav").removeClass("black");
  }
});
/*menu button onclick function*/ $(document).ready(function () {
  $(".menu h4").click(function () {
    $("nav ul").toggleClass("active");
  });
});

// feedback confirmation jummah.js
function feedback() {
  if (confirm("opening Gmail or Email")) {
    document.getElementById("fb").href = "mailto:ithris615@yahoo.com";
    navigator.vibrate([50, 100, 50]);
    setTimeout(() => {
      document.getElementById("fb").href = "#";
    }, 2000);
  } else {
    document.getElementById("fb").href = "#";
    navigator.vibrate([100]);
  }
}

//browser check
function checkBrowser() {
  var browsername = platform.name;
  console.log(browsername);
  if (
    platform.name === "Chrome Mobile" ||
    platform.name === "Chrome" ||
    platform.name === "Microsoft Edge" ||
    platform.name === "Opera Mobile" ||
    platform.name === ""
  ) {
    console.log("its chrome");
  } else if (platform.name === "Samsung Internet") {
    alert(
      "SAMSUNG INTERNET BROWSER \n Please switch dark mode to light mode in your Browser Settings or mobile settings,in dark mode this webpage doesn't work properly.\nwe recommend the chrome browser to Access this Webpage :)"
    );
  } else {
    // alert("please open this website in chrome or install chrome")
    window.open("error.html", "_self");

    setTimeout(() => {
      location.reload();
    }, 2000);
  }
}
//-------------options in Datalist------------------------------------------
const DhayinamesSuggestion = `அப்துல் அஜீஸ் - 9363437661, அம்ஜத்கான் - 9715886738, அப்துர்ரஹ்மான் பா - 9363692343, அப்துர்ரஹ்மான் முத்துப்பேட்டை -8098032083, அப்துல்ஹமீத் - 9789704924, அப்துல் மாலிக் - 8122625262, அப்துல்லாஹ் -8438236558, அப்துல் ரசீது MISc - 7358860163, அஷ்ரஃப் அலீ M.Sc -6382546220, அதிரை ஹபிபு ரஹ்மான் - 9894906011, அகமது பதுருதீன் -9500811178, அன்சர் MISc - 6383280448, அராஃபத் - 9585758578, ஆவணம் ரியாஸ் B.Tech - 9994585432, ஆபிதீன் B.A - 9566788134, இனாமுல் MISc -9791759705, இக்பால் - 8754869528, இலியாஸ் MISc - 8668055942,ஃபஜுல் ரஹ்மான் - 8939198103, சபீர் அலி MISc - 9600951725, சலீம் MISc- 9500796289, சிக்கந்தர் - 9384357357, செய்யத் முஸ்தபா B.Tech -9715113441, சேக் அப்துல்காதர் B.E - 8807137959, தவ்ஃபீக் இமாம் -9751872376, நவாப்ஷா - 8838370094, நுஹ்மான் - 8870880618,பட்டுக்கோட்டை பாரூக் - 6382236258, பாரீஸ் B.Sc - 8270912463, பாரூக் MISc - 9994256863, பாரி - 7094907792, பக்கீர் முகமது - 9994469222,பஷீர் - 9944884147, முகமது அதிரை - 9600649363, முகமது ஒலி -9952056444,முஜிபுர் ரஹ்மான் - 9994588100, ரஹீமுல்லாஹ் - 8610657269,ராஜிக் முகமது - 9943447195, வல்லம் பாட்சா - 9443188653, வல்லம் ஜாபர்- 9944191505, ஜாபர் அலி - 9361384359, ஜாபர் சாதிக் - 9940946309,ஜியாவுதீன் MBA, LLB - 9791904549, ஜுபைர் DME - 8012413053,ஹிதாயதுல்லஹ் - 9787537620, ஹஃபீல் B.Tech - 9384656794, ஹபிப் புதுப்பட்டினம் - 9486605911, ஷிஹாபுதீன் - 6381386077, MISc Student -8526132121`;
const DhayinamesSuggestionArray = DhayinamesSuggestion.split(",");
const datalistDN = document.getElementById("dhayi_names");
DhayinamesSuggestionArray.forEach((items) => {
  datalistDN.insertAdjacentHTML(
    "beforeend",
    `<option value="${items}"></option>`
  );
});
//console.log(datalistDN);
