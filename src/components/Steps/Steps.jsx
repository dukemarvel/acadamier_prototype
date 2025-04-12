import React from "react";
import "./Steps.scss";
import StepsPerson from "../../assets/steps-person.png"; 
import LayerOne from "../../assets/layer1.svg";            
import LayerTwo from "../../assets/layer2.svg";            

function Steps() {
  return (
    <section className="steps-section">
      <div className="steps-heading-wrapper">
        <p className="steps-overline">Get started on Acadamier</p>
        <h2 className="steps-title">
          Get started on the path to greatness with highly experienced and
          knowledgeable Acadamier instructors in{" "}
          <span className="highlight">5 simple steps</span>:
        </h2>
      </div>

      <div className="steps-content">
        <div className="steps-image-container">
          <div className="image-box">
            <img src={LayerOne} alt="Layer One" className="layer-one" />
            <img src={LayerTwo} alt="Layer Two" className="layer-two" />
            <img
              className="person-image"
              src={StepsPerson}
              alt="Man gesturing to the steps"
            />
          </div>
        </div>

        <div className="steps-list">
          <div className="step">
            <div className="step-number">01</div>
            <p className="p-class">
              Click <strong>“Sign up”</strong> now and choose{" "}
              <strong>“Personal Account.”</strong>
            </p>
          </div>
          <div className="step">
            <div className="step-number">02</div>
            <p className="p-class">Input your name, email, and password.</p>
          </div>
          <div className="step">
            <div className="step-number">03</div>
            <p>Verify your account with a special code sent to your email.</p>
          </div>
          <div className="step">
            <div className="step-number">04</div>
            <p>
              Log in with your name and password, then click{" "}
              <strong>“Browse Courses”</strong> to explore different catalogs of
              relevant or industry-specific courses (Marketing, etc.).
            </p>
          </div>
          <div className="step">
            <div className="step-number">05</div>
            <p>
              Explore learning paths with structured series of courses specially
              tailored to help you master a particular skill.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Steps;