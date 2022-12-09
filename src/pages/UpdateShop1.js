import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./UpdateShop1.css";

const UpdateShop1 = () => {
  const navigate = useNavigate();

  const onGoBackTextClick = useCallback(() => {
    navigate("/manage-shop-dashboard");
  }, [navigate]);

  const onShopBtn2ContainerClick = useCallback(() => {
    navigate("/update-shop2");
  }, [navigate]);

  const onShopBtn1ContainerClick = useCallback(() => {
    navigate("/update-shop2");
  }, [navigate]);

  return (
    <div className="update-shop-1">
      <img className="background-icon" alt="" src="../background@2x.png" />
      <div className="taskbar-div1" />
      <div className="login-acc-icon2">
        <div className="accname-div2">{`Bobby `}</div>
        <img
          className="arrow-down-icon1"
          alt=""
          src="../arrow-down-icon@2x.png"
        />
        <img className="accprofile-icon2" alt="" src="../accprofile@2x.png" />
      </div>
      <div className="quest-icon-div2">
        <div className="quest-div2">Quest</div>
        <img className="quest-icon2" alt="" src="../quest-icon@2x.png" />
      </div>
      <div className="logo-div2">
        <img className="logo-icon3" alt="" src="../logo@2x.png" />
        <b className="tourit-b2">TourIt</b>
      </div>
      <div className="search-div1">
        <div className="searchbar-div2" />
        <img className="searchicon2" alt="" src="../searchicon@2x.png" />
      </div>
      <div className="shop-container-div">
        <div className="purple-rectangle-div" />
        <div className="white-rectangle-div" />
        <b className="go-back2" onClick={onGoBackTextClick}>
          Go Back
        </b>
        <b className="select-shop-to-editupdate">Select Shop to Edit/Update</b>
      </div>
      <div className="shopbtn2-div" onClick={onShopBtn2ContainerClick}>
        <img className="button-icon1" alt="" src="../button1.svg" />
        <div className="shop-name-div">Cutea Bubble Milktea</div>
        <img className="logo-icon4" alt="" src="../logo4@2x.png" />
      </div>
      <div className="shopbtn1-div" onClick={onShopBtn1ContainerClick}>
        <img className="button-icon2" alt="" src="../button2.svg" />
        <img className="logo-icon5" alt="" src="../logo5@2x.png" />
        <div className="shop-name-div1">Net Mangrove Garden Ecopark</div>
      </div>
    </div>
  );
};

export default UpdateShop1;
