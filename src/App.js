import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import BusinessDashboard from "./pages/BusinessDashboard";
import ListAResturant3 from "./pages/ListAResturant3";
import UpdateShop2 from "./pages/UpdateShop2";
import UpdateShop1 from "./pages/UpdateShop1";
import DeactivateShop3 from "./pages/DeactivateShop3";
import DeactivateShop2 from "./pages/DeactivateShop2";
import DeactivateShop1 from "./pages/DeactivateShop1";
import ListAThingToDo3 from "./pages/ListAThingToDo3";
import ListAThingToDo1 from "./pages/ListAThingToDo1";
import ListAThingToDo2 from "./pages/ListAThingToDo2";
import ListAnAccommodation3 from "./pages/ListAnAccommodation3";
import ListAnAccommodation1 from "./pages/ListAnAccommodation1";
import ListAnAccommodation2 from "./pages/ListAnAccommodation2";
import ListAResturant2 from "./pages/ListAResturant2";
import ListAResturant1 from "./pages/ListAResturant1";
import ViewShop from "./pages/ViewShop";
import AddPlaceDashboard from "./pages/AddPlaceDashboard";
import ManageShopDashboard from "./pages/ManageShopDashboard";
import ViewBusiness from "./pages/ViewBusiness";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    //TODO: Update meta titles and descriptions below
    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/list-a-resturant3":
        title = "";
        metaDescription = "";
        break;
      case "/update-shop2":
        title = "";
        metaDescription = "";
        break;
      case "/update-shop-1":
        title = "";
        metaDescription = "";
        break;
      case "/deactivate-shop-3":
        title = "";
        metaDescription = "";
        break;
      case "/deactivate-shop-2":
        title = "";
        metaDescription = "";
        break;
      case "/deactivate-shop-1":
        title = "";
        metaDescription = "";
        break;
      case "/list-a-thing-to-do3":
        title = "";
        metaDescription = "";
        break;
      case "/list-a-thing-to-do1":
        title = "";
        metaDescription = "";
        break;
      case "/list-a-thing-to-do2":
        title = "";
        metaDescription = "";
        break;
      case "/list-an-accommodation3":
        title = "";
        metaDescription = "";
        break;
      case "/list-an-accommodation1":
        title = "";
        metaDescription = "";
        break;
      case "/list-an-accommodation2":
        title = "";
        metaDescription = "";
        break;
      case "/list-a-resturant2":
        title = "";
        metaDescription = "";
        break;
      case "/list-a-resturant1":
        title = "";
        metaDescription = "";
        break;
      case "/view-shop":
        title = "";
        metaDescription = "";
        break;
      case "/add-place-dashboard":
        title = "";
        metaDescription = "";
        break;
      case "/manage-shop-dashboard":
        title = "";
        metaDescription = "";
        break;
      case "/view-business":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<BusinessDashboard />} />

      <Route path="/list-a-resturant3" element={<ListAResturant3 />} />

      <Route path="/update-shop2" element={<UpdateShop2 />} />

      <Route path="/update-shop-1" element={<UpdateShop1 />} />

      <Route path="/deactivate-shop-3" element={<DeactivateShop3 />} />

      <Route path="/deactivate-shop-2" element={<DeactivateShop2 />} />

      <Route path="/deactivate-shop-1" element={<DeactivateShop1 />} />

      <Route path="/list-a-thing-to-do3" element={<ListAThingToDo3 />} />

      <Route path="/list-a-thing-to-do1" element={<ListAThingToDo1 />} />

      <Route path="/list-a-thing-to-do2" element={<ListAThingToDo2 />} />

      <Route
        path="/list-an-accommodation3"
        element={<ListAnAccommodation3 />}
      />

      <Route
        path="/list-an-accommodation1"
        element={<ListAnAccommodation1 />}
      />

      <Route
        path="/list-an-accommodation2"
        element={<ListAnAccommodation2 />}
      />

      <Route path="/list-a-resturant2" element={<ListAResturant2 />} />

      <Route path="/list-a-resturant1" element={<ListAResturant1 />} />

      <Route path="/view-shop" element={<ViewShop />} />

      <Route path="/add-place-dashboard" element={<AddPlaceDashboard />} />

      <Route path="/manage-shop-dashboard" element={<ManageShopDashboard />} />

      <Route path="/view-business" element={<ViewBusiness />} />
    </Routes>
  );
}
export default App;
