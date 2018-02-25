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
                <span> {props.numExpenses} </span>
                expenses totalling
                <span> {numeral(props.expenseTotal / 100).format('$0,0.00')}</span>
            </h2>
            <div className="page-header__actions">
                <Link className="button" to="/create">Add Expense</Link>
            </div>
        </div>
    </div>
);

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    return {
        numExpenses: visibleExpenses.length,
        expenseTotal: selectExpenseTotal(visibleExpenses),
    };
};

export default connect(mapStateToProps)(ExpSummary);
