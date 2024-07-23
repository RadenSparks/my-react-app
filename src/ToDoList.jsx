import React, { useState } from "react";

function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const [newTasks, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if (newTasks.trim() !== "") {
            setTasks(t => [...t, newTasks]);
            setNewTask("");
        }
    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((element, i) => i !== index);
        setTasks(updatedTasks);
    }

    function moveTaskUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] =
                [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] =
                [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    };

    return (
        <div className="to-do-list">
            <h1>To-Do List</h1>

            <div>
                <input
                    type="text"
                    placeholder="Enter a task"
                    value={newTasks}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown} // Add this line
                />
                <button
                    className="add-button"
                    onClick={addTask}>
                    Add
                </button>
            </div>
            <div>
                <ol>
                    {tasks.map((task, index) =>
                        <li key={index}>
                            <span className="text">{task}</span>
                            <button
                                className="delete-button"
                                onClick={() => deleteTask(index)}>
                                Delete
                            </button>
                            <button
                                className="move-button"
                                onClick={() => moveTaskUp(index)}>
                                ⬆️
                            </button>
                            <button
                                className="move-button"
                                onClick={() => moveTaskDown(index)}>
                                ⬇️
                            </button>
                        </li>
                    )}
                </ol>
            </div>
        </div>
    );
}

export default ToDoList;
