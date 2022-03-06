//Libraries
import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

//Pages with routes
import MainPage, { routeMain as routeMainPage } from "pages/MainPage";
import Contacts, { routeMain as routeContacts } from "pages/About";
import MovieDetail, { routeMain as routeNewsDetail } from "pages/MovieDetail";
import MovieListPage, { routeMain as routeNewsList } from "pages/CategoryListPage";
import Search, { routeMain as routeSearch } from "pages/Search";

// Components
import Footer from "components/Footer";
import Header from "components/Header";

//Styles
import "./styles.scss";

const AppContent: React.FC = (): JSX.Element => {
  return (
    <div className="main-wrapper">
      <Header />
      <main>
        <Switch>
          <Route exact path={routeMainPage()} component={MainPage} />
          <Route exact path={routeContacts()} component={Contacts} />
          <Route exact path={routeNewsDetail()} component={MovieDetail} />
          <Route exact path={routeNewsList()} component={MovieListPage} />
          <Route exact path={routeSearch()} component={Search} />
          <Redirect
            to={{
              pathname: routeMainPage(),
            }}
          />
        </Switch>
      </main>
      <Footer />
    </div>
  );
};

export default AppContent;
