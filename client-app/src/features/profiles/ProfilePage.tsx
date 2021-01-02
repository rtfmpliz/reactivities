import React from 'react'
import { Grid, GridColumn } from 'semantic-ui-react'
import ProfileHeader from './ProfileHeader'

const ProfilePage = () => {
    return (
        <Grid>
            <Grid.Column width={16}>
                
            <ProfileHeader/>
                </Grid.Column>
        </Grid>
    )
}

export default ProfilePage
