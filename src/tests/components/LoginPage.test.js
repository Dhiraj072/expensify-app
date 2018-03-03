import React from 'react';
import { shallow } from 'enzyme';
import { Login } from '../../components/LoginPage';

const loginWithGoogle = jest.fn();
const loginWithGithub = jest.fn();
let wrapper;
beforeEach(() => {
    wrapper = shallow(<Login
        loginWithGoogle={loginWithGoogle}
        loginWithGithub={loginWithGithub}
    />);
});

test('should render login page correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle log in with google correctly', () => {
    wrapper.find('button').at(0).simulate('click');
    expect(loginWithGoogle).toHaveBeenCalled();
});

test('should handle log in with github correctly', () => {
    wrapper.find('button').at(1).simulate('click');
    expect(loginWithGithub).toHaveBeenCalled();
});
