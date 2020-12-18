import React from 'react';
import { render, screen } from '@testing-library/react';
import {Button} from './Button';

describe("Button", () => {

    it('renders with label', () => {
      render(<Button label="Ayy" />);
      const buttonElement = screen.getByText(/Ayy/i);
      expect(buttonElement).toBeInTheDocument();
    });
})
