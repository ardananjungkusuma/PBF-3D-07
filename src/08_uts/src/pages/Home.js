import React from "react";
import office from "../assets/images/office.png";
import workgurl from "../assets/images/working-girl.png";
import projectimg1 from "../assets/images/project/project-image01.jpg";
import projectimg2 from "../assets/images/project/project-image02.jpg";
import projectimg3 from "../assets/images/project/project-image03.jpg";
import projectimg4 from "../assets/images/project/project-image04.jpg";
import projectimg5 from "../assets/images/project/project-image05.jpg";
import femaleava from "../assets/images/female-avatar.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section>
      <section className="hero hero-bg d-flex justify-content-center align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-10 col-12 d-flex flex-column justify-content-center align-items-center">
              <div className="hero-text">
                <h1 className="text-white">
                  We are ready for your digital marketing
                </h1>
                <Link to="/contact" className="custom-btn btn-bg btn mt-3">
                  Let us discuss together!
                </Link>

                <strong className="d-block py-3 pl-5 text-white">
                  <i className="fa fa-phone mr-2"></i> +99 080 070 4224
                </strong>
              </div>
            </div>

            <div className="col-lg-6 col-12">
              <div className="hero-image">
                <img src={workgurl} className="img-fluid" alt="girl working" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about section-padding pb-0" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 mx-auto col-md-10 col-12">
              <div className="about-info">
                <h2 className="mb-4">
                  the best <strong>Digital Marketing agency</strong> in Rio de
                  Janeiro
                </h2>
                <p className="mb-0">
                  Total 5 HTML pages are included in this template from
                  TemplateMo website. Please check 2 blog pages, project page,
                  and contact page. You are allowed to use this template for
                  commercial or non-commercial purpose. You are allowed to
                  redistribute the template ZIP file on template collection
                  websites.
                </p>
              </div>

              <div className="about-image">
                <img src={office} className="img-fluid" alt="office" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="project section-padding" id="project">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-12">
              <h2 className="mb-5 text-center">
                Please take a look through our
                <strong> featured Digital Trends</strong>
                <div className="item project-wrapper mt-5">
                  <img
                    src={projectimg1}
                    className="img-fluid"
                    alt="project image"
                  />

                  <div className="project-info">
                    <small>Marketing</small>

                    <h3>
                      <Link to="/projectdetails">
                        <span>Sweet Go Agency</span>
                        <i className="fa fa-angle-right project-icon"></i>
                      </Link>
                      <a href="project-detail.html"></a>
                    </h3>
                  </div>
                </div>
                <div className="item project-wrapper mt-5">
                  <img
                    src={projectimg2}
                    className="img-fluid"
                    alt="project image"
                  />

                  <div className="project-info">
                    <small>Website</small>

                    <h3>
                      <Link to="/projectdetails">
                        <span>Smart Ladies</span>
                        <i className="fa fa-angle-right project-icon"></i>
                      </Link>
                    </h3>
                  </div>
                </div>
                <div className="item project-wrapper mt-5">
                  <img
                    src={projectimg3}
                    className="img-fluid"
                    alt="project image"
                  />

                  <div className="project-info">
                    <small>Branding</small>

                    <h3>
                      <Link to="/projectdetails">
                        <span>Shoes factory</span>
                        <i className="fa fa-angle-right project-icon"></i>
                      </Link>
                    </h3>
                  </div>
                </div>
                <div className="item project-wrapper mt-5">
                  <img
                    src={projectimg4}
                    className="img-fluid"
                    alt="project image"
                  />

                  <div className="project-info">
                    <small>Social Media</small>

                    <h3>
                      <Link to="/projectdetails">
                        <span>Race Bicycle</span>
                        <i className="fa fa-angle-right project-icon"></i>
                      </Link>
                    </h3>
                  </div>
                </div>
                <div className="item project-wrapper mt-5">
                  <img
                    src={projectimg5}
                    className="img-fluid"
                    alt="project image"
                  />

                  <div className="project-info">
                    <small>Video</small>

                    <h3>
                      <Link to="/projectdetails">
                        <span>Ultimate HealthCare</span>
                        <i className="fa fa-angle-right project-icon"></i>
                      </Link>
                    </h3>
                  </div>
                </div>
              </h2>
            </div>
          </div>
        </div>
      </section>
      <section class="testimonial section-padding">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-5 col-12">
              <div class="contact-image">
                <img src={femaleava} class="img-fluid" alt="website" />
              </div>
            </div>

            <div class="col-lg-6 col-md-7 col-12">
              <h4 class="my-5 pt-3">Client Testimonials</h4>

              <div class="quote"></div>

              <h2 class="mb-4">
                Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua
                incididunt mollit id et sit proident dolor nulla sed commodo.
              </h2>

              <p>
                <strong>Mary Zoe</strong>

                <span class="mx-1">/</span>

                <small>Digital Agency (CEO)</small>
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Home;
