import { styled } from 'styletron-react';
import { utility } from '../../styles';

// Application wrapper. Setting flex, overall app dimensions, and overflow hidden.
export const ApplicationContainer = styled('div', {
  ...utility.flexFlow('column', 'nowrap'),
  overflow: 'hidden',

  position: 'relative', // this is for Shadow.

  height: '100vh',
  width: '100vw',
});
