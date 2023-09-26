import React, {useState} from 'react';
import '../styles/css/todo.css';
import todoData from '../resource/TodoDaten.json';

function Todos() {
    const [selectedTodo, setSelectedTodo] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
    const [completedTodos, setCompletedTodos] = useState(0); // 追踪已完成的TODO数量

    const handleCheckboxChange = (event) => {
        // 如果复选框被选中，增加已完成的TODO数量，否则减少
        event.target.checked ? setCompletedTodos(completedTodos + 1) : setCompletedTodos(completedTodos - 1);
    };

    const handleInfoClick = (todo) => {
        setSelectedTodo(todo);
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
        setSelectedTodo(null);
    };

    return (
        <div className="widget-box-1">
            <div className="inner-container">
                <div className="todo-count">
                    {todoData.length - completedTodos} {/* 显示未完成的TODO数量 */}
                </div>
                {todoData.map((todo, index) => (
                    <div key={index} className="todo-item">
                        <label className="todo-left">
                            <input type="checkbox" onChange={handleCheckboxChange}/>
                            <span>{todo.Titel}</span>
                        </label>
                        <label className="todo-right">
                            {todo.Tag && (
                                <button className={`tag-box ${todo.Tag === "wichtig" ? "wichtig" : "default"}`}>
                                    {todo.Tag}
                                </button>
                            )}
                            <button onClick={() => handleInfoClick(todo)}>
                                <div className="info-icon">i</div>
                            </button>
                        </label>
                    </div>
                ))}
            </div>
            {showPopup && <div className="backdrop" onClick={handleClosePopup}></div>}
            {showPopup && selectedTodo && (
                <div className="popup">
                    <h2>{selectedTodo.Titel || ""}</h2>

                    {selectedTodo['Frist'] && (
                        <p>Frist: {selectedTodo.Frist || ""}</p>
                    )}
                    {selectedTodo['Dauer'] && (
                        <p>Dauer: {selectedTodo.Dauer || ""}</p>
                    )}
                    {selectedTodo['Kurs/Referenz'] && (
                        <p>Kurs/Referenz: <a
                            href={selectedTodo['Kurs/Referenz'].url}>{selectedTodo['Kurs/Referenz'].text}</a></p>
                    )}
                    <p>bearbeiten: {selectedTodo.bearbeiten || ""}</p>
                    <button onClick={handleClosePopup}>Fertig</button>
                </div>
            )}
        </div>
    );
}

export default Todos;

