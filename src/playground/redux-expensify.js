import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// ADD_EXPENSE
const addExpense = ({
    description = '',
    note = '',
    amount = 0,
    createdAt = 0,
}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt,
    },
});

// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id,
});

// EDIT_EXPENSE
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates,
});

// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text,
});

// SORT_BY_DATE
const sortByDate = () => ({ type: 'SORT_BY_DATE' });

// SORT_BY_AMOUNT
const sortByAmount = () => ({ type: 'SORT_BY_AMOUNT' });

// SET_START_DATE
const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate,
});

// SET_END_DATE
const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate,
});

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

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined,
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
    case 'SET_TEXT_FILTER':
        return { ...state, text: action.text };
    case 'SORT_BY_DATE':
        return { ...state, sortBy: 'date' };
    case 'SORT_BY_AMOUNT':
        return { ...state, sortBy: 'amount' };
    case 'SET_START_DATE':
        return { ...state, startDate: action.startDate };
    case 'SET_END_DATE':
        return { ...state, endDate: action.endDate };
    default:
        return state;
    }
};

// Get visible expenses
const getVisibleExpenses = (expenses, { startDate, endDate, text, sortBy }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const testMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && testMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy === 'amount') {
            console.log("amount");
            return a.amount < b.amount ? 1 : -1;
        }
    });
};

// Store creation
const store = createStore(combineReducers({
    expenses: expenseReducer,
    filters: filtersReducer,
}));

store.subscribe(() => {
    const state = store.getState();
    console.log(state.filters);
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({ description: 'Coffee', amount: 1200, createdAt: 5000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Tea', amount: 5000, createdAt: 1000 }));
const expenseThree = store.dispatch(addExpense({ description: 'Coffee', amount: 1100, createdAt: 4000 }));
const expenseFour = store.dispatch(addExpense({ description: 'Coffee', amount: 8000, createdAt: 8000 }));

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense(expenseTwo.expense.id, { description: 'Updated test expense', amount: 100 }));
// store.dispatch(setTextFilter('test1'));
store.dispatch(sortByDate());
// store.dispatch(sortByAmount());
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(0));
// store.dispatch(setStartDate());

const demoState = {
    expenses: [{
        id: '1',
        description: 'Jan rent',
        note: 'This is last payment for that address',
        amount: 54500,
        createdAt: 0,
    }],
    filters: {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined,
    },
};
