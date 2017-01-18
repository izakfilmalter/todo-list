import { styled } from 'styletron-react';
import { layout, utility } from '../../styles';

export const TodoListContainer = styled('div', {
  ...utility.flexFlow('column', 'nowrap'),
  flexShrink: 0,
  marginLeft: '350px',
  width: '700px',
  padding: `${layout.topOffset}px 50px`,
});
