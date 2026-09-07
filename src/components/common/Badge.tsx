import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'hot' | 'warm' | 'cold' | 'success' | 'info' | 'purple' | 'neutral';
  size?: 'sm' | 'md';
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'info', size = 'sm' }) => {
  const styles = {
    hot: 'bg-rose-500/15 text-rose-400 border-rose-500/30',
    warm: 'bg-amber-500/15 text-amber-400 border-amber-500/30',
    cold: 'bg-blue-500/15 text-blue-400 border-blue-500/30',
    success: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
    info: 'bg-sky-500/15 text-sky-400 border-sky-500/30',
    purple: 'bg-purple-500/15 text-purple-400 border-purple-500/30',
    neutral: 'bg-slate-800 text-slate-300 border-slate-700',
  };

  const sizeStyles = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-1 text-sm',
  };

  return (
    <span
      className={`inline-flex items-center font-medium rounded-full border ${styles[variant]} ${sizeStyles[size]} transition-all`}
    >
      {children}
    </span>
  );
};
