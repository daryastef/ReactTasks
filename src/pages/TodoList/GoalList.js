import React, {useState} from "react"
import TaskForm from "./TaskForm";
import "./goalList.css"

export default function GoalList() {
    const [items, setItems] = useState( [
        { title: "Learn Html", description: "Learn basics tags" },
        { title: "Learn Css", description: "Learn basics css" },
        { title: "Learn JavaScript", description: "Learn basics JS" },
    ]);

    const addNewTask = (newTask) => {
        setItems([...items, newTask])
    }
    return(
        <div className="list-container">
            <TaskForm addTask={addNewTask}/>
            {items.map((item, index) =>(
                <div key={index} className="goal-card">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                </div>
            ))}
        </div>
    )
};