import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { addExpense, removeExpense, editExpense } from './actions/expenses';
import { sortByDate, setEndDate, setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.subscribe(() => {
    const state = store.getState();
    console.log(state.filters);
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});


console.log(store.getState());

const expenseOne = store.dispatch(addExpense({ description: 'Coffee', amount: 1200, createdAt: 4500 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Tea', amount: 3000, createdAt: 1000 }));
const expenseThree = store.dispatch(addExpense({ description: 'Water', amount: 11200, createdAt: 15000 }));
store.dispatch(sortByDate());

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
