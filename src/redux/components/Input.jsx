import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { addTodo } from "../modules/todos";

const Input = () => {
    const [title, setTitle] = useState("");
    const [contents, setContents] = useState("");
    const dispatch = useDispatch();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const newTodo = {
            id: uuidv4(),
            title,
            contents,
            isDone: false,
        };
        dispatch(addTodo(newTodo));
    };

    const handleTitleInputChange = (event) => {
        setTitle(event.target.value);
    };
    const handleContentsInputChange = (event) => {
        setContents(event.target.value);
    };

    return (
        <StyledInputBox>
            <form onSubmit={onSubmitHandler}>
                <label>Todos의 제목을 입력하세요</label>
                <StInput
                    type="text"
                    value={title}
                    onChange={handleTitleInputChange}
                />
                <StInput
                    type="text"
                    value={contents}
                    onChange={handleContentsInputChange}
                />
                <StButton type="submit">추가하기</StButton>
            </form>
        </StyledInputBox>
    );
};

export default Input;

const StyledInputBox = styled.div`
    background-color: aqua;
    padding: 20px;
`;

const StInput = styled.input`
    border: 1px solid #eee;
    margin: 0 24px;
    height: 25px;
    width: 300px;
    border-radius: 12px;
    outline: none;
    padding: 0 10px;
`;

const StButton = styled.button`
    border: none;
    background-color: #eee;
    height: 25px;
    cursor: pointer;
    width: 120px;
    border-radius: 12px;
`;
