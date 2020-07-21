import React from 'react'
import { Grid } from '@material-ui/core'
import { formatFileSize, formatDateTime } from '../utils'

export const Uploaded: React.FC = () => {
    return (
        <Grid container>
            <Grid item>
                <img src="https://via.placeholder.com/96x120" />
            </Grid>
            <Grid item>
                <p>Profile_photo.png</p>
                <p>
                    <span>{formatFileSize(0x10000)}</span>
                    <span>{formatDateTime(new Date())}</span>
                </p>
            </Grid>
        </Grid>
    )
}
