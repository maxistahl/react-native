/**
 * @jest-environment jsdom
 */
import React from 'react';
import {shallow} from 'enzyme';
import Faces from '../components/Faces';

const mock = {
  name: 'John Doe',
  role: 'Developer',
  pic: 'johndoe',
  github: 'https://github.com/',
  width: 500,
  height: 500,
  description: 'JohnDoe is a developer'
};

describe('Faces', () => {
  describe('Render', () => {
    const tree = shallow(<Faces item={mock} />);

    it('has 1 child', () => {
      expect(tree.children.length).toBe(1);
    });
    it('has 1 Text component', () => {
      expect(tree.find('Text').children.length).toBe(1);
    });
    it('has 1 Img component', () => {
      expect(tree.find('Img').children.length).toBe(1);
    });
  });

  describe('Interaction', () => {
    describe('onPress', () => {
      it('should call onPress', () => {
        const mockOnPress = jest.fn();
        const tree = shallow(<Faces onPress={mockOnPress} item={mock} />);
        const instance = tree.instance();
        instance.onPressHandler();
        expect(mockOnPress).toHaveBeenCalled();
        expect(mockOnPress).toHaveBeenCalledTimes(1);
      });
    });
  });
});
