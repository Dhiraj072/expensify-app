import moment from 'moment';

// Get visible expenses
const getVisibleExpenses = (expenses, {
    startDate, endDate, text, sortBy,
}) => expenses.filter((expense) => {
    const startDateMatch = startDate ? moment(startDate).isSameOrBefore(expense.createdAt, 'day') : true;
    const endDateMatch = endDate ? moment(endDate).isSameOrAfter(expense.createdAt, 'day') : true;
    const testMatch = expense.description.toLowerCase().includes(text.toLowerCase());
    return startDateMatch && endDateMatch && testMatch;
}).sort((a, b) => {
    if (sortBy === 'date') {
        return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === 'amount') {
        return a.amount < b.amount ? 1 : -1;
    }
});

export default getVisibleExpenses;
