import React, {useState} from 'react';
import '../styles/css/todo.css';

function Todos() {
    const [selectedTodo, setSelectedTodo] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
    const [completedTodos, setCompletedTodos] = useState(0);
    const [isEditing, setIsEditing] = useState(false);
    const [editingTodo, setEditingTodo] = useState(null);

    const [isEditingPopupOpen, setIsEditingPopupOpen] = useState(false);
    const [editedTodo, setEditedTodo] = useState(null);

    const [isCreating, setIsCreating] = useState(false);
    const [newTodo, setNewTodo] = useState({
        Titel: '',
        Tag: '',
        Frist: '',
        Dauer: '',
        'Kurs/Referenz': {text: '', url: ''}
    });

    const [todoData, setTodoData] = useState([
        {
            "Titel": "Hausarbeit abgeben",
            "Tag": "wichtig",
            "Frist": "2022-05-15",
            "Dauer": null,
            "Kurs/Referenz": null
        },
        {
            "Titel": "Forenbeitrag",
            "Tag": null,
            "Frist": "2022-05-10",
            "Dauer": "30 Min.",
            "Kurs/Referenz": {
                "text": "Zum Forum",
                "url": "https://www.example.com"
            }
        },
        {
            "Titel": "Learning-Nuggets",
            "Tag": "freiwillig",
            "Frist": null,
            "Dauer": null,
            "Kurs/Referenz": null
        },
        {
            "Titel": "Klausur",
            "Tag": null,
            "Frist": "2022-06-20",
            "Dauer": "1,5 Std.",
            "Kurs/Referenz": {
                "text": "02 - Einführung in die Rechtsgebiete der Sozialen Arbeit",
                "url": "https://www.example.com"
            }
        }
    ]);

    const toggleEditing = () => {
        setIsEditing(!isEditing);
        setEditingTodo(null);
    };

    const deleteTodo = (targetTodo) => {
        const updatedTodos = todoData.filter(todo => todo !== targetTodo);
        setTodoData(updatedTodos);
    };


    const handleCheckboxChange = (event) => {
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

    const openEditingPopup = (todo) => {
        setIsEditingPopupOpen(true);
        setEditingTodo(todo);
        setEditedTodo({...todo});
    };

    const handleEditChange = (event, field, subField) => {
        if (field === "Kurs/Referenz" && subField) {
            setEditedTodo({
                ...editedTodo,
                "Kurs/Referenz": {
                    ...editedTodo["Kurs/Referenz"],
                    [subField]: event.target.value
                }
            });
        } else {
            setEditedTodo({...editedTodo, [field]: event.target.value});
        }
    };

    const saveEditedTodo = () => {
        const updatedTodos = todoData.map(todo =>
            todo === editingTodo ? editedTodo : todo
        );
        setTodoData(updatedTodos);
        setIsEditingPopupOpen(false);
        setEditingTodo(null);
        setEditedTodo(null);
    };
    const handleNewTodoChange = (event, field, subField) => {
        if (field === "Kurs/Referenz" && subField) {
            setNewTodo({
                ...newTodo,
                "Kurs/Referenz": {
                    ...newTodo["Kurs/Referenz"],
                    [subField]: event.target.value
                }
            });
        } else {
            setNewTodo({...newTodo, [field]: event.target.value});
        }
    };
    const saveNewTodo = () => {
        setTodoData([...todoData, newTodo]);
        setIsCreating(false);
        setNewTodo({
            Titel: '',
            Tag: '',
            Frist: '',
            Dauer: '',
            'Kurs/Referenz': {text: '', url: ''}
        });
    };

    return (
        <div className="widget-box-1">
            <button className="button-edit-1" onClick={toggleEditing}>
                {isEditing ? "Fertig" : "Bearbeiten"}
            </button>
            <div className="inner-container">
                <div className="todo-count">
                    {todoData.length - completedTodos} {/* Anzeige der Anzahl der ausstehenden TODOs */}
                </div>
                {todoData.map((todo, index) => (
                    <div key={index} className="todo-item">
                        <label className="todo-left">
                            <input type="checkbox" onChange={handleCheckboxChange}/>
                            <span>{todo.Titel}</span>
                        </label>
                        {isEditing ? (
                            <div className="button-group">
                                <button onClick={() => openEditingPopup(todo)}>Bearbeiten</button>
                                <button onClick={() => deleteTodo(todo)}>Löschen</button>
                            </div>
                        ) : (
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
                        )}
                    </div>
                ))}
                <button className="button-circle" onClick={() => setIsCreating(true)}>+</button>

            </div>
            {/*{showPopup && <div className="backdrop" onClick={handleClosePopup}></div>}*/}
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
                    <button onClick={handleClosePopup}>Fertig</button>
                </div>
            )}

            {isEditingPopupOpen && (
                <div className="editing-popup">
                    <label>
                        Titel:
                        <input
                            type="text"
                            value={editedTodo.Titel || ''}
                            onChange={(e) => handleEditChange(e, 'Titel')}
                            placeholder="Titel"
                        />
                    </label>
                    <label>
                        Tag:
                        <input
                            type="text"
                            value={editedTodo.Tag || ''}
                            onChange={(e) => handleEditChange(e, 'Tag')}
                            placeholder="Tag z.B. 'wichtig'"
                        />
                    </label>
                    <label>
                        Frist:
                        <input
                            type="date"
                            value={editedTodo.Frist || ''}
                            onChange={(e) => handleEditChange(e, 'Frist')}
                            placeholder="Frist"
                        />
                    </label>
                    <label>
                        Dauer:
                        <input
                            type="text"
                            value={editedTodo.Dauer || ''}
                            onChange={(e) => handleEditChange(e, 'Dauer')}
                            placeholder="Dauer"
                        />
                    </label>
                    <div>
                        <label>
                            Kurs/Referenz Bezeichnung:
                            <input
                                type="text"
                                value={editedTodo["Kurs/Referenz"] ? editedTodo["Kurs/Referenz"].text || '' : ''}
                                onChange={(e) => handleEditChange(e, 'Kurs/Referenz', 'text')}
                                placeholder="Bezeichnung"
                            />
                        </label>
                        <label>
                            Kurs/Referenz URL:
                            <input
                                type="text"
                                value={editedTodo["Kurs/Referenz"] ? editedTodo["Kurs/Referenz"].url || '' : ''}
                                onChange={(e) => handleEditChange(e, 'Kurs/Referenz', 'url')}
                                placeholder="URL"
                            />
                        </label>
                    </div>
                    <button onClick={saveEditedTodo}>Save</button>
                    <button onClick={() => setIsEditingPopupOpen(false)}>Cancel</button>
                </div>
            )}
            {isCreating && (
                <div className="editing-popup">
                    <label>
                        Titel:
                        <input
                            type="text"
                            value={newTodo.Titel}
                            onChange={(e) => handleNewTodoChange(e, 'Titel')}
                            placeholder="Titel"
                        />
                    </label>
                    <label>
                        Tag:
                        <input
                            type="text"
                            value={newTodo.Tag}
                            onChange={(e) => handleNewTodoChange(e, 'Tag')}
                            placeholder="Tag z.B. 'wichtig'"
                        />
                    </label>
                    <label>
                        Frist:
                        <input
                            type="date"
                            value={newTodo.Frist}
                            onChange={(e) => handleNewTodoChange(e, 'Frist')}
                            placeholder="Frist"
                        />
                    </label>
                    <label>
                        Dauer:
                        <input
                            type="text"
                            value={newTodo.Dauer}
                            onChange={(e) => handleNewTodoChange(e, 'Dauer')}
                            placeholder="Dauer z.B. '1 Stunde'"
                        />
                    </label>
                    <div>
                        <label>
                            Kurs/Referenz Bezeichnung:
                            <input
                                type="text"
                                value={newTodo["Kurs/Referenz"] ? newTodo["Kurs/Referenz"].text : ''}
                                onChange={(e) => handleNewTodoChange(e, 'Kurs/Referenz', 'text')}
                                placeholder="Bezeichnung"
                            />
                        </label>
                        <label>
                            Kurs/Referenz URL:
                            <input
                                type="text"
                                value={newTodo["Kurs/Referenz"] ? newTodo["Kurs/Referenz"].url : ''}
                                onChange={(e) => handleNewTodoChange(e, 'Kurs/Referenz', 'url')}
                                placeholder="URL"
                            />
                        </label>
                    </div>
                    <button onClick={saveNewTodo}>Save</button>
                    <button onClick={() => setIsCreating(false)}>Cancel</button>
                </div>
            )}
        </div>
    );
}

export default Todos;

