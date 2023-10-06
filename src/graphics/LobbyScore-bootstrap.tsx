import React from 'react';
import { createRoot } from 'react-dom/client';
import { LobbyScore } from './LobbyScore';

const root = createRoot(document.getElementById('root')!);
root.render(<LobbyScore />);
