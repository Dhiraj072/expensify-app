import React from 'react';
import { shallow } from 'enzyme';
import { ExpList } from '../../components/ExpenseList';
import expenses from '../fixtures/expenses';

test('should render expenselist with given expenses', () => {
    const wrapper = shallow(<ExpList expenses={expenses} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render expenselist with empty message', () => {
    const wrapper = shallow(<ExpList expenses={[]} />);
    expect(wrapper).toMatchSnapshot();
});
