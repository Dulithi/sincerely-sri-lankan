import * as React from 'react';
import RotatingText from './RotatingText';

export function ExperienceText() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', fontSize: '64px', fontWeight: 'bold', font:'Lato', margin: '50px'}}>
      <span>Experience&nbsp;</span>
      <RotatingText
        texts={['Culture',
                'Growth',
                'Adventure',
                'Heritage',
                'Development',
                'Impact',
                'Wildlife']}
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
