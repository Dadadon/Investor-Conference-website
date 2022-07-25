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

programCards.forEach((el, i) => {
  const template = document.createElement('template');
    template.innerHTML = `<li class='card justify-content-center p-3 mt-2'>
          <div class='row'>
            <div class='col-2'><i class='${el.icon}'></i></div>
            <div class='col-3'><h6 class='card-title align-middle'>${el.title}</h6></div>
            <div class='col-7'>${el.description}</div>
          </li>`;
    const pro = template.content.lastElementChild;
    grab('pro-cards').appendChild(pro);
});
