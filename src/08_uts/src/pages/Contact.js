import React from "react";

const Contact = () => {
  return (
    <section>
      <section className="contact section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mx-auto col-md-7 col-12 py-5 mt-5 text-center">
              <h1 className="mb-4">
                Hey there, Let's <strong>talk</strong> about{" "}
                <strong>creative</strong> projects
              </h1>

              <p>
                or email us at{" "}
                <a href="mailto:hello@company.com">hello@company.com</a>
              </p>
              <p>
                Please follow our{" "}
                <a rel="nofollow" href="https://templatemo.com/contact">
                  contact page
                </a>{" "}
                to <strong>setup</strong> the contact form.
              </p>
            </div>

            <div className="col-lg-8 mx-auto col-md-10 col-12">
              <form
                action="#"
                method="post"
                className="contact-form"
                data-aos-delay="300"
                role="form"
              >
                <div className="row">
                  <div className="col-lg-6 col-12">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      placeholder="Name"
                    />
                  </div>

                  <div className="col-lg-6 col-12">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Email"
                    />
                  </div>

                  <div className="col-lg-12 col-12">
                    <textarea
                      className="form-control"
                      rows="6"
                      name="message"
                      placeholder="Message"
                    ></textarea>
                  </div>

                  <div className="col-lg-5 mx-auto col-7">
                    <button
                      type="submit"
                      className="form-control"
                      id="submit-button"
                      name="submit"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Contact;
