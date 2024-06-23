import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import BookingForm from '../components/BookingForm';
import Api from '../utils/API';
import '@testing-library/jest-dom/extend-expect';

jest.mock('../utils/API');
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}));

const mockDispatch = jest.fn();
Api.mockReturnValue({
  state: { availableTimes: ['18:00', '19:00', '20:00'] },
  dispatch: mockDispatch,
});

describe('BookingForm', () => {
  const setup = () => {
    render(
      <MemoryRouter>
        <Routes>
          <Route path="/" element={<BookingForm />} />
          <Route path="/booking/confirmed" element={<div>Booking Confirmed</div>} />
        </Routes>
      </MemoryRouter>
    );
  };

  test('User is able to submit the form with all required fields filled', async () => {
    setup();

    fireEvent.input(screen.getByLabelText(/Name/i), { target: { value: 'John Doe' } });
    fireEvent.input(screen.getByLabelText(/Email/i), { target: { value: 'john.doe@example.com' } });
    fireEvent.input(screen.getByLabelText(/Phone/i), { target: { value: '+123456789' } });
    fireEvent.input(screen.getByLabelText(/Date/i), { target: { value: '2023-12-31' } });
    fireEvent.change(screen.getByLabelText(/Time/i), { target: { value: '19:00' } });
    fireEvent.input(screen.getByLabelText(/Guests/i), { target: { value: '4' } });

    const submitButton = screen.getByText(/Reserve a table/i);
    fireEvent.click(submitButton);

    await waitFor(async() => expect(mockDispatch).toHaveBeenCalledWith(new Date('2023-12-31')));
    await waitFor(async () => expect(await screen.findByText(/Booking Confirmed/i)).toBeInTheDocument());
  });

  test('Form submission fails with missing required fields', async () => {
    setup();

    const submitButton = screen.getByText(/Reserve a table/i);
    fireEvent.click(submitButton);

    expect(await screen.findAllByText('Required')).toHaveLength(5);
  });

  test('Time field is disabled when date is not selected', () => {
    setup();

    const timeField = screen.getByLabelText(/Time/i);
    expect(timeField).toBeDisabled();
  });

  test('Time field is enabled when a valid date is selected', () => {
    setup();

    fireEvent.input(screen.getByLabelText(/Date/i), { target: { value: '2023-12-31' } });

    const timeField = screen.getByLabelText(/Time/i);
    expect(timeField).not.toBeDisabled();
  });

  test('Date change resets the time field', () => {
    setup();

    fireEvent.input(screen.getByLabelText(/Date/i), { target: { value: '2023-12-31' } });
    fireEvent.change(screen.getByLabelText(/Time/i), { target: { value: '19:00' } });

    fireEvent.input(screen.getByLabelText(/Date/i), { target: { value: '2024-01-01' } });
    expect(screen.getByLabelText(/Time/i).value).toBe('');
  });
});
