import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import { ExpenseListFilter } from '../../components/ExpenseListFilter';

let setStartDate;
let setEndDate;
let sortByAmount;
let sortByDate;
let setTextFilter;
let wrapper;

const filters = {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month'),
};

beforeEach(() => {
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    sortByAmount = jest.fn();
    sortByDate = jest.fn();
    setTextFilter = jest.fn();
    wrapper = shallow(<ExpenseListFilter
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        sortByAmount={sortByAmount}
        sortByDate={sortByDate}
        setTextFilter={setTextFilter}
        filters={filters}
    />);
});

test('should render ExpenseListFilter correctly', () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('input').text()).toBe(filters.text);
    expect(wrapper.find('select').prop('value')).toBe(filters.sortBy);
    expect((wrapper).find('DateRangePicker').prop('startDate')).toBe(filters.startDate);
    expect((wrapper).find('DateRangePicker').prop('endDate')).toBe(filters.endDate);
});

test('should handle text filter change', () => {
    const value = 'expense 5';
    wrapper.find('input').simulate('change', {
        target: { value },
    });
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test('should handle sort by date', () => {
    const value = 'date';
    wrapper.find('select').simulate('change', {
        target: { value },
    });
    expect(sortByDate).toHaveBeenCalled();
});

test('should handle sort by amount', () => {
    const value = 'amount';
    wrapper.find('select').simulate('change', {
        target: { value },
    });
    expect(sortByAmount).toHaveBeenCalled();
});

test('should handle dates change', () => {
    const startDate = moment(10);
    const endDate = moment(15);
    wrapper.find('DateRangePicker').prop('onDatesChange')({ startDate, endDate });
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test('should handle calendar focused', () => {
    const calendarFocused = 'endDate';
    wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});
