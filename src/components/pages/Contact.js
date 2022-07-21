import React, { useState } from "react";

const styles = {
  inputArea: {
    color: "black",
    width: "100%",
    padding: "12px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    boxSizing: "border-box",
    marginTop: "6px",
    marginBottom: "16px",
    resize: "vertical"
  },
  
  submit: {
    backgroundColor: "rgb(23, 35, 53)",
    color: "white",
    padding: "12px 20px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer"
  },
  
  submitHover: {
    color: "white",
    padding: "12px 20px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    backgroundColor: "rgb(27, 40, 58)"
  },
  
  container: {
    borderRadius: "5px",
    backgroundColor: "#121212",
    padding: "20px"
  }
}

export default function Contact() {
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);
  const [submitMessage, setSubmitMessage] = useState("");
  const [isHovering, setIsHovering] = useState(false);

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

  const handleSubmit = event => {
    event.preventDefault();
    
    setSubmitMessage("Your message has been sent!");

    setTimeout(() => {
      setSubmitMessage("");
    }, 2000);
  }

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div>
      <div style={styles.container}>
        <h3>Contact Me</h3>
        <form action="/action_page.php">
          <label htmlFor="fname">First Name</label>
          <input style={styles.inputArea} type="text" id="fname" placeholder="Your first name.." />

          <label htmlFor="lname">Last Name</label>
          <input style={styles.inputArea} type="text" id="lname" placeholder="Your last name.." />

          <label htmlFor="email">Email</label>
          <input style={styles.inputArea} type="text" id="email" value={message} onChange={handleChange} placeholder="example@email.com" />

          <label htmlFor="subject">Subject</label>
          <textarea id="subject" name="subject" placeholder="Write something.." style={styles.inputArea}></textarea>

          <div>{
            error ? (
              <h3 style={{color: "red"}}>{error}</h3>
            ) : submitMessage ? (
              <h3 style={{color: "green"}}>{submitMessage}</h3>
            ) : <h3></h3>}</div>

          <input
            style={isHovering ? styles.submitHover : styles.submit}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleSubmit}
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    </div>
  );
}
