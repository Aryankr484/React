// Form.js
import React from 'react';

const Form = () => {
  return (
    <form>
      <div>
        <label>Name:</label>
        <input type="text" />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" />
      </div>
      <div>
        <label>Message:</label>
        <textarea></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
