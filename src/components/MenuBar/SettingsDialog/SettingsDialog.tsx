import React, { PropsWithChildren } from 'react';
import VideoSettingsDropdown from './VideoSettingsDropdown';
import AudioSettingsDropdown from './AudioSettingsDropdown';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

interface SettingsDialogProps {
  open: boolean;
  onClose(): void;
}

function SettingsDialog({ open, onClose }: PropsWithChildren<SettingsDialogProps>) {
  return (
    <Dialog open={open} onClose={onClose} fullWidth={true} maxWidth="xs">
      <DialogTitle>Settings:</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Video Source: <VideoSettingsDropdown />
        </DialogContentText>
        <DialogContentText>
          Audio Source: <AudioSettingsDropdown />
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary" autoFocus>
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default SettingsDialog;
