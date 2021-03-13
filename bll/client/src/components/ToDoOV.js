import React, { useEffect, useState } from 'react';
import Cookies from "js-cookie";

import Button from '@material-ui/core/Button';

export default function  ToDoOV () {
  const [toDosLi, setToDo] = useState([]);
  const [deleteToDo, setDelete] = useState({});
  let [count, setCount] = useState(0);
  let [newList, setNewList] = useState(toDosLi)

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/todos');
      const data = await response.json();
      setToDo(data.todos);
      setNewList(data.todos);
    }
    fetchData();
  }, []);

  console.log('NEW LIST', newList)
  const toDoLists = newList.filter((todo) => todo.typeId === 1 )

  const handleComplete = async(e) => {
    e.preventDefault();
    // const deleteTD = e.currentTarget.value
    // console.log(e.currentTarget.value);
    // setDelete(deleteTD)
    // console.log("DELETE TD", deleteTD)

    // await fetch('/api/todos', {
    //         method: 'DELETE',
    //         headers: {
    //             "Content-Type": "application/json",
    //             "XSRF-TOKEN": Cookies.get("XSRF-TOKEN")
    //         },
    //         body: JSON.stringify(deleteTD)
    //     });

  }
  // let count = 0;

  // const toDoList = toDoLists.map(todo => {
  //   while (count < 4) {
  //     count++;
  //     return (
  //       <>
  //         <div>
  //           <Button key={todo.id} name='toDoOV' id='toDoOv' onClick={handleComplete}>{todo.item}</Button>
  //         </div>
  //       </>
  //       )
  //     }
  // })



  // console.log('toDoList', toDoList)

  return (
      <>
          <h1>To Do Overview: </h1>
          {/* {toDoList} */}
      </>
      );

}
