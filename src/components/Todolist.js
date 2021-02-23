import Todo from "./Todo"

function TodoList({ data, setData, value, setValue }) {
    // console.log(data)
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {data.map(todo => (
                    <Todo key={todo.id} data={todo} setData={setData} alldata={data} value={value} setValue={setValue} />
                ))}
            </ul>
        </div>
    )
}

export default TodoList