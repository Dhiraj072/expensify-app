import moment from 'moment';

export default [
    {
        id: '1',
        description: 'test expense 1',
        amount: 100,
        createdAt: moment(0).valueOf(),
    },
    {
        id: '2',
        description: 'test expense 2',
        amount: 200,
        createdAt: moment(0).subtract(4, 'days').valueOf(),
    },
    {
        id: '3',
        description: 'test expense 3',
        amount: 300,
        createdAt: moment(0).add(4, 'days').valueOf(),
    },
];
