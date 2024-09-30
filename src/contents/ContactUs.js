import React from 'react';
import "../styles/colors.css"

const ContactUs = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3 className="display-5 fw-bold text-center">Contact Us</h3>
            <p className="lead text-center">ArticleChain</p>
          </div>

          <div className="offset-md-1 mt-5">
            <h4>Contact Information</h4>
            <p className="lead">
              <strong>Email:</strong> contact@articlechain.com<br/>
              <strong>Phone:</strong> +123 456 7890<br/>
              <strong>Address:</strong> 123 Research Lane, Science City, 98765
            </p>
            <p className="lead">
              For any inquiries, please feel free to reach out to us via email or phone. Our team is available from Monday to Friday, 9 AM to 5 PM.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
