// export default function Contact() lets us use the Contact component in other files
import { useState } from 'react';
// create input fields for name and email, check and alert validity of email

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  // function to handle form submission
  // check if email is valid, if name is entered, and if email is entered
  // if all conditions are met, alert the user and log the submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
    } else if (!name) {
      setError('Please enter your name.');
    } else if (email) {
      alert('Thank you for your submission!');
      setName('');
      setEmail('');
      console.log('Submitted:', { name, email });
    }
  };
// return the form with input fields for name and email
// if there is an error, display the error message

  return (
    <>
    <section>
      <div className="homeContainer">
        <h1>Contact Me</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit">Submit</button>
          {error && <p>{error}</p>}
        </form>
      </div>
    </section>
    {/* create a section with github link */}
    <div id="contact">
        You can also find my GitHub profile <a href="https://github.com/blakeroband" target="_blank" rel="noopener noreferrer">here</a>.
    </div>
    
    </>
  );
}