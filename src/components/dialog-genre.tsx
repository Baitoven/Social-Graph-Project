import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import CloseIcon from '@material-ui/icons/Close'
import IconButton from '@material-ui/core/IconButton'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import { DialogContent } from '@material-ui/core'
import styled from 'styled-components'

import action from "../images/genres/Action.png"
import adventure from "../images/genres/Adventure.png"
import casual from "../images/genres/Casual.png"
import design from "../images/genres/Design.png"
import early_access from "../images/genres/Early_Access.png"
import free_to_play from "../images/genres/Free-To-Play.png"
import gore from "../images/genres/Gore.png"
import indi from "../images/genres/Indi.png"
import massivly_mutli from "../images/genres/Massivly_Multiplayer.png"
import movie from "../images/genres/Movie.png"
import nudity from "../images/genres/Nudity.png"
import photo from "../images/genres/Photo.png"
import racing from "../images/genres/Racing.png"
import rpg from "../images/genres/RPG.png"
import sexual from "../images/genres/Sexual.png"
import simulation from "../images/genres/Similation.png"
import sports from "../images/genres/Sports.png"
import strategy from "../images/genres/Strategy.png"
import utilities from "../images/genres/Utilities.png"
import video from "../images/genres/Video.png"
import violent from "../images/genres/Violent.png"


export interface IProps {
    imageSet: string;
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

export default function GenreDialogs(props: TProps) {
    const { imageSet } = props

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const selectImageSet = (imageSetv: string) => {
      switch (imageSetv) {
        case "action":
          return (
            <img src={action} />
          )
        case "adventure":
          return (
            <img src={adventure} />
          )
        case "casual":
          return (
            <img src={casual} />
          )
        case "design":
          return (
            <img src={design} />
          )
        case "early_access":
          return (
            <img src={early_access} />
          )
        case "free_to_play":
          return (
            <img src={free_to_play} />
          )
        case "gore":
          return (
            <img src={gore} />
          )
        case "indi":
          return (
            <img src={indi} />
          )
        case "massivly_mutli":
          return (
            <img src={massivly_mutli} />
          )
        case "movie":
          return (
            <img src={movie} />
          )
        case "nudity":
          return (
            <img src={nudity} />
          )
        case "photo":
          return (
            <img src={photo} />
          )
        case "racing":
          return (
            <img src={racing} />
          )
        case "rpg":
          return (
            <img src={rpg} />
          )
        case "sexual":
          return (
            <img src={sexual} />
          )
        case "simulation":
          return (
            <img src={simulation} />
          )
        case "sports":
          return (
            <img src={sports} />
          )
        case "strategy":
          return (
            <img src={strategy} />
          )
        case "utilities":
          return (
            <img src={utilities} />
          )
        case "video":
          return (
            <img src={video} />
          )
        case "violent":
          return (
            <img src={violent} />
          )
        default:
          return null
        
      }
    }

    return (
      <MainContainer>
        <CustomButton variant="outlined" color="primary" onClick={handleClickOpen}>
            {imageSet}
        </CustomButton>
        <Dialog onClose={handleClose} open={open} maxWidth={false}>
            <DialogTitle onClose={handleClose}>
              Genre: {imageSet}
            </DialogTitle>
            <CustomDialogContent dividers>
                <ImageContainer>
                  {selectImageSet(imageSet)}
                </ImageContainer>
            </CustomDialogContent>
        </Dialog>
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
  width: 550px;
  height: 290px;
  justify-content: center;
  display: flex;

  & img {
    width: inherit;
    object-fit: cover;
    object-position: 0 -40px;
  }
`

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
`

const CustomDialogContent = styled(DialogContent)`
  width: 600px;
`

const CustomButton = styled(Button)`
  margin: 5px;
`
