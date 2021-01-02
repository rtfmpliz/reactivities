# Reactivites

Course React dari Hanny

# Catatan Wahyu

## cara Re-seed Database

`cd ..` from API folder

`dotnet ef database drop -p Persistence/ -s API/`

`cd api`

`dotnet watch run`

## perBab

### 9.3 group data

```
80
00:08:16,590 --> 00:08:22,350
So what we're going to do is make use of the array which use method and what we'll do is we'll say use

81
00:08:22,470 --> 00:08:29,010
and the array would use method takes a callback function that it's going to executes against each element

82
00:08:29,010 --> 00:08:30,240
of the array.

83
00:08:30,240 --> 00:08:36,780
So we're going to have two parts to this parameter because our object store entries creates two arrays

84
00:08:37,560 --> 00:08:40,500
for each activity in our activities list.

85
00:08:40,530 --> 00:08:48,670
So we want to say activities and activity and then we can add our callback function inside here.

86
00:08:48,670 --> 00:08:56,240
Now what we also want to do for this produce method is we can give this an initial value and this is

87
00:08:56,240 --> 00:08:58,970
used as the initial value to start the accumulation.

88
00:08:58,970 --> 00:09:06,830
The idea of this is we're going to reduce our current arrays that we get from objects entries and what

89
00:09:06,830 --> 00:09:12,260
we're going to do from this is create a new array of objects where the key of the object is going to

90
00:09:12,260 --> 00:09:20,790
be the activity date as a string and then the value is going to be the array of activities and what

91
00:09:20,790 --> 00:09:25,020
we want to do is give this an initial value of just an empty object to start with.

92
00:09:26,250 --> 00:09:32,340
Now what we want to do here is say constant dates equals and we want to split our dates so that we just

93
00:09:32,340 --> 00:09:41,040
get this string of the dates and we don't want the time so we can use activity dates and splits and

94
00:09:41,040 --> 00:09:43,920
then the character we're going to split on is the T.

95
00:09:43,920 --> 00:09:50,610
And we just want the dates and not the time so we'll take the first element of the array that this produces.

96
00:09:50,610 --> 00:09:53,880
So what we want to do next is check and compare the dates.

97
00:09:54,180 --> 00:09:59,190
And we use ternary operator to say if it's a matching dates then we're going to add it to the array.

98
00:09:59,190 --> 00:10:02,730
If it's not a matching date then we're not going to add it to the array.

99
00:10:03,000 --> 00:10:10,860
So we'll say activities and use square brackets and say dates equals activities square brackets dates

100
00:10:11,640 --> 00:10:13,750
and we'll add a ternary operator.

101
00:10:13,920 --> 00:10:22,320
And if this is true will spreads the array of activities for list dates and then add this activity into

102
00:10:22,320 --> 00:10:31,460
IPs and if not then we'll just add the activity in square brackets and following this.

103
00:10:31,470 --> 00:10:34,980
We want to return the activities.

104
00:10:35,100 --> 00:10:40,080
Now we're getting an error here because we haven't defined the type of what we're returning from our

105
00:10:40,080 --> 00:10:41,670
reduced function.

106
00:10:41,700 --> 00:10:45,140
So what we need to do we need to give this object a type.

107
00:10:45,570 --> 00:10:52,080
And the key of this object is going to be a string and the value is going to be array an array of activities.

108
00:10:52,080 --> 00:11:01,680
So what we can do is say this object is as and we can cast this and we'll say the key is going to be

109
00:11:01,680 --> 00:11:14,020
a string and the value is going to be an eye activity array and this should resolve that particular

110
00:11:14,020 --> 00:11:14,470
problem.
```

### 9.6 : 0700 Observer

```
MEski kita tidak pakai activity secara langsung , kita tetap buat ActivityDetailedHEader sebagai obseserver untuk observe any change on activity objects
```

```
68
00:06:45,070 --> 00:06:50,830
can see that we're getting our activity properties populated in the header and the only other thing

69
00:06:50,830 --> 00:06:56,430
we need to do is because we're reading our activity from the store.

70
00:06:56,560 --> 00:07:01,360
And even though we're not using the activity store directly in this component we still need to make

71
00:07:01,360 --> 00:07:03,100
it an observer.

72
00:07:03,100 --> 00:07:10,120
So let's say observes any changes to our activity objects say down at the bottom I'm just going to say
```

## bab 10.11 

```tsx
  const handleFinalFormSubmit = (values: any) => {
    const dateAndTime = combineDateAndTime(values.date, values.time)
    const {date, time, ...activity} = values; //we access all the activity object, minus the date and time 
    activity.date = dateAndTime;
    console.log(activity);
  };
```



## Untuk memanggil dari ActivityStore

### Contoh panggil Open Create Form pada saat klik Create Activity di NavBar

1. pada NavBar.tsx

2. ```tsx
   //NavBar.tsx
   
   import ActivityStore from '../../app/stores/activityStore';
   import { observer } from 'mobx-react-lite';
   
   //ini sudah tidak diperlukan
   //interface IProps{
   //	openCreateForm: () => void;
   //}
   
   //pada const NavBar tambahkan const activityStore = useContext(ActivityStore);
   const NavBar: React.FC<IProps> = ({openCreateForm => {
                                      const activityStore = useContext(ActivityStore);
   ...
   <Menu.Item>
       //panggil activityStore.openCreateForm
   	<Button onClick={activityStore.openCreateForm private content='Create Activity'}/> 
   </Menu.Item>
   
                                     }})
   //buat export default observer                           
   export default observer(NavBar);                          
   ```

3. 

## Migrations

from Reactivties (root folder) run `dotnet ef migrations add Initial -p Persistence -s API`

### MCompostite ID Primary Key

```c#
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<PostTag>()
            .HasKey(t => new { t.PostId, t.TagId });

        modelBuilder.Entity<PostTag>()
            .HasOne(pt => pt.Post)
            .WithMany(p => p.PostTags)
            .HasForeignKey(pt => pt.PostId);

        modelBuilder.Entity<PostTag>()
            .HasOne(pt => pt.Tag)
            .WithMany(t => t.PostTags)
            .HasForeignKey(pt => pt.TagId);
    }
```

## 5.4 Not Strongly Type

```jsx
import React, { Component } from "react";
import "./styles.css";
import axios from "axios";
import { Header, Icon, List } from "semantic-ui-react";

class App extends Component {
  state = {
    activities: [],
  };

  componentDidMount() {
    axios.get("http://localhost:5000/api/activities").then((response) => {
      this.setState({
        activities: response.data,
      });
    });
  }

  render() {
    return (
      <div>
        <Header as="h2">
          <Icon name="plug" />
          <Header.Content>Uptime Guarantee</Header.Content>
        </Header>
        <List>
          {this.state.activities.map((activity : any) => (
            <List.Item key={activity.id}> {activity.title}
                
                </List.Item>
          ))}

        </List>

      </div>
    );
  }
}

export default App;

```



## 5.5 Strongly Type

```tsx
\\src\app\models.activity

export interface IActivity {
    id: string;
    title: string;
    description: string;
    category: string;
    date: Date;
    city: string;
    venue: string;
}
```

```jsx
import React, { Component } from "react";
import "./styles.css";
import axios from "axios";
import { Header, Icon, List } from "semantic-ui-react";

import {IActivity} from '../models/activity'

interface IState {
  activities: IActivity[]
}

class App extends Component<{}, IState> {
  readonly state : IState= {
    activities: [],
  };

  componentDidMount() {
    axios.get<IActivity[]>("http://localhost:5000/api/activities").then((response) => {
      this.setState({
        activities: response.data,
      });
    });
  }

  render() {
    return (
      <div>
        <Header as="h2">
          <Icon name="plug" />
          <Header.Content>Uptime Guarantee</Header.Content>
        </Header>
        <List>
          {this.state.activities.map((activity) => (
            <List.Item key={activity.id}> {activity.title}</List.Item>
          ))}

        </List>

      </div>
    );
  }
}

export default App;

```

## 6.6 Hooks

```jsx
import React, { useState, useEffect } from "react";
import "./styles.css";
import axios from "axios";
import { Header, Icon, List } from "semantic-ui-react";

import {IActivity} from '../models/activity'



const App = () => {
  const [activities, setActivities] = useState<IActivity[]>([]);

  useEffect(() => {    
    axios
    .get<IActivity[]>("http://localhost:5000/api/activities")
    .then((response) => {
      setActivities(response.data)

    });
  },[]);

    return (
      <div>
        <Header as="h2">
          <Icon name="plug" />
          <Header.Content>Uptime Guarantee</Header.Content>
        </Header>
        <List>
          {activities.map((activity) => (
            <List.Item key={activity.id}> {activity.title}</List.Item>
          ))}

        </List>

      </div>
    
    );
}

export default App;

```

## 6.7 Styling

```tsx
\\app\features\NavBar.tsx

import React from "react";
import { Button, Container, Menu } from "semantic-ui-react";

export const NavBar = () => {
  return (
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item header>
            <img src="/assets/logo.png" alt="logo"/>
            Reactivities
        </Menu.Item>
        <Menu.Item name="Activities" />
        <Menu.Item >
            <Button positive content='Create Activity'/>
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default NavBar;

```

```tsx
    return (
      <div>
        <NavBar></NavBar>
        <List>
```

## 6.8

```tsx
\\NavBar.tsx

<img src="/assets/logo.png" alt="logo" style={{marginRight:10}}/>
```



```css
\\styles.css

body {
  background-color: rgb(234, 234, 234) !important;
}

.ui.inverted.top.fixed.menu {
  background-image: linear-gradient(
    135deg,
    rgb(24, 42, 115) 0%,
    rgb(33, 138, 174) 69%,
    rgb(32, 167, 172) 89%
  ) !important;
}
```



```tsx
import React, { useState, useEffect, Fragment } from "react";
  
return (
    <Fragment>
      <NavBar></NavBar>
      <Container style={{marginTop:'7em'}}>
        <List>
          {activities.map((activity) => (
            <List.Item key={activity.id}> {activity.title}</List.Item>
          ))}
        </List>
      </Container>
    </Fragment>
  );
};
```

## 6.9 Grid, separate List

![image-20201115173606627](Reactivites.assets/image-20201115173606627.png)

```tsx
//app\feature\activites\ActivityDashboard.tsx

import React from "react";
import { Grid, List } from "semantic-ui-react";
import { IActivity } from "../../../app/models/activity";

interface IProps{
    activities: IActivity[]
}

const ActivityDashboard: React.FC<IProps>  = ({activities}) => {
  return (
    <div>
      <Grid>
        <Grid.Column width={10}>
          <List>
            {activities.map((activity) => (
              <List.Item key={activity.id}> {activity.title}</List.Item>
            ))}
          </List>
        </Grid.Column>
      </Grid>
    </div>
  );
};


export default ActivityDashboard;
```



```tsx
//app\layout\App.tsx
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";


<Container style={{marginTop:'7em'}}>
        <ActivityDashboard activities={activities}/>
    </Container>
```

## 6.10 List

```tsx
//C:\dev\dotnetcore\2020\course\Reactivities\Reactivities\client-app\src\features\activities\dashboard\ActivityList.tsx

import React from "react";
import { Item, Button, Label, Segment } from "semantic-ui-react";
import { IActivity } from "../../../app/models/activity";

interface IProps {
  activities: IActivity[];
}

const ActivityList: React.FC<IProps> = ({ activities }) => {
  return (
    <Segment clearing>
      <Item.Group divided>
        {activities.map((activity) => (
          <Item>
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
                <Button floated="right" content="View" color="blue" />
                <Label basic content={activity.category} />
              </Item.Extra>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </Segment>
  );
};

export default ActivityList;

```

```tsx
//ActivityDashboard

import ActivityList from "./ActivityList";
       
<Grid.Column width={10}>
    <ActivityList activities={activities}/>
</Grid.Column>
```

## 6.11 Details

```tsx
//features\activities\details\ActivityDetails.tsx

import React from 'react'
import { Card,Image, Icon, Button } from 'semantic-ui-react'

const ActivityDetails = () => {
    return (
            <Card fluid>
                <Image src='/assets/placeholder.png' wrapped ui={false}/>
            <Card.Content>
                <Card.Header>Title</Card.Header>
                <Card.Meta>
                    <span>Date</span>
                </Card.Meta>
                <Card.Description>
                    Description
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button.Group widths={2}>
                    <Button basic color='blue' content='Edit'/>
                    <Button basic color='grey' content='Cancel'/>
                </Button.Group>
            </Card.Content>
            </Card>
        
    )
}

export default ActivityDetails

```

```tsx
//ActivityDashboard
import ActivityDetails from "../details/ActivityDetails";

      <Grid>
        <Grid.Column width={10}>
            <ActivityList activities={activities}/>
        </Grid.Column>
        <GridColumn width={6}>
          <ActivityDetails/>
        </GridColumn>
      </Grid>
```

## 6.12 Form

```tsx
//features\form\ActivityForm.tsx

import React from 'react'
import { Form, Segment } from 'semantic-ui-react'

const ActivityForm = () => {
    return (
        <Segment>
            <Form>
                <Form.Input placeholder='Title'/>
                <Form.TextArea rows={2} placeholder='Description'/>
                <Form.Input placeholder='Category'/>
                <Form.Input type='date' placeholder='Date'/>
                <Form.Input placeholder='City'/>
                <Form.Input placeholder='Venue'/>
            </Form>
        </Segment>
    )
}

export default ActivityForm

```

```tsx
//ActivityDashboard
import ActivityForm from "../form/ActivityForm";

        <GridColumn width={6}>
          <ActivityDetails/>
          <ActivityForm/>
        </GridColumn>
```

## 6.13 Show in Detail

```tsx
//App.tsx

const App = () => {
  const [activities, setActivities] = useState<IActivity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<IActivity | null>(null);

  const handleSelectedActivity = (id: string) => {
    setSelectedActivity(activities.filter(a => a.id===id)[0])
  }
  
        <Container style={{marginTop:'7em'}}>
        <ActivityDashboard 
        activities={activities} 
        selectActivity={handleSelectedActivity}
        selectedActivity={selectedActivity}//selectedActivity={selectedActivity!}
        />
      </Container>
```

```tsx
//ActivityDashboard

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
```

```tsx
//ActivityList

interface IProps {
  activities: IActivity[];
  selectActivity: (id: string) => void;
}


const ActivityList: React.FC<IProps> = ({ activities, selectActivity }) => {

    
                    <Button
                  onClick={() => selectActivity(activity.id)}
                  floated="right"
                  content="View"
                  color="blue"
                />
```

```tsx
//ActivityDetail

import React from 'react'
import { Card,Image, Icon, Button } from 'semantic-ui-react'
import { IActivity } from '../../../app/models/activity'

interface IProps{
    activity: IActivity
}

const ActivityDetails: React.FC<IProps> = ({activity}) => {
    return (
            <Card fluid>
                <Image src={`/assets/categoryImages/${activity.category}.jpg`} wrapped ui={false}/>
            <Card.Content>
                <Card.Header>{activity.title}</Card.Header>
                <Card.Meta>
                    <span>{activity.date}</span>
                </Card.Meta>
                <Card.Description>
                    {activity.description}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button.Group widths={2}>
                    <Button basic color='blue' content='Edit'/>
                    <Button basic color='grey' content='Cancel'/>
                </Button.Group>
            </Card.Content>
            </Card>
        
    )
}

export default ActivityDetails

```

## 6.13 Show Edit form when Edit Button clicked

```tsx
//App.tsx

  const [editMode, setEditMode] = useState(false);

<ActivityDashboard 
    activities={activities} 
    selectActivity={handleSelectedActivity}
    selectedActivity={selectedActivity}//selectedActivity={selectedActivity!}
    editMode={editMode}
    setEditMode={setEditMode}
    />
```

```tsx
//ActivityDasboard

interface IProps {
  activities: IActivity[];
  selectActivity: (id: string) => void;
  selectedActivity: IActivity | null;
  editMode: boolean;
  setEditMode: (editMode: boolean) => void;
}

const ActivityDashboard: React.FC<IProps> = ({
  activities,
  selectActivity,
  selectedActivity,
  editMode,
  setEditMode,
})

      <GridColumn width={6}>
        {selectedActivity && !editMode && (
          <ActivityDetails activity={selectedActivity} setEditMode = {setEditMode}/>
        )}
        {editMode && <ActivityForm />}
      </GridColumn>
```

```tsx

interface IProps{
    activity: IActivity;
    setEditMode: (editMode: boolean) => void;
}

const ActivityDetails: React.FC<IProps> = ({activity, setEditMode}) => {

    
    <Button onClick={() => setEditMode(true)} basic color='blue' content='Edit'/>
 
```

## 6.15

### Add Button on Form

```tsx
//ActivityForm

        <Segment clearing>
            <Form>
                <Form.Input placeholder='Title'/>
                <Form.TextArea rows={2} placeholder='Description'/>
                <Form.Input placeholder='Category'/>
                <Form.Input type='date' placeholder='Date'/>
                <Form.Input placeholder='City'/>
                <Form.Input placeholder='Venue'/>
                <Button floated='right' positive type='submit' content='Submit'/>
                <Button floated='right'  type='button' content='Cancel'/>
            </Form>
        </Segment>
```

### Cancel Form

```tsx
//ActivityDashboard

        {editMode && <ActivityForm setEditMode={setEditMode} />}

```

```tsx
//ActivityForm

interface IProps {
    setEditMode: (editMode: boolean) => void;
}

const ActivityForm: React.FC<IProps> = ({setEditMode}) => {

    
                    <Button onClick={() => setEditMode(false)} floated='right'  type='button' content='Cancel'/>

```

### Cancel DEtail Form

```tsx
//App

        <ActivityDashboard 

        setSelectedActivity={setSelectedActivity}
        />

```

```tsx
//ActivityDashboard

interface IProps {

  setSelectedActivity: (activity: IActivity | null) => void;
}

const ActivityDashboard: React.FC<IProps> = ({

  setSelectedActivity
}) => {

      <GridColumn width={6}>
        {selectedActivity && !editMode && (
          <ActivityDetails
            activity={selectedActivity}
            setEditMode={setEditMode}
            setSelectedActivity={setSelectedActivity}
          />
```

```tsx
//ActivityDetails

interface IProps{

    setSelectedActivity: (activity: IActivity | null)  => void;
}

const ActivityDetails: React.FC<IProps> = ({activity, setEditMode, setSelectedActivity}) => {
    return (
        
        
                            <Button onClick={() => setSelectedActivity(null)} basic color='grey' content='Cancel'/>

        
```

# 6.16

```tsx
//activity.ts

    date: string;

```

```tsx
//ActivityDashboard

        )}
        {editMode && (
          <ActivityForm setEditMode={setEditMode} activity={selectedActivity!} />
        )}
      </GridColumn>
```

```tsx
//ActivityForm

import React, {useState} from 'react'
import { act } from 'react-dom/test-utils';
import { Button, Form, Segment } from 'semantic-ui-react'
import { IActivity } from '../../../app/models/activity'

interface IProps {
    setEditMode: (editMode: boolean) => void;
    activity: IActivity;
}

const ActivityForm: React.FC<IProps> = ({setEditMode, activity : initialFormState}) => {

    const initializeForm = () => {
        if  (initialFormState){
            return initialFormState
        } else  {
            return {
                id:'',
                title: '',
                category: '',
                description: '',
                date: '',
                city: '',
                venue: ''
            };
        }

    };

    const [activity, setActivity] = useState<IActivity>(initializeForm)

    return (
        <Segment clearing>
            <Form>
                <Form.Input placeholder='Title' value={activity.title}/>
                <Form.TextArea rows={2} placeholder='Description' value={activity.description} />
                <Form.Input placeholder='Category' value={activity.category}/>
                <Form.Input type='date' placeholder='Date' value={activity.date}/>
                <Form.Input placeholder='City' value={activity.city}/>
                <Form.Input placeholder='Venue' value={activity.venue}/>

```

# 6.17 

```tsx
    const handleInputChange = (event: any) => {
        console.log(event.target.value);
        setActivity({...activity,title: event.target.value})
    }
    
                    <Form.Input onChange={handleInputChange} placeholder='Title' value={activity.title}/>

```



```tsx
//ActivityForm
import React, { FormEvent, useState} from 'react'


    const handleSubmit = () => {
        console.log(activity);
    }

    const handleInputChange = (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = event.currentTarget;
        setActivity({...activity,[name]: value})
    }

    return (
      <Segment clearing>
        <Form onSubmit={handleSubmit}>
          <Form.Input
            onChange={handleInputChange}
            name="title"
            placeholder="Title"
            value={activity.title}
          />
          <Form.TextArea
            onChange={handleInputChange}
            name="description"
            rows={2}
            placeholder="Description"
            value={activity.description}
          />
          <Form.Input
            onChange={handleInputChange}
            name="category"
            placeholder="Category"
            value={activity.category}
          />
          <Form.Input
            onChange={handleInputChange}
            name="date"
            type="date"
            placeholder="Date"
            value={activity.date}
          />
          <Form.Input
            onChange={handleInputChange}
            name="city"
            placeholder="City"
            value={activity.city}
          />
          <Form.Input
            onChange={handleInputChange}
            name="venue"
            placeholder="Venue"
            value={activity.venue}
          />
          <Button floated="right" positive type="submit" content="Submit" />
          <Button
            onClick={() => setEditMode(false)}
            floated="right"
            type="button"
            content="Cancel"
          />
        </Form>
        </Segment>
        );


```

# 6.18

```tsx
//App.tsx


  const handleCreateActivity = (activity: IActivity) => {
    setActivities([...activities, activity]);
      setSelectedAcitivity(activity);
      setEditMode(failed);
  }

  const handleEditActivity = (activity: IActivity) => {
    setActivities([...activities.filter(a => a.id !== activity.id), activity]);
            setSelectedAcitivity(activity);
      setEditMode(failed);
  }
  useEffect(() => {
      
              <ActivityDashboard 
...
        createActivity={handleCreateActivity}
        editActivity={handleEditActivity}
        />
```

```tsx
//ActivityDAshboard

interface IProps {
...
  createActivity: (activity: IActivity) => void;
  editActivity: (activity: IActivity) => void;
}

const ActivityDashboard: React.FC<IProps> = ({
...
  createActivity,
  editActivity,
}) => {
    
    
            {editMode && (
          <ActivityForm
...
            createActivity={createActivity}
            editActivity={editActivity}
          />
        )}
```

```TSX
//AppForm

import React, { FormEvent, useState } from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import { IActivity } from "../../../app/models/activity";
import {v4 as uuid} from 'uuid'

interface IProps {
  setEditMode: (editMode: boolean) => void;
  activity: IActivity;
  createActivity: (activity: IActivity) => void;
  editActivity: (activity: IActivity) => void;
}

const ActivityForm: React.FC<IProps> = ({
  setEditMode,
  activity: initialFormState,
  createActivity,
  editActivity
}) => {
  const initializeForm = () => {
    if (initialFormState) {
      return initialFormState;
    } else {
      return {
        id: "",
        title: "",
        category: "",
        description: "",
        date: "",
        city: "",
        venue: "",
      };
    }
  };

  const [activity, setActivity] = useState<IActivity>(initializeForm);

  const handleSubmit = () => {
    if (activity.id.length === 0) {
      let newActivity = {
        ...activity,
        id: uuid()
      }
      createActivity(newActivity);
    } else {
      editActivity(activity);
    }
  };

  const handleInputChange = (
    event: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.currentTarget;
    setActivity({ ...activity, [name]: value });
  };

    ...
};

export default ActivityForm;
```

# 6.19

```tsx
//App.tsx

  const handleSelectedActivity = (id: string) => {
    setSelectedActivity(activities.filter(a => a.id===id)[0]);
    setEditMode(false);
  }

```

```tsx
//ActivityDashboard

        {editMode && (
          <ActivityForm
            key={selectedActivity && selectedActivity.id || 0}
            setEditMode={setEditMode}
            activity={selectedActivity!}
            createActivity={createActivity}
            editActivity={editActivity}
          />
        )}
```



```tsx
//ActivityForm

        <Form.Input
          onChange={handleInputChange}
          name="date"
          type="datetime-local"
          placeholder="Date"
          value={activity.date}
        />
```



```tsx
//App.tsx

      .then((response) => {
        let activities: IActivity[] = [];
        response.data.forEach(activity => {
          activity.date = activity.date.split('.')[0];
          activities.push(activity)
        })
        setActivities(activities);
      });
```

# 6.20

```tsx
//App.tsx


  const handleDeleteActivity = (id: string) => {
    setActivities([...activities.filter(a => a.id !== id)])
  }

```

```tsx
//ActivityDashboard

interface IProps {
...
  deleteActivity: (id: string) => void;
}

const ActivityDashboard: React.FC<IProps> = ({
...
  deleteActivity,
}) => {
  return (
    <Grid>
      <Grid.Column width={10}>
        <ActivityList
...
          deleteActivity={deleteActivity}
        />
          
          ...
          
                  {editMode && (
          <ActivityForm
            key={(selectedActivity && selectedActivity.id) || 0}
...
          />
```

```tsx
//ActivityList

interface IProps {
...
  deleteActivity: (id: string) => void;

}

const ActivityList: React.FC<IProps> = ({
...
  deleteActivity,
}) => {
    
    ...
    
                    <Button
                  onClick={() => deleteActivity(activity.id)}
                  floated="right"
                  content="Delete"
                  color="red"
                />
                <Label basic content={activity.category} />
    
```

# 7.2

```tsx
//app/api/agent.ts

import axios, { AxiosResponse } from 'axios';
import { IActivity } from '../models/activity';

axios.defaults.baseURL = 'http://localhost:5000/api';

const responseBody = (response: AxiosResponse) => response.data;

const request = {
    get = (url: string) => axios.get(url).then(responseBody),
    post = (url: string, body: {}) => axios.post(url,body).then(responseBody),
    put = (url: string, body: {}) => axios.put(url, body).then(responseBody),
    del = (url: string) => axios.delete(url).then(responseBody),
}

const Activities = {
    list: () => request.get(`/activities`),
    details: (id: string) => request.get(`/activities/${id}`),
    create: (activity: IActivity) => request.post(`/activities`, activity),
    update: (activity: IActivity) => request.put(`/activities/${activity.id}`,activity),
    delete: (id: string) => request.del(`/activities/${id}`)
}

export default {
    Activities
}
```

# 7.3

```tsx
//App.tsx

import agent from "../api/agent";

...

  useEffect(() => {
    agent.Activities.list()
    .then((response) => {
        let activities: IActivity[] = [];
        response.forEach((activity: any) => {
          activity.date = activity.date.split('.')[0];
          activities.push(activity)
        })

```

# 7.3 not using any

```tsx
//agent.ts

const Activities = {
    list: (): Promise<IActivity[]> => request.get(`/activities`),
...

  useEffect(() => {
    agent.Activities.list()
    .then((response) => {
        let activities: IActivity[] = [];
        response.forEach(activity => {

```

## Create

```tsx
//App.tsx

  const handleCreateActivity = (activity: IActivity) => {
    agent.Activities.create(activity).then(() => {

      setActivities([...activities, activity]);
      setSelectedActivity(activity);
      setEditMode(false);
    })
  }

```

## 7.3 Edit

```tsx
//App.tsx

  const handleEditActivity = (activity: IActivity) => {
    agent.Activities.update(activity).then(() => {
      setActivities([...activities.filter(a => a.id !== activity.id), activity])
      setSelectedActivity(activity);
      setEditMode(false);

    })
  }

  const handleDeleteActivity = (id: string) => {
    agent.Activities.delete(id).then(() => {

      setActivities([...activities.filter(a => a.id !== id)])
    })
  }

```

# 7.4 Add loading

```tsx
//Agent.ts

const sleep = (ms: number) => (response: AxiosResponse) =>
new Promise<AxiosResponse>(resolve => setTimeout(() => resolve(response),ms));

const request = {
    get: (url: string) => axios.get(url).then(sleep(1000)).then(responseBody),
    post: (url: string, body: {}) => axios.post(url,body).then(sleep(1000)).then(responseBody),
    put: (url: string, body: {}) => axios.put(url, body).then(sleep(1000)).then(responseBody),
    del: (url: string) => axios.delete(url).then(sleep(1000)).then(responseBody),
}
```

# 7.5 add Loading 

```tsx
import React from "react";
import { Dimmer, Loader } from "semantic-ui-react";

const LoadingComponent: React.FC<{ inverted?: boolean; content?: string }> = ({
  inverted = true,
  content,
}) => {
  return (
    <Dimmer active inverted={inverted}>
      <Loader content={content} />
    </Dimmer>
  );
};

export default LoadingComponent;

```



```tsx
//App.tsx

  useEffect(() => {

      ...
    
  }).then(() => setLoading(false));
  }, []);

  if (loading) return <LoadingComponent content='Loading Activities ...'/>

```

# 7.6 Loading on button

```tsx
//App.tsx

  const [submitting, setSubmitting] = useState(false);

const handleCreateActivity = (activity: IActivity) => {
    setSubmitting(true);
...
    }).then(() => setSubmitting(false))
  };

  const handleEditActivity = (activity: IActivity) => {
    setSubmitting(true);
...
    }).then(() => setSubmitting(false))
  };

  const handleDeleteActivity = (id: string) => {
    setSubmitting(true);
...
    }).then(() => setSubmitting(false))
  };

        <ActivityDashboard
...
          submitting={submitting}
        />
```

```tsx
//ActivityDashboard

interface IProps {
...
  submitting: boolean
}

const ActivityDashboard: React.FC<IProps> = ({
...
  submitting
})

        <ActivityList
...
          submitting={submitting}
        />
    
              <ActivityForm
...
            submitting={submitting}
          />
```

```tsx
//ActivityList.tsx

interface IProps {
...
  submitting: boolean;
}

const ActivityList: React.FC<IProps> = ({
...
  submitting
}) => {
        
                <Button
                  loading={submitting}
...
                />
```

```tsx
//ActivityForm

interface IProps {
...
  submitting: boolean;
}

const ActivityForm: React.FC<IProps> = ({
...
  submitting
}) => {
    
            <Button
          loading={submitting}
...
        />
```

# 7.3 Mobx

```ts
//app/stores/activityStore.ts

import { observable } from "mobx";
import { createContext } from "react";


class ActivityStore {
    @observable title = 'Hello from mobx'
}

export default createContext(new ActivityStore())
```

```tsx
//App.tsx

import React, { useState, useEffect, Fragment, SyntheticEvent, useContext } from "react";
...
import ActivityStore from "../stores/activityStore";

const App = () => {
const activityStore = useContext(ActivityStore);
...
      <Container style={{ marginTop: "7em" }}>
      <h1>{activityStore.title}</h1>
```

## #16 Cloudinary

### #2 Cloudinary setting

`dotnet user-secrets set "Cludinary:CloudName" "duijlcwpq"`

`dotnet user-secrets set "Cludinary:ApiKey" "445532985372427"`

`dotnet user-secrets set "Cludinary:ApiSecret" "TeqtKj1L20pmvBQ4tYDlmMDG_LE"`



install package CloudinaryDotnet @1.8.0 in Infrastructure Project 