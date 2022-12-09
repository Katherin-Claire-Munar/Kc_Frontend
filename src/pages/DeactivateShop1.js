import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./DeactivateShop1.css";

const DeactivateShop1 = () => {
  const navigate = useNavigate();

  const onGoBackTextClick = useCallback(() => {
    navigate("/manage-shop-dashboard");
  }, [navigate]);

  const onShop2ButtonContainerClick = useCallback(() => {
    navigate("/deactivate-shop-2");
  }, [navigate]);

  const onShop1ButtonContainerClick = useCallback(() => {
    navigate("/deactivate-shop-2");
  }, [navigate]);

  return (
    <div className="deactivate-shop-1">
      <img className="image-118-icon" alt="" src="../background1@2x.png" />
      <div className="taskbar-div4" />
      <div className="login-acc-icon5">
        <div className="accname-div5">{`Bobby `}</div>
        <img
          className="arrow-down-icon4"
          alt=""
          src="../arrow-down-icon@2x.png"
        />
        <img className="accprofile-icon5" alt="" src="../accprofile@2x.png" />
      </div>
      <div className="quest-icon-div5">
        <div className="quest-div5">Quest</div>
        <img className="quest-icon5" alt="" src="../quest-icon@2x.png" />
      </div>
      <div className="logo-div5">
        <img className="logo-icon11" alt="" src="../logo@2x.png" />
        <b className="tourit-b5">TourIt</b>
      </div>
      <div className="search-div4">
        <div className="searchbar-div5" />
        <img className="searchicon5" alt="" src="../searchicon@2x.png" />
      </div>
      <div className="shop-container-div3">
        <div className="purple-rectangle-div3" />
        <div className="white-rectangle-div4" />
        <b className="go-back5" onClick={onGoBackTextClick}>
          Go Back
        </b>
        <b className="select-shop-to-deactivate2">
          <span>{`Select Shop to `}</span>
          <span className="deactivate-span3">Deactivate</span>
        </b>
      </div>
      <div className="shop2button-div" onClick={onShop2ButtonContainerClick}>
        <img className="rectangle-icon1" alt="" src="../rectangle.svg" />
        <div className="shop-name-div5">Cutea Bubble Milktea</div>
        <img className="logo-icon12" alt="" src="../logo4@2x.png" />
      </div>
      <div className="shop1button-div" onClick={onShop1ButtonContainerClick}>
        <img className="rectangle-icon2" alt="" src="../button2.svg" />
        <img className="logo-icon13" alt="" src="../logo5@2x.png" />
        <div className="shop-name-div6">Net Mangrove Garden Ecopark</div>
      </div>
    </div>
  );
};

export default DeactivateShop1;
