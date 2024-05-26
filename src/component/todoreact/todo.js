import React , {useState, useEffect} from 'react';
import './style.css';

//get localStorage data back
const getLocalData = () => {
  const lists = localStorage.getItem("myToDoList");
  if(lists) {
    return JSON.parse(lists);
  }
  else return [];
}

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState(getLocalData());


  
  const addItem = () => {
    if(!inputData) {
      alert("Fill the text first");
    }
    else {
      const itemData  = {
        id: new Date().getTime().toString(),
        item: inputData
      }
      setItems([...items, itemData]);
      setInputData("");
    }
  }
  //delete items
  const deleteItem = (id) => {
    const updatedItems = items.filter((currItem) => {
      return currItem.id !== id;
    })
    setItems(updatedItems);
  }
  //edit item
  const editItem = (id) => {
    setInputData(items.find((item) => {return item.id === id}).item.toString());

    deleteItem(id);
  }

  //adding local storage
  useEffect(() => {
    localStorage.setItem("myToDoList", JSON.stringify(items));
  }, [items]);

  return (
    <> 
        <div className='main-div'>
            <div className='child-div'>
                <figure>
                    <img src="./images/todo.svg" alt="todologo" />
                    <figcaption>Add your list here ✌️</figcaption>
                </figure>
                <div className='addItems'>
                  <input 
                    type="text"
                    placeholder="✍️ Add item"
                    className='form-control'
                    value={inputData}
                    onChange={(event) => setInputData(event.target.value)}
                    onKeyDown={(event) => {if(event.key === "Enter") addItem()}}
                  />
                  <i className="fa fa-solid fa-plus add-btn" onClick={() => addItem()}></i>
                </div>
                {/* show our items */}
                <div className='showItems'>
                  {items.map((currItem, index) => {
                    return(
                      <div className='eachItem' key={currItem.id}>
                        <h3>{currItem.item}</h3>
                        <div className='todo-btn'>
                          <i className="far fa-solid fa-edit add-btn" onClick={() => editItem(currItem.id)}></i>
                          <i className="far fa-solid fa-trash-alt add-btn" onClick={() => deleteItem(currItem.id)}></i>
                        </div>
                      </div>
                    )
                  })
                  }
                  
                </div>


                {/* remove all items */}
                <div className='showItems'>
                  <button className='btn effect04' data-sm-link-text='Remove all' onClick={() => {setItems ([])}}>
                    <span>Check list</span>
                  </button>
                </div>
            </div>

        </div>
    </>
  )
}

export default Todo