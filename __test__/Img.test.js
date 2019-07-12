/**
 * @jest-environment jsdom
 */
import React from 'react';
import {shallow} from 'enzyme';
import Img from '../components/Img';

describe('User Image', () => {
  describe('Rendering', () => {
    it('if the image uri provided is not available, render a default image', () => {
      const component = shallow(<Img src={'http://invalidURL/image.jpg'} />);
      expect(component).toMatchSnapshot();
    });
    it('if the image uri provided response a status 200, render the image as expected', () => {
      const component = shallow(<Img src={'https://tarmac.io/assets/images/testimonial-eric-johnson.png'} />);
      expect(component).toThrowErrorMatchingSnapshot();
    });
  });
});
