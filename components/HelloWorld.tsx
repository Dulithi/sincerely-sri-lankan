import * as React from 'react';
import RotatingText from './RotatingText';

export interface HelloWorldProps {
  children?: React.ReactNode;
  className?: string;
  verbose?: boolean;
}

export function HelloWorld({ children, className, verbose }: HelloWorldProps) {
  return (
    <div className={className} style={{ padding: '20px' }}>
      <p>Hello there! {verbose && 'Really nice to meet you!'}</p>
      <div>{children}</div>
      <RotatingText
        texts={['React', 'Bits', 'Is', 'Cool!']}
        staggerFrom={"last"}
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "-120%" }}
        staggerDuration={0.025}
        splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
        transition={{ type: "spring", damping: 30, stiffness: 400 }}
        rotationInterval={2000}
        />
    </div>
  );
}