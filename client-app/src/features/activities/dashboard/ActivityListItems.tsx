import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Button, Item, Label } from "semantic-ui-react";
import { IActivity } from "../../../app/models/activity";
import ActivityStore from "../../../app/stores/activityStore";

const ActivityListItems: React.FC<{ activity: IActivity }> = ({ activity }) => {
  const activityStore = useContext(ActivityStore);
  const { submitting, target, deleteActivity } = activityStore;

  return (
      <Item key={activity.id}>
        <Item.Content>
          <Item.Header as="a">{activity.title}</Item.Header>
          <Item.Meta>{activity.date}</Item.Meta>
          <Item.Description>
            <div>{activity.description}</div>
            <div>
              {activity.city}, {activity.venue}
            </div>
          </Item.Description>
          <Item.Extra>
            <Button
              as={Link}
              to={`/activities/${activity.id}`}
              floated="right"
              content="View"
              color="blue"
            />
            <Button
                  name={activity.id}
                  loading={target === activity.id && submitting}
                  onClick={(e) => deleteActivity(e,activity.id)}
                  floated="right"
                  content="Delete 2"
                  color="red"
                />
            <Label basic content={activity.category} />
          </Item.Extra>
        </Item.Content>
      </Item>
  );
};

export default ActivityListItems;
