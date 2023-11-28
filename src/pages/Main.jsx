import React from "react";
import Footer from "../redux/components/Footer";
import TodoList from "../redux/components/TodoList";

import Input from "../redux/components/Input";

const Main = () => {
    return (
        <div>
            <Input />
            <TodoList isActive={true} />
            <TodoList isActive={false} />
            <Footer />
        </div>
    );
};

export default Main;
