import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "./Sections/component/Header/Header.js";
import Footer from "./Sections/component/Footer/Footer.js";
import GridContainer from "./Sections/component/Grid/GridContainer.js";
import GridItem from "./Sections/component/Grid/GridItem.js";
import Button from "./Sections/component/CustomButtons/Button.js";
import HeaderLinks from "./Sections/component/Header/HeaderLinks.js";
import Parallax from "./Sections/component/Parallax/Parallax.js";

import styles from './Sections/splashStyles';

// Sections for this page
import ProductSection from "./Sections/ProductSection.js";
import TeamSection from "./Sections/TeamSection.js";
import WorkSection from "./Sections/WorkSection.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function Splash(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Best Life Living"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />g
      <Parallax image={require("./Sections/bLLSplash.png")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Your Best Life starts here.</h1>
              <h4>
                Totally anonymous support community and virtual assistant
                geared toward people with invisible mental illness. Start living your best life today
              </h4>
              {/* <br />
              <Button
                color="danger"
                size="lg"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-play" />
                Watch video
              </Button> */}
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ProductSection />
          <TeamSection />
          <WorkSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
