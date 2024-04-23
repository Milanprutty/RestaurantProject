import phoneIcon from "../../assets/phone.svg";
import "./OpenedMenu.css";

interface Props {
  style: string;
}

const OpenedMenu = ({ style }: Props) => {
  return (
    <div className={style}>
      <div>
        <li>Home</li>
        <li>menu</li>
        <li>services</li>
        <li>offers</li>
        <li className="rightSideBtn">
          <button>
            <img src={phoneIcon} />
            Contact
          </button>
        </li>
      </div>
    </div>
  );
};
export default OpenedMenu;
