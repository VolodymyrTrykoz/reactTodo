import React, { Component } from 'react';
import AppHeader from "./AppHeader";
import SearchPanel from "./SearchPanel";
import ItemStatusFilter from "./ItemStatusFilter";
import TodoList from "./TodoList";
import AddTodo from './AddTodo';

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            todoData:  [
                { id:1, label: 'Drink coffee', important: false, done: false },
                { id:2, label: 'Build Awesome App', important: false, done: false },
                { id:3, label: 'Move to Canada', important: true, done: false },
            ],
            newTaskTodo: '',
            searchValue: '',
            filteredGroup: 'all'
        }
    }

    onChangeLabelState(label, key){
        const { todoData } = this.state;
        const newTodoData = [ ...todoData ];
        const chosenLabel = newTodoData.find(item => item.label === label);
        chosenLabel[key] = !chosenLabel[key];
        this.setState(({ todoData })=>({ todoData: newTodoData }));
    }

    onHandleDelete(label) {
        const { todoData } = this.state;
        const newTodoData = [...todoData].filter( item => item.label !== label );
        this.setState(({ todoData })=>({ todoData: newTodoData }));
    }

    countDoneItems(done) {
        const { todoData } = this.state;
        if(done){
            return todoData.filter( item => item.done ).length;
        }
        return todoData.filter( item => !item.done ).length;

    }

    onSubmit(e) {
        e.preventDefault();
        const { todoData, newTaskTodo } = this.state;
        const taskToAdd = {
            id: todoData.length + 1,
            label: newTaskTodo,
            important: false,
            done: false
        };
        if( newTaskTodo ) {
            const newTodoData = [...todoData, { ...taskToAdd }];
            this.setState( ({ todoData }) => ({ todoData: newTodoData }))
            this.setState(({ newTaskTodo }) => ({ newTaskTodo: '' }))
        }
    }

    onInputChange(e) {
        this.setState({
            newTaskTodo: e.target.value
        })
    }

    onSelectSortedGroup(key){
        this.setState({
            filteredGroup: key
        })
    }

    onSort(todoData, filteredGroup) {
        switch (filteredGroup) {
           case 'all': return todoData;
           case 'active': return todoData.filter(item => !item.done);
           case 'done': return todoData.filter(item => item.done);
       }
    }

    onSearch(e){
        this.setState({
            searchValue: e.target.value
        })
    }

    filterSearchedValues(items, search){
        return items.filter( item => item.label.includes(search) )
    }

    render(){
        const { todoData, newTaskTodo, searchValue, filteredGroup } = this.state;
        const visibleTodo = this.onSort(this.filterSearchedValues(todoData, searchValue), filteredGroup);
        return(
            <div className="todo-app">
                <AppHeader toDo={ this.countDoneItems() } done={ this.countDoneItems('done') }/>
                <div className="top-panel d-flex">
                    <SearchPanel
                        onSearch = { (e) => this.onSearch(e) }
                    />
                    <ItemStatusFilter
                        filteredGroup = { filteredGroup }
                        onSelectSortedGroup = { (key) => this.onSelectSortedGroup(key) }
                    />
                </div>
                <AddTodo
                    newTaskTodo = { newTaskTodo }
                    onSubmit = { (e) => this.onSubmit(e) }
                    onInputChange = { (e) => this.onInputChange(e) }
                />
                <TodoList
                    onChangeLabelState = { (label, key) => this.onChangeLabelState(label, key) }
                    onHandleDelete = { (label) => this.onHandleDelete(label) }
                    todos = { visibleTodo }
                    newTaskTodo = { newTaskTodo }
                />
            </div>
        )
    }
}