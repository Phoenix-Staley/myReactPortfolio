import React, { useState } from "react";

export default function Contact() {
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);

  function isValidEmail(email) {
    return /^.+@.+\..+/i.test(email);
  }

  const handleChange = event => {
    if (!isValidEmail(event.target.value)) {
      setError("Please enter a valid email");
    } else {
      setError(null);
    }

    setMessage(event.target.value);
  };

  return (
    <div>
      <h3>Contact Me</h3>
      <div className="container">
        <form action="/action_page.php">
          <label htmlFor="fname">First Name</label>
          <input type="text" id="fname" placeholder="Your name.." />

          <label htmlFor="lname">Last Name</label>
          <input type="text" id="lname" placeholder="Your last name.." />

          <label htmlFor="email">Email</label>
          <input type="text" id="email" value={message} onChange={handleChange} placeholder="example@email.com" />

          <label htmlFor="subject">Subject</label>
          <textarea id="subject" name="subject" placeholder="Write something.." style={{height: "200px"}}></textarea>

          <div>{error ? <h3 style={{color: "red"}}>{error}</h3> : <h3></h3>}</div>

          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}
