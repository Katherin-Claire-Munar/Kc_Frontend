import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./ListAThingToDo3.css";

const ListAThingToDo3 = () => {
  const navigate = useNavigate();

  const onReturnBtnContainerClick = useCallback(() => {
    navigate("/add-place-dashboard");
  }, [navigate]);

  return (
    <div className="list-a-thing-to-do-3">
      <div className="taskbar-div5" />
      <div className="login-acc-icon6">
        <div className="accname-div6">{`Bobby `}</div>
        <img
          className="arrow-down-icon5"
          alt=""
          src="../arrow-down-icon@2x.png"
        />
        <img className="accprofile-icon6" alt="" src="../accprofile@2x.png" />
      </div>
      <div className="quest-icon-div6">
        <div className="quest-div6">Quest</div>
        <img className="quest-icon6" alt="" src="../quest-icon@2x.png" />
      </div>
      <div className="logo-div6">
        <img className="logo-icon14" alt="" src="../logo@2x.png" />
        <b className="tourit-b6">TourIt</b>
      </div>
      <div className="search-div5">
        <div className="searchbar-div6" />
        <img className="searchicon6" alt="" src="../searchicon@2x.png" />
      </div>
      <img className="vector-icon" alt="" src="../vector.svg" />
      <div className="continue-btn-div">
        <img className="btn-icon1" alt="" src="../btn1.svg" />
        <b className="continue-b1">Continue</b>
      </div>
      <b className="go-back6">Go Back</b>
      <img className="image-95-icon" alt="" src="../image-95@2x.png" />
      <b className="add-a-thing-to-do">Add a Thing to Do</b>
      <b className="how-should-we-categorise-it">
        <p className="how-should-we">How should we categorise it?</p>
      </b>
      <b className="what-hours-is-this-place-open1">
        <p className="how-should-we">What hours is this place open?</p>
      </b>
      <img className="timeinputbox-icon1" alt="" src="../timeinputbox.svg" />
      <img
        className="categoryinputbox-icon1"
        alt=""
        src="../timeinputbox.svg"
      />
      <div className="ex-1000-am-600-pm1">ex. 10:00 a.m - 6:00 p.m</div>
      <div className="ex-arenas-amusement-park-ec">
        ex. Arenas, Amusement park, Ecopark, etc.
      </div>
      <div className="confirmation-msg-div2">
        <div className="overlay-div3" />
        <div className="rectangle-div1" />
        <div className="to-ensure-travellers-benefit-f1">
          <p className="to-ensure-travellers1">
            To ensure travellers benefit from the most accurate listing
            information, we screen requests to ensure all content complies with
            policies and formatting requirements. We will notify you when your
            request has been completed.
          </p>
        </div>
        <b className="shop-name-b2">
          <p className="how-should-we">&nbsp;</p>
          <p className="shop-name1"> (shop name) !</p>
        </b>
        <b className="yey-thanks-for-telling-us-abo1">
          <p className="how-should-we">{`Yey, thanks for telling us `}</p>
          <p className="shop-name1">about</p>
        </b>
        <div className="returnbtn-div1" onClick={onReturnBtnContainerClick}>
          <img className="btn-icon2" alt="" src="../btn2.svg" />
          <b className="return-to-dashboard2">Return to Dashboard</b>
        </div>
        <img className="logo-icon15" alt="" src="../logo1@2x.png" />
      </div>
    </div>
  );
};

export default ListAThingToDo3;
