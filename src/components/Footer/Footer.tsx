import F from "../../assets/navbarF.svg";
import "./Footer.css";
import { FooterData } from "./FooterData";
import oodi from "../../assets/imgs/oodi.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerDataContainer">
        <div className="footerFoodiContainer">
          <div className="footerFoodi">
            <div className="footerF">
              <img src={F} />
            </div>
            <div>
              <img className="foodi" src={oodi} />
            </div>
          </div>
          <div className="underFoodi">
            Savor the artistry where every dish is a culinary masterpiece
          </div>
        </div>
        {FooterData.map((data, i) => {
          return (
            <div className="footerData" key={i}>
              <div>{data.header}</div>
              <div className="footerItems">
                {data.items.map((d, i) => {
                  return (
                    <div
                      className="individualFooterItems"
                      style={{ cursor: "pointer" }}
                      key={i}
                    >
                      {d}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
