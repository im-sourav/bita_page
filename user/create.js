const first = document.getElementById("first");
const last = document.getElementById("last");
const email = document.getElementById("email");
const password = document.getElementById("password");
const coPassword = document.getElementById("coPassword");

// format name
first.addEventListener("keyup", () => {
  first.value = namef(first.value);
});
last.addEventListener("keyup", () => {
  last.value = namef(last.value);
});

function namef(val) {
  if (val != 0) {
    return format(val);
  }
}

// chack passowrd and confirm password is match
coPassword.addEventListener("keyup", () => {
  if (password.value != coPassword.value)
    coPassword.style.borderColor = "#ff0000";
  else coPassword.style.borderColor = "#00000055";
});
password.addEventListener("keyup", () => {
  if (password.value == coPassword.value)
    coPassword.style.borderColor = "#00000055";
});
const form = document.getElementById("post");

const database = firebase.database();
let dataRef = database.ref("users");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const first = document.getElementById("first").value;
  const last = document.getElementById("last").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const gender =
    document.querySelectorAll(".gender")[
      (() => {
        for (let i = 0; i < document.querySelectorAll(".gender").length; i++) {
          if (document.querySelectorAll(".gn")[i].checked === true) {
            return i;
          }
        }
      })()
    ].innerText;

  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      let databaseRef = database
        .ref()
        .child(`users/${firebase.auth().currentUser.uid}`);
      let userData = {
        Email: email,
        First_Name: format(first),
        Gender: gender,
        Last_Login: Date.now(),
        Last_Name: format(last),
        Password: stringTo36(password),
        Uid: firebase.auth().currentUser.uid,
      };
      databaseRef.set(userData);
      location.replace("index.html");
    })
    .catch((error) => {
      document.getElementById("#error").innerHTML = `* ${error.message}`;
      errorMessage.style.background = "#ffffff";
    });
});

// text formating
function format(text) {
  let str = text.toLowerCase();
  return str[0].toUpperCase() + str.slice(1);
}

// decript password
function stringTo36(val) {
  return val
    .split("")
    .map(function (char) {
      return char.charCodeAt(0).toString(36);
    })
    .join("");
}

