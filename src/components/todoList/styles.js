import { styled } from 'styletron-react';
import { utility } from '../../styles';

// Application wrapper. Setting flex, overall app dimensions, and overflow hidden.
export const TodoListContainer = styled('div', {
  ...utility.flexFlow('column', 'nowrap'),
  flexShrink: 0,
});
