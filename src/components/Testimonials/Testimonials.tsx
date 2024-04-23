import "./Testimonials.css";

import testimonialImg1 from "../../assets/imgs/testimonial1.png";
import testimonialImg2 from "../../assets/imgs/testimonial2.png";
import testimonialImg3 from "../../assets/imgs/testimonial3.png";
import chefLady from "../../assets/imgs/cheflady.png";

const images = [testimonialImg2, testimonialImg1, testimonialImg3];

import star from "../../assets/yellowStar.svg";

const Testimonials = () => {
  const people = [];

  for (let i = 0; i < images.length; i++) {
    people.push(<img key={i} src={images[i]} />);
  }

  return (
    <div className="testimonialContainer">
      <div>
        <div className="chefContainer">
          <div
            className="testimonialChef"
            style={{ backgroundImage: `url(${chefLady})` }}
          >
            <div className="testimonialRectangle"></div>
            <div className="smile">😋</div>
            <div className="pizza">🍕</div>
            <div className="box2 sb2" style={{ color: "black" }}>
              Our Best Chef 😁
            </div>
          </div>
        </div>
        <div className="testimonialRightSide">
          <div>testimonials</div>
          <div>what our customers say about us</div>
          <div>
            “I had the pleasure of dining at Foodi last night, and I'm still
            raving about the experience! The attention to detail in presentation
            and service was impeccable”
          </div>
          <div className="testimonialPeople">
            <div>{people}</div>
            <div className="feedbackColumn">
              <div>Customer Feedback</div>
              <div>
                <img src={star} />

                <div>4.9</div>
                <div>(18.6k Reviews)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
