import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import CloseIcon from '@material-ui/icons/Close'
import IconButton from '@material-ui/core/IconButton'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import { DialogActions, DialogContent } from '@material-ui/core'
import styled from 'styled-components'

export interface IProps {
    communityName: string
    text: string;
}

export interface DialogTitleProps {
    children: React.ReactNode;
    onClose: () => void;
  }

const DialogTitle = (props: DialogTitleProps) => {
    const { children, onClose } = props;
    return (
      <MuiDialogTitle>
        <DialogTitleText>{children}</DialogTitleText>
        {onClose ? (
          <IconButton aria-label="close" onClick={onClose}>
            <CloseIcon />
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    )
  }

type TProps = IProps;

export default function CustomizedDialogs(props: TProps) {
    const { text, communityName } = props

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
            Open dialog
        </Button>
        <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
            <DialogTitle onClose={handleClose}>
                {communityName}
            </DialogTitle>
            <DialogContent dividers>
                {text}
            </DialogContent>
        </Dialog>
        </div>
    )
}

const DialogTitleText = styled.h2`
    margin: 5px 50px 0 0;
`