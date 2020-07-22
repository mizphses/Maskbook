import { DialogContent, DialogProps, DialogTitle, Grid, IconButton, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { useStylesExtends } from '../../components/custom-ui-helper'
import { DialogDismissIconUI } from '../../components/InjectedComponents/DialogDismissIcon'
import ShadowRootDialog from '../../utils/jss/ShadowRootDialog'
import { Entry } from './components'
import { InsertButton } from './components/InsertButton'
import { displayName } from './constants'
import { Exchange, FileInfo } from './hooks/Exchange'
import { isNil } from 'lodash-es'

interface Props
    extends withClasses<
        | KeysInferFromUseStyles<typeof useStyles>
        | 'dialog'
        | 'backdrop'
        | 'container'
        | 'paper'
        | 'input'
        | 'header'
        | 'content'
        | 'close'
        | 'button'
        | 'label'
        | 'switch'
    > {
    open: boolean
    onConfirm: () => void
    onDecline: () => void
    DialogProps?: Partial<DialogProps>
}

const useStyles = makeStyles({
    title: { marginLeft: 6 },
    container: { width: '100%' },
    content: { padding: 12, background: '#fff' },
})

const MainDialog: React.FC<Props> = (props) => {
    const classes = useStylesExtends(useStyles(), props)
    const [selectedFileInfo, setSelectedFileInfo] = React.useState<FileInfo>()
    const onInsert = () => {
        // TODO: insert to post content
    }
    return (
        <ShadowRootDialog
            className={classes.dialog}
            classes={{ container: classes.container, paper: classes.paper }}
            open={props.open}
            scroll="paper"
            fullWidth
            maxWidth="sm"
            disableAutoFocus
            disableEnforceFocus
            BackdropProps={{ className: classes.backdrop }}
            {...props.DialogProps}>
            <DialogTitle className={classes.header}>
                <IconButton classes={{ root: classes.close }} onClick={props.onDecline}>
                    <DialogDismissIconUI />
                </IconButton>
                <Typography className={classes.title} display="inline" variant="inherit" children={displayName} />
            </DialogTitle>
            <DialogContent className={classes.content}>
                <Exchange onInsert={setSelectedFileInfo}>
                    <Entry />
                    <Grid container justify="center">
                        <InsertButton onClick={onInsert} disabled={isNil(selectedFileInfo)} />
                    </Grid>
                </Exchange>
            </DialogContent>
        </ShadowRootDialog>
    )
}

export default MainDialog
