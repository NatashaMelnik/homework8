import React, { useState } from 'react';
import TodoItem from "./TodoItem";
import { Button, Title, Wrapper, Input } from './styles';

function FuncList() {
    const [input, setInput] = useState("");
    const [items, setItems] = useState([]);

    const addItem = function () {
        setItems(prevData => {
            return input.length > 0 ? [...prevData, input] : [...prevData]; // setItems можно сократить if ? A : B
        });

        setInput("");
    }

    const removeItem = function (id) {
        setItems(prevData => {
            return prevData.filter((item, index) => {
                return index !== id;
            })
        });
    }

    return (
        <Wrapper className="container">
            <div className="heading">
                <Title className="title">To Do List </Title>
            </div>
            <br></br>
            <Input
                type="text"
                value={input}
                placeholder="add your task"
                onChange={(event) => { setInput(event.target.value) }}
            />
            <Button className='addButton' onClick={addItem}>Add</Button>

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
        </Wrapper>
    );
}

export default FuncList;