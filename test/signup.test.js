import React from 'react';
import Signup from '../src/pages/SignUp/Signup';
import { mount } from 'enzyme';

describe('Signup Page', () => {
  test('renders without crashing', () => {
    let wrapper = mount(<Signup/>);
    let navbarBrand = wrapper.find(h4);
    console.log(navbarBrand)
    expect(navbarBrand.text()).toBe('Signup to My Account');
  });
})