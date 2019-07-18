const containerRender = document.createElement("div");
containerRender.id = "containerRender";
const ul = document.createElement("ul");
ul.className = "containerRenderContent";
const containerRenderSeason = document.createElement("div");
containerRenderSeason.className = "containerRenderSeason";

render = () => {
  const form = document.createElement("form");

  //CRIANDO CATEGORIA
  const labelCategory = document.createElement("label");
  const inputCategory = document.createElement("input");
  inputCategory.setAttribute("placeholder", "Category");
  inputCategory.setAttribute("required", "true");

  labelCategory.appendChild(inputCategory);
  form.appendChild(labelCategory);

  //CRIANDO TITULO
  const labelTitle = document.createElement("label");
  const inputTitle = document.createElement("input");
  inputTitle.setAttribute("placeholder", "Title");
  inputTitle.setAttribute("required", "true");
  labelTitle.appendChild(inputTitle);
  form.appendChild(labelTitle);

  //CRIANDO DESCRICAO
  const labelDescription = document.createElement("label");
  const inputDescription = document.createElement("input");
  inputDescription.setAttribute("placeholder", "Description");
  inputDescription.setAttribute("required", "true");
  labelDescription.appendChild(inputDescription);
  form.appendChild(labelDescription);

  //CONTAINER BTNS
  const containerBtnsSeason = document.createElement("div");
  containerBtnsSeason.className = "containerBtnsSeason";

  // BTN SUBMIT
  const submit = document.createElement("button");
  submit.setAttribute("type", "submit");
  submit.innerHTML = "Submit";
  submit.className = "btnSubmit btnsSeason";
  containerBtnsSeason.appendChild(submit);
  form.appendChild(containerBtnsSeason);

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    let tvShow = {
      category: inputCategory.value,
      title: inputTitle.value,
      description: inputDescription.value
    };

    const createCategory = document.createElement("h2");
    const createTitle = document.createElement("h3");
    const createDescription = document.createElement("p");

    createCategory.innerHTML = tvShow.category;
    createTitle.innerHTML = tvShow.title;
    createDescription.innerHTML = tvShow.description;

    const li = document.createElement("li");
    li.className = "containerCard";

    ul.appendChild(li);
    li.appendChild(createCategory);
    li.appendChild(createTitle);
    li.appendChild(createDescription);
    containerRender.appendChild(ul);

    //CRIANDO BTN ADD SEASON
    const addSeason = document.createElement("button");
    addSeason.innerHTML = "Add Season";
    addSeason.className = "btnAddSeason btnsSeason";
    li.appendChild(addSeason);

    addSeason.addEventListener("click", function(event) {
      event.preventDefault();

      //ADD EP
      const containerAdd = document.createElement("div");
      containerAdd.className = "containerAdd";
      const inputEp = document.createElement("input");
      inputEp.className = "inputEp";
      inputEp.setAttribute("placeholder", "Add Episode");
      containerAdd.appendChild(inputEp);

      btnAdd = document.createElement("button");
      btnAdd.innerHTML = "add";
      btnAdd.className = "btnAdd";
      containerAdd.appendChild(btnAdd);

      li.appendChild(containerAdd);

      btnAdd.addEventListener("click", function(event) {
        event.preventDefault();

        const inputValue = inputEp.value;
        console.log("inputValue", inputValue);

        const createRenderUl = document.createElement("ul");
        createRenderUl.className = "createRenderUl";
        li.appendChild(createRenderUl);

        createRenderLi = document.createElement("li");
        createRenderLi.className = "createRenderLi";
        createRenderLi.innerHTML = inputValue;
        createRenderUl.appendChild(createRenderLi);

        btnRemove = document.createElement("button");
        btnRemove.innerHTML = "x";
        btnRemove.className = "btnRemove";
        createRenderLi.appendChild(btnRemove);

        btnRemove.addEventListener("click", function(event) {
          createRenderUl.removeChild(createRenderLi);
          console.log("removeee");
        });
      });
    });

    document.body.appendChild(containerRender);
  });

  document.body.appendChild(form);
};

window.onload = render();
