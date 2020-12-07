import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import CloseIcon from '@material-ui/icons/Close'
import IconButton from '@material-ui/core/IconButton'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import { DialogContent } from '@material-ui/core'
import styled from 'styled-components'

import community_graph_0 from "../images/0_community_graph.png"
import community_graph_1 from "../images/1_community_graph.png"
import community_graph_2 from "../images/2_community_graph.png"
import community_graph_3 from "../images/3_community_graph.png"
import community_graph_4 from "../images/4_community_graph.png"
import community_graph_5 from "../images/5_community_graph.png"
import community_degree_0 from "../images/0_community_degree.png"
import community_degree_1 from "../images/1_community_degree.png"
import community_degree_2 from "../images/2_community_degree.png"
import community_degree_3 from "../images/3_community_degree.png"
import community_degree_4 from "../images/4_community_degree.png"
import community_degree_5 from "../images/5_community_degree.png"

export interface IProps {
    communityName: string
    text: string;
    imageSet: number;
}

export interface DialogTitleProps {
    children: React.ReactNode;
    onClose: () => void;
  }

const DialogTitle = (props: DialogTitleProps) => {
    const { children, onClose } = props;
    return (
      <CustomDialogTitle>
        <DialogTitleText>{children}</DialogTitleText>
        {onClose ? (
          <CustomIconButton aria-label="close" onClick={onClose}>
            <CloseIcon />
          </CustomIconButton>
        ) : null}
      </CustomDialogTitle>
    )
  }

type TProps = IProps;

export default function CustomizedDialogs(props: TProps) {
    const { text, communityName, imageSet } = props

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const selectImageSet = (imageSetv: number) => {
      switch (imageSetv) {
        case 0:
          return (
            <>
              <img src={community_graph_0} />
              <img src={community_degree_0} />
            </>
          )
        case 1:
          return (
            <>
              <img src={community_graph_1} />
              <img src={community_degree_1} />
            </>
          )
        case 2:
          return (
            <>
              <img src={community_graph_2} />
              <img src={community_degree_2} />
            </>
          )
        case 3:
          return (
            <>
              <img src={community_graph_3} />
              <img src={community_degree_3} />
            </>
          )
        case 4:
          return (
            <>
              <img src={community_graph_4} />
              <img src={community_degree_4} />
            </>
          )
        case 5:
          return (
            <>
              <img src={community_graph_5} />
              <img src={community_degree_5} />
            </>
          )
        default:
          return null
        
      }
    }

    return (
      <MainContainer>
        <CustomButton variant="outlined" color="primary" onClick={handleClickOpen}>
            {communityName}
        </CustomButton>
        <CustomDialog onClose={handleClose} open={open} maxWidth={false}>
            <DialogTitle onClose={handleClose}>
                {communityName}
            </DialogTitle>
            <CustomDialogContent dividers>
                <ImageContainer>
                  {selectImageSet(imageSet)}
                </ImageContainer>
                <BottomText>
                  {text}
                </BottomText>
                
            </CustomDialogContent>
        </CustomDialog>
      </MainContainer>
    )
}

const DialogTitleText = styled.h2`
    margin: 5px 0 0 10px;
    width: 100% !important;
    display: flex;
    flex-direction: row;
    justify-content: flex-start
`

const ImageContainer = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  & img {
    width: fit-content;
  }
`

const CustomDialog = styled(Dialog)`
  max-width: 100% !important;
  width: 100%;

  & h2 {
    width: 100%;
  }
`

const CustomDialogTitle = styled(MuiDialogTitle)`
  display: flex;
  min-width: 100%;
  flex-wrap: wrap;
`

const CustomIconButton = styled(IconButton)`
  display: flex;
  justify-content: flex-end;
`

const CustomButton = styled(Button)`
  margin: 10px 0 0;
`

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
`

const CustomDialogContent = styled(DialogContent)`
  width: 1440px;
`

const BottomText = styled.div`
  margin: 10px 0 0;
`
