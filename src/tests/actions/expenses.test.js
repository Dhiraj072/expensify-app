import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { addExpense, removeExpense, editExpense, startAddExpense, setExpenses, startSetExpenses } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);
const expense = expenses[0];

beforeEach((done) => {
    const expenseData = [];
    expenses.forEach(({
        id, description, amount, createdAt, note,
    }) => {
        expenseData[id] = {
            description, amount, createdAt, note,
        };
    });
    database.ref('expenses').set(expenseData).then(() => done());
});

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
    const action = addExpense(expense);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense,
    });
});

test('should add expense to database and store', (done) => {
    const store = createMockStore({});
    const expenseData = {
        description: 'test',
        note: 'test',
        amount: 10,
        createdAt: 10,
    };
    store.dispatch(startAddExpense(expenseData))
        .then(() => {
            const actions = store.getActions();
            expect(actions[0]).toEqual({
                type: 'ADD_EXPENSE',
                expense: {
                    id: expect.any(String),
                    ...expenseData,
                },
            });
            // Return a promise so we can chain -> then below
            // with the snapshot containing the latest expense added in firebase
            return database.ref(`expenses/${actions[0].expense.id}`).once('value');
        })
        .then((snapshot) => {
            expect(snapshot.val()).toEqual(expenseData);
            done();
        });
});

test('should add expense to database and store with default values', (done) => {
    const store = createMockStore({});
    const defaultExpenseData = {
        description: '',
        note: '',
        amount: 0,
        createdAt: 0,
    };
    store.dispatch(startAddExpense({}))
        .then(() => {
            const actions = store.getActions();
            expect(actions[0]).toEqual({
                type: 'ADD_EXPENSE',
                expense: {
                    id: expect.any(String),
                    ...defaultExpenseData,
                },
            });
            // Return a promise so we can chain -> then below
            return database.ref(`expenses/${actions[0].expense.id}`).once('value');
        })
        .then((snapshot) => {
            expect(snapshot.val()).toEqual(defaultExpenseData);
            done();
        });
});

test('should set expenses object with data', () => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses,
    });
});

test('should fetch the expenses from firebase', (done) => {
    const store = createMockStore({});
    store.dispatch(startSetExpenses())
        .then(() => {
            const actions = store.getActions();
            expect(actions[0]).toEqual({
                type: 'SET_EXPENSES',
                expenses,
            });
            done();
        });
});
