// const form = document.querySelector('form');
// const emailInput = document.querySelector('#email');
// const passwordInput = document.querySelector('#password');

// form.addEventListener('submit', event => {
//   event.preventDefault();

//   const email = emailInput.value;
//   const password = passwordInput.value;
//   const button = event.target.querySelector('button[type="submit"]');

//   if (button.textContent === 'Login') {
//     logIn(email, password);
//   } else if (button.textContent === 'Sign Up') {
//     signUp(email, password);
//   }
// });

// const signUp = (email, password) => {
//   // Fetch the existing users data
//   fetch('users.json')
//     .then(response => response.json())
//     .then(data => {
//       const existingUser = data.find(user => user.email === email);
//       if (existingUser) {
//         alert('Email already taken');
//         return;
//       }

//       // Add the new user to the users data
//       data.push({ email, password });

//       // Save the updated users data
//       fetch('users.json', {
//         method: 'PUT',
//         body: JSON.stringify(data)
//       })
//         .then(response => {
//           if (!response.ok) {
//             throw new Error('Failed to update the users data');
//           }

//           alert('Sign up successful');
//         })
//         .catch(error => {
//           console.error(error);
//           alert('Failed to sign up');
//         });
//     })
//     .catch(error => {
//       console.error(error);
//       alert('Failed to fetch the users data');
//     });
// };

// const logIn = (email, password) => {
//   // Fetch the existing users data
//   fetch('users.json')
//     .then(response => response.json())
//     .then(data => {
//       const user = data.find(user => user.email === email && user.password === password);
//       if (!user) {
//         alert('Incorrect email or password');
//         return;
//       }

//       alert('Login successful');
//       window.location.href = 'home.html';
//     })
//     .catch(error => {
//       console.error(error);
//       alert('Failed to fetch the users data');
//     });
// };


// Function to log in a user

function login() {
  // Get the email and password entered by the user
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  
  // Fetch the users data from the users.json file
  fetch("users.json")
  .then(response => response.json())
  .then(data => {
  // Loop through all the users in the JSON data
  for (let user of data) {
  // Check if the email and password match with any of the users
  if (user.email === email && user.password === password) {
  // If the user is a student, redirect to the student home page
  if (user.role === "student") {
  window.location.href = "studenthome.html";
  break;
  }
  // If the user is a teacher, redirect to the teacher home page
  else if (user.role === "teacher") {
  window.location.href = "teacherhome.html";
  break;
  }
  }
  }
  });
  }
  
  // Function to sign out a user
  function signOut() {
  // Redirect the user to the login page
  window.location.href = "index.html";
  }