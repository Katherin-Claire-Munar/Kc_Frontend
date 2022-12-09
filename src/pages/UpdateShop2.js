import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./UpdateShop2.css";

const UpdateShop2 = () => {
  const navigate = useNavigate();

  const onSaveButtonContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onGoBackTextClick = useCallback(() => {
    navigate("/update-shop-1");
  }, [navigate]);

  return (
    <div className="update-shop-2-div">
      <img className="wavy-icon" alt="" src="../wavy.svg" />
      <img
        className="background-pic-icon"
        alt=""
        src="../background-pic@2x.png"
      />
      <div className="shop-details-div">
        <img
          className="shop-container-icon"
          alt=""
          src="../shop-container.svg"
        />
        <b className="shop-name-description">{`Shop Name & Description`}</b>
        <div className="official-place-name">Official place name</div>
        <div className="description-div">Description</div>
        <img className="nameinputbox-icon" alt="" src="../nameinputbox.svg" />
        <img className="descinputbox-icon" alt="" src="../descinputbox.svg" />
      </div>
      <div className="contact-details-div">
        <img
          className="contact-container-icon"
          alt=""
          src="../contact-container.svg"
        />
        <b className="contact-b">Contact</b>
        <div className="contact-no-optional">Contact No. (Optional)</div>
        <div className="email-optional-div">Email (Optional)</div>
        <div className="website-or-facebook-page-url">
          Website or Facebook Page URL (Optional)
        </div>
        <div className="div">+63</div>
        <img
          className="contactinputbox-icon"
          alt=""
          src="../contactinputbox.svg"
        />
        <img
          className="emailinputbox-icon"
          alt=""
          src="../contactinputbox.svg"
        />
        <img className="urlinputbox-icon" alt="" src="../contactinputbox.svg" />
        <img className="square-icon" alt="" src="../square.svg" />
      </div>
      <div className="location-details-div">
        <img
          className="location-container-icon"
          alt=""
          src="../location-container.svg"
        />
        <img className="icon" alt="" src="../.svg" />
        <div className="citytownstateprovinceregio-div">
          City/Town,State/Province/Region
        </div>
        <div className="street-address-div">Street address</div>
        <img
          className="cityinputbox-icon"
          alt=""
          src="../contactinputbox.svg"
        />
        <div className="enter-building-number-and-stre">
          Enter building number and street name
        </div>
        <img
          className="streetinputbox-icon"
          alt=""
          src="../contactinputbox.svg"
        />
        <b className="location-b">Location</b>
      </div>
      <div className="save-button-div" onClick={onSaveButtonContainerClick}>
        <img className="button-icon" alt="" src="../button.svg" />
        <b className="save-changes-b">Save Changes</b>
      </div>
      <img className="line-icon" alt="" src="../line.svg" />
      <img className="footer-bar-icon" alt="" src="../footer-bar.svg" />
      <b className="go-back1" onClick={onGoBackTextClick}>
        Go Back
      </b>
      <b className="update-your-shop">Update Your Shop</b>
      <div className="taskbar-outline-div" />
      <div className="login-acc-icon1">
        <div className="accname-div1">{`Bobby `}</div>
        <img
          className="arrowdown-icon"
          alt=""
          src="../arrow-down-icon@2x.png"
        />
        <img className="accprofile-icon1" alt="" src="../accprofile@2x.png" />
      </div>
      <div className="quest-icon-div1">
        <div className="quest-div1">Quest</div>
        <img className="quest-icon1" alt="" src="../quest-icon@2x.png" />
      </div>
      <div className="logo-div1">
        <img className="logo-icon2" alt="" src="../logo@2x.png" />
        <b className="tourit-b1">TourIt</b>
      </div>
      <div className="search-bar-div">
        <div className="searchbar-div1" />
        <img className="searchicon1" alt="" src="../searchicon@2x.png" />
      </div>
      <img className="wavy-icon1" alt="" src="../wavy1.svg" />
      <img className="purple-wave-icon" alt="" src="../purple-wave.svg" />
    </div>
  );
};

export default UpdateShop2;
