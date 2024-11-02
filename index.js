document.addEventListener("DOMContentLoaded", function() {
  const loginPage = document.getElementById('login-page');
  const signupPage = document.getElementById('signup-page');
  const homePage = document.getElementById('home-page');

  document.getElementById('show-signup').addEventListener('click', function() {
    loginPage.classList.add('hidden');
    signupPage.classList.remove('hidden');
  });

  document.getElementById('show-login').addEventListener('click', function() {
    signupPage.classList.add('hidden');
    loginPage.classList.remove('hidden');
  });

  document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    loginPage.classList.add('hidden');
    homePage.classList.remove('hidden');
  });

  document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault();
    signupPage.classList.add('hidden');
    homePage.classList.remove('hidden');
  });

  const sections = document.querySelectorAll('.section');
  const content = document.getElementById('content');

  sections.forEach(section => {
    section.addEventListener('click', function(e) {
      e.preventDefault();
      loadSection(section.dataset.section);
    });
  });

  function loadSection(section) {
    switch(section) {
      case 'education':
        content.innerHTML = `
          <h3>Education</h3>
          <p>Select your level of education:</p>
          <ul>
            <li><a href="#">B.Tech</a></li>
            <li><a href="#">M.Tech</a></li>
            <li><a href="#">PhD</a></li>
            <li><a href="#">M.Sc</a></li>
          </ul>
        `;
        break;
      case 'projects':
        content.innerHTML = <h3>Projects</h3><p>Explore top-rated projects here...</p>;
        break;
      // Add cases for other sections similarly
      default:
        content.innerHTML = <h3>Welcome</h3><p>Select an option to explore.</p>;
    }
  }
});
