import "./Services.css";
import { ServiceData } from "./serviceData";

const Services = () => {
  return (
    <div className="services">
      <div className="servicesLeftSide">
        <div className="story">Our Story & Services</div>
        <div>Our Culinary Journey And Services</div>
        <div>
          Rooted in passion, we curate unforgettable dining experiences and
          offer exceptional services, blending culinary artistry with warm
          hospitality.
        </div>

        <div>
          <button className="exploreBtn">Explore</button>
        </div>
      </div>
      <div className="servicesRightSide">
        {ServiceData.map((data, i) => {
          return (
            <div key={i} className="serviceDataContainer">
              <div className="serviceData">
                <img src={data.img} />
                <div>{data.name}</div>
                <div>{data.description}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
