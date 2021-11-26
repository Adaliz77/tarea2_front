//Constantes con elementos form e inputs del formulario LOGIN 
const loginFormEl = document.querySelector(".js-loginForm");
const loginEmailInput =document.querySelector(".js-loginEmailInput");
const loginPassInput = document.querySelector(".js-loginPassInput");
const loginResponseTextEl = document.querySelector(".js-login-response");
const loginBtnEl = document.querySelector(".js-loginBtn");

//Prevent default para evitar auto-enviado de datos
function submitPrevent(event) {
    event.preventDefault();
  }
  
  loginFormEl.addEventListener("submit", submitPrevent);


  //Función handler Login button 

  function handleLogin() {
    const loginData = getLoginData();
    const loginResponse = PostLoginFetch(loginData);
    //redirectUser(loginResponse);
     
  }
    
   //Función para obtener los values de los inputs insertados por el usuario
  function getLoginData() {
       
    console.log(loginEmailInput.value);
    console.log(loginPassInput.value);
    
    
        const myLoginData = {
          email: loginEmailInput.value,
          pass:loginPassInput.value,
         
        }

        console.log(myLoginData);

      return myLoginData;
  }

  function redirectUser(response) {
   

  }

//Evento botón submit enviado datos del form
loginBtnEl.addEventListener("click", handleLogin);


// POST LOGIN
const PostLoginFetch = async (data) => {
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
    alert(`Ha habido un error con el fetch: Error: ${error.message}`);
  });

  console.log(res, 'consolelog');

  //const redirection = res;

  if (res.ok) {
      if (res) {
        window.location.href = "./viewAdmin.html";
    }

    else if (!res) {
        window.location.href = "./viewWorker.html";
        
      }

      else {
            alert("no te has logueado correctamente");
      }


}

  

}
