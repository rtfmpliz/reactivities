import React from "react";
import { Grid, GridColumn, List } from "semantic-ui-react";
import { IActivity } from "../../../app/models/activity";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";
import ActivityList from "./ActivityList";

interface IProps{
    activities: IActivity[];
    selectActivity: (id: string) => void;
    selectedActivity: IActivity | null;
}

const ActivityDashboard: React.FC<IProps> = ({
  activities,
  selectActivity,
  selectedActivity,
}) => {
  return (
    <Grid>
      <Grid.Column width={10}>
        <ActivityList activities={activities} selectActivity={selectActivity} />
      </Grid.Column>
      <GridColumn width={6}>
        {selectedActivity && <ActivityDetails activity={selectedActivity} /> }
        
        <ActivityForm />
      </GridColumn>
    </Grid>
  );
};

export default ActivityDashboard;
