import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpenseTotal from '../selectors/selectExpenseTotal';

export const ExpSummary = (props) => (
    <div>
        <h2>Viewing {props.numExpenses} expenses totalling {numeral(props.expenseTotal / 100).format('$0,0.00')}</h2>
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
