import { render, screen } from '@testing-library/react';
import { Robot } from 'src/components/robot/Robot';
import { Direction } from 'src/types/types'; // Adjust the path as necessary

describe('Robot Component', () => {
  test('renders correctly with default props', () => {
    render(<Robot direction={Direction.NORTH} />);
    expect(screen.getByAltText('logo')).toBeInTheDocument();
    expect(screen.getByAltText('arrow')).toBeInTheDocument();
  });

  test('applies the correct direction class', () => {
    const { rerender } = render(<Robot direction={Direction.NORTH} />);
    expect(screen.getByAltText('arrow')).toHaveClass('robot__arrow--north');

    rerender(<Robot direction={Direction.WEST} />);
    expect(screen.getByAltText('arrow')).toHaveClass('robot__arrow--west');

    rerender(<Robot direction={Direction.SOUTH} />);
    expect(screen.getByAltText('arrow')).toHaveClass('robot__arrow--south');

    rerender(<Robot direction={Direction.EAST} />);
    expect(screen.getByAltText('arrow')).toHaveClass('robot__arrow--east');
  });

  test('applies additional className', () => {
    const customClass = 'custom-class';
    render(<Robot direction={Direction.NORTH} className={customClass} />);
    expect(screen.getByAltText('logo').parentElement).toHaveClass(customClass);
  });
});
