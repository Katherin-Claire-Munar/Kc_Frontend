import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./ManageShopDashboard.css";

const ManageShopDashboard = () => {
  const navigate = useNavigate();

  const onAddShopButtonClick = useCallback(() => {
    navigate("/add-place-dashboard");
  }, [navigate]);

  const onDeactivateButtonContainerClick = useCallback(() => {
    navigate("/deactivate-shop-1");
  }, [navigate]);

  const onUpdateButtonContainerClick = useCallback(() => {
    navigate("/update-shop-1");
  }, [navigate]);

  const onGoBackTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="manage-shop-dashboard">
      <div className="background-div5">
        <img className="image3-icon" alt="" src="../image3@2x.png" />
        <img className="image2-icon" alt="" src="../image2@2x.png" />
        <img className="image1-icon" alt="" src="../image1@2x.png" />
      </div>
      <div className="taskbar-div15" />
      <div className="login-acc-icon16">
        <div className="accname-div16">{`Bobby `}</div>
        <img
          className="arrow-down-icon15"
          alt=""
          src="../arrow-down-icon@2x.png"
        />
        <img className="accprofile-icon16" alt="" src="../accprofile@2x.png" />
      </div>
      <div className="quest-icon-div16">
        <div className="quest-div16">Quest</div>
        <img className="quest-icon16" alt="" src="../quest-icon@2x.png" />
      </div>
      <div className="logo-div16">
        <img className="logo-icon27" alt="" src="../logo@2x.png" />
        <b className="tourit-b16">TourIt</b>
      </div>
      <div className="search-div15">
        <div className="searchbar-div16" />
        <img className="searchicon16" alt="" src="../searchicon@2x.png" />
      </div>
      <img className="wavy-vector-icon" alt="" src="../wavy-vector.svg" />
      <img className="purple-wave-icon4" alt="" src="../purple-wave4.svg" />
      <b className="manage-shop-b">Manage Shop</b>
      <div className="if-you-want-to-grow-you-have-t">
        <p className="if-you-want">
          “If you want to grow you have to do something different from the
          majority of people.”
        </p>
      </div>
      <img className="dark-wave-icon" alt="" src="../dark-wave.svg" />
      <b className="which-action-would-you-like-to">
        Which action would you like to do?
      </b>
      <div className="add-shop-button" onClick={onAddShopButtonClick}>
        <img className="btn-icon12" alt="" src="../btn12.svg" />
        <div className="add-shop-div">Add Shop</div>
      </div>
      <div
        className="deactivate-button-div"
        onClick={onDeactivateButtonContainerClick}
      >
        <img className="btn-icon12" alt="" src="../btn12.svg" />
        <div className="deactivate-shop-div">Deactivate Shop</div>
      </div>
      <div className="update-button-div" onClick={onUpdateButtonContainerClick}>
        <img className="btn-icon12" alt="" src="../btn12.svg" />
        <div className="update-shop-div">Update Shop</div>
      </div>
      <b className="go-back16" onClick={onGoBackTextClick}>
        Go Back
      </b>
    </div>
  );
};

export default ManageShopDashboard;
