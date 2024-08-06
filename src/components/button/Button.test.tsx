import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from 'src/components/button/Button';

const LABEL = 'Click this button!';
const DUMMY_CLICK_HANDLER = () => {};

describe('<Button />', () => {
  test('renders correctly with label and icon', () => {
    const mockIcon = <svg data-testid='mock-icon' />;
    render(
      <Button onClick={DUMMY_CLICK_HANDLER} label={LABEL} Icon={mockIcon} />
    );

    // Check if the label is rendered correctly
    const buttonLabel = screen.getByText(LABEL);
    expect(buttonLabel).toBeInTheDocument();

    // Check if the icon is rendered correctly
    const buttonIcon = screen.getByTestId('mock-icon');
    expect(buttonIcon).toBeInTheDocument();
  });

  test('calls onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick} label={LABEL} Icon={null} />);

    const button = screen.getByText(LABEL);
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
