// import React, { useState } from 'react';

// const Contact = () => {

//   const [name, setName]=useState("Hassam");
// const [email, setEmail]=useState("Hasideveloper@gmail.com");

// const handleEmailChange=(e)=>{
//   setEmail(e.target.value)
// }
//   const handleNameChange=(e)=>{
// setName(e.target.value)
//   }
//   return (
//     <div style={{ marginTop: '50px' }}>
//       <form style={{ width: '50%', margin: 'auto' }}>
//         <div className="mb-3">
//           <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
//           <input type="text" className="form-control" id="exampleFormControlInput1" 
//           placeholder="FirstName and Last Name"
//           value={name}
//           onChange={handleNameChange}
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
//           <input type="email" className="form-control" 
//           id="exampleFormControlInput1" 
//           placeholder="Email"
//           value={email}
//           onChange={handleEmailChange}
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
//           <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
//           <p>I write this {name} in Name place and this in {email} Email Place</p>
//           <button type="button" className="btn btn-primary"  >submit</button>
//           <button type="button" className="btn btn-danger"  >Danger</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Contact;





import React, { useState, useEffect } from 'react';

const Contact = () => {
  const [name, setName] = useState("Hassam");
  const [email, setEmail] = useState("Hasideveloper@gmail.com");
  const [buttonText, setButtonText] = useState("Danger");

  useEffect(() => {
    // Change the text of the "Danger" button based on the length of the name
    if (name.length > 10) {
      setButtonText("Chota naam Likho. Remove kro Esy");
    } else {
      setButtonText("Danger");
    }
  }, [name]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  return (
    <div style={{ marginTop: '50px' }}>
      <form style={{ width: '50%', margin: 'auto' }}>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="FirstName and Last Name"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          <p>I write this {name} in Name place and this in {email} Email Place</p>
          {/* Change the text of the "Danger" button dynamically */}
          <button type="button" className="btn btn-danger">{buttonText}</button>
          <button type="button" className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;

