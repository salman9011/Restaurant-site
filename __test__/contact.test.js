import {render,screen} from "@testing-library/react"
import ContactUs from "../src/components/ContactUs"
import "@testing-library/jest-dom";
describe("should load contactus page", ()=>{
    test("should load the contactus component",()=>{
        render(<ContactUs/>);
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
        
        });
        test("should load button",()=>{
            render(<ContactUs/>);
            const button = screen.getByText("submit");
            expect(button).toBeInTheDocument();
            
            });
            test("should load email",()=>{
                render(<ContactUs/>);
                const inputplace = screen.getByPlaceholderText("Email");
                expect(inputplace).toBeInTheDocument();
                
                });
                test("should load input", () => {
                    render(<ContactUs />);
                    const inputBoxes = screen.getAllByRole("textbox");
                    
                    // Iterate over each input element and assert its presence
                    // inputBoxes.forEach(inputBox => {
                    //     expect(inputBox).toBeInTheDocument();
                        expect(inputBoxes.length).toBe(2);
                    // });
                });
                
})
