import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "./component/Grid/GridContainer.js";
import GridItem from "./component/Grid/GridItem.js";
import InfoArea from "./component/InfoArea/InfoArea.js";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import GroupIcon from '@material-ui/icons/Group';
import AssistantIcon from '@material-ui/icons/Assistant';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';

import styles from "./ProductStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Let{"'"}s start living!</h2>
          <h5 className={classes.description}>
            This about taking control of your life. You are about to embark on a journey...
            an adventure. With this at the tip of your fingertips you can start living your life to the
            fullest.

          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="User Community"
              description="Have a user community of people who have the same kind of invisible mental illness as you to use as a support structure to reach out to each other"
              icon={GroupIcon}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Total Anonymity"
              description="Sign up with a username only to be totally anonymous or fill out more personal information which is completely optional"
              icon={AccountCircleIcon}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Virtual Assistant"
              description="Don't have the money for an assistant but badly need one? Well it is all here plus an accountability coach and motivational speaker all in one."
              icon={EmojiEmotionsIcon}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
