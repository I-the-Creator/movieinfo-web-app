import React from "react";

// assets
import ABOUT from "assets/img/women-Emma.png";
//Styles
import "./styles.scss";

// import route to page
import routeMain from "./routes";

const About: React.FC = (): JSX.Element => (
  <section className="about-page">
    <div className="about-wrapper">
      <img className="about-image" src={ABOUT} alt="women" />
      <div className="about-text-wrapper">
        <h3 className="about-title">MOVIESinfo</h3>
        <p className="about-description">
          MOVIESinfo - укрепление и развитие внутренней структуры напрямую зависит от
          укрепления моральных ценностей. Кстати, стремящиеся вытеснить
          традиционное производство, нанотехнологии призваны к ответу. И нет
          сомнений, что элементы политического процесса неоднозначны и будут
          своевременно верифицированы. Равным образом, базовый вектор развития
          позволяет оценить значение новых предложений.
        </p>
      </div>
    </div>
  </section>
);
export { routeMain };

export default About;
