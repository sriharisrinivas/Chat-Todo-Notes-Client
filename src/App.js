import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-datepicker/dist/react-datepicker.css";
import Home from './Components/Home/home';
import { Bars } from 'react-loader-spinner';
import { BrowserRouter, Route, Switch, Routes, Navigate } from 'react-router-dom';
import Login from './Components/Login/Login';
import { useSelector } from 'react-redux';
import AlertDismissible from './Components/Alert/AlertMessage';
import CashBook from './Components/CashBook/CashBook';
import Layout from './Components/Layout/Layout';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import AboutPage from './Pages/AboutPage/AboutPage';
import AllTasksPage from './Pages/AllTasksPage/AllTasksPage';
import AddNewTaskPage from './Pages/AddNewTaskPage/AddNewTaskPage';
import GridViewPage from './Pages/GridViewPage/GridViewPage';
import ChatsContainerPage from './Pages/ChatsContainerPage/ChatsContainerPage';
import ChatPage from './Pages/ChatPage/ChatPage';
import NotesPage from './Pages/NotesPage/NotesPage';

const PrivateRoute = ({ children, ...rest }) => {
  const jwtToken = sessionStorage.getItem('token');
  return jwtToken ? children : <Navigate to="/" />;
};

const UserAlrealyLoggedInRoute = ({ children, ...rest }) => {
  const jwtToken = sessionStorage.getItem('token');
  return !jwtToken ? children : <Navigate to="/home" />;
};

function App() {
  const alertMessaage = useSelector(state => state.AlertMessageReducer);
  const loaderState = useSelector(state => state.loaderReducer);
  const darkModeState = useSelector(state => state.darkModeReducer.isDarkMode);


  return (
    <>
      <Theme appearance={darkModeState ? "dark" : "light"}>
        <BrowserRouter>
          {loaderState.loading == true &&
            <div style={{ position: "relative" }}>
              <Bars
                height="100vh"
                width="80"
                color="#f7931e"
                ariaLabel="bars-loading"
                wrapperStyle={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", position: "absolute", zIndex: 9999 }}
                wrapperClass=""
                visible={true}
              />
            </div>
          }

          {/* <Home /> */}
          {/* <Login /> */}
          <div className="alert-container">
            <AlertDismissible {...alertMessaage} />
          </div>
          <Routes>
            <Route exact path="/"
              element={
                <UserAlrealyLoggedInRoute>
                  <Login />
                </UserAlrealyLoggedInRoute>
              }
            />
            <Route exact path="/home"
              element={
                <PrivateRoute>
                  <Layout>
                    <Home />
                  </Layout>
                </PrivateRoute>
              }
            />
            <Route exact path="/addNewTask"
              element={
                <PrivateRoute>
                  <Layout>
                    <AddNewTaskPage />
                  </Layout>
                </PrivateRoute>
              }
            />
            <Route exact path="/myTasks"
              element={
                <PrivateRoute>
                  <Layout>
                    <AllTasksPage />
                  </Layout>
                </PrivateRoute>
              }
            />
            <Route exact path="/about"
              element={
                <PrivateRoute>
                  <Layout>
                    <AboutPage />
                  </Layout>
                </PrivateRoute>
              }
            />
            <Route exact path="/gridView"
              element={
                <PrivateRoute>
                  <Layout>
                    <GridViewPage />
                  </Layout>
                </PrivateRoute>
              }
            />
            <Route exact path="/cashbook"
              element={
                <PrivateRoute>
                  <Layout>
                    <CashBook />
                  </Layout>
                </PrivateRoute>
              }
            />

            <Route exact path="/chat"
              element={
                <PrivateRoute>
                  <Layout>
                    <ChatsContainerPage />
                  </Layout>
                </PrivateRoute>
              }
            />

            <Route exact path="/chat/:id"
              element={
                <PrivateRoute>
                  <Layout>
                    <ChatPage />
                  </Layout>
                </PrivateRoute>
              }
            />

            <Route exact path="/notes"
              element={
                <PrivateRoute>
                  <Layout>
                    <NotesPage />
                  </Layout>
                </PrivateRoute>
              }
            />

          </Routes>

        </BrowserRouter>
      </Theme>
    </>
  );
}

export default App;
