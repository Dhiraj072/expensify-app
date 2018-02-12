import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters';

export class ExpenseListFilter extends React.Component {
    state = {
        calendarFocused: null,
    }
    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }));
    }
    onDatesChange = ({ startDate, endDate }) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    };
    onSortByChange = (e) => {
        if (e.target.value === 'amount') {
            this.props.sortByAmount();
        } else if (e.target.value === 'date') {
            this.props.sortByDate();
        }
    };
    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value);
    };
    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.props.filters.text}
                    onChange={this.onTextChange}
                />
                <select
                    value={this.props.filters.sortBy}
                    onChange={this.onSortByChange}
                >
                    <option value="amount">Amount</option>
                    <option value="date">Date</option>
                </select>
                <DateRangePicker
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDatesChange}
                    onFocusChange={this.onFocusChange}
                    focusedInput={this.state.calendarFocused}
                    numberOfMonths={1}
                    showClearDates
                    isOutsideRange={() => false}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    filters: state.filters,
});

const mapDispatchToProps = (dispatch) => ({
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate)),
    sortByAmount: () => dispatch(sortByAmount()),
    sortByDate: () => dispatch(sortByDate()),
    setTextFilter: (text) => dispatch(setTextFilter(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilter);
