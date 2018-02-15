import React from 'react';
import { shallow } from 'enzyme';
import { ExpSummary } from '../../components/ExpenseSummary';

let wrapper;
let numExpenses;
let expenseTotal;

beforeAll(() => {
    expenseTotal = 100;
    numExpenses = 3;
    wrapper = shallow(<ExpSummary numExpenses={numExpenses} expenseTotal={expenseTotal} />);
});

test('should render ExpenseSummary with given expenses', () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('h2').text()).toBe('Viewing '.concat(numExpenses).concat(' expenses totalling $1.00'));
});

