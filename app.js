function grab(e) {
  return document.getElementById(e);
}
const programCards = [
  {
    key: "c1",
    icon: "fa fa-chalkboard-teacher fa-2x",
    title: "Lecture",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo arch",
  },
  {
    key: "c2",
    icon: "fa fa-chalkboard-teacher fa-2x",
    title: "Lecture",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo arch",
  },
  {
    key: "c3",
    icon: "fa fa-chalkboard-teacher fa-2x",
    title: "Lecture",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo arch",
  },
  {
    key: "c4",
    icon: "fa fa-chalkboard-teacher fa-2x",
    title: "Lecture",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo arch",
  },
  {
    key: "c5",
    icon: "fa fa-chalkboard-teacher fa-2x",
    title: "Lecture",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo arch",
  },
];

const featuredCards = [
  {
    key: "f1",
    image: "src/pexels-pixabay-220453.jpg",
    name: "Bruce Lwesda",
    title: "Bout dciarge de sacristi de cibouleau de câline de bine de saint-",
    description:
      "P tit Jésus de mosus de mautadit de saint-cimonaque de verrat de bâtard de câline.",
  },
  {
    key: "f2",
    image: "src/pexels-pixabay-220453.jpg",
    name: "Bruce Lwesda",
    title: "Bout dciarge de sacristi de cibouleau de câline de bine de saint-",
    description:
      "P tit Jésus de mosus de mautadit de saint-cimonaque de verrat de bâtard de câline.",
  },
];

programCards.forEach((el, i) => {
  const template = document.createElement("template");
  template.innerHTML = `<li class='card justify-content-center p-3 mt-2'>
          <div class='row'>
            <div class='col-2'><i class='${el.icon}'></i></div>
            <div class='col-3'><h6 class='card-title align-middle'>${el.title}</h6></div>
            <div class='col-7'>${el.description}</div>
          </li>`;
  const pro = template.content.lastElementChild;
  grab("pro-cards").appendChild(pro);
});

featuredCards.forEach((el, i) => {
    const template = document.createElement("template");
    template.innerHTML = `<li class="card justify-content-center p-3">
        <div class="row">
          <div class="col-4"><img class="img-fluid rounded-start" src="${el.image}" alt=""></div>
          <div class="col-8">
            <h4 class="f-speaker">${el.name}</h4>
            <p class="f-title mb-0">${el.title}</p>
            <p class="divider">____</p>
            <p class="f-desc">${el.description}</p>
          </div>
        </div>
      </li>`;
    
    const pro = template.content.lastElementChild;
    grab("feat-cards").appendChild(pro);

});
