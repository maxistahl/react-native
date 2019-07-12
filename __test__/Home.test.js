/**
 * @jest-environment jsdom
 */
import React from 'react';
import {shallow} from 'enzyme';
import Home from '../components/Home';

describe('Home', () => {
  describe('Render', () => {
    const tree = shallow(<Home navigation={{navigate: true}} />);

    it('has 1 FlatList child', () => {
      expect(tree.find('FlatList').children.length).toBe(1);
    });
  });
});
