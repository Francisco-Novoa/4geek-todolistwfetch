

import React, { useState, useEffect } from 'react';

import './App.css';
import ToDoList from './components/todo';
import ToDoForm from './components/todoform';



function App() {
  const apiURL = "https://assets.breatheco.de/apis/fake/todos/user/Francisco-Novoa"
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);

  const [done, setDone] = useState(false);
  const [todos, setTodo] = useState([])

  const handleKeyDown = e => {
    if (e.keyCode === 13 && e.target.value !== "") {
      setTodo([...todos, { label: e.target.value, done: done }]);
      e.target.value = "";
      setDone(false);
    }
  };

  const handleChange = e => {
    if (e.target.value === "") {
      setDone(false)
    }
    if (e.target.value === "true") {
      setDone(true)
    }
    if (e.target.value === "false") {
      setDone(false)
    }
  };

  const handleClickTrash = (pos) => {
    let asdf = todos.slice()
    asdf.splice(pos, 1);
    setTodo(asdf)
  };

  const getToDos = url => {
    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        if (data.msg) {
          setError(data);
        }
        console.log(data)
        setTodo(data)
      })
      .catch(error => {
        console.log(error)
      })
  };

  const completeToDo = (pos) => {
    let asdf = todos.slice()
    asdf[pos].done = !asdf[pos].done;
    setTodo(asdf)
  }

  const createToDos = url => {
    fetch(url, {
      method: 'POST',
      body: JSON.stringify([]),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(resp => resp.json())
      .then(data => {
        if (data.msg) {
          setError(data);
        }
        if (data.result) {
          setResult(data);
          setError(null);
          getToDos(apiURL);
        }
      })
      .catch(error => {
        console.log(error);
      })
  }

  const updateToDos = url => {
    fetch(url, {
      method: 'PUT',
      body: JSON.stringify(todos),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(resp => resp.json())
      .then(data => {
        if (data.msg) {
          setError(data);
        }
        if (data.result) {
          setResult(data);
          setError(null);
          getToDos(apiURL);
        }
      })
      .catch(error => {
        console.log(error);
      })
  }

  const deleteToDos = url => {
    fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(resp => resp.json())
      .then(data => {
        if (data.result) {
          setResult(data);
          setTodo([]);
        }
      })
      .catch(error => {
        console.log(error);
      })
  }

  useEffect(() => {

    getToDos(apiURL);

  }, [])

  return (

    <>

      <div className="container">
        <div className="row">
          <div className="col-md-12 d-flex justify-content-center">
            <h1>ToDo List</h1>
          </div>
        </div>
        <div className="row">
          <div className="row pb-2">
            <div className="col-4">
              <button className="btn btn-primary" onClick={() => createToDos(apiURL)}>Crear Lista</button>
            </div>
            <div className="col-4">
              <button className="btn btn-warning" onClick={() => updateToDos(apiURL)} > Salvar Lista</button>
            </div>
            <div className="col-4">
              <button className="btn btn-danger" onClick={() => deleteToDos(apiURL)}> Borrar Lista</button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <ToDoForm handleKeyDown={handleKeyDown} handleChange={handleChange} />
            <br />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <ToDoList todos={todos} handleClickTrash={handleClickTrash} completeToDo={completeToDo} />
          </div>
        </div>
      </div>
    </>
  );
}



export default App;

