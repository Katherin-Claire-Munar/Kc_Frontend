import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./ListAResturant1.css";

const ListAResturant1 = () => {
  const navigate = useNavigate();

  const onContinueBtnContainerClick = useCallback(() => {
    navigate("/list-a-resturant2");
  }, [navigate]);

  const onGoBackTextClick = useCallback(() => {
    navigate("/add-place-dashboard");
  }, [navigate]);

  return (
    <div className="list-a-resturant-1">
      <div className="background-div2">
        <img className="image-127-icon" alt="" src="../image-127@2x.png" />
        <img className="image-128-icon" alt="" src="../image-128@2x.png" />
        <img className="image-129-icon" alt="" src="../image-129@2x.png" />
      </div>
      <div className="shop-details-div2">
        <img className="rectangle-icon12" alt="" src="../rectangle10.svg" />
        <b className="how-can-we-find-this-place2">
          How can we find this place?
        </b>
        <b className="name-description2">{`Name & Description`}</b>
        <div className="official-place-name3">Official place name</div>
        <div className="description-div3">Description</div>
        <img className="nameinputbox-icon2" alt="" src="../nameinputbox2.svg" />
        <img className="descinputbox-icon3" alt="" src="../descinputbox3.svg" />
      </div>
      <div className="contact-details-div3">
        <img className="rectangle-icon13" alt="" src="../rectangle11.svg" />
        <b className="contact-information-b2">Contact Information</b>
        <div className="contact-no-optional3">Contact No. (Optional)</div>
        <div className="email-optional-div3">Email (Optional)</div>
        <div className="website-or-facebook-page-url3">
          Website or Facebook Page URL (Optional)
        </div>
        <div className="div3">+63</div>
        <img
          className="contactinputbox-icon3"
          alt=""
          src="../contactinputbox.svg"
        />
        <img
          className="emailinputbox-icon3"
          alt=""
          src="../contactinputbox.svg"
        />
        <img
          className="urlinputbox-icon3"
          alt=""
          src="../contactinputbox.svg"
        />
        <img className="rectangle-icon14" alt="" src="../square.svg" />
      </div>
      <div className="address-details-div2">
        <img className="rectangle-icon15" alt="" src="../rectangle12.svg" />
        <img className="icon3" alt="" src="../3.svg" />
        <b className="address-b2">Address</b>
        <div className="citytownstateprovinceregio-div3">
          City/Town,State/Province/Region
        </div>
        <div className="street-address-div3">Street address</div>
        <img
          className="cityinputbox-icon3"
          alt=""
          src="../contactinputbox.svg"
        />
        <div className="enter-building-number-and-stre3">
          Enter building number and street name
        </div>
        <img
          className="streetinputbox-icon3"
          alt=""
          src="../contactinputbox.svg"
        />
      </div>
      <div className="continue-btn-div4" onClick={onContinueBtnContainerClick}>
        <img className="btn-icon8" alt="" src="../btn8.svg" />
        <b className="continue-b8">Continue</b>
      </div>
      <img className="line-icon3" alt="" src="../line.svg" />
      <img className="footer-icon7" alt="" src="../footer-bar.svg" />
      <b className="go-back13" onClick={onGoBackTextClick}>
        Go Back
      </b>
      <b className="add-a-resturant2">Add a Resturant</b>
      <img className="purple-wave-icon3" alt="" src="../purple-wave3.svg" />
      <div className="taskbar-div12" />
      <div className="login-acc-icon13">
        <div className="accname-div13">{`Bobby `}</div>
        <img
          className="arrow-down-icon12"
          alt=""
          src="../arrow-down-icon@2x.png"
        />
        <img className="accprofile-icon13" alt="" src="../accprofile@2x.png" />
      </div>
      <div className="quest-icon-div13">
        <div className="quest-div13">Quest</div>
        <img className="quest-icon13" alt="" src="../quest-icon@2x.png" />
      </div>
      <div className="logo-div13">
        <img className="logo-icon23" alt="" src="../logo@2x.png" />
        <b className="tourit-b13">TourIt</b>
      </div>
      <div className="search-div12">
        <div className="searchbar-div13" />
        <img className="searchicon13" alt="" src="../searchicon@2x.png" />
      </div>
    </div>
  );
};

export default ListAResturant1;
