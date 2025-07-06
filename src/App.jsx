import { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form.jsx';
import TodoList from './components/Todolist.jsx';
function App() {
  useEffect(() => {
    getLocalData();
  }, [])
  const [data, setData] = useState([]);
  const [value, setValue] = useState('');
  const [status, setStatus] = useState('all');
  const [filtered, setFiltered] = useState([]);
  useEffect(() => {
    filterHandler();
    saveLocal();
  }, [status, data])
  let temp = [...data];
  const filterHandler = () => {
    switch (status) {
      
      case 'completed':
        setFiltered(data.filter((item) => item.completed));
        break;
      case 'incomplete':
        setFiltered(data.filter((item) => !item.completed));
        break;
      case 'recent':
        temp.sort((a, b) => { return new Date(b.date_time) - new Date(a.date_time) }
        );
        setFiltered(temp)
        break;
      default:
        setFiltered(data);
        break
    }
  }
  const saveLocal = () => {
    localStorage.setItem("data", JSON.stringify(data));
  }
  const getLocalData = () => {
    if (localStorage.getItem("data") === null) {
      localStorage.setItem("data", JSON.stringify([]));
    } else {
      setData(JSON.parse(localStorage.getItem("data")));
    }
  };
  return (
    <div className="App">
      <header>
        <h1>Create Todo List</h1>

      </header>
      <Form data={data} setData={setData} setStatus={setStatus} value={value} setValue={setValue} />
      <TodoList data={filtered} value={value} setValue={setValue} setData={setData} />
    </div>
  );
}

export default App;
