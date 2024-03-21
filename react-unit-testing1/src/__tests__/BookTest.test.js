import { render } from '@testing-library/react'
import Book from '../components/Book';


test('1st details', () => { 
  const props = { 
    bkid: 1, 
    bkname: 'Amari Soul', 
    bkprice: 500, 
  }; 

  const { getByText } = render(<Book {...props} />); 
  expect(getByText('Book details!')).toBeInTheDocument(); 
  expect(getByText(props.bkid.toString())).toBeInTheDocument(); 
  expect(getByText(props.bkname)).toBeInTheDocument(); 
  expect(getByText(props.bkprice.toString())).toBeInTheDocument(); 
}); 
 
test('2nd details', () => { 
    const props = { 
      bkid: 2, 
      bkname: 'Pooja Bhatt', 
      bkprice: 6000, 
    }; 

    const { getByText } = render(<Book {...props} />); 
    expect(getByText('Book details part 2!')).toBeInTheDocument(); 
    expect(getByText(props.bkid.toString())).toBeInTheDocument(); 
    expect(getByText(props.bkname)).toBeInTheDocument(); 
    expect(getByText(props.bkprice.toString())).toBeInTheDocument(); 
});

