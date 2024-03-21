import { render, screen } from '@testing-library/react'
import TestWithMockBook1 from '../components/testmockbook1'
 
 
 
  const mockData = [
    {
        "id": 1,
        "bookname": "Gita",
        "bookprice": 999,
      }, {
        "id": 2,
        "bookname": "Ramayan",
        "bookprice": 1000,
      },
      {
        "id": 3,
        "bookname": "Mahabharat",
        "bookprice": 2999,
      },  
      {
        "id": 4,
        "bookname": "Sam Veda",
        "bookprice": 2999,
      },
]
 
test("List renders successfully", () => {
  render(<TestWithMockBook1 data={mockData} />)
  expect(screen.getByText(/Sam Veda/i)).toBeInTheDocument();
})
 
test("Unordered List renders successfully", () => {
    render(<TestWithMockBook1 data={mockData} displayUnorderedList={true} />)
    expect(screen.getByText(/Gita/i)).toBeInTheDocument();
})
 
test("Ordered list renders", () => {
    render(<TestWithMockBook1 data={mockData} displayUnorderedList={false} />)
 
    expect(screen.getByText(/Ramayan/i)).toBeInTheDocument()
})
 
test("Unordered renders successfully with item entry for age greater than 50", () => {
    render(<TestWithMockBook1 data={mockData} displayUnorderedList={true} />)
 
    expect(screen.getByText(/Mahabharat/i)).toBeInTheDocument();
   
})
 
test("Unordered renders successfully with item entry for age greater than 50", () => {
    render(<TestWithMockBook1 data={mockData} displayUnorderedList={true} />)
 
    expect(screen.getByText(/Cheaper/)).toBeInTheDocument();
   
})
 
 