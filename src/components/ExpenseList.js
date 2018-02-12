import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpList = (props) => (
    <div>
        { props.expenses.length > 0 ? (
            props.expenses.map((expense) => <ExpenseListItem expense={expense} key={expense.id} />)
        ) : (
            <p>No expenses</p>
        )}
    </div>
);

const mapStateToProps = (state) => ({
    expenses: selectExpenses(state.expenses, state.filters),
});

export default connect(mapStateToProps)(ExpList);
