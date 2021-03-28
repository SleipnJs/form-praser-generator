import React from 'react';

import './Faq.scss';

import arrowDown from '../../assets/images/arrow-down.svg';
import faqImg from '../../assets/images/faq-img.svg';

const Faq = () => {
  const clickHandler = function (e) {
    let panel = e.currentTarget.parentElement.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
    panel.classList.toggle('margin-top-show');
    e.currentTarget.classList.toggle('arrow-flip');
    e.currentTarget.parentElement.classList.toggle('bold-font');
  };

  return (
    <section className="main">
      <div className="main__box">
        <img src={faqImg} alt="faq" />
      </div>
      <div className="main__images">
        <img src={faqImg} alt="faq" />
      </div>
      <div className="main__faq">
        <h2>FAQ</h2>
        <div>
          <div className="question">
            <div className="question__title">
              <p>How many team members can I invite?</p>
              <img src={arrowDown} alt="arrow icon" className="img-btn" onClick={clickHandler} />
            </div>
            <div className="question__answer">
              You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.
            </div>
          </div>
          <div className="question">
            <div className="question__title">
              <p>What is the maximum file upload size?</p>
              <img src={arrowDown} alt="arrow icon" className="img-btn" onClick={clickHandler} />
            </div>
            <div className="question__answer">No more than 2GB. All files in your account must fit your allotted storage space.</div>
          </div>
          <div className="question">
            <div className="question__title">
              <p>How do I reset my password?</p>
              <img src={arrowDown} alt="arrow icon" className="img-btn" onClick={clickHandler} />
            </div>
            <div className="question__answer">
              Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.
            </div>
          </div>
          <div className="question">
            <div className="question__title">
              <p>Can I cancel my subscription?</p>
              <img src={arrowDown} alt="arrow icon" className="img-btn" onClick={clickHandler} />
            </div>
            <div className="question__answer">Yes! Send us a message and we’ll process your request no questions asked.</div>
          </div>
          <div className="question">
            <div className="question__title">
              <p>Do you provide additional support?</p>
              <img src={arrowDown} alt="arrow icon" className="img-btn" onClick={clickHandler} />
            </div>
            <div className="question__answer">Chat and email support is available 24/7. Phone lines are open during normal business hours.</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
