function Form({ data, setData, setStatus, value, setValue }) {
    const fetchData = e => {
        e.preventDefault();
        setData([...data, { text: value, completed: false, id: Math.random() * 1000, date_time: new Date().toLocaleString() }])
        setValue('');
    };
    const inputTexthandler=(e)=>{
        setValue(e.target.value);
    };
    const sortHandler = (e) => {
        setStatus(e.target.value)
    }
    return (
        <div className="form">
            <form onSubmit={fetchData}>
                <input onChange={inputTexthandler} value={value} type="text" required className="todo-input" />
                <button className="todo-button" type="submit">
                    <i className="fas fa-plus-square"></i>
                </button>
                <div class="select">
                    <select onChange={sortHandler} name="todos" className="filter-todo">
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="incomplete">Not completed</option>
                        <option value="recent">Recently Added</option>
                    </select>
                </div>

            </form>
        </div>
    )
}
export default Form