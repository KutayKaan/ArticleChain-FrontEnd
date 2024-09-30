import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/homeStyle.css';
import acVideo from "../assets/acvideo.mp4";
import web3 from "../assets/web3.jpg";
import blockchain from "../assets/blockchain.jpg";
import dapp from "../assets/dapp.jpg";
import innovation from "../assets/innovation.jpg";
import transparent from "../assets/transparent.jpg";
import reliable from "../assets/reliable.jpg";
import secure from "../assets/secure.jpg";
import trackable from "../assets/trackable.jpg";
import CardDiv from "../components/CardDiv";
import '../styles/colors.css';
import mKarakus from "../assets/muratkarakus.jpg"

const ChangingText = () => {
  const texts = [
    { text: 'Transparent', className: 'transparent' },
    { text: 'Secure', className: 'secure' },
    { text: 'Reliable', className: 'reliable' },
    { text: 'Innovation', className: 'innovation' },
    { text: 'Trackable', className: 'trackable' },
  ];

  const [index, setIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setIsFading(false);
      }, 1000);
    }, 4000);

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <span className={`changing-text ${isFading ? 'fade-out' : 'fade-in'} ${texts[index].className}`}>
      <i>{texts[index].text}</i>
    </span>
  );
};

const Home = () => {
  return (
    <div className='home'>
      <div>
        {/* Slider */}
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://media.istockphoto.com/id/1331702867/photo/block-chain-concept.jpg?b=1&s=612x612&w=0&k=20&c=mvewSOLSeYW-4p6JdD1VdDfQYHSEwpzI579X3bCpTE8=" className="d-block w-100" style={{ height: '500px', minHeight: '300px',filter: 'brightness(40%)' }} alt="First slide" />
              <div className="carousel-caption d-md-block">
                <h1 className='marBottom' style={{ color: '#EEF7FF' }}>ArticleChain makes academic publishing <p><ChangingText /></p> </h1>
              </div>
            </div>
            <div className="carousel-item">
              <img src="https://images.unsplash.com/photo-1639322537504-6427a16b0a28?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" style={{ height: '500px', minHeight: '300px' }} className="d-block w-100 " alt="Second slide" />
              <div className="carousel-caption d-md-block">
                <h2>ArticleChain Blockchain Network (ABN)</h2>
                <h6 className='color4'>Your go-to platform for transparent and reliable academic publishing. Join now to amplify your scholarly impact globally!</h6>
                <p><Link className="btn btn-m color2" to="/signup" role="button">Sign Up Today</Link></p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="https://plus.unsplash.com/premium_photo-1682464651356-3c6780eff00c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" style={{ height: '500px', minHeight: '300px' }} alt="Third slide" />
              <div className="carousel-caption d-md-block">
                <h2>Discover ArticleChain</h2>
                <h6 className='color4'>Unlock a world of academic insights at your fingertips with ArticleChain. Log in now to access our transparent and reliable publishing platform, where you can share and discover groundbreaking research. Join our community of scholars and researchers today to be part of the future of academic publishing!</h6>
                <p><Link className="btn btn-m color2" to="/login" role="button">Log In</Link></p>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
        {/* Cards */}
        <div className='container mt-5'>
        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-4'>
          <CardDiv 
            title="Web3" 
            content="By utilizing Web3 technology in our project, we empower users with full control over their data and ensure secure digital interactions. This highlights our project's reliability and user-centric approach, fostering strong and trustworthy interactions among users."
            img={web3}
          />
          <CardDiv 
            title="Blockchainized" 
            content="In our project, we leverage blockchain-based systems to securely store and process data using distributed ledger technology. This underscores our project's emphasis on security and transparency, strengthening academic research and publication processes."
            img={blockchain}
          />
          <CardDiv 
            title="dApp" 
            content="Utilizing applications built on blockchain technology (dApps), we enable direct peer-to-peer interactions among users in our project. This demonstrates our focus on improving research and publication processes by fostering a more transparent and inclusive academic community."
            img={dapp}
          />
          <CardDiv 
            title="Innovative" 
            content="Our project leverages cutting-edge technologies like Web3 and blockchain-based solutions to enhance academic research and publication processes, fostering a more transparent and inclusive academic community." 
            img={innovation} 
          />
        </div>
      </div>
      <hr className="featurette-divider mt-5" />
        {/* VideoSnippet */}
        <section className="py-3">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <video controls autoPlay width="550" height="450">
                  <source src={acVideo} />
                </video>
              </div>
              
              <div className="col-lg-6 mb-4 mt-5 mb-lg-0">
                <h1 className='display-5 fw-bold text-right'>ArticleChain</h1>
                <h6 className="display-5 fw-bold text-right" style={{color: '#e0e2d0'}}>The Future of Academia</h6>
                <p className="lead my-4 text-right"><i className="fa-solid fa-angle-right"></i> Articles related to blockchain and transactions are poised to revolutionize academia, driving innovative research methods and digital data management in scientific publishing.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Featurette */}
        <div className='container mt-5'>
          <div>
            <div className="row featurette mt-5 mb-5 align-items-center">
              <div className="col-md-7 text-center">
                <h2 className="featurette-heading">Transparent <span style={{color:'#e0e2d0'}}> Discover transparent academia.</span></h2>
                <p className="lead">Our academy offers a transparent publication platform where authors can showcase their research openly and with clarity. We prioritize transparency in every aspect of our article submission and review processes, ensuring integrity and trust within our academic community.</p>
              </div>
              <div className="col-md-5">
                <img className="featurette-image img-fluid mx-auto" src={transparent} style={{height: '300px'}} alt="Generic placeholder image" />
            </div>
          </div>

          <hr className="featurette-divider" />

          <div className="row featurette mt-5 mb-5 align-items-center">
            <div className="col-md-7 order-md-2 text-center">
              <h2 className="featurette-heading">Secure <span style={{color:'#e0e2d0'}}> Your research, our secure platform. </span></h2>
              <p className="lead">Experience peace of mind with our academy's secure article publishing system. We employ robust security measures to safeguard authors' data and ensure confidentiality throughout the publication journey, maintaining a safe environment for scholarly exchange.</p>
            </div>
            <div className="col-md-5 order-md-1">
              <img className="featurette-image img-fluid mx-auto" src={secure} style={{height: '300px'}} alt="Generic placeholder image" />
            </div>
          </div>

          <hr className="featurette-divider" />
          
          <div className="row featurette mt-5 mb-5 align-items-center">
            <div className="col-md-7 text-center">
              <h2 className="featurette-heading">Reliable  <span style={{color:'#e0e2d0'}}> Reliable scholarly publishing. </span></h2>
              <p className="lead">Count on our academy's reliable article publication services for consistent quality and professionalism. We are committed to delivering trustworthy and accurate dissemination of academic work, fostering credibility and confidence among authors and readers alike.</p>
            </div>
            <div className="col-md-5">
              <img className="featurette-image img-fluid mx-auto" src={reliable} style={{height: '300px'}} alt="Generic placeholder image" />
            </div>
          </div>
          
          <hr className="featurette-divider" />
          
          <div className="row featurette mt-5 mb-5 align-items-center">
            <div className="col-md-7 order-md-2 text-center">
              <h2 className="featurette-heading">Trackable <span style={{color:'#e0e2d0'}}> Follow your publication journey. </span></h2>
              <p className="lead">Gain full visibility into your publication journey with our trackable article submission platform. Authors can monitor the status of their submissions in real-time, ensuring transparency and accountability throughout the review and publishing process.</p>
            </div>
            <div className="col-md-5 order-md-1">
              <img className="featurette-image img-fluid mx-auto" src={trackable} style={{height: '300px'}} alt="Generic placeholder image" />
            </div>
          </div>
          </div>
        </div>
        <hr className="featurette-divider" />
        {/* Our Team */}
        <section className="py-5">
        <div className="container">
          <div className="row justify-content-center text-center mb-2 mb-lg-4">
            <div className="col-12 col-lg-8 col-xxl-7 text-center mx-auto">
              <span className="text-muted">Our Team</span>
              <h2 className="display-5 fw-bold">Meet the Team</h2>
              <p className="lead">Welcome to our talented team of professionals who are passionate about innovation and excellence. Each member brings unique skills and perspectives to the table, making our collaborative efforts truly impactful. Get to know the faces behind our success!</p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-3 mt-5">
              <div className="card text-center mb-3 shadow-lg">
                <div className="card-body p-0 pb-4">
                  <div className="mb-4 p-3"><img className="img-fluid" style={{height: '200px'}} src={mKarakus} alt="Team Member" /></div>
                  <h5 className="fw-bold">Murat Karakuş</h5>
                  <div className="text-muted">Advisor</div>
                  <div className="d-flex justify-content-center mt-4">
                    <Link className="btn btn-sm me-2" target='_blank' to="https://www.linkedin.com/in/drmuratkarakus/"><i className="fa-brands fa-linkedin" style={{fontSize: '25px'}}></i></Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 mt-5">
              <div className="card text-center mb-3 shadow-lg">
                <div className="card-body p-0 pb-4">
                  <div className="mb-4 p-3"><img className="img-fluid" style={{height: '200px'}} src="https://media.licdn.com/dms/image/D4D03AQHwtepk9qMMYw/profile-displayphoto-shrink_800_800/0/1697974217756?e=1720656000&v=beta&t=cHb7vJoQcMFnp8V6FKAfUb9xcylbFnGYIiipqumbzAo" alt="Team Member" /></div>
                  <h5 className="fw-bold">Ali Berkay Görgülü</h5>
                  <div className="text-muted">Developer</div>
                  <div className="d-flex justify-content-center mt-4">
                    <Link className="btn btn-sm me-2" target='_blank' to="https://www.linkedin.com/in/ali-berkay-g%C3%B6rg%C3%BCl%C3%BC-519020276/?locale=tr_TR"><i className="fa-brands fa-linkedin" style={{fontSize: '25px'}}></i></Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 mt-5">
              <div className="card text-center mb-3 shadow-lg">
                <div className="card-body p-0 pb-4">
                  <div className="mb-4 p-3"><img className="img-fluid" style={{height: '200px'}} src="https://media.licdn.com/dms/image/C4E03AQHVKRguSDHNwg/profile-displayphoto-shrink_400_400/0/1660203099901?e=1720656000&v=beta&t=ycZDN1QpMZgG9Hi6_S76B6nvoD7EdsKezcyCZoJ_J24" alt="Team Member" /></div>
                  <h5 className="fw-bold">Özgür Kamalı</h5>
                  <div className="text-muted">Developer</div>
                  <div className="d-flex justify-content-center mt-4">
                    <Link className="btn btn-sm me-2" target='_blank' to="https://www.linkedin.com/in/%C3%B6zg%C3%BCr-kamal%C4%B1-a58681248/?originalSubdomain=tr"><i className="fa-brands fa-linkedin" style={{fontSize: '25px'}}></i></Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 mt-5">
              <div className="card text-center mb-3 shadow-lg">
                <div className="card-body p-0 pb-4">
                  <div className="mb-4 p-3"><img className="img-fluid" style={{height: '200px'}} src="https://media.licdn.com/dms/image/D4D03AQGZ2xHP-VpviA/profile-displayphoto-shrink_800_800/0/1680955704279?e=1720656000&v=beta&t=HXNSVleSvgXBLL-sNh9WFf7QcHIrrrIWAlqlylk61A4" alt="Team Member" /></div>
                  <h5 className="fw-bold">Kutay Kaan Koçak</h5>
                  <div className="text-muted">Developer</div>
                  <div className="d-flex justify-content-center mt-4">
                    <Link className="btn btn-sm me-2" target='_blank' to="https://www.linkedin.com/in/kutaykaankocak/?originalSubdomain=tr"><i className="fa-brands fa-linkedin" style={{fontSize: '25px'}}></i></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        
      </div>
    </div>
  );
};

export default Home;
