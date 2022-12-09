import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./AddPlaceDashboard.css";

const AddPlaceDashboard = () => {
  const navigate = useNavigate();

  const onAccommodationButtonContainerClick = useCallback(() => {
    navigate("/list-an-accommodation1");
  }, [navigate]);

  const onResturantButtonContainerClick = useCallback(() => {
    navigate("/list-a-resturant1");
  }, [navigate]);

  const onThingToButtonClick = useCallback(() => {
    navigate("/list-a-thing-to-do1");
  }, [navigate]);

  const onGoBackTextClick = useCallback(() => {
    navigate("/manage-shop-dashboard");
  }, [navigate]);

  return (
    <div className="add-place-dashboard">
      <div className="background-div4">
        <img className="image-49-icon" alt="" src="../image-49@2x.png" />
        <img className="image-45-icon" alt="" src="../image-45@2x.png" />
        <img className="image-50-icon" alt="" src="../image-50@2x.png" />
      </div>
      <div className="taskbar-div14" />
      <div className="login-acc-icon15">
        <div className="accname-div15">{`Bobby `}</div>
        <img
          className="arrow-down-icon14"
          alt=""
          src="../arrow-down-icon@2x.png"
        />
        <img className="accprofile-icon15" alt="" src="../accprofile@2x.png" />
      </div>
      <div className="quest-icon-div15">
        <div className="quest-div15">Quest</div>
        <img className="quest-icon15" alt="" src="../quest-icon@2x.png" />
      </div>
      <div className="logo-div15">
        <img className="logo-icon26" alt="" src="../logo@2x.png" />
        <b className="tourit-b15">TourIt</b>
      </div>
      <div className="search-div14">
        <div className="searchbar-div15" />
        <img className="searchicon15" alt="" src="../searchicon@2x.png" />
      </div>
      <img className="white-wave-icon" alt="" src="../white-wave.svg" />
      <img className="footer-icon8" alt="" src="../footer8.svg" />
      <b className="what-kind-of-place-is-this">What kind of place is this?</b>
      <div
        className="accommodation-button-div"
        onClick={onAccommodationButtonContainerClick}
      >
        <img className="btn-icon9" alt="" src="../btn9.svg" />
        <img className="bed-icon" alt="" src="../bed-icon.svg" />
        <div className="list-an-accomodation">List an Accomodation</div>
      </div>
      <div
        className="resturant-button-div"
        onClick={onResturantButtonContainerClick}
      >
        <img className="btn-icon9" alt="" src="../btn9.svg" />
        <img className="utensil-icon" alt="" src="../utensil-icon.svg" />
        <div className="list-a-resturant">List a Resturant</div>
      </div>
      <div className="thing-to-button" onClick={onThingToButtonClick}>
        <img className="btn-icon9" alt="" src="../btn9.svg" />
        <img className="camera-icon" alt="" src="../camera-icon.svg" />
        <div className="list-a-thing-to-do">List a Thing to Do</div>
      </div>
      <b className="go-back15" onClick={onGoBackTextClick}>
        Go Back
      </b>
      <div className="thank-you-for-telling-us-about">
        <p className="thank-you-for">
          Thank you for telling us about a new place to list on TourIt. Your
          contributions make our traveller community stronger. To get started,
          tell us a little bit more about the place.
        </p>
      </div>
      <b className="add-a-place-to-tourit">Add a place to TourIt</b>
    </div>
  );
};

export default AddPlaceDashboard;
