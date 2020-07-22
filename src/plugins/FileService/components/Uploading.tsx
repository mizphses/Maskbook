import { Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import { useBeforeUnload } from 'react-use'
import { useLocation } from 'react-router'
import { FilePopover } from './FilePopover'
import { ProgressBar } from './ProgressBar'

const useStyles = makeStyles({
    container: {
        height: 250,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        userSelect: 'none',
        paddingTop: 18,
        paddingBottom: 18,
    },
    name: {
        fontSize: 16,
        lineHeight: 1.75,
        textAlign: 'center',
        color: '#3B3B3B',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        width: 400,
    },
})

interface RouteState {
    key: string | undefined
    name: string
    size: number
    type: string
    block: Uint8Array
}

export const Uploading: React.FC = () => {
    const classes = useStyles()
    const { state } = useLocation<RouteState>()
    useBeforeUnload(true, 'Uploading can not be canceled')
    console.log(state)
    return (
        <Grid container className={classes.container}>
            <Grid item>
                <img src="https://via.placeholder.com/96x120" />
            </Grid>
            <Grid item>
                <FilePopover name={state.name} size={state.size} />
                <ProgressBar preparing={false} fileSize={state.size} sendSize={0} startedAt={Date.now()} />
            </Grid>
        </Grid>
    )
}
