import React from 'react';
import { shallow } from 'enzyme';
import ConfirmationModal from '../../components/ConfirmationModal';

let isModalOpen;
let handleConfirmation;
let wrapper;

beforeEach(() => {
    isModalOpen = true;
    handleConfirmation = jest.fn();
    wrapper = shallow(<ConfirmationModal
        isModalOpen={isModalOpen}
        handleConfirmation={handleConfirmation}
    />);
});

test('should render Confirmation Modal correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle yes confirmation from user', () => {
    wrapper.find('button').at(0).simulate('click');
    expect(handleConfirmation).toHaveBeenCalled();
});

test('should handle no confirmation from user', () => {
    wrapper.find('button').at(1).simulate('click');
    expect(handleConfirmation).toHaveBeenCalled();
});
