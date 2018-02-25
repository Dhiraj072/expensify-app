import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import ConfirmationModal from './ConfirmationModal';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
    constructor() {
        super();
        this.state = {
            isModalOpen: false,
        };
    }
    onSubmit = (expense) => {
        this.props.startEditExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    };
    onClick = () => {
        this.setState(() => ({ isModalOpen: true }));
    };
    handleRemoveExpenseConfirmation = (e) => {
        e.preventDefault();
        const removeExpense = e.target.value;
        if (removeExpense === 'yes') {
            this.props.startRemoveExpense(this.props.expense.id);
            this.props.history.push('/');
        }
        this.setState(() => ({ isModalOpen: false }));
    };
    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Edit Expense</h1>
                    </div>
                </div>
                <div className="content-container">
                    <ExpenseForm onSubmit={this.onSubmit} expense={this.props.expense} />
                    <button className="button" onClick={this.onClick}>
                        Remove Expense
                    </button>
                </div>
                <ConfirmationModal
                    isModalOpen={this.state.isModalOpen}
                    handleConfirmation={this.handleRemoveExpenseConfirmation}
                />
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find((expense) => expense.id === props.match.params.id),
});

const mapDispatchToProps = (dispatch) => ({
    startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
    startRemoveExpense: (id) => dispatch(startRemoveExpense(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
