import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./ViewBusiness.css";

const ViewBusiness = () => {
  const navigate = useNavigate();

  const onGoBackTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onShop2ContainerClick = useCallback(() => {
    navigate("/view-shop");
  }, [navigate]);

  return (
    <div className="view-business-div">
      <div className="taskbar-div16" />
      <img className="background-icon2" alt="" src="../background2@2x.png" />
      <div className="login-acc-icon17">
        <div className="accname-div17">{`Bobby `}</div>
        <img
          className="arrow-down-icon16"
          alt=""
          src="../arrow-down-icon@2x.png"
        />
        <img className="accprofile-icon17" alt="" src="../accprofile@2x.png" />
      </div>
      <div className="quest-icon-div17">
        <div className="quest-div17">Quest</div>
        <img className="quest-icon17" alt="" src="../quest-icon@2x.png" />
      </div>
      <div className="logo-div17">
        <img className="logo-icon28" alt="" src="../logo@2x.png" />
        <b className="tourit-b17">TourIt</b>
      </div>
      <div className="search-div16">
        <div className="searchbar-div17" />
        <img className="searchicon17" alt="" src="../searchicon@2x.png" />
      </div>
      <div className="shop-container-div4">
        <div className="purple-rectangle-div4" />
        <div className="white-rectangle-div5" />
        <b className="your-shops-b">Your Shops</b>
        <b className="go-back17" onClick={onGoBackTextClick}>
          Go Back
        </b>
      </div>
      <div className="shop2-div" onClick={onShop2ContainerClick}>
        <img className="btn-icon15" alt="" src="../btn15.svg" />
        <div className="shop-name-div7">Cutea Bubble Milktea</div>
        <img className="logo-icon29" alt="" src="../logo4@2x.png" />
      </div>
      <div className="shop1-div">
        <img className="btn-icon16" alt="" src="../button2.svg" />
        <img className="logo-icon30" alt="" src="../logo5@2x.png" />
        <div className="shop-name-div8">Net Mangrove Garden Ecopark</div>
      </div>
    </div>
  );
};

export default ViewBusiness;
