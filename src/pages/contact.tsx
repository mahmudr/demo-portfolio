import React, { useState } from 'react';

interface ContactFormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormState>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here, such as sending data to a server or API
    console.log('Form submitted:', formData);
  };

  return (
    <div style={styles.container}>
      <div style={styles.imageContainer}>
        <img src="/path-to-your-image.jpg" alt="Contact illustration" style={styles.image} />
      </div>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2>Get In Touch</h2>
        <div style={styles.row}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            style={styles.input}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            style={styles.input}
          />
        </div>
        <div style={styles.row}>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone No."
            value={formData.phone}
            onChange={handleChange}
            style={styles.input}
          />
        </div>
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          style={styles.textarea}
        />
        <button type="submit" style={styles.button}>
          Send
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row' as 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '2rem',
    backgroundColor: '#6a0dad',
    borderRadius: '8px',
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
  },
  form: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column' as 'column',
    padding: '2rem',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '8px',
  },
  row: {
    display: 'flex',
    flexDirection: 'row' as 'row',
    gap: '1rem',
    marginBottom: '1rem',
  },
  input: {
    flex: 1,
    padding: '0.8rem',
    borderRadius: '8px',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    color: '#fff',
  },
  textarea: {
    width: '100%',
    padding: '0.8rem',
    borderRadius: '8px',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    color: '#fff',
    height: '150px',
    marginBottom: '1rem',
  },
  button: {
    padding: '0.8rem 1.6rem',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: 'gray',
    color: '#6a0dad',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '1rem',
    alignSelf: 'flex-start',
  },
};

export default ContactForm;

