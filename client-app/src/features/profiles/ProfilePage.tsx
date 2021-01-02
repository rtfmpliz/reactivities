import React from "react";
import { Grid, GridColumn } from "semantic-ui-react";
import ProfileHeader from "./ProfileHeader";
import ProfileContent from "./ProfileContent";

const ProfilePage = () => {
  return (
    <Grid>
      <Grid.Column width={16}>
        <ProfileHeader />
        <ProfileContent/>
      </Grid.Column>
    </Grid>
  );
};

export default ProfilePage;
