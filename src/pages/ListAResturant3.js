import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./ListAResturant3.css";

const ListAResturant3 = () => {
  const navigate = useNavigate();

  const onGoBackTextClick = useCallback(() => {
    navigate("/list-a-resturant1");
  }, [navigate]);

  const onReturnBtnContainerClick = useCallback(() => {
    navigate("/add-place-dashboard");
  }, [navigate]);

  return (
    <div className="list-a-resturant-3">
      <div className="taskbar-div" />
      <div className="login-acc-icon">
        <div className="accname-div">{`Bobby `}</div>
        <img
          className="arrow-down-icon"
          alt=""
          src="../arrow-down-icon@2x.png"
        />
        <img className="accprofile-icon" alt="" src="../accprofile@2x.png" />
      </div>
      <div className="quest-icon-div">
        <div className="quest-div">Quest</div>
        <img className="quest-icon" alt="" src="../quest-icon@2x.png" />
      </div>
      <div className="logo-div">
        <img className="logo-icon" alt="" src="../logo@2x.png" />
        <b className="tourit-b">TourIt</b>
      </div>
      <div className="search-div">
        <div className="searchbar-div" />
        <img className="searchicon" alt="" src="../searchicon@2x.png" />
      </div>
      <img className="footer-icon" alt="" src="../footer.svg" />
      <img className="image-77-icon" alt="" src="../image-77@2x.png" />
      <b className="add-a-resturant">Add a Resturant</b>
      <b className="what-is-the-category-that-best">
        <p className="what-is-the">
          What is the category that best fits this place?
        </p>
      </b>
      <b className="what-hours-is-this-place-open">
        <p className="what-is-the">What hours is this place open?</p>
      </b>
      <img className="timeinputbox-icon" alt="" src="../timeinputbox.svg" />
      <img className="categoryinputbox-icon" alt="" src="../timeinputbox.svg" />
      <div className="ex-1000-am-600-pm">ex. 10:00 a.m - 6:00 p.m</div>
      <div className="ex-restaurant-bar-bakeries">
        ex. Restaurant, Bar, Bakeries, Snack Bar, Coffee Shop
      </div>
      <div className="continuebtn-div">
        <img className="rectangle-icon" alt="" src="../rectangle-13.svg" />
        <b className="continue-b">Continue</b>
      </div>
      <b className="go-back" onClick={onGoBackTextClick}>
        Go Back
      </b>
      <div className="confirmation-msg-div">
        <div className="overlay-div" />
        <div className="rectangle-div" />
        <div className="to-ensure-travellers-benefit-f">
          <p className="to-ensure-travellers">
            To ensure travellers benefit from the most accurate listing
            information, we screen requests to ensure all content complies with
            policies and formatting requirements. We will notify you when your
            request has been completed.
          </p>
        </div>
        <b className="shop-name-b">
          <p className="what-is-the">&nbsp;</p>
          <p className="shop-name"> (shop name) !</p>
        </b>
        <b className="yey-thanks-for-telling-us-abo">
          <p className="what-is-the">{`Yey, thanks for telling us `}</p>
          <p className="shop-name">about</p>
        </b>
        <div className="returnbtn-div" onClick={onReturnBtnContainerClick}>
          <img className="btn-icon" alt="" src="../btn.svg" />
          <b className="return-to-dashboard">Return to Dashboard</b>
        </div>
        <img className="logo-icon1" alt="" src="../logo1@2x.png" />
      </div>
    </div>
  );
};

export default ListAResturant3;
