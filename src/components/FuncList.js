import React, { useState } from 'react';
import TodoItem from "./TodoItem";
import './styles.css';

function FuncList() {
    const [input, setInput] = useState("");
    const [items, setItems] = useState([]);

    function addItem() {
        setItems(prevData => {
            return input.length > 0 ? [...prevData, input] : [...prevData]; // setItems можно сократить if ? A : B
        });

        setInput("");
    }

    function removeItem(id) {
        setItems(prevData => {
            return prevData.filter((item, index) => {
                return index !== id;
            })
        });
    }

    return (
        <div className="container">
            <div className="heading">
                <h1 className="title">To Do List</h1>
            </div>
            <input
                type="text"
                value={input}
                onChange={(event) => { setInput(event.target.value) }}
            />
            <button className='addButton' onClick={addItem}>Add</button>

            <div className="items">
                <ul>
                    {items.map((item, index) => (
                        <TodoItem
                            key={index}
                            id={index}
                            item={item}
                            onCheck={removeItem}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default FuncList;