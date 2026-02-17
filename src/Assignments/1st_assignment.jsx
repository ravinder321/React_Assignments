import React, { useState, useRef } from "react";

function ControlledUncontrolledForm() {
  const [name, setName] = useState("");
  const emailRef = useRef(null);

  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailValue = emailRef.current.value;

    setSubmittedData({
      name: name,
      email: emailValue,
    });

    setName("");
    emailRef.current.value = "";
  };

  return (
    <div>
      <h2>React Form</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label>Email:</label>
          <input type="email" ref={emailRef} />
        </div>

        <button type="submit">Submit</button>
      </form>

      {submittedData && (
        <div>
          <h3>Submitted Data:</h3>
          <p>Name: {submittedData.name}</p>
          <p>Email: {submittedData.email}</p>
        </div>
      )}
    </div>
  );
}

export default ControlledUncontrolledForm;