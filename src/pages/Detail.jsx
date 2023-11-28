import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const Detail = () => {
    const navigate = useNavigate();
    const paramId = useParams().id;

    const todos = useSelector((state) => state.todos);
    const filteredTodo = todos.filter((item) => item.id === paramId)[0];

    return (
        <StyledDetailBox>
            <h3 style={{ marginBottom: "10px" }}>
                입력받은 id와 일치하는 상세보기를 출력
            </h3>
            제목 : {filteredTodo.title}
            <br />
            내용 : {filteredTodo.contents}
            <br />
            완료여부 : {filteredTodo.isDone.toString()}
            <br />
            <br />
            <button
                onClick={() => {
                    navigate("/");
                }}
            >
                이전 페이지로
            </button>
        </StyledDetailBox>
    );
};

export default Detail;

const StyledDetailBox = styled.div`
    background-color: lavender;
    padding: 20px;
`;
const StTodo = styled.div`
    border: 1px solid #ddd;
    width: 20%;
    height: 100px;
    display: flex;
    align-items: center;
    padding: 0 24px;
    border-radius: 12px;
`;
