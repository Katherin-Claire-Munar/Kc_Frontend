import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./ViewShop.css";

const ViewShop = () => {
  const navigate = useNavigate();

  const onGoBackTextClick = useCallback(() => {
    navigate("/view-business");
  }, [navigate]);

  return (
    <div className="view-shop-div">
      <div className="logo-and-name">
        <img className="logo-icon24" alt="" src="../logo24@2x.png" />
        <b className="shop-name-b4">
          <p className="cutea-bubble">{`Cutea Bubble `}</p>
          <p className="milktea-p">Milktea</p>
        </b>
      </div>
      <img className="rectangle-icon16" alt="" src="../rectangle-38.svg" />
      <div className="background-div3">
        <img className="image-103-icon" alt="" src="../image-103@2x.png" />
        <img className="image-104-icon" alt="" src="../image-104@2x.png" />
        <img className="image-105-icon" alt="" src="../image-105@2x.png" />
        <img className="image-106-icon" alt="" src="../image-106@2x.png" />
      </div>
      <img className="purple1-icon" alt="" src="../purple1.svg" />
      <b className="location-contact">{`Location & Contact`}</b>
      <div className="opening-time-div">
        <b className="open-hours">{`Open Hours : `}</b>
        <div className="time-div">10:00 a.m - 8:00 p.m</div>
        <img className="clock-icon" alt="" src="../clock-icon.svg" />
      </div>
      <div className="contact-div">
        <b className="contact-number">{`Contact Number : `}</b>
        <div className="number-div">09875214762</div>
        <img className="phone-icon" alt="" src="../phone-icon.svg" />
      </div>
      <div className="location-div">
        <b className="location-b1">
          <p className="cutea-bubble">Location:</p>
        </b>
        <div className="address-div">
          13 Salvador Street, Labangon, Cebu City
        </div>
        <img className="location-icon" alt="" src="../location-icon.svg" />
      </div>
      <div className="message-div">
        <b className="message-us-at">{`Message us at: `}</b>
        <div className="url-div">
          https://m.facebook.com/cutea-bubble-milktea
        </div>
        <img className="globe-icon" alt="" src="../globe-icon.svg" />
      </div>
      <div className="taskbar-div13" />
      <div className="login-acc-icon14">
        <div className="accname-div14">{`Bobby `}</div>
        <img
          className="arrow-down-icon13"
          alt=""
          src="../arrow-down-icon@2x.png"
        />
        <img className="accprofile-icon14" alt="" src="../accprofile@2x.png" />
      </div>
      <div className="quest-icon-div14">
        <div className="quest-div14">Quest</div>
        <img className="quest-icon14" alt="" src="../quest-icon@2x.png" />
      </div>
      <div className="logo-div14">
        <img className="logo-icon25" alt="" src="../logo@2x.png" />
        <b className="tourit-b14">TourIt</b>
      </div>
      <div className="search-div13">
        <div className="searchbar-div14" />
        <img className="searchicon14" alt="" src="../searchicon@2x.png" />
      </div>
      <div className="is-a-strong-milk-tea-shop-whic">
        <p className="cutea-bubble">
          is a strong milk tea shop which aims to provide customers withquality
          at reasonable and just price. Our company targets the students and
          young professionals’.As newcomer in the milk tea market, seeks to come
          up with products that will distinctour competitors, a product that
          provide satisfaction, quality taste and new variety of milk tea.Thus
          we present sorbetea , a taste beyond milk tea flavor that’s craze
          among the younger generation and the classic dessertice cream .
        </p>
        <p className="milktea-p">&nbsp;</p>
      </div>
      <div className="category-div">
        <img className="rectangle-icon17" alt="" src="../rectangle-32.svg" />
        <div className="resturant-div">Resturant</div>
      </div>
      <div className="category-div1">
        <img className="rectangle-icon17" alt="" src="../rectangle-32.svg" />
        <div className="coffee-tea">{`Coffee & Tea`}</div>
      </div>
      <b className="go-back14" onClick={onGoBackTextClick}>
        Go Back
      </b>
    </div>
  );
};

export default ViewShop;
