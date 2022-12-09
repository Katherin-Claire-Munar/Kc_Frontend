import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./DeactivateShop3.css";

const DeactivateShop3 = () => {
  const navigate = useNavigate();

  const onReturnToDashboardButtonContainerClick = useCallback(() => {
    navigate("/manage-shop-dashboard");
  }, [navigate]);

  return (
    <div className="deactivate-shop-3">
      <img className="background-icon1" alt="" src="../background1@2x.png" />
      <div className="taskbar-div2" />
      <div className="login-acc-icon3">
        <div className="accname-div3">{`Bobby `}</div>
        <img
          className="arrow-down-icon2"
          alt=""
          src="../arrow-down-icon@2x.png"
        />
        <img className="accprofile-icon3" alt="" src="../accprofile@2x.png" />
      </div>
      <div className="quest-icon-div3">
        <div className="quest-div3">Quest</div>
        <img className="quest-icon3" alt="" src="../quest-icon@2x.png" />
      </div>
      <div className="logo-div3">
        <img className="logo-icon6" alt="" src="../logo@2x.png" />
        <b className="tourit-b3">TourIt</b>
      </div>
      <div className="search-div2">
        <div className="searchbar-div3" />
        <img className="searchicon3" alt="" src="../searchicon@2x.png" />
      </div>
      <div className="shop-container-div1">
        <div className="purple-rectangle-div1" />
        <div className="white-rectangle-div1" />
        <b className="go-back3">Go Back</b>
        <b className="select-shop-to-deactivate">
          <span>{`Select Shop to `}</span>
          <span className="deactivate-span">Deactivate</span>
        </b>
      </div>
      <img className="shop-box-icon" alt="" src="../button2.svg" />
      <img className="logo-icon7" alt="" src="../logo5@2x.png" />
      <div className="shop-name-div2">Net Mangrove Garden Ecopark</div>
      <div className="confirmation-div">
        <div className="overlay-div1" />
        <div className="confirmation-msg-container" />
        <b className="deactivate-msg-b">
          <p className="cutea-bubble-milktea">
            <span>&nbsp;</span>
          </p>
          <p className="has-been-deactivated-successfu">
            <span>{`has been `}</span>
            <span className="deactivated-span">deactivated</span>
            <span> successfully!</span>
          </p>
        </b>
        <b className="deactivate-msg-b">
          <p className="cutea-bubble-milktea">Cutea Bubble Milktea</p>
        </b>
        <div
          className="returntodashboardbutton-div"
          onClick={onReturnToDashboardButtonContainerClick}
        >
          <img className="button-icon3" alt="" src="../button3.svg" />
          <b className="return-to-dashboard1">Return to dashboard</b>
        </div>
        <img className="like-icon" alt="" src="../like-icon@2x.png" />
      </div>
    </div>
  );
};

export default DeactivateShop3;
