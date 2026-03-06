import { useState, useCallback } from 'react';
import { WALLPRESETS } from '../domain/walls.js';

export function useSpaceConfig() {
  const [wallType, setWallType] = useState('single');
  const [walls, setWalls]       = useState(WALLPRESETS[0].p.map(p => ({ ...p })));
  const [aw, setAw]             = useState(0);
  const [feats, setFeats]       = useState([]);

  return { wallType, setWallType, walls, setWalls, aw, setAw, feats, setFeats };
}
