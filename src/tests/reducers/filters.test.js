import moment from 'moment';
import filtersReducer from '../../reducers/filters';

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month'),
};

test('should set default filters state for undefined action', () => {
    const initState = undefined;
    const updatedState = filtersReducer(initState, {
        type: '@@@INIT',
    });
    expect(updatedState).toEqual(filtersReducerDefaultState);
});

test('should set sort by to amount', () => {
    const initState = undefined;
    const updatedState = filtersReducer(initState, {
        type: 'SORT_BY_AMOUNT',
    });
    expect(updatedState.sortBy).toBe('amount');
});

test('should set sort by to date', () => {
    const initState = { ...filtersReducerDefaultState, sortBy: 'amount' };
    const updatedState = filtersReducer(initState, {
        type: 'SORT_BY_DATE',
    });
    expect(updatedState.sortBy).toBe('date');
});

test('should set text filter', () => {
    const initState = undefined;
    const updatedState = filtersReducer(initState, {
        type: 'SET_TEXT_FILTER',
        text: 'test',
    });
    expect(updatedState.text).toEqual('test');
});

test('should set start date', () => {
    const initState = undefined;
    const updatedState = filtersReducer(initState, {
        type: 'SET_START_DATE',
        startDate: moment(10).startOf('month'),
    });
    expect(updatedState.startDate).toEqual(moment(10).startOf('month'));
});

test('should set end date', () => {
    const initState = undefined;
    const updatedState = filtersReducer(initState, {
        type: 'SET_END_DATE',
        endDate: moment(10).endOf('month'),
    });
    expect(updatedState.endDate).toEqual(moment(10).endOf('month'));
});
