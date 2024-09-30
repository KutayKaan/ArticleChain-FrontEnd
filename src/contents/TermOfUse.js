import React from 'react';
import { Link } from 'react-router-dom';
const TermsOfUse = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3 className="display-5 fw-bold text-center">Terms of Use</h3>
            <p className="lead text-center">ArticleChain</p>
            <p className="lead text-center mt-3">Last Updated: 15.05.2024</p>
          </div>

          <div className="col-md-8 offset-md-2">
            <div className="card p-4">
              <h4 className="fw-bold mb-4">1. Acceptance of Terms</h4>
              <p>
                By accessing or using www.articlechain.com, you agree to these Terms of Use and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
              </p>

              <h4 className="fw-bold mb-4">2. Use License</h4>
              <p>
                Permission is granted to temporarily download one copy of the materials (information or software) on www.articlechain.com's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
              </p>

              <h4 className="fw-bold mb-4">3. Disclaimer</h4>
              <p>
                The materials on www.articlechain.com's website are provided on an 'as is' basis. www.articlechain.com makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties.
              </p>

              <h4 className="fw-bold mb-4">4. Limitations</h4>
              <p>
                In no event shall www.articlechain.com or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit) arising out of the use or inability to use the materials on www.articlechain.com's website.
              </p>

              <h4 className="fw-bold mb-4">5. Governing Law</h4>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of Turkey, and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
              </p>

              <p className="mt-4">
                For the complete Terms of Use, please contact us at <Link to="/contactus" style={{color: "#57A6A1"}}> Contact Us </Link>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsOfUse;
