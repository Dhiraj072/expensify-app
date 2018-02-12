import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

export default class ExpenseForm extends React.Component {
    state = {
        description: this.props.expense ? this.props.expense.description : '',
        amount: this.props.expense ? (this.props.expense.amount / 100).toString() : '',
        note: this.props.expense ? this.props.expense.note : '',
        createdAt: this.props.expense ? moment(this.props.expense.createdAt) : moment(),
        calendarFocused: false,
        error: '',
    };
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    };
    onAmountChange = (e) => {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }));
        }
    };
    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({ createdAt }));
        }
    };
    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }));
    };
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }));
    };
    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.amount || !this.state.description) {
            this.setState(() => ({ error: 'Please enter values for description and amount' }));
        } else {
            this.setState(() => ({ error: undefined }));
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 10,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note,
            });
        }
    };
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        placeholder="Description"
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <input
                        type="text"
                        placeholder="amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        isOutsideRange={() => false}
                        numberOfMonths={1}
                    />
                    <textarea
                        placeholder="Add note (optional)"
                        value={this.state.note}
                        onChange={this.onNoteChange}
                    />
                    <button type="submit">Add Expense</button>
                </form>
            </div>
        );
    }
}
