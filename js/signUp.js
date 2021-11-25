"use strict";



//Constantes con elementos form e inputs del formulario SIGN UP (crear datos del usuario)
const signUpFormEl = document.querySelector(".js-signUpForm");
const signUpNameInput =document.querySelector(".js-signUpNameInput");
const signUpSurnameInput = document.querySelector(".js-signUpSurnameInput");
const signUpDniInput = document.querySelector(".js-signUpDniInput");
const signUpEmailInput = document.querySelector(".js-signUpEmailInput");
const signUpTelInput = document.querySelector(".js-signUpTelInput");
const signUpPassInput = document.querySelector(".js-signUpPassInput");
const signUpaddInput= document.querySelector(".js-signUpAddInput");
const signUpDeptInput = document.querySelector(".js-signUpDeptInput");
const signUpRoleInput = document.querySelector(".js-signUpRoleInput");
const signUpBtn= document.querySelector(".js-signUpBtn");
const responseTextEl = document.querySelector(".js-response");

//Prevent default para evitar auto-enviado de datos
function submitPrevent(event) {
    event.preventDefault();
  }
  
  signUpFormEl.addEventListener("submit", submitPrevent);


  //Función handler SignUp button 

  function handleSignUpBtn() {
    const workerData = getWorkerData();
    postDataFetch(workerData);
    if (postDataFetch) {
        alert("su cuenta se ha creado correctamente");
        window.location.href = "./login.html"
        }

    }

   //Función para obtener los values de los inputs insertados por el usuario
   function getWorkerData() {
       
    console.log(signUpDniInput.value);
    console.log(signUpPassInput.value);
    console.log(signUpNameInput.value);
    console.log(signUpSurnameInput.value);
    console.log(signUpEmailInput.value);
    console.log(signUpTelInput.value);
    console.log(signUpaddInput.value);
    console.log(signUpRoleInput.value);
    console.log(signUpDniInput.value);
    
        const myData = {
          dni: signUpDniInput.value,
          pass:signUpPassInput.value,
          nombre: signUpNameInput.value,
          apellidos: signUpSurnameInput.value,
          email: signUpEmailInput.value,
          telefono: signUpTelInput.value,
          direccion:signUpaddInput.value,
          departamento: signUpDeptInput,
          cargo: signUpRoleInput.value
        }

        console.log(myData);

      return myData;
  }

  
//Evento botón submit enviado datos del form
signUpBtn.addEventListener("click", handleSignUpBtn);



// POST OK
const postDataFetch = async (data) => {
  console.log(data);
  console.log(JSON.stringify(data));

  const url = `http://localhost:8080/api/trabajadores`;
  const res = await fetch(url, {
    method: "POST",
    contentType: "application.json",
    headers: {
      'Content-type': 'application/json',
    },
    //mode: "no-cors",
    body: JSON.stringify(data)
  }).catch((error) => {
    responseTextEl.innerHTML = `Ha habido un error con el fetch: Error: ${error.message}`;
  });

  console.log(res, 'consolelog')

  if (!responseTextEl.innerHTML === "") {
    return false;
  } 



  //const data = await res.json();

 //console.log(data, 'response2');

};
