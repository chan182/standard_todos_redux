import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { removeTodo, switchTodo } from "../modules/todos";
import { useNavigate } from "react-router-dom";

const TodoList = ({ isActive }) => {
    // stroe에 있는 todos를 가지고 옴
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    const handleDeleteButtonClick = (id) => {
        dispatch(removeTodo(id));
    };
    const handleSwitchButtonClick = (id) => {
        dispatch(switchTodo(id));
    };
    const navigate = useNavigate();
    console.log("todos값은?", todos);
    return (
        <StyledListBox>
            <h4>{isActive ? "해야할 일" : "완료된 일"} </h4>
            {todos
                .filter((item) => item.isDone === !isActive)
                .map((item) => {
                    return (
                        <StyledTodoBox key={item.id}>
                            <div>{item.title}</div>
                            <p>{item.contents}</p>
                            <button
                                onClick={() => {
                                    handleSwitchButtonClick(item.id);
                                }}
                            >
                                {isActive ? "완료" : "취소"}
                            </button>
                            <button
                                onClick={() => {
                                    handleDeleteButtonClick(item.id);
                                }}
                            >
                                삭제
                            </button>
                            <br />
                            <br />
                            <button
                                onClick={() => {
                                    navigate(`/${item.id}`);
                                }}
                            >
                                상세보기
                            </button>
                        </StyledTodoBox>
                    );
                })}
        </StyledListBox>
    );
};

export default TodoList;

const StyledListBox = styled.div`
    background-color: beige;
    padding: 20px;
`;

const StyledTodoBox = styled.div`
    background-color: lightpink;
    color: white;
    padding: 10px;
    margin: 10px;
`;
