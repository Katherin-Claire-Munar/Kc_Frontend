import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./ListAThingToDo1.css";

const ListAThingToDo1 = () => {
  const navigate = useNavigate();

  const onContinueBtnContainerClick = useCallback(() => {
    navigate("/list-a-thing-to-do2");
  }, [navigate]);

  const onGoBackTextClick = useCallback(() => {
    navigate("/add-place-dashboard");
  }, [navigate]);

  return (
    <div className="list-a-thing-to-do-1">
      <div className="background-div">
        <img className="image-85-icon" alt="" src="../image-85@2x.png" />
        <img className="image-84-icon" alt="" src="../image-84@2x.png" />
        <img className="image-86-icon" alt="" src="../image-86@2x.png" />
        <img className="image-123-icon" alt="" src="../image-123@2x.png" />
      </div>
      <div className="shop-name2">
        <img className="rectangle-icon3" alt="" src="../rectangle2.svg" />
        <b className="how-can-we-find-this-place">
          How can we find this place?
        </b>
        <b className="name-description">{`Name & Description`}</b>
        <div className="official-place-name1">Official place name</div>
        <div className="description-div1">Description</div>
        <img
          className="shopnameinputbox-icon"
          alt=""
          src="../shopnameinputbox.svg"
        />
        <img className="descinputbox-icon1" alt="" src="../descinputbox1.svg" />
      </div>
      <div className="contact-details-div1">
        <img className="rectangle-icon4" alt="" src="../rectangle3.svg" />
        <b className="contact-information-b">Contact Information</b>
        <div className="contact-no-optional1">Contact No. (Optional)</div>
        <div className="email-optional-div1">Email (Optional)</div>
        <div className="website-or-facebook-page-url1">
          Website or Facebook Page URL (Optional)
        </div>
        <div className="div1">+63</div>
        <img
          className="contactinputbox-icon1"
          alt=""
          src="../contactinputbox.svg"
        />
        <img
          className="emailinputbox-icon1"
          alt=""
          src="../contactinputbox.svg"
        />
        <img
          className="urlinputbox-icon1"
          alt=""
          src="../contactinputbox.svg"
        />
        <img className="rectangle-icon5" alt="" src="../square.svg" />
      </div>
      <div className="address-details-div">
        <img className="rectangle-icon6" alt="" src="../rectangle5.svg" />
        <img className="icon1" alt="" src="../1.svg" />
        <b className="address-b">Address</b>
        <div className="citytownstateprovinceregio-div1">
          City/Town,State/Province/Region
        </div>
        <div className="street-address-div1">Street address</div>
        <img
          className="cityinputbox-icon1"
          alt=""
          src="../contactinputbox.svg"
        />
        <div className="enter-building-number-and-stre1">
          Enter building number and street name
        </div>
        <img
          className="streetinputbox-icon1"
          alt=""
          src="../contactinputbox.svg"
        />
      </div>
      <div className="continuebtn-div1" onClick={onContinueBtnContainerClick}>
        <img className="button-icon5" alt="" src="../button5.svg" />
        <b className="continue-b2">Continue</b>
      </div>
      <img className="line-icon1" alt="" src="../line.svg" />
      <img className="footer-icon1" alt="" src="../footer-bar.svg" />
      <b className="go-back7" onClick={onGoBackTextClick}>
        Go Back
      </b>
      <img className="purple-wave-icon1" alt="" src="../purple-wave1.svg" />
      <div className="taskbar-div6" />
      <div className="login-acc-icon7">
        <div className="accname-div7">{`Bobby `}</div>
        <img
          className="arrow-down-icon6"
          alt=""
          src="../arrow-down-icon@2x.png"
        />
        <img className="accprofile-icon7" alt="" src="../accprofile@2x.png" />
      </div>
      <div className="quest-icon-div7">
        <div className="quest-div7">Quest</div>
        <img className="quest-icon7" alt="" src="../quest-icon@2x.png" />
      </div>
      <div className="logo-div7">
        <img className="logo-icon16" alt="" src="../logo@2x.png" />
        <b className="tourit-b7">TourIt</b>
      </div>
      <div className="search-div6">
        <div className="searchbar-div7" />
        <img className="searchicon7" alt="" src="../searchicon@2x.png" />
      </div>
      <b className="add-a-thing-to-do1">Add a Thing to Do</b>
    </div>
  );
};

export default ListAThingToDo1;
