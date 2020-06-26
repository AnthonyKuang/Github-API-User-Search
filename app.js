const searchUser = document.querySelector('#searchUser');
const github = new Github;
const ui = new UI;

searchUser.addEventListener('keyup', (e) => {
  const userText = e.target.value;

  if (userText !== '') {
    github.getUser(userText)
      .then(data => {;
        if(data.profile.message === 'Not Found') {
          // Show alert
        } else {
          ui.showProfile(data.profile);
        }
      }) 
  } else {
    // Clear profile
  }
});