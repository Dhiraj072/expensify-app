import { addExpense, removeExpense, editExpense } from '../../actions/expenses';

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: 'testid1' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: 'testid1',
    });
});

test('should setup edit expense action object', () => {
    const updates = { description: 'test description' };
    const action = editExpense('testid2', updates);
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: 'testid2',
        updates: { ...updates },
    });
});

test('should setup add expense action object', () => {
    const expense = {
        description: 'test description',
        note: 'test note',
        amount: 100,
        createdAt: 100,
    };
    const action = addExpense(expense);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: { id: expect.any(String), ...expense },
    });
});

test('should setup add expense action object with default values', () => {
    const action = addExpense({});
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0,
        },
    });
});
