import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./BusinessDashboard.css";

const BusinessDashboard = () => {
  const navigate = useNavigate();

  const onManageShopButtonClick = useCallback(() => {
    navigate("/manage-shop-dashboard");
  }, [navigate]);

  const onViewBusinessesButtonClick = useCallback(() => {
    navigate("/view-business");
  }, [navigate]);

  return (
    <div className="business-dashboard-div">
      <img className="background-icon3" alt="" src="../background3@2x.png" />
      <div className="taskbar-div17" />
      <div className="login-acc-icon18">
        <div className="accname-div18">{`Bobby `}</div>
        <img
          className="arrow-down-icon17"
          alt=""
          src="../arrow-down-icon@2x.png"
        />
        <img className="accprofile-icon18" alt="" src="../accprofile@2x.png" />
      </div>
      <div className="quest-icon-div18">
        <div className="quest-div18">Quest</div>
        <img className="quest-icon18" alt="" src="../quest-icon@2x.png" />
      </div>
      <div className="whitewave-div">
        <img className="rectangle-icon19" alt="" src="../rectangle-37.svg" />
        <div className="rectangle-div3" />
      </div>
      <div className="purplewave-div">
        <img className="rectangle-icon20" alt="" src="../rectangle-371.svg" />
        <div className="rectangle-div4" />
      </div>
      <div className="logo-div18">
        <img className="logo-icon31" alt="" src="../logo@2x.png" />
        <b className="tourit-b18">TourIt</b>
      </div>
      <div className="search-div17">
        <div className="searchbar-div18" />
        <img className="searchicon18" alt="" src="../searchicon@2x.png" />
      </div>
      <div className="manage-shop-button" onClick={onManageShopButtonClick}>
        <div className="manage-shop-div">
          <p className="manage-p">Manage</p>
          <p className="shop">Shop</p>
        </div>
        <img className="image-14-icon" alt="" src="../image-14@2x.png" />
        <img className="btn-icon17" alt="" src="../btn17@2x.png" />
      </div>
      <div className="advertisement-button-div">
        <div className="advertisement-div">
          <p className="manage-p">&nbsp;</p>
          <p className="shop">Advertisement</p>
        </div>
        <img className="btn-icon17" alt="" src="../btn17@2x.png" />
        <img className="aicon" alt="" src="../aicon@2x.png" />
      </div>
      <div
        className="view-businesses-button"
        onClick={onViewBusinessesButtonClick}
      >
        <img className="btn-icon19" alt="" src="../btn19@2x.png" />
        <div className="view-businesses-div">
          <p className="manage-p">View</p>
          <p className="shop">Businesses</p>
        </div>
        <img className="bicon" alt="" src="../bicon@2x.png" />
      </div>
      <b className="manage-business">Manage Business</b>
      <div className="if-you-always-do-what-youve-a">
        <p className="manage-p">{`“If you always do what you've always done, you'll `}</p>
        <p className="manage-p">always get what you've always got.”</p>
      </div>
      <img
        className="purple-footer-icon"
        alt=""
        src="../purple-footer@2x.png"
      />
      <b className="go-back18">Go Back</b>
    </div>
  );
};

export default BusinessDashboard;
