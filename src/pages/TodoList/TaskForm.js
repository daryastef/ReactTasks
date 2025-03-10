import  React, {useState} from "react";
import "./TaskForm.css"

export default function TaskForm({addTask}){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        if (!title.trim() || !description.trim()) return;

        addTask({title, description});
        setTitle('');
        setDescription('');
    }

    return(
        <form onSubmit={handleSubmit} className="task-form">
            <input
                type="text"
                className="add-task"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                type="text"
                className="add-task"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button type="submit" className="add-button">Add new goal</button>
        </form>
    )
};