



const initialState = {
    Todos: [
        {task: 'Create a todo list', completed: false},
        {task: 'Make sure the code works', completed: false},
        {task: 'Triple-check that the code works and why', completed: false}
    ]
};

function reducer(state = initialState, action) {
    console.log('reducer', action);
}

export default reducer;