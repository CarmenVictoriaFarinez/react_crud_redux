import React, { useEffect, useState } from 'react';

const Api = () =>  {
    const url = 'https://rickandmortyapi.com/api/location';
    const [ todos, setTodos ] = useState([]);
      
    useEffect (() => {
      fetch(url)
        .then((response) => {
          return response.json()
        })
        .then((data) => {
        setTodos(data.results)
        console.log(' DATA' , data.results );
      })
    }, []);

  return (
    <div className="bg-blue-300">
   
     {
       todos.map((todo) => {
         return (
           <li key={todo.id}>{todo.id}, {todo.name}, {todo.type}</li>
         )
       })
     }
     
    </div>
  );
}



export default Api;