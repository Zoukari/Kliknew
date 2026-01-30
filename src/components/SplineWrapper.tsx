import React, { Component, lazy, Suspense } from 'react';

const Spline = lazy(() => import('@splinetool/react-spline'));

type Props = {
  scene: string;
  className?: string;
};

type State = {
  hasError: boolean;
};

class SplineErrorBoundary extends Component<{ children: React.ReactNode; fallback: React.ReactNode }, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.warn('Spline failed to load:', error.message);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

const SplineFallback = () => (
  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-violet-900/20 to-purple-900/10">
    <div className="text-center p-6">
      <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-violet-500/20 flex items-center justify-center">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 animate-pulse" />
      </div>
      <p className="text-violet-300/70 text-sm">KLIK</p>
    </div>
  </div>
);

const LoadingSpinner = () => (
  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-violet-900/20 to-purple-900/10">
    <div className="w-10 h-10 border-2 border-violet-500/40 border-t-violet-400 rounded-full animate-spin" />
  </div>
);

export default function SplineWrapper({ scene, className }: Props) {
  return (
    <SplineErrorBoundary fallback={<SplineFallback />}>
      <Suspense fallback={<LoadingSpinner />}>
        <Spline scene={scene} className={className} />
      </Suspense>
    </SplineErrorBoundary>
  );
}
