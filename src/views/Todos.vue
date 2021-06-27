<template>
    <div class="body">
        <header>
            <h1>TodoList</h1>
        </header>
        <div>
            <input type="text" v-model="newTodoItem">
            <span class="bottons">
                <button v-on:click="addTodo">추가</button>
                <button v-on:click="deleteAll">모두 삭제</button>
            </span>
        </div>
        <section>
            <ul>
                <ol v-bind:key="todoItem" v-for="(todoItem) in todoItems">
                    <div class="todos">
                        {{ todoItem }} 
                        <button v-on:click="drop(todoItem)">삭제</button>
                    </div>
                </ol>
            </ul>
        </section>
    </div>
</template>

<script>
export default {

    data() {
        return {
            id : 'todos',
            newTodoItem: '',
            todoItems: [],
        }
    },
    mounted : function () {
        this.show()
    },
    methods: {
        addTodo() {
            if(this.newTodoItem !== ''){
                var content = this.newTodoItem && this.newTodoItem.trim();
                this.todoItems.push(content);
                localStorage.setItem(this.id, JSON.stringify(this.todoItems));
                this.newTodoItem = '';
            }
        },
        show() {
            if(this.todoItems != null) {
                this.todoItems.length = 0;
            }

            let foo = JSON.parse(localStorage.getItem(this.id));
            if(foo != null) {
                console.log(foo);
    
                for(var i = 0; i<foo.length; i++) {
                    this.todoItems.push(foo[i])
                }
            } else {
                this.todoItems.length = 0;
            }            
        },
        deleteAll() {
            localStorage.clear();
            location.reload();
        },
        drop(item) {
            // for(let i = 0; i < this.todoItems.length; i++) {
            //     if(this.todoItems[i] === item) {
            //         this.todoItems.splice(i, 1);
            //         i--;
            //     }
            // }
            let foo = this.todoItems.indexOf(item);
            console.log(foo);
            this.todoItems.splice(foo, 1);

            localStorage.setItem(this.id, JSON.stringify(this.todoItems));
        }
    },
}
</script>

<style>
button{
    background-color: rgb(96, 96, 255);
    color: white;
    border: none;
    padding: 3px;
    padding-left: 10px;
    padding-right: 10px;
    margin: 5px;
    outline: none;
    transition: background-color .3s, color .3s;
}
button:hover{
    background-color: rgb(170, 215, 255);
    color: rgb(48, 48, 48);
}
.body{
    font-size: 2rem;
}
section{
    font-size: 1rem;
}
.todos{
    background-color: gainsboro;
    border-radius: 4px;
    margin-bottom: 10px;
    
}
</style>x