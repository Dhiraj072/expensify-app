import React from 'react';
import { shallow } from 'enzyme';
import { Login } from '../../components/LoginPage';

const login = jest.fn();

test('should render login page correctly', () => {
    const wrapper = shallow(<Login login={login} />);
    expect(wrapper).toMatchSnapshot();
});

test('should handle log in correctly', () => {
    const wrapper = shallow(<Login login={login} />);
    wrapper.find('button').simulate('click');
    expect(login).toHaveBeenCalled();
});
