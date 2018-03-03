import React from 'react';
import { shallow } from 'enzyme';
import { ExpSummary } from '../../components/ExpenseSummary';

let wrapper;
let numExpenses;
let expenseTotal;
let numVisibleExpenses;

beforeAll(() => {
    expenseTotal = 100;
    numExpenses = 3;
    numVisibleExpenses = 6;
    wrapper = shallow(<ExpSummary
        numExpenses={numExpenses}
        numVisibleExpenses={numVisibleExpenses}
        expenseTotal={expenseTotal}
    />);
});

test('should render ExpenseSummary with given expenses', () => {
    expect(wrapper).toMatchSnapshot();
    const summaryText = wrapper.find('h2').text();
    expect(summaryText).toContain(numVisibleExpenses);
    expect(summaryText).toContain(expenseTotal / 100);
    expect(wrapper.find('h4').text()).toContain(numExpenses);
});

