import React from "react";
import { Button2, Li } from './styles';

const TodoItem = function({ id, item, onCheck }) {
    return (
        <>
            <Li
                onClick={() => { onCheck(id) }}
            >
                {item + "  "}
                <Button2>delete</Button2>
            </Li>
        </>
    )
}

export default TodoItem;