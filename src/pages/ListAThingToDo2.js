import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./ListAThingToDo2.css";

const ListAThingToDo2 = () => {
  const navigate = useNavigate();

  const onContinueBtnContainerClick = useCallback(() => {
    navigate("/list-a-thing-to-do3");
  }, [navigate]);

  const onGoBackTextClick = useCallback(() => {
    navigate("/list-a-thing-to-do1");
  }, [navigate]);

  return (
    <div className="list-a-thing-to-do-2">
      <div className="taskbar-div7" />
      <div className="login-acc-icon8">
        <div className="accname-div8">{`Bobby `}</div>
        <img
          className="arrow-down-icon7"
          alt=""
          src="../arrow-down-icon@2x.png"
        />
        <img className="accprofile-icon8" alt="" src="../accprofile@2x.png" />
      </div>
      <div className="quest-icon-div8">
        <div className="quest-div8">Quest</div>
        <img className="quest-icon8" alt="" src="../quest-icon@2x.png" />
      </div>
      <div className="logo-div8">
        <img className="logo-icon17" alt="" src="../logo@2x.png" />
        <b className="tourit-b8">TourIt</b>
      </div>
      <div className="search-div7">
        <div className="searchbar-div8" />
        <img className="searchicon8" alt="" src="../searchicon@2x.png" />
      </div>
      <img className="footer-icon2" alt="" src="../vector.svg" />
      <div className="continue-btn-div1" onClick={onContinueBtnContainerClick}>
        <img className="btn-icon3" alt="" src="../btn3.svg" />
        <b className="continue-b3">Continue</b>
      </div>
      <b className="go-back8" onClick={onGoBackTextClick}>
        Go Back
      </b>
      <img className="image-95-icon1" alt="" src="../image-95@2x.png" />
      <b className="add-a-thing-to-do2">Add a Thing to Do</b>
      <b className="how-should-we-categorise-it1">
        <p className="how-should-we1">How should we categorise it?</p>
      </b>
      <b className="what-hours-is-this-place-open2">
        <p className="how-should-we1">What hours is this place open?</p>
      </b>
      <img className="timeinputbox-icon2" alt="" src="../timeinputbox.svg" />
      <img
        className="categoryinputbox-icon2"
        alt=""
        src="../timeinputbox.svg"
      />
      <div className="ex-1000-am-600-pm2">ex. 10:00 a.m - 6:00 p.m</div>
      <div className="ex-arenas-amusement-park-ec1">
        ex. Arenas, Amusement park, Ecopark, etc.
      </div>
    </div>
  );
};

export default ListAThingToDo2;
