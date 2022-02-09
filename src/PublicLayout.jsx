import { Navigate, Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import NavigationBar from "./components/NavigationBar";

const PublicLayout = () => {
  const isLogin = localStorage.getItem("isLogin");
  return (
    <>
      <header className="mb-2 bg-black py-2">
        <NavigationBar />
      </header>
      <main className="pt-3">
        <Container>
          <div className="row">
            <div className="col-sm-6">
              <h1>Simple App for learn React-router v6</h1>
            </div>
            <div className="col-sm-6">{!isLogin ? <Outlet /> : <Navigate replace to="/" />}</div>
          </div>
        </Container>
      </main>
    </>
  );
};

export default PublicLayout;
