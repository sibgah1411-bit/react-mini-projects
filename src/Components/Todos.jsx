import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {removeTodo} from '../features/todo/todoSlice';
function Todos() {
    const todos= useSelector(state => state.todos)
    const dispatch = useDispatch()
    return (
        <>
            <div className=" h-screen flex flex-col items-center w-full">
            <ul className="list-none w-full max-w-md mt-2">
                {todos.map((todo) => (
                    <li
                        className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded w-full max-w-md"
                        key={todo.id}
                    >
                        <div className='text-white'>{todo.text}</div>
                        <button
                            onClick={() => dispatch(removeTodo(todo.id))}
                            className="text-white  bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-4.5a2.25 2.25 0 00-2.25-2.25h-3a2.25 2.25 0 00-2.25 2.25v4.5m4.5 0a1.125 1.125 0 01-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V5.25h4.5v3"
                            />
                            </svg>
                        </button>
                    </li>
                ))}
            </ul>
            </div>
        </>
       
    )
}

export default Todos