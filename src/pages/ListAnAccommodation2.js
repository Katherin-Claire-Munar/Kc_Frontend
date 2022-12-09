import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./ListAnAccommodation2.css";

const ListAnAccommodation2 = () => {
  const navigate = useNavigate();

  const onContinueBtnContainerClick = useCallback(() => {
    navigate("/list-an-accommodation3");
  }, [navigate]);

  const onGoBackTextClick = useCallback(() => {
    navigate("/list-an-accommodation1");
  }, [navigate]);

  return (
    <div className="list-an-accommodation-2">
      <div className="taskbar-div10" />
      <div className="login-acc-icon11">
        <div className="accname-div11">{`Bobby `}</div>
        <img
          className="arrow-down-icon10"
          alt=""
          src="../arrow-down-icon@2x.png"
        />
        <img className="accprofile-icon11" alt="" src="../accprofile@2x.png" />
      </div>
      <div className="quest-icon-div11">
        <div className="quest-div11">Quest</div>
        <img className="quest-icon11" alt="" src="../quest-icon@2x.png" />
      </div>
      <div className="logo-div11">
        <img className="logo-icon21" alt="" src="../logo@2x.png" />
        <b className="tourit-b11">TourIt</b>
      </div>
      <div className="search-div10">
        <div className="searchbar-div11" />
        <img className="searchicon11" alt="" src="../searchicon@2x.png" />
      </div>
      <img className="footer-icon5" alt="" src="../footer3.svg" />
      <b className="what-is-the-category-that-best2">
        <p className="what-is-the2">
          What is the category that best fits this place?
        </p>
      </b>
      <div className="continue-btn-div3" onClick={onContinueBtnContainerClick}>
        <img className="btn-icon7" alt="" src="../btn7.svg" />
        <b className="continue-b6">Continue</b>
      </div>
      <b className="go-back11" onClick={onGoBackTextClick}>
        Go Back
      </b>
      <img className="image-81-icon1" alt="" src="../image-81@2x.png" />
      <b className="what-is-your-check-in-and-chec1">
        <p className="what-is-the2">
          What is your check-in and check-out time?
        </p>
      </b>
      <img className="timeinputbox-icon4" alt="" src="../timeinputbox.svg" />
      <img
        className="categoryinputbox-icon4"
        alt=""
        src="../timeinputbox.svg"
      />
      <div className="ex-1000-am-600-pm4">ex. 10:00 a.m - 6:00 p.m</div>
      <div className="ex-hotel-motel-resort-inn1">
        ex. Hotel, Motel, Resort, Inn, Villa
      </div>
      <b className="add-an-accommodation2">Add an Accommodation</b>
    </div>
  );
};

export default ListAnAccommodation2;
