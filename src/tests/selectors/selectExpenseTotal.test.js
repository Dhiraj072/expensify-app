import selectExpenseTotal from '../../selectors/selectExpenseTotal';
import expenses from '../fixtures/expenses';

test('should return 0 for no expenses', () => {
    const totalExpense = selectExpenseTotal([]);
    expect(totalExpense).toBe(0);
});


test('should select total expense for single expense', () => {
    const totalExpense = selectExpenseTotal([expenses[0]]);
    expect(totalExpense).toBe(100);
});

test('should select total expense for multiple expenses', () => {
    const totalExpense = selectExpenseTotal(expenses);
    expect(totalExpense).toBe(600);
});
