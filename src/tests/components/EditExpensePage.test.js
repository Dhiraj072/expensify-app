import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let startEditExpense;
let history;
let startRemoveExpense;
let wrapper;
const expense = expenses[0];

beforeEach(() => {
    startEditExpense = jest.fn();
    history = { push: jest.fn() };
    startRemoveExpense = jest.fn();
    wrapper = shallow(<EditExpensePage
        startEditExpense={startEditExpense}
        startRemoveExpense={startRemoveExpense}
        history={history}
        expense={expense}
    />);
});

test('should render EditExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle edit expense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expense);
    expect(startEditExpense).toHaveBeenLastCalledWith(expense.id, expense);
    expect(history.push).toHaveBeenLastCalledWith('/');
});

test('should handle remove expense', () => {
    wrapper.find('button').simulate('click');
    expect(wrapper.state('isModalOpen')).toBe(true);
});

test('should handle remove', () => {
    wrapper.instance().handleRemoveExpenseConfirmation({
        preventDefault: () => {},
        target: { value: 'yes' },
    });
    expect(startRemoveExpense).toHaveBeenCalledWith(expense.id);
    expect(history.push).toHaveBeenCalledWith('/');
    expect(wrapper.state('isModalOpen')).toBe(false);
});
