import React, {Component, Fragment} from 'react';
import axios from 'axios';
import ToDoItem from './ToDoItem';
import './style.css';

class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputValue: '',
            list: []
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
    }

    // componentWillMount() {
    //     console.log('componentWillMount');
    // }

    // // 组件被挂载到页面之后，自动被执行
    // componentDidMount() {
    //     console.log('componentDidMount');
    // }

    // // 组件被更新之前，他会被自动执行
    // shouldComponentUpdate() {
    //     console.log('shouldComponentUpdate');
    //     return true;
    // }

    // componentWillUpdate() {
    //     console.log('componentWillUpdate');
    // }

    // componentDidUpdate() {
    //     console.log('componentDidUpdate');
    // }

    render() {
        return (
            <Fragment>
                <div>
                    {/*下面是一个input框*/}
                    {
                        // 下面是一个input框
                    }
                    <label htmlFor="insertArea">输入内容</label>
                    <input
                        id="insertArea"
                        className="input"
                        value={this.state.inputValue}
                        onChange={this.handleInputChange}
                        ref={(input) => {this.input = input}}
                    />
                    <button onClick={this.handleBtnClick}>提交</button>
                </div>
                <ul ref={(ul) => {this.ul = ul}}>
                    {this.getToDoItem()}
                </ul>
            </Fragment>
        )
    }

    componentDidMount() {
        axios.get('/api/todolist')
        .then((res) => {
            console.log(res.data);
            this.setState(() => ({
                list: [...res.data]
            }));
        })
        .catch(() => {alert('error')})
    }

    getToDoItem() {
        return this.state.list.map((item, index) => {
            return (
                <ToDoItem
                    key={index}
                    content={item}
                    onClick={this.handleItemDelete.bind(this, index)}
                />
            )
        })
    }

    handleInputChange(e) {
        const value = e.target.value;
        this.setState(() => ({
            inputValue: value
        }));
    }

    handleBtnClick() {
        this.setState((prevState) => ({
            list: [...prevState.list, prevState.inputValue],
            inputValue: ''
        }), () => {
            console.log(this.ul.querySelectorAll('li').length);
        });
    }

    handleItemDelete(index) {
        this.setState((prevState) => {
            const list = [...prevState.list];
            list.splice(index, 1);
            return {list};
        });
    }
}

export default TodoList;
