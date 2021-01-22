import React from "react";

function TodoItem({ id, item, onCheck }) {
    return (
        <>
            <li
                onClick={() => { onCheck(id) }}
            >
                {item + "  "}
                <button>delete</button>
            </li>
        </>
    )
}

export default TodoItem;