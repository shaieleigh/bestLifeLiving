import React, { useEffect, useState } from 'react';

export default function  ToDoOV () {
  const [toDosLi, setToDo] = useState([]);

  useEffect(() => {
        async function fetchData() {
            const response = await fetch('/api/todos');
            const data = await response.json();
            setToDo(data.todos);
        }
        fetchData();
    }, []);
  
  const toDoLists = toDosLi.filter((todo) => todo.typeId === 1 )
  const toDoList = toDoLists.map(todo => {
        return (
          <p key={todo.id}>{todo.item}</p>
        )
     })
  return (
      <>
          <h1>General To Do Overview: </h1>
          {toDoList}
      </>
      );

}
