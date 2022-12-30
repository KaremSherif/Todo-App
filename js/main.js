

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

