import authReducer from '../../reducers/auth';

test('should handle login', () => {
    const initState = {};
    const uid = '12345';
    const updatedState = authReducer(initState, {
        type: 'LOGIN',
        uid,
    });
    expect(updatedState.uid).toEqual(uid);
});

test('should handle logout', () => {
    const initState = { uid: '12345' };
    const updatedState = authReducer(initState, {
        type: 'LOGOUT',
    });
    expect(updatedState).toEqual({});
});
