import React, { Component } from "react";
import { connect, Provider } from "react-redux";
import { removeLoader } from "./redux/services/actions/loaderActions";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import store from "./redux/store";
import { SnackbarProvider } from "notistack";
import Backdrop from "@mui/material/Backdrop";
import { CircularProgress } from "@mui/material";
import routes from "./routes";
import "./App.css";

class ReduxSetup extends Component {
  render() {
    return (
      <Provider store={store}>
        <SnackbarProvider
          preventDuplicate
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          maxSnack={3}
        >
          {this.props.children}
        </SnackbarProvider>
      </Provider>
    );
  }
}

function RouterSetup(props) {
  return (
    <>
      <Backdrop
        sx={{
          color: "#fff",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
        open={props.loading.isLoading}
        onClick={props.removeLoader}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      {useRoutes(routes)}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
  };
};
const RouterUpgrade = connect(mapStateToProps, { removeLoader })(RouterSetup);

class App extends Component {
  render() {
    return (
      <div className="bloom-boutique">
        <ReduxSetup>
          <Router>
            <RouterUpgrade />
          </Router>
        </ReduxSetup>
      </div>
    );
  }
}

export default App;
