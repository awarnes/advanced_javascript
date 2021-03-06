import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {mount} from 'jest-enzyme';


it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
});

it('', () => {
    const wrapper = mount(<App />)

    expect(wrapper.find('tr').length).to.equal(9)
})
