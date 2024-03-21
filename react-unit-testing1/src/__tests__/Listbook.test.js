import { render, screen } from '@testing-library/react' 
import ListBooks from '../components/ListBooks' // Changed import to default import 
 
const mockBooks = [ 
  { 
    "bkid": 1, 
    "bkname": "react", 
    "bkprice": 500, 
  }, 
  { 
    "bkid": 2, 
    "bkname": "angular", 
    "bkprice": 700, 
  }, 
  { 
    "bkid": 3, 
    "bkname": "java", 
    "bkprice": 900, 
  }, 
] 
 
test("ListBooks renders successfully and displays 'angular'", () => { // Changed test name 
  render(<ListBooks books={mockBooks}/>) 
  expect(screen.getByText(/angular/i)).toBeInTheDocument(); 
}) 
 
test("ListBooks renders successfully and displays '900'", () => { // Changed test name 
  render(<ListBooks books={mockBooks}/>) 
  expect(screen.getByText(/900/i)).toBeInTheDocument(); 
})
