// Import HTML Attributes
const theme = document.querySelector("#theme");
const newItem = document.querySelector("#add-item");
const content = document.querySelector(".tasks-content ");
const itemCount = document.querySelector(".left-side span");

// Initaztion themes Changeing
const themesbtn = () => {
  theme.addEventListener("click", () => {
    document.querySelector(".top-img").style = [
      theme.checked
        ? "background-image: url(../images/bg-desktop-light.jpg);"
        : "background-image: url(../images/bg-desktop-dark.jpg);",
    ];
    document.querySelector("body").style = [
      theme.checked
        ? "background-color: #fff;"
        : " background-color: hsl(235, 21%, 11%);",
    ];
    document.querySelector(".themes img").src = [
      theme.checked ? "images/icon-moon.svg" : "images/icon-sun.svg",
    ];
  });
};
themesbtn();

// updateValueToList
const addItem = () => {
  newItem.addEventListener("keypress", (ele) => {
    if (ele.charCode === 13 && newItem.value.length > 0) {
      addNewItem(newItem.value);
      newItem.value = "";
    }
  });
};
addItem();

// createNewElementByJs
function addNewItem(txt) {
  const newEle = document.createElement("ul");
  newEle.innerHTML = `
    <li>
    <label class="listItem">
      <input type="checkbox" name="todoItem" >
      <span class="checkmark"></span>
      <span class="text">${newItem.value}</span>
    </label>
    <span class="remove"></span>
  </li>
    `;
  content.prepend(newEle);
  taskCounter(1);
}

//  dynamicNumberCounterTodoItems
const taskCounter = (num) => {
  itemCount.innerText = +itemCount.innerHTML + num;
};

// removeItem & NegativeNumber
const removeItem = (element) => {
  element.remove();
  taskCounter(-1);
};

// deletingItemByClick
const deleteitem = () => {
  content.addEventListener("click", (event) => {
    if (event.target.classList.contains("remove")) {
      removeItem(event.target.parentElement);
    }
  });
};
deleteitem();

// deleteCompletedItems
const deleteCompleted = () => {
  document.querySelector(".right-side").addEventListener("click", () => {
    document.querySelectorAll(".listItem input:checked").forEach((item) => {
      removeItem(item.closest("li"));
    });
  });
};
deleteCompleted();

// filterItems
const filterItem = () =>{
  document.querySelectorAll('.center-side input').forEach(item =>{
    item.addEventListener('change', (e) =>{
      filterListItem(e.target.id)
    });
  });
  
}
filterItem()

function filterListItem (id){
  const allItems = content.querySelectorAll('li')
  
  switch(id) {
    case 'all':
        allItems.forEach(item => {
            item.classList.remove('hidden');
        })
        break;
    case 'active':
        allItems.forEach(item => {
            item.querySelector('input').checked ? item.classList.add('hidden') : item.classList.remove('hidden');;
        })
        break;
    default: 
        allItems.forEach(item => {
            !item.querySelector('input').checked ? item.classList.add('hidden') : item.classList.remove('hidden');;
        })
        break;
  }
  
}

