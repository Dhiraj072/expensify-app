import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let editExpense;
let history;
let removeExpense;
let wrapper;
const expense = expenses[0];

beforeEach(() => {
    editExpense = jest.fn();
    history = { push: jest.fn() };
    removeExpense = jest.fn();
    wrapper = shallow(<EditExpensePage
        editExpense={editExpense}
        removeExpense={removeExpense}
        history={history}
        expense={expense}
    />);
});

test('should render EditExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle edit expense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expense);
    expect(editExpense).toHaveBeenLastCalledWith(expense.id, expense);
    expect(history.push).toHaveBeenLastCalledWith('/');
});

test('should handle remove expense', () => {
    wrapper.find('button').simulate('click');
    expect(removeExpense).toHaveBeenLastCalledWith(expense.id);
});
