import React from 'react'
import Popover from '@material-ui/core/Popover'
import Typography from '@material-ui/core/Typography'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { formatFileSize } from '../utils'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        popover: {
            pointerEvents: 'none',
        },
        paper: {
            padding: theme.spacing(1),
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
        content: {
            maxWidth: 400,
        },
    }),
)

interface Props {
    name: string
    size: number
}

export const FilePopover: React.FC<Props> = (props) => {
    const classes = useStyles()
    const anchor = React.useRef<HTMLElement>(null)
    const [open, setOpen] = React.useState(false)
    return (
        <>
            <Typography
                className={classes.name}
                ref={anchor}
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
                children={props.name}
            />
            <Popover
                className={classes.popover}
                classes={{ paper: classes.paper }}
                open={open}
                anchorEl={anchor.current}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                transformOrigin={{ vertical: 'top', horizontal: 'center' }}
                onClose={() => setOpen(false)}
                disableRestoreFocus>
                <Typography className={classes.content}>
                    <span>Name: {props.name}</span>
                    <br />
                    <span>Size: {formatFileSize(props.size)}</span>
                </Typography>
            </Popover>
        </>
    )
}
