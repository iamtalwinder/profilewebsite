//common side navbar call

$(document).ready(function () {
  $(".sidenav").sidenav();
});

//Get the top button
var mybutton = document.getElementById("myBtn");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 350 ||
    document.documentElement.scrollTop > 350
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//Footer and Navbar

let header = $(`

<nav class="black">
  <div class="nav-wrapper">
    <a href="#!" class="brand-logo"
      ><img src="assets/images/logo.png"
    /></a>
    <a href="#" data-target="mobile-demo" class="white-text sidenav-trigger"
      ><i class="material-icons">menu</i></a
    >
    <ul class="right hide-on-med-and-down">
      <li><a class="white-text" href="index.html">Home</a></li>
      <li><a class="white-text" href="projects.html">Projects</a></li>
      <li><a class="white-text" href="index.html">Blog</a></li>
      <li>
        <a
          class="white-text"
          href="assets/resume.pdf"
          download
          >My Resume</a
        >
      </li>
      <!--TOGGLE FOR LIGHT/DARK MODE-->
      <li>
        <label for="top-nav-theme-switcher" class="theme-switch">
          <input
            class="toggle-checkbox"
            type="checkbox"
            id="top-nav-theme-switcher"
            name="theme"
          />
          <div class="toggle-slot">
            <div class="sun-icon-wrapper">
              <div
                class="iconify sun-icon"
                data-icon="feather-sun"
                data-inline="false"
              ></div>
            </div>
            <div class="toggle-button"></div>
            <div class="moon-icon-wrapper">
              <div
                class="iconify moon-icon"
                data-icon="feather-moon"
                data-inline="false"
              ></div>
            </div>
          </div>
        </label>
      </li>
    </ul>
  </div>
</nav>

<!--Side Nav Bar -->
<ul class="sidenav" id="mobile-demo">
  <li><a href="index.html">Home</a></li>
  <li><a href="projects.html">Projects</a></li>
  <li><a href="index.html">Blog</a></li>
  <li>
    <a
      href="https://docs.google.com/document/d/1-SX2Pz1rD9D1IS-r5PpCCb1JeihSM_BtnI5Y9uruQGc/edit?usp=sharing"
      target="_blank"
      >My Resume</a
    >
  </li>

  <!--TOGGLE FOR LIGHT/DARK MODE-->
  <li>
    <label for="top-nav-theme-switcher" class="theme-switch">
      <input 
        class="toggle-checkbox" 
        type="checkbox" 
        id="side-nav-theme-switcher" 
        name="theme" 
      />
      <div class="toggle-slot side-toggle">
        <div class="sun-icon-wrapper">
          <div
            class="iconify sun-icon"
            data-icon="feather-sun"
            data-inline="false"
          ></div>
        </div>
        <div class="toggle-button"></div>
        <div class="moon-icon-wrapper">
          <div
            class="iconify moon-icon"
            data-icon="feather-moon"
            data-inline="false"
          ></div>
        </div>
      </div>
    </label>
  </li>
</ul>

`);

let footer = $(`

<footer class="webintern-footer">
  <div class="webintern-footer-inner">
    <div class="container">
      <div class="row">
        <div class="col-lg-7 col-md-6 pt-3">
          <div class="col-sm-6 col-md-7 footer-1" >
            <a class="webintern-footer-logo" href="#">
              <img src="assets/images/logo.png" style="width: 300px; height: 100px" />
            </a>

            <div class="simple-text">
              <p >
                "Develop a passion for learning. If you do, you will never cease
                to grow."
              </p>
            </div>
          
            <!-- Social media icons for footer -->

            <div class="social-icons-footer" >
              <a
                class="social-icon-footer twitter"
                href="https://twitter.com/iam_talwinder"
                target="_blank"
                rel="author"
              >
                <i class="fab fa-twitter"></i>
              </a>

              <a
                class="social-icon-footer medium"
                href="https://medium.com/@iamtalwinder"
                target="_blank"
                rel="author"
              >
                <i class="fab fa-medium-m"></i>
              </a>
              
              <a
                class="social-icon-footer linkedin"
                href="https://www.linkedin.com/in/iamtalwinder"
                target="_blank"
                rel="author"
              >
                <i class="fab fa-linkedin-in"></i>
              </a>
              
              <a
                class="social-icon-footer github"
                href="https://github.com/iamtalwinder"
                target="_blank"
                rel="author"
              >
                <i class="fab fa-github"></i>
              </a>
            </div>

            <p><a href="" style="color: white;">singhtalwinder790@gmail.com</a></p>
          </div>
        </div>

        <div class="col-sm-6 col-md-5 pt-3 footer-2">
          <!-- footer_title -->
          <h4 class="webintern_footer_title h5">
            <small>Get In Touch</small>
          </h4>
          <!-- TT-SUBSCRIBE -->

          <div class="contact-form">
            <form action="mailto:singhtalwinder790@gmail.com" method="post" enctype="text/plain">
              <fieldset class="form-group text-center">
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  placeholder="Enter Name"
                />
              </fieldset>
              <fieldset class="form-group text-center">
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="Enter email"
                />
              </fieldset>
              <fieldset class="form-group text-center">
                <textarea
                  class="form-control"
                  id="message"
                  placeholder="Message"
                ></textarea>
              </fieldset>
              <fieldset class="form-group text-xs-right text-center">
                <button type="submit" class="send-btn btn btn-lg">Send</button>
              </fieldset>
            </form>
          </div>
          <div class="empty-space marg-lg-b30"></div>
        </div>
      </div>
    </div>
  </div>
  <div class="tt-copy">
    <div class="container col-sm-6">
      <!-- <center class="text-animation">Made with <i class="fa fa-heart" style="color: red;"></i></center>-->
    </div>
  </div>
</footer>

`);
let bodyElement = $(`body`);
bodyElement.prepend(header);
bodyElement.append(footer);

/*JavaScript for toggle for light/dark mode*/

let topNavThemeSwitcher = document.getElementById("top-nav-theme-switcher");

if (topNavThemeSwitcher) {
  topNavThemeSwitcher.addEventListener("change", toggleTheme);
}

function toggleTheme() {
  let sideNavThemeSwitcher = document.getElementById("side-nav-theme-switcher");
  if (this.checked) {
    sideNavThemeSwitcher.checked = true;
    trans();
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    sideNavThemeSwitcher.checked = false;
    trans();
    document.documentElement.setAttribute("data-theme", "light");
  }
}

let trans = () => {
  document.documentElement.classList.add("transition");
  window.setTimeout(() => {
    document.documentElement.classList.remove("transition");
  }, 1000);
};
