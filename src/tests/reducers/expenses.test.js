import expenseReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';


const testExpense = expenses[0];

test('should set up default state', () => {
    const initState = undefined;
    const updatedState = expenseReducer(initState, {
        type: '@@INIT',
    });
    expect(updatedState).toEqual([]);
});

test('should add a new expense to the state', () => {
    const initState = [];
    const updatedState = expenseReducer(initState, {
        type: 'ADD_EXPENSE',
        expense: testExpense,
    });
    expect(updatedState).toEqual([testExpense]);
});

test('should add a new expense for undefined initial state', () => {
    const initState = undefined;
    const updatedState = expenseReducer(initState, {
        type: 'ADD_EXPENSE',
        expense: testExpense,
    });
    expect(updatedState).toEqual([testExpense]);
});

test('should remove an expense by id', () => {
    const initState = [testExpense];
    const updatedState = expenseReducer(initState, {
        type: 'REMOVE_EXPENSE',
        id: testExpense.id,
    });
    expect(updatedState).toEqual([]);
});

test('should not remove an expense if id not found', () => {
    const initState = [testExpense];
    const updatedState = expenseReducer(initState, {
        type: 'REMOVE_EXPENSE',
        id: '-1',
    });
    expect(updatedState).toEqual(initState);
});

test('should edit an expense by id', () => {
    const initState = [testExpense];
    const updates = {
        description: 'my test expense 1',
        amount: 200,
    };
    const updatedState = expenseReducer(initState, {
        type: 'EDIT_EXPENSE',
        updates,
        id: testExpense.id,
    });
    expect(updatedState).toEqual([{ ...testExpense, ...updates }]);
});

test('should not edit an expense if expense not found', () => {
    const initState = [testExpense];
    const updates = {
        description: 'my test expense 1',
        amount: 200,
    };
    const updatedState = expenseReducer(initState, {
        type: 'EDIT_EXPENSE',
        updates,
        id: '-1',
    });
    expect(updatedState).toEqual(initState);
});

