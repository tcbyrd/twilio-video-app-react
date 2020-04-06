import React, { useState, useRef, useCallback } from 'react';
import { styled } from '@material-ui/core/styles';
import SettingsDialog from '../MenuBar/SettingsDialog/SettingsDialog';

import SettingsIcon from '@material-ui/icons/Settings';
import IconButton from '@material-ui/core/IconButton';

const SettingsButton = styled(IconButton)({
  marginLeft: 'auto',
});

export default function ToggleFullscreenButton() {
  const [settingsOpen, setSettingsOpen] = useState(false);
  return (
    <div>
      <SettingsButton onClick={() => setSettingsOpen(true)}>
        <SettingsIcon />
      </SettingsButton>
      <SettingsDialog
        open={settingsOpen}
        onClose={() => {
          setSettingsOpen(false);
        }}
      />
    </div>
  );
}
