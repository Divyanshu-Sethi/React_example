import { render, screen } from '@testing-library/react'
import TestWithMockDataInputFieldButton from '../components/TestWithMockDataInputFieldButton'



 

test("test input text and button", () => {
    render(<TestWithMockDataInputFieldButton />)
   
  //  const inputElement = screen.getByRole('textbox');
  //  expect(inputElement).toBeInTheDocument();
 //   const button = screen.getByRole('button');
  //  expect(button).toBeInTheDocument();
  
    const nameInput = screen.getByPlaceholderText(/enter name/i);
    expect(nameInput).toBeInTheDocument();
    const descrInput = screen.getByPlaceholderText(/enter description/i);
    expect(descrInput).toBeInTheDocument();
    const passwordInput = screen.getByLabelText(/enter password/i);
    expect(passwordInput).toBeInTheDocument();

    const submitButton = screen.getByRole('button', { name: /submit/i });
    expect(submitButton).toBeInTheDocument();

    const applyButton = screen.getByRole('button', { name: /apply/i });	
    expect(applyButton).toBeInTheDocument();
})