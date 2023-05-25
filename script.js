const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});
document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}));

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}));

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}));

const projectsArr = [
  {
    projectName: 'Multi Post Stories',
    projectDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    technology: ['HTML', 'Bootstrap ', 'Ruby on Rails'],
    linkToLive: 'https://meryemsanem.github.io/desktop-version/',
    linkToSource: 'https://github.com/meryemsanem/desktop-version',
    image: 'icons/popup-desk.png',
  },
  {
    projectName: 'Multi Post Stories',
    projectDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    technology: ['HTML', 'Bootstrap ', 'Ruby on Rails'],
    linkToLive: 'https://meryemsanem.github.io/desktop-version/',
    linkToSource: 'https://github.com/meryemsanem/desktop-version',
    image: 'icons/popup.png',
  },
  {
    projectName: 'Multi Post Stories',
    projectDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    technology: ['HTML', 'Bootstrap ', 'Ruby on Rails'],
    linkToLive: 'https://meryemsanem.github.io/desktop-version/',
    linkToSource: 'https://github.com/meryemsanem/desktop-version',
    image: 'icons/popup.png',
  },
  {
    projectName: 'Multi Post Stories',
    projectDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    technology: ['HTML', 'Bootstrap ', 'Ruby on Rails'],
    linkToLive: 'https://meryemsanem.github.io/desktop-version/',
    linkToSource: 'https://github.com/meryemsanem/desktop-version',
    image: 'icons/popup.png',
  },
  {
    projectName: 'Multi Post Stories',
    projectDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    technology: ['HTML', 'Bootstrap ', 'Ruby on Rails'],
    linkToLive: 'https://meryemsanem.github.io/desktop-version/',
    linkToSource: 'https://github.com/meryemsanem/desktop-version',
    image: 'icons/popup.png',
  },
  {
    projectName: 'Multi Post Stories',
    projectDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    technology: ['HTML', 'Bootstrap ', 'Ruby on Rails'],
    linkToLive: 'https://meryemsanem.github.io/desktop-version/',
    linkToSource: 'https://github.com/meryemsanem/desktop-version',
    image: 'icons/popup.png',
  },
  {
    projectName: 'Multi Post Stories',
    projectDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    technology: ['HTML', 'Bootstrap ', 'Ruby on Rails'],
    linkToLive: 'https://meryemsanem.github.io/desktop-version/',
    linkToSource: 'https://github.com/meryemsanem/desktop-version',
    image: 'icons/popup.png',
  },
  {
    projectName: 'Multi Post Storiees',
    projectDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    technology: ['HTML', 'Bootstrap', 'Ruby on Rails'],
    linkToLive: 'https://meryemsanem.github.io/desktop-version/',
    linkToSource: 'https://github.com/meryemsanem/desktop-version',
    image: 'icons/popup-desk.png',
  },
  {
    projectName: 'Multi Post Storiess',
    projectDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    technology: ['HTML', 'Bootstrap', 'Ruby on Rails'],
    linkToLive: 'https://meryemsanem.github.io/desktop-version/',
    linkToSource: 'https://github.com/meryemsanem/desktop-version',
    image: 'icons/popup-desk.png',
  },
  {
    projectName: 'Multi Post Stories',
    projectDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.",
    technology: ['HTML', 'Bootstrap', 'Ruby on Rails'],
    linkToLive: 'https://meryemsanem.github.io/desktop-version/',
    linkToSource: 'https://github.com/meryemsanem/desktop-version',
    image: 'icons/popup-desk.png',
  },
  {
    projectName: 'Multi Post Stories',
    projectDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    technology: ['HTML', 'Bootstrap', 'Ruby on Rails'],
    linkToLive: 'https://meryemsanem.github.io/desktop-version/',
    linkToSource: 'https://github.com/meryemsanem/desktop-version',
    image: 'icons/popup-desk.png',
  },
  {
    projectName: 'Multi Post Stories',
    projectDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    technology: ['HTML', 'Bootstrap', 'Ruby on Rails'],
    linkToLive: 'https://meryemsanem.github.io/desktop-version/',
    linkToSource: 'https://github.com/meryemsanem/desktop-version',
    image: 'icons/popup-desk.png',
  },
  {
    projectName: 'Multi Post Stories',
    projectDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    technology: ['HTML', 'Bootstrap', 'Ruby on Rails'],
    linkToLive: 'https://meryemsanem.github.io/desktop-version/',
    linkToSource: 'https://github.com/meryemsanem/desktop-version',
    image: 'icons/popup-desk.png',
  },
];

const projectBtns = document.querySelectorAll('.see-project');
const overlay = document.querySelector('.overlay');
Array.from(projectBtns).forEach((projectBtns, i) => {
  projectBtns.addEventListener('click', () => {
    const popDiv = document.createElement('div');
    popDiv.id = 'background-popup';
    popDiv.style.position = 'relative';
    // popDiv.style.left = "142px";
    popDiv.style.width = '80vw';
    popDiv.style.height = '100vh';
    popDiv.style.zIndex = '11';
    popDiv.style.display = 'flex';
    popDiv.style.alignItems = 'center';

    popDiv.innerHTML = `
      <div class="popup-container">
      <button id='close' class='close'>X</button>
        <div class="title">
          <h3 id='name'>${projectsArr[i].projectName}</h3> 
        </div>
        <div class='card-det'>
            <ul class='skill'>
              <a href="#" class="a"><li class='skills'>${projectsArr[i].technology[0]}</li></a> 
              <a href="#" class="a"><li class='skills'>${projectsArr[i].technology[1]}</li></a>
              <a href="#" class="a"><li class='skills'>${projectsArr[i].technology[2]}</li></a>
            </ul> 
        </div>
        <div class="text-img">
          <div class="text-item">
            <img class="Popup-image" src='${projectsArr[i].image}'/>  
            <div class="popup-description"> 
            <p class='project-text'>${projectsArr[i].projectDescription}</p>   
           <div class='button-pop'>
            <a href='${projectsArr[i].linkToLive}'>
          <button class='desk-button'>
              <span>See Live</span>
              <i class="fa-sharp fa-light fa-arrow-up-left-from-circle fa-rotate-90 fa-2xs"></i>
          </button>
            </a>
            <a href='${projectsArr[i].linkToSource}'>
          <button class='desk-button'>
            <span>See Source</span>
            <i class='fa-brands fa-github fa-2xs'></i>
          </button>
            </a>
          </div>  
          </div>
            </div>
         
        </div>
  
      </div>`;
    document.body.appendChild(popDiv);
    overlay.classList.remove('hidden');
  });
});
function removePopDiv() {
  const PopDiv = document.querySelector('#background-popup');
  const parentElement = PopDiv.parentNode;
  parentElement.removeChild(PopDiv);
}

document.addEventListener('click', (event) => {
  if (event.target.id === 'close') {
    removePopDiv();
    overlay.classList.add('hidden');
  }
});

const form = document.querySelector('#form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('emaill').value;
  const valid = document.querySelector('.invalid');
  if (email !== email.toLowerCase()) {
    valid.innerText = 'Please enter your email in LOWER CASE.';
  } else {
    form.submit();
  }
});

const form1 = document.querySelector('#form1');
form1.addEventListener('submit', (e) => {
  e.preventDefault();
  const email1 = document.getElementById('email1').value;
  const valid1 = document.querySelector('.invalid1');
  if (email1 !== email1.toLowerCase()) {
    valid1.innerText = 'Please enter your email in LOWER CASE.';
  } else {
    form1.submit();
  }
});
