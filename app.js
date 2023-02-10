let users = [
  {
    "id": 1,
    "username": "student1",
    "email": "student1@gmail.com",
    "password": "student123",
    "role": "student"
  },
  {
    "id": 2,
    "username": "teacher1",
    "email": "teacher1@gmail.com",
    "password": "teacher123",
    "role": "teacher"
  }
];

function validateLogin() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  for (let i = 0; i < users.length; i++) {
    if (email == users[i].email && password == users[i].password) {
      if (users[i].role == "student") {
        window.location.href = "studenthome.html";
        break;
      } else if (users[i].role == "teacher") {
        window.location.href = "teacherhome.html";
        break;
      }
    }
  }
  return false;
}

function logout() {
  // logic for logout
}
