import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./ListAnAccommodation1.css";

const ListAnAccommodation1 = () => {
  const navigate = useNavigate();

  const onContinueBtnContainerClick = useCallback(() => {
    navigate("/list-an-accommodation2");
  }, [navigate]);

  const onGoBackTextClick = useCallback(() => {
    navigate("/add-place-dashboard");
  }, [navigate]);

  return (
    <div className="list-an-accommodation-1">
      <div className="background-div1">
        <img className="image-124-icon" alt="" src="../image-124@2x.png" />
        <img className="image-125-icon" alt="" src="../image-125@2x.png" />
        <img className="image-126-icon" alt="" src="../image-126@2x.png" />
      </div>
      <div className="shop-details-div1">
        <img className="rectangle-icon7" alt="" src="../rectangle6.svg" />
        <b className="how-can-we-find-this-place1">
          How can we find this place?
        </b>
        <b className="name-description1">{`Name & Description`}</b>
        <div className="official-place-name2">Official place name</div>
        <div className="description-div2">Description</div>
        <img
          className="nameinputbox-icon1"
          alt=""
          src="../shopnameinputbox.svg"
        />
        <img className="descinputbox-icon2" alt="" src="../descinputbox1.svg" />
      </div>
      <div className="contact-details-div2">
        <img className="rectangle-icon8" alt="" src="../rectangle7.svg" />
        <b className="contact-information-b1">Contact Information</b>
        <div className="contact-no-optional2">Contact No. (Optional)</div>
        <div className="email-optional-div2">Email (Optional)</div>
        <div className="website-or-facebook-page-url2">
          Website or Facebook Page URL (Optional)
        </div>
        <div className="div2">+63</div>
        <img
          className="contactinputbox-icon2"
          alt=""
          src="../contactinputbox.svg"
        />
        <img
          className="emailinputbox-icon2"
          alt=""
          src="../contactinputbox.svg"
        />
        <img
          className="urlinputbox-icon2"
          alt=""
          src="../contactinputbox.svg"
        />
        <img className="rectangle-icon9" alt="" src="../square.svg" />
      </div>
      <div className="address-details-div1">
        <img className="rectangle-icon10" alt="" src="../rectangle9.svg" />
        <img className="icon2" alt="" src="../1.svg" />
        <b className="address-b1">Address</b>
        <div className="citytownstateprovinceregio-div2">
          City/Town,State/Province/Region
        </div>
        <div className="street-address-div2">Street address</div>
        <img
          className="cityinputbox-icon2"
          alt=""
          src="../contactinputbox.svg"
        />
        <div className="enter-building-number-and-stre2">
          Enter building number and street name
        </div>
        <img
          className="streetinputbox-icon2"
          alt=""
          src="../contactinputbox.svg"
        />
      </div>
      <div className="continue-btn-div2" onClick={onContinueBtnContainerClick}>
        <img className="btn-icon6" alt="" src="../btn6.svg" />
        <b className="continue-b5">Continue</b>
      </div>
      <img className="line-icon2" alt="" src="../line.svg" />
      <img className="footer-icon4" alt="" src="../footer-bar.svg" />
      <b className="go-back10" onClick={onGoBackTextClick}>
        Go Back
      </b>
      <img className="purple-wave-icon2" alt="" src="../purple-wave2.svg" />
      <div className="taskbar-div9" />
      <div className="login-acc-icon10">
        <div className="accname-div10">{`Bobby `}</div>
        <img
          className="arrow-down-icon9"
          alt=""
          src="../arrow-down-icon@2x.png"
        />
        <img className="accprofile-icon10" alt="" src="../accprofile@2x.png" />
      </div>
      <div className="quest-icon-div10">
        <div className="quest-div10">Quest</div>
        <img className="quest-icon10" alt="" src="../quest-icon@2x.png" />
      </div>
      <div className="logo-div10">
        <img className="logo-icon20" alt="" src="../logo@2x.png" />
        <b className="tourit-b10">TourIt</b>
      </div>
      <div className="search-div9">
        <div className="searchbar-div10" />
        <img className="searchicon10" alt="" src="../searchicon@2x.png" />
      </div>
      <b className="add-an-accommodation1">Add an Accommodation</b>
    </div>
  );
};

export default ListAnAccommodation1;
