import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilter from './ExpenseListFilter';

const ExpenseDashboardPage = () => (
    <div>
        Dashboard
        <ExpenseListFilter />
        <ExpenseList />
    </div>
);

export default ExpenseDashboardPage;
