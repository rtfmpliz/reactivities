import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useState } from "react";
import {  Grid, GridColumn, Loader } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import ActivityList from "./ActivityList";
import { RootStoreContext} from '../../../app/stores/rootStore'; 
import InfiniteScroll from 'react-infinite-scroller'

const ActivityDashboard: React.FC = () => {

  const rootStore = useContext(RootStoreContext);
  const {loadActivities, loadingInitial, setPage, page, totalPages} = rootStore.activityStore;
  const [loadingNext, setLoadingNext] = useState(false);

  const handleGetNext = () => {
    setLoadingNext(true);
    setPage(page + 1);
    loadActivities().then(() => setLoadingNext(false))
  }

  useEffect(() => {
    loadActivities();
  }, [loadActivities]);

  if (loadingInitial && page === 0 )
    return <LoadingComponent content="Loading Activities ..." />;


  return (
    <Grid>
      <Grid.Column width={10}>
        <InfiniteScroll pageStart={0} loadMore={handleGetNext} hasMore={!loadingNext && page + 1 < totalPages} initialLoad={false}>

        <ActivityList />
        </InfiniteScroll>

      </Grid.Column>
      <GridColumn width={6}>
        <h2>Activity filters</h2>
      </GridColumn>
      <GridColumn width={10}>
        <Loader active={loadingNext}/>
      </GridColumn>
    </Grid>
  );
};

export default observer(ActivityDashboard);
