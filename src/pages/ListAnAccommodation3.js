import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./ListAnAccommodation3.css";

const ListAnAccommodation3 = () => {
  const navigate = useNavigate();

  const onReturnBtnContainerClick = useCallback(() => {
    navigate("/add-place-dashboard");
  }, [navigate]);

  return (
    <div className="list-an-accommodation-3">
      <div className="taskbar-div8" />
      <div className="login-acc-icon9">
        <div className="accname-div9">{`BB `}</div>
        <img
          className="arrow-down-icon8"
          alt=""
          src="../arrow-down-icon@2x.png"
        />
        <img className="accprofile-icon9" alt="" src="../accprofile@2x.png" />
      </div>
      <div className="quest-icon-div9">
        <div className="quest-div9">Quest</div>
        <img className="quest-icon9" alt="" src="../quest-icon@2x.png" />
      </div>
      <div className="logo-div9">
        <img className="logo-icon18" alt="" src="../logo@2x.png" />
        <b className="tourit-b9">TourIt</b>
      </div>
      <div className="search-div8">
        <div className="searchbar-div9" />
        <img className="searchicon9" alt="" src="../searchicon@2x.png" />
      </div>
      <img className="footer-icon3" alt="" src="../footer3.svg" />
      <div className="continuebtn-div2">
        <img className="btn-icon4" alt="" src="../btn4.svg" />
        <b className="continue-b4">Continue</b>
      </div>
      <b className="go-back9">Go Back</b>
      <img className="image-81-icon" alt="" src="../image-81@2x.png" />
      <b className="add-an-accommodation">Add an Accommodation</b>
      <b className="what-is-the-category-that-best1">
        <p className="what-is-your">
          What is the category that best fits this place?
        </p>
      </b>
      <b className="what-is-your-check-in-and-chec">
        <p className="what-is-your">
          What is your check-in and check-out time?
        </p>
      </b>
      <img className="timeinputbox-icon3" alt="" src="../timeinputbox.svg" />
      <img
        className="categoryinputbox-icon3"
        alt=""
        src="../timeinputbox.svg"
      />
      <div className="ex-1000-am-600-pm3">ex. 10:00 a.m - 6:00 p.m</div>
      <div className="ex-hotel-motel-resort-inn">
        ex. Hotel, Motel, Resort, Inn, Villa
      </div>
      <div className="confirmation-msg-div3">
        <div className="overlay-div4" />
        <div className="rectangle-div2" />
        <div className="to-ensure-travellers-benefit-f2">
          <p className="to-ensure-travellers2">
            To ensure travellers benefit from the most accurate listing
            information, we screen requests to ensure all content complies with
            policies and formatting requirements. We will notify you when your
            request has been completed.
          </p>
        </div>
        <b className="shop-name-b3">
          <p className="what-is-your">&nbsp;</p>
          <p className="shop-name3"> (shop name) !</p>
        </b>
        <b className="yey-thanks-for-telling-us-abo2">
          <p className="what-is-your">{`Yey, thanks for telling us `}</p>
          <p className="shop-name3">about</p>
        </b>
        <div className="returnbtn-div2" onClick={onReturnBtnContainerClick}>
          <img className="btn-icon5" alt="" src="../btn5.svg" />
          <b className="return-to-dashboard3">Return to Dashboard</b>
        </div>
        <img className="logo-icon19" alt="" src="../logo1@2x.png" />
      </div>
    </div>
  );
};

export default ListAnAccommodation3;
