import { color, utility } from '../../styles';

const negativeOffset = -3;

export const checkboxStyles = {
  marginTop: negativeOffset + 8,
  marginBottom: negativeOffset + 8,
};

export function getLabelStyles(completed) {
  const completedStyles = completed && {
    opacity: .37,
  };

  return {
    fontSize: '18px',
    fontWeight: '600',
    ...completedStyles,
    ...utility.transition(completed, 50),
  }
}
