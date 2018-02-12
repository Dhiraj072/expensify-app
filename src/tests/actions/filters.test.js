import moment from 'moment';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../../actions/filters';

test('should setup a text filter action object', () => {
    const action = setTextFilter('test');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'test',
    });
});

test('should setup a text filter action object with default values', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: '',
    });
});

test('should set up a sort by date action object', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE',
    });
});

test('should set up sort by amount action object', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT',
    });
});

test('should set up a set start date action object', () => {
    const startDate = moment();
    const action = setStartDate(startDate);
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate,
    });
});

test('should set up a set end date action object', () => {
    const endDate = moment();
    const action = setEndDate(endDate);
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate,
    });
});
