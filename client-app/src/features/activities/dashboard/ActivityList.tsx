import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Item, Segment } from "semantic-ui-react";
import ActivityStore from "../../../app/stores/activityStore";
import ActivityListItems from "./ActivityListItems";

const ActivityList: React.FC = () => {
  const activityStore = useContext(ActivityStore);
  const {
    activitiesByDate,
  } = activityStore;
  return (
    <Segment clearing>
      <Item.Group divided>
        {activitiesByDate.map((activity) => (
          <ActivityListItems key={activity.id} activity={activity} />
        ))}
      </Item.Group>
    </Segment>
  );
};

export default observer(ActivityList);
