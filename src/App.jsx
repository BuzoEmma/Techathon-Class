import HighComp1 from "./HOC/HighComp1";
import HighComp2 from "./HOC/HighComp2";
import HocComp from "./HOC/HocComp";
import UseReducerComp from "./UseReducerComp";
import FormValidation from "./FormValidation/FormValidation";
import HookForm from "./FormValidation/HookForm";
import UserProfile from "./UserProfile";
import ReactContext from "./ReactContext/ReactContext.jsx";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./React-Router-Dom/Home.jsx";
import About from "./React-Router-Dom/About.jsx";
import Contact from "./React-Router-Dom/Contact.jsx";
import Nav from "./React-Router-Dom/Nav.jsx";
import Profile from "./React-Router-Dom/Profile.jsx";
import Login from "./React-Router-Dom/Login.jsx";
import LogOut from "./React-Router-Dom/LogOut.jsx";
import ErroePage from "./React-Router-Dom/ErroePage.jsx";
import UserFetcherProduct from "./React-Router-Dom/UserFetcherProduct.jsx";
import UserFetcher, { userInfor } from "./React-Router-Dom/UserFetcher.jsx";
import UserFetcherDetails, {
  userInforDetails,
} from "./React-Router-Dom/UserFetcherDetails.jsx";
import UserFetcherError from "./React-Router-Dom/USerFetcherError.jsx";
import ProtectedRouteAuth from "./React-Router-Dom/ProtectedRouteAuth.jsx";
import RequiredAuth from "./React-Router-Dom/RequiredAuth.jsx";

const App = () => {
  const Root = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Nav />}>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />

        {/* Profle comp. */}
        <Route
          path="profile"
          element={
            <RequiredAuth>
              <Profile />
            </RequiredAuth>
          }
        />
        <Route path="login" element={<Login />} />

        {/* How to fetch data */}
        <Route
          path="userFetcherProduct"
          errorElement={<UserFetcherError />}
          element={<UserFetcherProduct />}
        >
          <Route index element={<UserFetcher />} loader={userInfor} />
          <Route
            path=":id"
            element={<UserFetcherDetails />}
            loader={userInforDetails}
          />
        </Route>

        <Route path="*" element={<ErroePage />} />
      </Route>
    )
  );

  return (
    <>
      <ProtectedRouteAuth>
        <RouterProvider router={Root} />
      </ProtectedRouteAuth>
    </>
  );
};

export default App;
