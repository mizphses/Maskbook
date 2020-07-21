import { Checkbox, FormControlLabel, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { MAX_FILE_SIZE } from '../constants'
import { RecentFiles } from './RecentFiles'
import { UploadDropArea } from './UploadDropArea'

const LEGAL_TERMS = (
    <a target="_blank" href="https://legal.maskbook.com/arweave/file-service/plugin-terms.html">
        terms
    </a>
)
const LEGAL_POLICY = (
    <a target="_blank" href="https://legal.maskbook.com/arweave/file-service/privacy-policy-uploader.html">
        privacy policy
    </a>
)

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        height: 250,
    },
    upload: {
        flex: 1,
        display: 'flex',
    },
    legal: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 'fit-content',
    },
    encrypted: {
        userSelect: 'none',
        '& span': {
            fontSize: 12,
            lineHeight: 1.75,
            color: '#3B3B3B',
        },
    },
    legalText: {
        userSelect: 'none',
        fontSize: 12,
        lineHeight: 1.75,
        color: '#3B3B3B',
        '& a': {
            color: '#2CA4EF',
            textDecoration: 'none',
        },
    },
})

export const UploadArea: React.FC = () => {
    const classes = useStyles()
    const [encrypted, setEncrypted] = React.useState(true)
    const onFile = (file: File) => {
        console.log(file)
    }
    return (
        <section className={classes.container}>
            <section className={classes.upload}>
                <UploadDropArea maxFileSize={MAX_FILE_SIZE} onFile={onFile} />
                <RecentFiles files={[{ id: '11', name: 'samplesamplesample.txt', createdAt: new Date() }]} />
            </section>
            <section className={classes.legal}>
                <FormControlLabel
                    control={<Checkbox checked={encrypted} onChange={(event, checked) => setEncrypted(checked)} />}
                    className={classes.encrypted}
                    label="Make it encrypted"
                />
                <Typography className={classes.legalText}>
                    By using this plugin, you agree to the {LEGAL_TERMS} and the {LEGAL_POLICY}.
                </Typography>
            </section>
        </section>
    )
}
