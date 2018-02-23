import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../components/LoginPage';

const startLogin = jest.fn();

test('should render login page correctly', () => {
    const wrapper = shallow(<LoginPage startLogin={startLogin} />);
    expect(wrapper).toMatchSnapshot();
});

test('should handle log in correctly', () => {
    const wrapper = shallow(<LoginPage startLogin={startLogin} />);
    wrapper.find('button').simulate('click');
    expect(startLogin).toHaveBeenCalled();
});
