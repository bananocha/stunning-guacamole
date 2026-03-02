import { Component, type ReactNode } from 'react';
import { AlertTriangle, RotateCcw, DoorClosed } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  handleReload = () => {
    this.setState({ hasError: false, error: null });
    window.location.reload();
  };

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (!this.state.hasError) return this.props.children;

    return (
      <div className="fixed inset-0 z-[999] bg-[#0a0e1a] flex items-center justify-center font-sans overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(239,68,68,0.1) 0%, transparent 70%)' }}
        />

        {/* Dialog */}
        <div
          className="relative w-[90%] max-w-[520px] rounded-xl border border-white/15 overflow-hidden animate-[slideUp_0.5s_ease-out]"
          style={{
            background: 'rgba(255,255,255,0.08)',
            backdropFilter: 'blur(30px)',
            WebkitBackdropFilter: 'blur(30px)',
            boxShadow: '0 25px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)',
          }}
        >
          {/* Title bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-white/15 to-transparent border-b border-white/8">
            <div className="flex items-center gap-2">
              <AlertTriangle size={14} className="text-red-400" />
              <span className="text-[11px] font-bold uppercase tracking-wide text-white/90">
                System Error — Application Crash
              </span>
            </div>
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full border border-white/20 bg-yellow-400" />
              <div className="w-3 h-3 rounded-full border border-white/20 bg-red-500" />
            </div>
          </div>

          {/* Body */}
          <div className="p-8 text-center text-white">
            {/* Error icon */}
            <div className="w-[72px] h-[72px] mx-auto mb-5 rounded-full bg-red-500/10 border border-red-500/25 flex items-center justify-center animate-pulse">
              <AlertTriangle size={32} className="text-red-400" />
            </div>

            <h1 className="text-lg font-bold mb-2 text-white/90">
              Something went wrong
            </h1>
            <p className="text-sm text-white/50 leading-relaxed mb-6">
              An unexpected error occurred and the application could not recover.<br />
              You can try restarting the session or reloading the system.
            </p>

            {/* Error details (collapsible) */}
            {this.state.error && (
              <details className="mb-6 text-left">
                <summary className="text-[10px] uppercase tracking-widest text-white/30 cursor-pointer hover:text-white/50 transition-colors font-bold">
                  Error Details
                </summary>
                <div className="mt-3 p-4 bg-black/30 border border-white/10 rounded-lg overflow-auto max-h-32">
                  <code className="text-[11px] font-mono text-red-300/70 whitespace-pre-wrap break-all">
                    {this.state.error.message}
                  </code>
                </div>
              </details>
            )}

            {/* Action buttons */}
            <div className="flex items-center justify-center gap-3">
              <button
                onClick={this.handleReset}
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/15 bg-white/5 text-sm font-semibold text-white hover:bg-white/10 active:scale-95 transition-all min-h-[44px]"
              >
                <DoorClosed size={16} />
                Try Again
              </button>
              <button
                onClick={this.handleReload}
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-blue-400/30 bg-blue-500/20 text-sm font-semibold text-white hover:bg-blue-500/30 active:scale-95 transition-all min-h-[44px]"
              >
                <RotateCcw size={16} />
                Reload System
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="px-6 py-3 border-t border-white/5 text-center">
            <span className="text-[9px] uppercase tracking-widest text-white/15">
              Maximiv OS v.2.5 • Error Handler
            </span>
          </div>
        </div>
      </div>
    );
  }
}
