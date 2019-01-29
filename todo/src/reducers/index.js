import { ADD_TODO } from '../actions';



const initialState = {
    todos: [
        {task: 'Create a todo list.', completed: false},
        {task: 'Make sure the code works.', completed: false},
        {task: 'Triple-check that the code works and why it works!', completed: false}
    ]
};

function reducer(state = initialState, action) {
    console.log('reducer', action);

    switch (action.type) {
        case ADD_TODO:
            console.log('add_todo', action);

            const newTodo = {
                task: action.payload,
                completed: false
            };
            return {
                ...state,
                todos: [...state.todos, newTodo]
            };
        default:
            return state;
    }
}

export default reducer;