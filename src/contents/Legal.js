import React from 'react';
import { Link } from 'react-router-dom';
const Legal = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3 className="display-5 fw-bold text-center">Legal Information</h3>
            <p className="lead text-center">ArticleChain</p>

            <p className="lead text-center">Last Updated: 15.05.2024</p>
          </div>

          <div className="col-md-8 offset-md-2">
            <div className="card p-4">
              <h4 className="fw-bold mb-4">1. Terms of Use</h4>
              <p>
                By accessing or using www.articlechain.com, you agree to our Terms of Use.
              </p>

              <h4 className="fw-bold mb-4">2. Privacy Policy</h4>
              <p>
                Our Privacy Policy explains how we collect, use, and protect your personal information.
              </p>

              <h4 className="fw-bold mb-4">3. Disclaimer</h4>
              <p>
                The information provided on this website is for general informational purposes only.
              </p>

              <h4 className="fw-bold mb-4">4. Copyright Notice</h4>
              <p>
                All content and materials on this website are protected by copyright.
              </p>

              <h4 className="fw-bold mb-4">5. Contact Information</h4>
              <p>
                For any legal inquiries, please contact us at  <Link to="/contactus" style={{color: "#57A6A1"}}> Contact Us </Link>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Legal;
