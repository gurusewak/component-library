import { test, expect } from '@playwright/experimental-ct-react';
import { Button } from '@components/Button';

// Renders a button element with default props when no props are passed
test('should render a button with default variant and size when no props are passed', async ({ mount }) => {
    const button = await mount(<Button variant={undefined} size={undefined} label={''} onClick={function (): void {
        throw new Error('Function not implemented.');
    }} />);
    await expect(button).toHaveClass('inline-flex items-center m-3 justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2 px-4');
});

//Renders a disabled button when 'disabled' prop is set to true
test('should render a disabled button when \'disabled\' prop is set to true', async ({ mount }) => {
    const buttonElement = await mount(<Button disabled variant={undefined} size={undefined} label={''} onClick={function (): void {
        throw new Error('Function not implemented.');
    }} />);
    await expect(buttonElement).toBeDisabled();
});
