function grab(e) {
  return document.getElementById(e);
}

const programCards = [
  {
    key: 'c1',
    icon: 'fa fa-chalkboard-teacher fa-2x',
    title: 'Lecture',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo arch',
  },
  {
    key: 'c2',
    icon: 'fa fa-chalkboard-teacher fa-2x',
    title: 'Lecture',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo arch',
  },
  {
    key: 'c3',
    icon: 'fa fa-chalkboard-teacher fa-2x',
    title: 'Lecture',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo arch',
  },
  {
    key: 'c4',
    icon: 'fa fa-chalkboard-teacher fa-2x',
    title: 'Lecture',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo arch',
  },
  {
    key: 'c5',
    icon: 'fa fa-chalkboard-teacher fa-2x',
    title: 'Lecture',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo arch',
  },
];

const featuredCards = [
  {
    key: 'f1',
    image: 'src/pexels-pixabay-220453.jpg',
    name: 'Bruce Lwesda',
    title: 'Bout dciarge de sacristi de cibouleau de câline de bine de saint-',
    description:
      'P tit Jésus de mosus de mautadit de saint-cimonaque de verrat de bâtard de câline.',
  },
  {
    key: 'f2',
    image: 'src/pexels-pixabay-220453.jpg',
    name: 'Bruce Lwesda',
    title: 'Bout dciarge de sacristi de cibouleau de câline de bine de saint-',
    description:
      'P tit Jésus de mosus de mautadit de saint-cimonaque de verrat de bâtard de câline.',
  },
  {
    key: 'f3',
    image: 'src/pexels-pixabay-220453.jpg',
    name: 'Bruce Lwesda',
    title: 'Bout dciarge de sacristi de cibouleau de câline de bine de saint-',
    description:
      'P tit Jésus de mosus de mautadit de saint-cimonaque de verrat de bâtard de câline.',
  },
  {
    key: 'f4',
    image: 'src/pexels-pixabay-220453.jpg',
    name: 'Bruce Lwesdag',
    title: 'Bout dciarge de sacristi de cibouleau de câline de bine de saint-',
    description:
      'P tit Jésus de mosus de mautadit de saint-cimonaque de verrat de bâtard de câline.',
  },
];

programCards.forEach((el) => {
  const template = document.createElement('template');
  template.innerHTML = `<li class='justify-content-center p-sm-3 mt-2 program-card'>
           <div class='row xs-small pt-3 pb-3'>
            <div><i class='${el.icon} text-white'></i></div>
            <div><h6 class='card-title align-middle'>${el.title}</h6></div>
            <div class='text-white'>${el.description}</div>
          </div>
          <div class='row mobile-only mobile-onlyxs'>
            <div class='col-2'><i class='${el.icon} text-white'></i></div>
            <div class='col-4'><h6 class='card-title align-middle'>${el.title}</h6></div>
            <div class='col-6 text-white'>${el.description}</div>
          </div>
           <div class='row m-0  desktop-only'>
            <div><i class='${el.icon} text-white text-center'></i></div>
            <div><h6 class='card-title text-center'>${el.title}</h6></div>
            <div class='text-white text-center'>${el.description}</div>
          </div>
          </li>`;
  const pro = template.content.lastElementChild;
  grab('pro-cards').appendChild(pro);
});

function openNav() {
  document.getElementById('myNav').style.width = '100%';
  document.body.style.overflow = 'hidden';
}

function closeNav() {
  document.getElementById('myNav').style.width = '0%';
  document.body.style.overflow = 'visible';
}

openNav();
closeNav();

function renderOneCard(el) {
  const template = document.createElement('template');
  template.innerHTML = `<li class='justify-content-center p-3 h-100 mobile-only'>
        <div class='row xs-small'>
          <div class='col-4'><img class='img-fluid rounded-circle w-100' src='${el.image}' alt=''></div>
          <div class='col-8'>
            <h4 class='f-speaker'>${el.name}</h4>
            <p class='f-title mb-0'>${el.title}</p>
            <p class='divider'>____</p>
            <p class='f-desc'>${el.description}</p>
            <p class='divider'>_______________</p>
          </div>
        </div>
        <div class='row mobile-onlyxs'>
          <div class='col-4'><img class='img-fluid rounded-circle w-100' src='${el.image}' alt=''></div>
          <div class='col-8'>
            <h4 class='f-speaker'>${el.name}</h4>
            <p class='f-title mb-0'>${el.title}</p>
            <p class='divider'>____</p>
            <p class='f-desc'>${el.description}</p>
          </div>
        </div>
      </li>`;

  const pro = template.content.firstElementChild;
  grab('feat-cards').appendChild(pro);
}

function renderDesktopCards() {
  featuredCards.forEach((el) => {
    const template = document.createElement('template');
    template.innerHTML = `
      <li class='col-5 justify-content-center p-3 h-100 desktop-only'>
        <div class='row'>
          <div class='col-4'><img class='rounded-circle h-75 w-100' src='${el.image}' alt=''></div>
          <div class='col-8'>
            <h4 class='f-speaker'>${el.name}</h4>
            <p class='f-title mb-0'>${el.title}</p>
            <p class='divider'>____</p>
            <p class='f-desc'>${el.description}</p>
          </div>
        </div>
      </li>`;

    const pro = template.content.firstElementChild;
    grab('feat-cards').appendChild(pro);
  });
}

function renderAllCards(fcards) {
  grab("feat-cards").innerHTML = "";
  fcards.forEach(renderOneCard);
  document.getElementById("f-btn").innerHTML = `<span
        class='text-end'>See Less</span><i class='align-self-center text-start fas fa-angle-up secondary'></i>`;
  document.getElementById("f-btn").addEventListener("click", () => {
    initialRender(featuredCards);
  });
}

// renderCards(featuredCards);
function initialRender(fcards) {
  grab('feat-cards').innerHTML = '';
  renderDesktopCards();
  const slicedArray = fcards.slice(0, 2);
  slicedArray.forEach(renderOneCard);
  document.getElementById('f-btn').innerHTML = `<span
        class='text-end'>See More</span><i class='align-self-center text-start fas fa-angle-down secondary'></i>`;
  document.getElementById('f-btn').addEventListener('click', () => {
    renderAllCards(featuredCards);
  });
}

initialRender(featuredCards);



