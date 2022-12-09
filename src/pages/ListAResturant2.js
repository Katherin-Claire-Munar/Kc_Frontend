import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./ListAResturant2.css";

const ListAResturant2 = () => {
  const navigate = useNavigate();

  const onContinueBtnContainerClick = useCallback(() => {
    navigate("/list-a-resturant3");
  }, [navigate]);

  const onGoBackTextClick = useCallback(() => {
    navigate("/list-a-resturant1");
  }, [navigate]);

  return (
    <div className="list-a-resturant-2">
      <div className="taskbar-div11" />
      <div className="login-acc-icon12">
        <div className="accname-div12">{`Bobby `}</div>
        <img
          className="arrow-down-icon11"
          alt=""
          src="../arrow-down-icon@2x.png"
        />
        <img className="accprofile-icon12" alt="" src="../accprofile@2x.png" />
      </div>
      <div className="quest-icon-div12">
        <div className="quest-div12">Quest</div>
        <img className="quest-icon12" alt="" src="../quest-icon@2x.png" />
      </div>
      <div className="logo-div12">
        <img className="logo-icon22" alt="" src="../logo@2x.png" />
        <b className="tourit-b12">TourIt</b>
      </div>
      <div className="search-div11">
        <div className="searchbar-div12" />
        <img className="searchicon12" alt="" src="../searchicon@2x.png" />
      </div>
      <img className="footer-icon6" alt="" src="../footer.svg" />
      <img className="image-77-icon1" alt="" src="../image-77@2x.png" />
      <b className="add-a-resturant1">Add a Resturant</b>
      <b className="what-is-the-category-that-best3">
        <p className="what-is-the3">
          What is the category that best fits this place?
        </p>
      </b>
      <b className="what-hours-is-this-place-open3">
        <p className="what-is-the3">What hours is this place open?</p>
      </b>
      <img className="timeinputbox-icon5" alt="" src="../timeinputbox.svg" />
      <img
        className="categoryinputbox-icon5"
        alt=""
        src="../timeinputbox.svg"
      />
      <div className="ex-1000-am-600-pm5">ex. 10:00 a.m - 6:00 p.m</div>
      <div className="ex-restaurant-bar-bakeries1">
        ex. Restaurant, Bar, Bakeries, Snack Bar, Coffee Shop
      </div>
      <div className="continuebtn-div3" onClick={onContinueBtnContainerClick}>
        <img className="rectangle-icon11" alt="" src="../rectangle-131.svg" />
        <b className="continue-b7">Continue</b>
      </div>
      <b className="go-back12" onClick={onGoBackTextClick}>
        Go Back
      </b>
    </div>
  );
};

export default ListAResturant2;
