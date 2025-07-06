function Todo({ key, data, setData, alldata, value, setValue }) {
    const deleteHandler = () => {
        let cur_data = document.getElementById(data.id);
        cur_data.classList.add('fall');
        setTimeout(() => setData(alldata.filter((el) => el.id !== data.id)), 1000)
    };
    const completeHandler = () => {
        let temp_data = alldata.map((item) => {
            if (item.id === data.id) {
                item.completed = !item.completed
            }
            return item
        });
        setData(temp_data)
    };
    const editHandler = () => {
        let actual_div = document.getElementById(data.id);
        let cur_data = document.getElementById(data.id).childNodes;
        let form_data = document.getElementsByClassName('todo-input')[0]
        form_data.focus();
        setValue(cur_data[0].childNodes[0].nodeValue);
        setTimeout(() => setData(alldata.filter((el) => el.id !== data.id)), 1000)
        actual_div.classList.add('fall');

    }
    return (
        <div id={data.id} className="todo">
            <li className={`todo-item ${data.completed ? 'completed' : ''}`}>{data.text} <small className="date">{data.date_time}</small></li>
            <button onClick={completeHandler} className="complete-btn"><i className={`${!data.completed ? 'fas fa-check' : 'far fa-window-close'}`}></i></button>
            <button onClick={deleteHandler} className="trash-btn"><i className="fas fa-trash"></i></button>
            <button onClick={editHandler} className="edit-btn"><i className="fas fa-pencil"></i></button>

        </div>
    )
}

export default Todo;
