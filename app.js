const form = document.querySelector('form');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');

form.addEventListener('submit', event => {
  event.preventDefault();

  const email = emailInput.value;
  const password = passwordInput.value;
  const button = event.target.querySelector('button[type="submit"]');

  if (button.textContent === 'Login') {
    logIn(email, password);
  } else if (button.textContent === 'Sign Up') {
    signUp(email, password);
  }
});

const signUp = (email, password) => {
  // Fetch the existing users data
  fetch('users.json')
    .then(response => response.json())
    .then(data => {
      const existingUser = data.find(user => user.email === email);
      if (existingUser) {
        alert('Email already taken');
        return;
      }

      // Add the new user to the users data
      data.push({ email, password });

      // Save the updated users data
      fetch('users.json', {
        method: 'PUT',
        body: JSON.stringify(data)
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to update the users data');
          }

          alert('Sign up successful');
        })
        .catch(error => {
          console.error(error);
          alert('Failed to sign up');
        });
    })
    .catch(error => {
      console.error(error);
      alert('Failed to fetch the users data');
    });
};

const logIn = (email, password) => {
  // Fetch the existing users data
  fetch('users.json')
    .then(response => response.json())
    .then(data => {
      const user = data.find(user => user.email === email && user.password === password);
      if (!user) {
        alert('Incorrect email or password');
        return;
      }

      alert('Login successful');
    })
    .catch(error => {
      console.error(error);
      alert('Failed to fetch the users data');
    });
};
