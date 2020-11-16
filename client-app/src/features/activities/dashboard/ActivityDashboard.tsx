import React from "react";
import { Grid, GridColumn, List } from "semantic-ui-react";
import { IActivity } from "../../../app/models/activity";
import ActivityDetails from "../details/ActivityDetails";
import ActivityList from "./ActivityList";

interface IProps{
    activities: IActivity[]
}

const ActivityDashboard: React.FC<IProps>  = ({activities}) => {
  return (
      <Grid>
        <Grid.Column width={10}>
            <ActivityList activities={activities}/>
        </Grid.Column>
        <GridColumn width={6}>
          <ActivityDetails/>
        </GridColumn>
      </Grid>
  );
};

export default ActivityDashboard;
