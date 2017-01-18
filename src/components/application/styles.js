import { styled } from 'styletron-react';
import { utility } from '../../styles';

const topOffset = 68;

// Application wrapper. Setting flex, overall app dimensions, and overflow hidden.
export const ApplicationContainer = styled('div', {
  ...utility.flexFlow('row', 'nowrap'),
  overflow: 'hidden',

  height: '100vh',
  width: '100vw',
});

export const Logo = styled('h1', {
  fontSize: '100px',
  lineHeight: '100px',
  color: 'hsla(0, 0%, 0%, .4)',
  // First number is the initial amount to get the text to align with window.
  // Second number is the actual offset from the edge of the window.
  marginTop: -17 + topOffset + 'px',
  marginRight: '110px',
  marginLeft: -2 + 24 + 'px',
});

export const Column = styled('div', {
  ...utility.flexFlow('column', 'nowrap'),
  ...utility.overflowY,
  width: '700px',
  padding: `${topOffset}px 50px`,
});
