import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../components/Header';

const startLogout = jest.fn();

test('should render NotFoundPage correctly', () => {
    const wrapper = shallow(<Header startLogout={startLogout} />);
    expect(wrapper).toMatchSnapshot();
});


test('should handle log out correctly', () => {
    const wrapper = shallow(<Header startLogout={startLogout} />);
    wrapper.find('button').simulate('click');
    expect(startLogout).toHaveBeenCalled();
});
