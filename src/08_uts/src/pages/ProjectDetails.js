import React from "react";
import interviewprocess from "../assets/images/project/project-detail/interview-process.jpg";
import personalwebsite from "../assets/images/project/project-detail/personal-website.png";
import maleava from "../assets/images/project/project-detail/male-avatar.png";
import claps from "../assets/images/claps.png";
import { connect } from "react-redux";

class ProjectDetails extends React.Component {
  increment = () => {
    this.props.dispatch({ type: "INCREMENT" });
  };

  render() {
    return (
      <div>
        <section className="project-detail section-padding-half mt-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-9 mx-auto col-md-10 col-12 mt-lg-5 text-center">
                <h2 style={{ color: "gray" }} className="mt-5">
                  Digital Marketing Agency
                </h2>

                <h1>127+ Duis sollicitudin urna id elit pulvinar placerat</h1>
              </div>
            </div>
          </div>
        </section>
        <div className="full-image text-center">
          <img
            src={interviewprocess}
            className="img-fluid"
            alt="interview process"
          />
        </div>
        <section className="project-detail section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12 mb-5">
                <img
                  src={personalwebsite}
                  className="img-fluid"
                  alt="personal website"
                />
              </div>

              <div className="col-lg-5 col-md-6 mr-lg-auto mt-lg-5 col-12">
                <h2>Pellentesque pretium interdum</h2>

                <p className="mt-3 mb-4">
                  Nunc sapien nulla, interdum at diam non, aliquam vestibulum
                  leo. Fusce laoreet malesuada ante, consectetur consequat.
                </p>

                <ul className="list-detail">
                  <li>
                    <span>Curabitur commodo a sapien non</span>
                  </li>
                  <li>
                    <span>Sed facilisis convallis turpis</span>
                  </li>
                  <li>
                    <span>Quisque placerat augue neque</span>
                  </li>
                  <li>
                    <span>Nullam fringilla arcu a tortor</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-12 col-12">
              <div className="embed-responsive embed-responsive-16by9 my-5 py-5">
                <iframe
                  className="embed-responsive-item"
                  width="800"
                  height="450"
                  src="https://www.youtube.com/embed/myVN26Vx4MU?controls=0"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>

            <div className="col-lg-9 mx-auto col-12">
              <div className="client-info mt-lg-5 py-lg-5">
                <h3>
                  Curabitur egestas mollis tellus sit amet porttitor. Sed leo
                  nisl, posuere at molestie ac, suscipit auctor mauris. Etiam
                  quis metus elementum, tempor risus vel.
                </h3>

                <div className="d-flex align-items-center mt-3">
                  <img src={maleava} className="img-fluid" alt="male avatar" />

                  <p>Angelo Sharp, Creative Director</p>
                </div>
              </div>

              <img
                src={claps}
                onClick={this.increment}
                width="35px"
                style={{ cursor: "pointer" }}
              />
              <span style={{ fontSize: "25px" }} className="ml-2">
                {this.props.count}
              </span>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.count,
  };
}

export default connect(mapStateToProps)(ProjectDetails);
