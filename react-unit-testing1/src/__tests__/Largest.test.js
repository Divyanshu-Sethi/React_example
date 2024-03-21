import { render, screen } from '@testing-library/react' 
import Largest from '../components/Largest' 
 
test("testing for no1 Largest", () => {  
    render(<Largest no1={90} no2={60} no3={40} />) 
    expect(screen.getByText(/no1: 90 is the Largest./i)).toBeInTheDocument();  
}) 
 
test("testing for no2 Largest", () => { 
    render(<Largest no1={90} no2={160} no3={40} />) 
    expect(screen.getByText(/no2: 160 is the Largest./i)).toBeInTheDocument();  
}) 
 
test("testing for no3 Largest", () => { 
    render(<Largest no1={90} no2={60} no3={140} />) 
    expect(screen.getByText(/no3: 140 is the Largest./i)).toBeInTheDocument();  
})
