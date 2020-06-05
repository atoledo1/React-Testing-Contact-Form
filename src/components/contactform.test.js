import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ContactForm from "./ContactForm";
import { act } from "react-dom/test-utils";

test("form renders", () => {
  render(<ContactForm />);
});


test("check submit", () => {
  render(<ContactForm />);
  const firstNameInput = screen.getByLabelText(/first name*/i);
  const lastNameInput = screen.getByLabelText(/last name*/i);
  const emailInput = screen.getByLabelText(/email*/i);
  const messageInput = screen.getByLabelText(/message/i);

  act(() => {
    fireEvent.change(firstNameInput, {
      target: { name: "firstName", value: "adriana" },
    });
  });

  act(() => {
    fireEvent.change(lastNameInput, {
      target: { name: "lastName", value: "toledo" },
    });
  });

  act(() => {
    fireEvent.change(emailInput, {
      target: { name: "email", value: "lalala@lala.com" },
    });
  });

  act(() => {
    fireEvent.change(messageInput, {
      target: { name: "message", value: "lalalalalalala" },
    });
  });

  const submitForm = screen.getByText(/submit/i);
  act(() => {
    fireEvent.click(submitForm);
  });

  screen.findByText(/adriana/i);
  screen.findByText(/toledo/i);
  screen.findByText(/lalala@lala.com/i);
  screen.findByText(/lalalalalalala/i);
});
