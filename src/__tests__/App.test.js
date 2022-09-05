import React from "react";
import {render, fireEvent, waitFor, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';

test('Display data'. async ()=>{
    render(<App />);
    const name =await waitFor(()=>screen.getByTestId('name'));
    expect(name).toHaveTextContent('Fatima');
})