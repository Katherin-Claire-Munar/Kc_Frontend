import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./DeactivateShop2.css";

const DeactivateShop2 = () => {
  const navigate = useNavigate();

  const onConfirmButtonContainerClick = useCallback(() => {
    navigate("/deactivate-shop-3");
  }, [navigate]);

  return (
    <div className="deactivate-shop-2">
      <img className="bacnkground-icon" alt="" src="../bacnkground@2x.png" />
      <div className="taskbar-div3" />
      <div className="login-acc-icon4">
        <div className="accname-div4">{`Bobby `}</div>
        <img
          className="arrow-down-icon3"
          alt=""
          src="../arrow-down-icon@2x.png"
        />
        <img className="accprofile-icon4" alt="" src="../accprofile@2x.png" />
      </div>
      <div className="quest-icon-div4">
        <div className="quest-div4">Quest</div>
        <img className="quest-icon4" alt="" src="../quest-icon@2x.png" />
      </div>
      <div className="logo-div4">
        <img className="logo-icon8" alt="" src="../logo@2x.png" />
        <b className="tourit-b4">TourIt</b>
      </div>
      <div className="search-div3">
        <div className="searchbar-div4" />
        <img className="searchicon4" alt="" src="../searchicon@2x.png" />
      </div>
      <div className="shop-container-div2">
        <div className="purple-rectangle-div2" />
        <div className="white-rectangle-div2" />
        <b className="go-back4">Go Back</b>
        <b className="select-shop-to-deactivate1">
          <span>{`Select Shop to `}</span>
          <span className="deactivate-span1">Deactivate</span>
        </b>
      </div>
      <div className="shop-2-div">
        <img className="container-icon" alt="" src="../container.svg" />
        <div className="shop-name-div3">Cutea Bubble Milktea</div>
        <img className="logo-icon9" alt="" src="../logo4@2x.png" />
      </div>
      <div className="shop-1-div">
        <img className="container-icon1" alt="" src="../button2.svg" />
        <img className="logo-icon10" alt="" src="../logo5@2x.png" />
        <div className="shop-name-div4">Net Mangrove Garden Ecopark</div>
      </div>
      <div className="confirmation-msg-div1">
        <div className="overlay-div2" />
        <div className="white-rectangle-div3" />
        <b className="are-you-sure-you-want-to-deact">
          <p className="are-you-sure-you-want">
            <span>{`Are you sure you want `}</span>
          </p>
          <p className="to-deactivate-this-shop">
            <span>{`to `}</span>
            <span className="deactivate-span1">deactivate</span>
            <span className="this-shop-span"> this shop?</span>
          </p>
        </b>
        <div
          className="confirm-button-div"
          onClick={onConfirmButtonContainerClick}
        >
          <img className="button-icon4" alt="" src="../button4.svg" />
          <b className="confirm-b">Confirm</b>
        </div>
        <img className="image-115-icon" alt="" src="../image-115@2x.png" />
      </div>
    </div>
  );
};

export default DeactivateShop2;
