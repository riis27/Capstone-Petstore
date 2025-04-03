export const FAQs = () => (
    <main className="container mt-5">
      <h1>Frequently Asked Questions</h1>
      <div className="accordion" id="faqAccordion">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
              What is the adoption process?
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show">
            <div className="accordion-body">
              Submit an application, meet the pet, and complete the paperwork!
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
              What are your hours?
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse">
            <div className="accordion-body">
              We’re open Tuesday–Sunday, check the homepage for exact hours.
            </div>
          </div>
        </div>
      </div>
    </main>
  );
  
  export default FAQs;