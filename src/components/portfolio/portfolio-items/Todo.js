import React from 'react';
import Navigation from '../../Navigation'
import 'aos/dist/aos.css';

const Todo = () => {
    return (
        <div>
            <Navigation />
            <div data-aos="fade-up" data-aos-duration="1200" className="main-portfolio-item main-parallax">
                <h1>Todo List App</h1>
                <img src={require("../images/todolist.png")} alt=""/>
                <p>For this project I've created todo list app using React</p>
                <p>I had to handle props and state in order to share data between components and write functions to handle interaction with the app such as deleting or adding a todo. </p>
                <div className="anchor-div">
                    <a href="https://josprins.github.io/todo-deploy/">LIVE DEMO</a>
                    <a href="https://github.com/josprins/todo">GITHUB REPOSITORY</a>
                </div>
                
            </div>
        </div>
    );
};

export default Todo;