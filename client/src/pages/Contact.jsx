export const Contact = () => (
    <main className="container mt-5">
      <h1>Contact Us</h1>
      <p>We're happy to hear from you! Please reach out using the contact form below or stop by our location.</p>
      <form>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea className="form-control" rows="4" required></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Send</button>
      </form>
    </main>
  );
  
  export default Contact;