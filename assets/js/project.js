/* Project Cards */

const projectcards = document.querySelector(".projectcards");
const projects = [
  {
    title: "Flappy Bird",
    cardImage: "assets/images/project-page/flappybird.png",
    description: "Flappy bird game build using vanilla javascript",
    Previewlink: "https://iamtalwinder.github.io/flappy-bird/",
    Githublink: "https://github.com/iamtalwinder/flappy-bird",
  },

  {
    title: "GIF maker",
    cardImage: "assets/images/project-page/gif-maker.png",
    description: "Online GIF maker build using nextjs, ffmpeg and WASM",
    Previewlink: "https://gif-maker-livid.vercel.app/",
    Githublink: "https://github.com/iamtalwinder/gif-maker",
  },

  {
    title: "Instagram clone",
    cardImage: "assets/images/project-page/instagram-clone.png",
    description: "Instagram clone build using react, node, express and mysql",
    Previewlink: "https://github.com/iamtalwinder/instagram-clone",
    Githublink: "https://github.com/iamtalwinder/instagram-clone",
  },
];

const showCards = () => {
  let output = "";
  projects.forEach(
    ({ title, cardImage, description, Previewlink, Githublink }) =>
      (output += `       
    <div class="column skill-card card">
      <div
        class="wrapper"
        style="background: url(${cardImage}) center / cover no-repeat"
      >
        <div class="header"></div>
        <div class="data">
          <div class="content">
            <div class="title-div">
              <h1 class="title"><a href="#">${title}</a></h1>
            </div>
            <p class="text">${description}</p>
            <ul class="menu-content">
              <li>
                <a target="_blank" href="${Previewlink}" class="social-icon"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="25"
                    viewBox="0 0 30 28"
                    fill="none"
                    stroke="#fff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-monitor"
                  >
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line></svg
                ></a>
              </li>
              <li>
                <a target="_blank" href="${Githublink}" class="social-icon"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="25"
                    viewBox="0 0 30 28"
                    fill="none"
                    stroke="#fff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-github"
                  >
                    <path
                      d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                    ></path></svg
                ></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    `)
  );
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);
