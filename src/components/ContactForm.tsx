import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2 style={styles.title}>Get In Touch</h2>
        <form style={styles.form}>
          <div style={styles.inputGroup}>
            <input type="text" placeholder="First Name" style={styles.input} />
            <input type="text" placeholder="Last Name" style={styles.input} />
          </div>
          <div style={styles.inputGroup}>
            <input type="email" placeholder="Email Address" style={styles.input} />
            <input type="tel" placeholder="Phone No." style={styles.input} />
          </div>
          <div style={styles.textAreaGroup}>
            <textarea placeholder="Message" style={styles.textArea}></textarea>
          </div>
          <button type="submit" style={styles.button}>Send</button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: 'b#333',
  } as React.CSSProperties,
  formContainer: {
    maxWidth: '800px',
    width: '100%',
    padding: '20px',
    backgroundColor: '#333',
    borderRadius: '10px',
  } as React.CSSProperties,
  title: {
    color: '#fff',
    fontSize: '2rem',
    marginBottom: '20px',
  } as React.CSSProperties,
  form: {
    display: 'flex',
    flexDirection: 'column',
  } as React.CSSProperties,
  inputGroup: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px',
  } as React.CSSProperties,
  input: {
    width: '48%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #444',
    backgroundColor: '#333',
    color: '#fff',
  } as React.CSSProperties,
  textAreaGroup: {
    marginBottom: '20px',
  } as React.CSSProperties,
  textArea: {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #444',
    backgroundColor: '#333',
    color: '#fff',
    minHeight: '100px',
  } as React.CSSProperties,
  button: {
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#ff4757',
    color: '#fff',
    fontSize: '1rem',
    cursor: 'pointer',
  } as React.CSSProperties,
};

export default ContactForm;
