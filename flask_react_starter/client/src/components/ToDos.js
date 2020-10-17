import React, { useEffect, useState } from 'react';

export default function  ToDos () {
  const [toDosLi, setToDo] = useState([]);

  useEffect(() => {
        async function fetchData() {
            const response = await fetch('/api/todos');
            const data = await response.json();
            setToDo(data.todos);
        }
        fetchData();
    }, []);

    const toDoList = toDosLi.map((todo) => {
      return (

      <p key={todo.id}>{todo.item}</p>
      )
    })
    console.log("____Rendering To Do List____")
    return (
        <>
            <h1>To Do List: </h1>
            {toDoList}
        </>
        );

}
