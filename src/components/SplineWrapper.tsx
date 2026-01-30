import React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & { url?: string }, HTMLElement>;
    }
  }
}

type Props = {
  scene: string;
  className?: string;
};

export default function SplineWrapper({ scene, className }: Props) {
  return (
    <div className={className} style={{ width: '100%', height: '100%' }}>
      <spline-viewer url={scene} style={{ width: '100%', height: '100%', display: 'block' }} />
    </div>
  );
}
