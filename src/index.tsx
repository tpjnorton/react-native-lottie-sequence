import React, { useState } from 'react';
import Lottie from 'lottie-react-native';

type LoopMode = 'none' | 'last' | 'all';

const determineLoopMode = (loopMode: LoopMode, isAtLastAnimation: boolean) => {
  switch (loopMode) {
    case 'none':
    case 'all':
      return false;
    case 'last':
      return isAtLastAnimation;
    default:
      throw new Error('cannot determine loop behaviour, invalid animation loop type');
  }
};

const determineNextAnimation = (loopMode: LoopMode, index: number, sequenceLength: number) => {
  switch (loopMode) {
    case 'none':
    case 'last':
      return Math.min(index + 1, sequenceLength - 1);
    case 'all':
      return (index + 1) % sequenceLength;
    default:
      throw new Error('cannot determine next animation, invalid animation loop type');
  }
};

// hack as lottie-react-native doesn't export this type
interface AnimationObject {
  v: string;
  fr: number;
  ip: number;
  op: number;
  w: number;
  h: number;
  nm: string;
  ddd: number;
  assets: any[];
  layers: any[];
}

type LottieSource = AnimationObject | { uri: string } | string;

interface LottieSequenceProps {
  sources: LottieSource[];
  loopMode?: LoopMode;
  autoPlay?: boolean;
  onAnimationFinish?: () => void;
}

const LottieSequence = (props: LottieSequenceProps) => {
  const [index, setIndex] = useState(0);
  const { sources, loopMode, autoPlay, onAnimationFinish } = props;
  const currentAnim = sources?.[index];
  const sequenceLength = sources?.length;

  const resolvedLoopMode: LoopMode = loopMode || 'none';

  if (!sequenceLength) throw new Error('No animation sources present.');

  const loop = determineLoopMode(resolvedLoopMode, index === sequenceLength - 1);
  const nextAnimationIndex = determineNextAnimation(resolvedLoopMode, index, sequenceLength);

  return (
    <Lottie
      source={currentAnim}
      autoPlay={autoPlay}
      loop={loop}
      onAnimationFinish={() => {
        onAnimationFinish?.();
        setIndex(nextAnimationIndex);
      }}
    />
  );
};

LottieSequence.defaultProps = {
  sources: [],
  loopMode: 'none',
  autoPlay: false,
  onAnimationFinish: () => {},
};

export type { LoopMode };
export default LottieSequence;
