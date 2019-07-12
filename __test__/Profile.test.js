/**
 * @jest-environment jsdom
 */
import React from 'react';
import {shallow} from 'enzyme';
import Profile from '../components/Profile';

const mock = {
  name: 'John Doe',
  role: 'Developer',
  pic: 'johndoe',
  github: 'https://github.com/',
  width: 500,
  height: 500,
  description: 'JohnDoe is a developer'
};

describe('Profile detail', () => {
  describe('Render', () => {
    const tree = shallow(<Profile item={mock} navigation={{navigate: true}} />);
    it('if the image uri provided is not available, render a default image', () => {
      expect(tree).toMatchSnapshot();
    });
  });
});
