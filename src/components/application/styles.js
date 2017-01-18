import { styled } from 'styletron-react';
import { layout, utility } from '../../styles';


// Application wrapper. Setting flex, overall app dimensions.
export const ApplicationContainer = styled('div', {
  ...utility.flexFlow('row', 'nowrap'),
  ...utility.overflowY,
  boxSizing: 'border-box',

  position: 'relative',
});

export const SideBar = styled('div', {
  ...utility.flexFlow('column', 'nowrap'),
  position: 'fixed',
  top: 0,
  left:0,
});

export const Logo = styled('h1', {
  fontSize: '100px',
  lineHeight: '100px',
  color: 'hsla(0, 0%, 0%, .4)',
  // First number is the initial amount to get the text to align with window.
  // Second number is the actual offset from the edge of the window.
  marginTop: -17 + layout.topOffset + 'px',
  marginLeft: -2 + 24 + 'px',
});
