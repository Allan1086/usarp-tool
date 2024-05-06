import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import { Home } from "./pages/Home";
import Register from "./pages/Register";
import { Layout } from "./components/Layout";
import { ConfigurationsLayout } from "./components/ConfigurationsLayout";
import { Profile } from "./pages/Profile";
export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="cadastro" element={<Register />} />
        <Route path="/" element={<Layout />}>
          <Route index path="home" element={<Home />} />
          <Route
            path="project"
            element={
              <center>
                <h1>
                  Em manutenção project <br />
                  <img src="https://i.redd.it/2vow1go9nrk31.gif" />
                </h1>
              </center>
            }
          />
          <Route
            path="brainstorming"
            element={
              <center>
                <h1>
                  Em manutenção brainstorming <br />
                  <img src="https://i.redd.it/2vow1go9nrk31.gif" />
                </h1>
              </center>
            }
          />
        </Route>
        <Route path="/configurations" element={<ConfigurationsLayout />}>
          <Route index path="profile" element={<Profile />} />
          <Route index path="privacity" element={<p>Em construção</p>} />
        </Route>
        <Route
          path="*"
          element={
            <center>
              <h1>
                Em manutenção <br />
                🤡
              </h1>
            </center>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
