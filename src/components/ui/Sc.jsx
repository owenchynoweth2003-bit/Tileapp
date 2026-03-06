import React from 'react';

export const Sc = ({ title, children, color = '#94a3b8' }) => (
  <div style={{ marginBottom: 20 }}>
    <div style={{ fontSize: 10, color: '#94a3b8', letterSpacing: 1.5, marginBottom: 10, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 8, textTransform: 'uppercase' }}>
      <div style={{ width: 2, height: 14, background: color, borderRadius: 1, opacity: 0.4 }} />{title}
    </div>
    {children}
  </div>
);
