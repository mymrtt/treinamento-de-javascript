const containerRender = document.createElement("div");
containerRender.id = "containerRender";
const ul = document.createElement("ul");
ul.className = "containerRenderContent";
const containerRenderSeason = document.createElement("div");
containerRenderSeason.className = "containerRenderSeason";

const renderUl = document.createElement("ul");
renderUl.className = "renderUl";

render = () => {
  const form = document.createElement("form");

  //CRIANDO CATEGORIA
  const labelCategory = document.createElement("label");
  const inputCategory = document.createElement("input");
  inputCategory.setAttribute("placeholder", "Category");
  inputCategory.setAttribute("required", "true");

  labelCategory.appendChild(inputCategory);
  form.appendChild(labelCategory);

  // //CRIANDO TITULO
  const labelTitle = document.createElement("label");
  const inputTitle = document.createElement("input");
  inputTitle.setAttribute("placeholder", "Title");
  inputTitle.setAttribute("required", "true");
  labelTitle.appendChild(inputTitle);
  form.appendChild(labelTitle);

  // //CRIANDO DESCRICAO
  const labelDescription = document.createElement("label");
  const inputDescription = document.createElement("input");
  inputDescription.setAttribute("placeholder", "Description");
  inputDescription.setAttribute("required", "true");
  labelDescription.appendChild(inputDescription);
  form.appendChild(labelDescription);

  // CONTAINER BTNS
  const containerBtnsForm = document.createElement("div");
  containerBtnsForm.className = "containerBtnsForm";

  // BTN SUBMIT
  const btnSubmit = document.createElement("button");
  btnSubmit.setAttribute("type", "submit");
  btnSubmit.innerHTML = "Submit";
  btnSubmit.className = "btnSubmit btnsSeason";
  containerBtnsForm.appendChild(btnSubmit);
  form.appendChild(containerBtnsForm);

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

      // const inputSeason = document.createElement("input");
      // inputSeason.className = "inputSeason";
      // inputSeason.setAttribute("placeholder", "Add Season");

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

        inputEp.value = "";

        // const renderUl = document.createElement("ul");
        // renderUl.className = "renderUl";
        containerAdd.appendChild(renderUl);

        renderLi = document.createElement("li");
        renderLi.className = "renderLi";
        renderLi.innerHTML = inputValue;
        renderUl.appendChild(renderLi);

        btnRemove = document.createElement("button");
        btnRemove.innerHTML = "x";
        btnRemove.className = "btnRemove";
        renderLi.appendChild(btnRemove);

        btnRemove.addEventListener("click", function(event) {
          renderUl.removeChild(renderLi);
          console.log("removeee");
        });
      });
    });
    clearValues();

    document.body.appendChild(containerRender);
  });

  clearValues = () => {
    (inputCategory.value = ""),
      (inputTitle.value = ""),
      (inputDescription.value = "");
  };

  document.body.appendChild(form);
};

window.onload = render();
