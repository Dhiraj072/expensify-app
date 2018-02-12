import moment from 'moment';
import getVisibleExpenses from '../../selectors/expenses';
import expenses from '../fixtures/expenses';

test('should filter by text value', () => {
    const visibleExpenses = getVisibleExpenses(expenses, {
        text: 'expense 3',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'date',
    });
    expect(visibleExpenses).toEqual([expenses[2]]);
});

test('should filter by start date', () => {
    const visibleExpenses = getVisibleExpenses(expenses, {
        text: '',
        startDate: moment(0),
        endDate: undefined,
        sortBy: 'date',
    });
    expect(visibleExpenses).toEqual([expenses[2], expenses[0]]);
});

test('should filter by end date', () => {
    const visibleExpenses = getVisibleExpenses(expenses, {
        text: '',
        startDate: undefined,
        endDate: moment(0),
        sortBy: 'date',
    });
    expect(visibleExpenses).toEqual([expenses[0], expenses[1]]);
});

test('should sort by date', () => {
    const visibleExpenses = getVisibleExpenses(expenses, {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'date',
    });
    expect(visibleExpenses).toEqual([expenses[2], expenses[0], expenses[1]]);
});

test('should sort by amount', () => {
    const visibleExpenses = getVisibleExpenses(expenses, {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount',
    });
    expect(visibleExpenses).toEqual([expenses[2], expenses[1], expenses[0]]);
});

