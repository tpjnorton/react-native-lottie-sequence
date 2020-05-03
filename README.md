# react-native-lottie-sequence

✨A tiny package for stringing together Lottie animations, written in typescript ✨

[![NPM](https://img.shields.io/npm/v/react-native-lottie-sequence.svg)](https://www.npmjs.com/package/react-native-lottie-sequence) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

### Yarn

```bash
yarn add react-native-lottie-sequence
```

### NPM

```bash
npm install --save react-native-lottie-sequence
```

## Usage

```tsx
import React, { Component } from 'react';

import AnimationSequence from 'react-native-lottie-sequence';

import animation1 from './animation1.json';
import animation2 from './animation2.json';

const MyAnimationSequence = () => {
  return <AnimationSequence sources={[animation1, animation2]} loopMode={'all'} />;
};
```

### Props

| prop name           | values                      | required | default    | description                                                                                                                                                                   |
| ------------------- | --------------------------- | -------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `sources`           | Array of Lottie sources     | yes      | `[]`       | Sequence of source animations to play.                                                                                                                                        |
| `autoPlay`          | `true`, `false`             | no       | `false`    | Whether to auto-play each animation.                                                                                                                                          |
| `loopMode`          | `'none'`, `'last'`, `'all'` | no       | `'none'`   | What kind of sequence looping behaviour is wanted. 'none' plays the sequence once, 'last' loops the last animation in the sequence only, and 'all' loops the entire sequence. |
| `onAnimationFinish` | function                    | no       | `() => {}` | Callback fired at the end of each animation in the sequence.                                                                                                                  |

## License

MIT © [tn12787](https://github.com/tn12787)
