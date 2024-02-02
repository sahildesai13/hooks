import { useState } from "react";
import './ToDo.css';
function ToDo() {

  const [task, setTask] = useState("");
  const [todo, setTodo] = useState([]);
  const [edit, setEdit] = useState(null);
  const [search, setSearch] = useState("");
  const [final, setFinal] = useState([]);
  const [searchResult, setSearchResult] = useState([]);

  const add = () => {
    if (edit !== null) {
      const updated = [...todo];
      updated[edit] = { task: task, checked: false };
      setTodo(updated);
      setFinal(updated);
      setEdit(null);
      setTask("");
    } else {
      const updatedTodo = [...todo, { task: task, checked: false }];
      setTodo(updatedTodo);
      setFinal(updatedTodo);
      setTask("");
    }
  };

  const del = (index) => {
    const updatedTodo = todo.filter((val, id) => id !== index);
    setTodo(updatedTodo);
    setFinal(updatedTodo);
  };

  const update = (index) => {
    setEdit(index);
    setTask(todo[index].task);
  };

  const handleCheck = (index) => {
    setTodo((prevTodo) =>
      prevTodo.map((item, i) =>
        i === index ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const searchHandler = () => {
    const info = final.filter((val) => val.task === search);
    setSearchResult(info);
  };

  const completed = () => {
    const com = final.filter((val) => val.checked === true);
    setTodo(com);
  };

  const uncompleted = () => {
    const uncom = final.filter((val) => val.checked === false);
    setTodo(uncom);
  };

  const all = () => {
    setTodo([...final]);
  };

  return (
    <div className="">
      <div className="wrapper">
        <div className='form'>
          <input type="text" className='input' value={task} placeholder='Enter Task' onChange={(e) => { setTask(e.target.value) }} />
          <input type='button' className='btn' value={"Add Task"} onClick={() => { add() }} /><br />
          <input type='text' className='input' placeholder='Search' value={search} onChange={(e) => setSearch(e.target.value)} />
          <input type='button' className='btn' value={"Search"} onClick={() => { searchHandler() }} /><br />
          <input type='button' className='btn' value={"Completed"} onClick={() => { completed() }} style={{ marginRight: "10px" }} />
          <input type='button' className='btn' value={"UnCompleted"} onClick={() => { uncompleted() }} style={{ marginRight: "10px" }} />
          <input type='button' className='btn' value={"All"} onClick={() => { all() }} style={{ marginRight: "10px" }} />
        </div>

        <ul className='' style={{ marginTop: "20px" }}>
          {searchResult.length > 0 ? (
            searchResult.map((ele, index) => (
              <li className='' key={index}>
                <input type='checkbox' checked={ele.checked} onChange={() => handleCheck(index)} />
                <span style={{ textDecoration: ele.checked ? "line-through" : "" }}>{ele.task}</span>
                <div className='button'>
                  <input type='button' value={"Del"} className='del' onClick={() => { del(index) }} />
                  <input type='button' value={"Edit"} onClick={() => { update(index) }} />
                </div>
              </li>
            ))
          ) : (
            todo.map((ele, index) => (
              <li className='' key={index}>
                <input type='checkbox' checked={ele.checked} onChange={() => handleCheck(index)} />
                <span style={{ textDecoration: ele.checked ? "line-through" : "" }}>{ele.task}</span>
                <div className='button'>
                  <input type='button' value={"Del"} className='del' onClick={() => { del(index) }} />
                  <input type='button' value={"Edit"} onClick={() => { update(index) }} />
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>

    )
}
export default ToDo;