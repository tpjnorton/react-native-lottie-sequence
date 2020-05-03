import React from 'react';
import { shallow } from 'enzyme';
import Lottie from 'lottie-react-native';

import LottieSequence from './index';

const testSource = {
  v: '5.6.6',
  fr: 60,
  ip: 0,
  op: 297,
  w: 2200,
  h: 2200,
  nm: 'Welcome',
  ddd: 0,
  assets: [],
  layers: [],
};

describe('LottieSequence', () => {
  describe('Rendering', () => {
    it('should match visible snapshot', () => {
      const wrapper = shallow(<LottieSequence sources={[testSource]} />);
      expect(wrapper).toMatchSnapshot('LottieSequence Snapshot');
    });
  });

  describe('Contents', () => {
    it('should render a Lottie animation with sources + props provided', () => {
      const wrapper = shallow(<LottieSequence sources={[testSource]} />);

      const renderedAnimation = wrapper.find(Lottie);
      expect(renderedAnimation).toHaveLength(1);
    });
  });
});
