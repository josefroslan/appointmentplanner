import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nameInput">Name</label>
      <input
      value={name}
      onChange={(e) => setName(e.target.value)}
      type="text"
      id="nameInput"
      required
      placeholder="Name"
      />

      <label htmlFor="phoneInput">Phone</label>
      <input 
      value={phone}
      onChange={(e) => setPhone(e.target.value)}
      type="tel"
      pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}"
      id="phoneInput"
      required
      placeholder="Contact Phone"
      />

      <label htmlFor="emailInput">Email</label>
      <input 
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      type="email"
      id="emailInput"
      required
      placeholder="Email"
      />

      <br />

      <input type="submit" value="Add Contact"/>

    </form>
  );
};

