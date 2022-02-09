import React from "react";
import { Route, Routes } from "react-router-dom";
import PublicLayout from "./PublicLayout";
import PrivateLayout from "./PrivateLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import TimeLine from "./pages/TimeLine";
import ProfilePage from "./pages/ProfilePage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route element={<PrivateLayout />}>
          <Route path="/" element={<TimeLine />} />
          <Route path="/profile/:id" element={<ProfilePage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
