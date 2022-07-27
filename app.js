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
];

programCards.forEach((el) => {
  const template = document.createElement('template');
  template.innerHTML = `<li class='justify-content-center p-3 mt-2 program-card'>
          <div class='row'>
            <div class='col-2'><i class='${el.icon} text-white'></i></div>
            <div class='col-4'><h6 class='card-title align-middle'>${el.title}</h6></div>
            <div class='col-6 text-white'>${el.description}</div>
          </li>`;
  const pro = template.content.lastElementChild;
  grab('pro-cards').appendChild(pro);
});

featuredCards.forEach((el) => {
  const template = document.createElement('template');
  template.innerHTML = `<li class='justify-content-center p-3 h-100'>
        <div class='row'>
          <div class='col-4'><img class='img-fluid rounded-circle h-75 w-100' src='${el.image}' alt=''></div>
          <div class='col-8'>
            <h4 class='f-speaker'>${el.name}</h4>
            <p class='f-title mb-0'>${el.title}</p>
            <p class='divider'>____</p>
            <p class='f-desc'>${el.description}</p>
          </div>
        </div>
      </li>`;

  const pro = template.content.lastElementChild;
  grab('feat-cards').appendChild(pro);
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