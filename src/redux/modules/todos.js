import { v4 as uuidv4 } from "uuid";

// 1. action items
const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";
const SWITCH_TODO = "SWITCH_TODO";

// 2. action creator
export const addTodo = (payload) => {
    return { type: ADD_TODO, payload };
};

// 2. action creator
export const removeTodo = (payload) => {
    return { type: REMOVE_TODO, payload };
};

// 2. action creator
export const switchTodo = (payload) => {
    return { type: SWITCH_TODO, payload };
};

// initial State
const initialState = [
    {
        id: uuidv4(),
        title: "react를 배워봅시다.",
        contents: "내용1",
        isDone: false,
    },
];

// 4. reducer를 만들 것
const todos = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...state, action.payload];
        case REMOVE_TODO:
            return state.filter((item) => item.id !== action.payload);
        case SWITCH_TODO:
            return state.map((item) => {
                if (item.id === action.payload) {
                    return { ...item, isDone: !item.isDone };
                } else {
                    return item;
                }
            });
        default:
            return state;
    }
};

// 5. 리듀서를 export
export default todos;
