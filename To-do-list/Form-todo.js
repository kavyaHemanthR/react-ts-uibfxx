import React from 'react';
import { FaMinusCircle } from 'react-icons/fa';

function Form_todo() {
  const [newItem, setNewItem] = React.useState('');
  const [allItems, setAllItems] = React.useState([]);
  //const [checked, setChecked] = React.useState(false);
  const [filteredValue, setFilteredValue] = React.useState('');

  function addItems() {
    newItem &&
      setAllItems((prevValue) => {
        return [
          ...prevValue,
          {
            id: prevValue.length + 1,
            task: newItem,
            completed: false,
            //dueDate: new Date('2023-06-10').toString
          },
        ];
      });
    setNewItem('');
  }

  function deleteItem(item) {
    setAllItems((prevValue) => {
      const updatedList = [...prevValue];
      for (var i = 0; i < prevValue.length; i++) {
        if (updatedList[i].task == item.task) {
          updatedList.splice(i, 1);
          console.log(updatedList);
          return updatedList;
        }
      }
      return updatedList;
    });
    // const clonedData = [...allItems]
    // setAllItems(clonedData.map((i,index )=> item.task == i.task ? clonedData.splice(index,1) : i))
  }

  function handleCheckboxClick(task, e) {
    const clonedData = [...allItems];
    setAllItems(
      clonedData.map((d) =>
        d.task === task ? { ...d, completed: !d.completed } : d
      )
    );
    console.log(allItems);
    //setChecked(!checked);
  }

  function handleFilter(event) {
    setFilteredValue(event.target.value);
  }
  function getFilteredList() {
    if (!filteredValue || filteredValue == 'all') {
      return allItems;
    }
    if (filteredValue == 'pending') {
      return allItems.filter((item) => !item.completed);
    }
    if (filteredValue == 'completed') {
      return allItems.filter((item) => item.completed);
    }
  }
  var filteredList = React.useMemo(getFilteredList, [filteredValue, allItems]);
  return (
    <div>
      <input
        type="text"
        name="Create New Item"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={addItems}>Create New Item </button>

      <select value={filteredValue} onChange={handleFilter}>
        <option hidden>...Filter...</option>
        <option value="pending">Pending</option>
        <option value="completed">Completed</option>
        <option value="all">All</option>
      </select>

      <h3>Tasks</h3>

      <ul>
        {filteredList.map((item) => (
          <div className="alignStaight">
            <FaMinusCircle
              onClick={() => deleteItem(item)}
              style={{ color: 'red', fontSize: '13px', paddingRight: '10px' }}
            />
            {item.task}
            {item.completed ? <p>Completed </p> : <p>Pending </p>}
            <input
              type="checkbox"
              checked={item.completed}
              onChange={(e) => handleCheckboxClick(item.task, e)}
            />
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Form_todo;
