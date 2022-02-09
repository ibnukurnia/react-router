import { Navigate, Outlet } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";

const PrivateLayout = () => {
  const isLogin = localStorage.getItem("isLogin");
  return (
    <div>
      <header className="py-3 bg-dark">
        <NavigationBar />
      </header>
      <main className="mt-5"> {isLogin ? <Outlet /> : <Navigate replace to="/login" />}</main>
    </div>
  );
};

export default PrivateLayout;
