// Expenses Reducer
const expensesReducerDefaultState = [];

const expenseReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
    case 'ADD_EXPENSE':
        return state.concat(action.expense);
    case 'REMOVE_EXPENSE':
        return state.filter((expense) => expense.id !== action.id);
    case 'EDIT_EXPENSE':
        return state.map((expense) => (
            expense.id === action.id ? { ...expense, ...action.updates } : expense));
    default:
        return state;
    }
};

export default expenseReducer;
