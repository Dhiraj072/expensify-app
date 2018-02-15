import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

test('should render ExpenseForm correctly', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});


test('should render ExpenseForm with expense data', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form submission', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {},
    });
    expect(wrapper.state('error')).toBe('Please enter values for description and amount');
    expect(wrapper).toMatchSnapshot();
});

test('should set description when input changes', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} />);
    const value = 'updated test expense 1';
    expect(wrapper).toMatchSnapshot();
    wrapper.find('input').at(0).simulate('change', {
        target: { value },
    });
    expect(wrapper.state('description')).toBe(value);
    expect(wrapper).toMatchSnapshot();
});

test('should set note when input changes', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} />);
    const value = 'new note';
    expect(wrapper).toMatchSnapshot();
    wrapper.find('textarea').simulate('change', {
        target: { value },
    });
    expect(wrapper.state('note')).toBe(value);
    expect(wrapper).toMatchSnapshot();
});

test('should set amount when input changes', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} />);
    const value = '500';
    expect(wrapper).toMatchSnapshot();
    wrapper.find('input').at(1).simulate('change', {
        target: { value },
    });
    expect(wrapper.state('amount')).toBe(value);
    expect(wrapper).toMatchSnapshot();
});

test('should not set amount for invalid amount value', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} />);
    const value = 'invalid_amount';
    expect(wrapper).toMatchSnapshot();
    wrapper.find('input').at(1).simulate('change', {
        target: { value },
    });
    expect(wrapper.state('amount')).toBe((parseFloat(expenses[0].amount) / 100).toString());
    expect(wrapper).toMatchSnapshot();
});

test('should call onsubmit with correct values for valid for submisson', () => {
    const onSubmitSpy = jest.fn();
    const value = 'updated test expense 1';
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />);
    wrapper.find('input').at(0).simulate('change', {
        target: { value },
    });
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {},
    });
    expect(wrapper.state('error')).toBeUndefined();
    expect(onSubmitSpy).toHaveBeenCalledWith({
        description: value,
        amount: expenses[0].amount,
        createdAt: expenses[0].createdAt,
        note: undefined,
    });
});

test('should set new date on date change', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} />);
    const now = moment();
    wrapper.find('SingleDatePicker').prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now);
});

test('should set calendarFocused if calendar is focused', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} />);
    wrapper.find('SingleDatePicker').prop('onFocusChange')({ focused: true });
    expect(wrapper.state('calendarFocused')).toBe(true);
});
