export const WALLPRESETS = [
  { id: 'single', name: 'Single Wall',  desc: 'One surface',     p: [{ name: 'Wall',       w: 60, h: 96 }] },
  { id: 'floor',  name: 'Floor',        desc: 'Flat floor',      p: [{ name: 'Floor',      w: 60, h: 60 }] },
  { id: 'shower3',name: '3-Wall Shower',desc: 'Standard shower', p: [{ name: 'Left Wall',  w: 36, h: 96 }, { name: 'Back Wall', w: 60, h: 96 }, { name: 'Right Wall', w: 36, h: 96 }] },
  { id: 'shower4', name: '4-Wall',      desc: 'Full enclosure',  p: [{ name: 'Left', w: 36, h: 96 }, { name: 'Back', w: 60, h: 96 }, { name: 'Right', w: 36, h: 96 }, { name: 'Front', w: 60, h: 42 }] },
  { id: 'backsplash', name: 'Backsplash', desc: 'Kitchen back',  p: [{ name: 'Backsplash', w: 96, h: 18 }] },
  { id: 'custom',  name: 'Custom',      desc: 'Build your own',  p: [{ name: 'Wall 1', w: 36, h: 96 }, { name: 'Wall 2', w: 60, h: 96 }, { name: 'Wall 3', w: 36, h: 96 }] },
];
