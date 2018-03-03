import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpenseTotal from '../selectors/selectExpenseTotal';


export const ExpSummary = (props) => (
    <div className="page-header">
        <div className="content-container">
            <h2 className="page-header__title">
                Viewing
                <span> {props.numVisibleExpenses} </span>
                expenses totalling
                <span> {numeral(props.expenseTotal / 100).format('$0,0.00')}</span>
            </h2>
            <h4>
                <span>{props.numVisibleExpenses} </span>
                out of total
                <span> {props.numExpenses} </span>
                expenses displayed
            </h4>
            <div className="page-header__actions">
                <Link className="button" to="/create">Add Expense</Link>
            </div>
        </div>
    </div>
);

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    return {
        numVisibleExpenses: visibleExpenses.length,
        expenseTotal: selectExpenseTotal(visibleExpenses),
        numExpenses: state.expenses.length,
    };
};

export default connect(mapStateToProps)(ExpSummary);
