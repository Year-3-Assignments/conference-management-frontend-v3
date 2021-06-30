import React from 'react';
import UserProfilePage from '../src/pages/userProfile/userProfilePage';
import { mount } from 'enzyme';

describe('UserProfile Page', () => {
  test('renders without crashing', () => {
    let wrapper = mount(<UserProfilePage/>);
    let header = wrapper.find(h4);
    console.log(header)
    expect(header.text()).toBe('User profile checked');
  });
})