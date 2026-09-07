import React from 'react';
import { LucideIcon, TrendingUp, TrendingDown } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  change?: string;
  trend?: 'up' | 'down';
  icon: LucideIcon;
  subtitle?: string;
  highlight?: boolean;
}

export const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  change,
  trend = 'up',
  icon: Icon,
  subtitle,
  highlight = false,
}) => {
  return (
    <div
      className={`relative overflow-hidden rounded-xl border p-5 transition-all duration-200 ${
        highlight
          ? 'bg-gradient-to-br from-brand-950/80 via-slate-900 to-slate-900 border-brand-500/40 shadow-lg shadow-brand-500/5'
          : 'bg-slate-900/60 border-slate-800/80 hover:border-slate-700/80'
      }`}
    >
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
          {title}
        </span>
        <div
          className={`flex h-9 w-9 items-center justify-center rounded-lg ${
            highlight ? 'bg-brand-500/20 text-brand-400' : 'bg-slate-800 text-slate-300'
          }`}
        >
          <Icon className="h-5 w-5" />
        </div>
      </div>

      <div className="mt-3 flex items-baseline justify-between">
        <div className="text-2xl font-bold tracking-tight text-white">{value}</div>
        {change && (
          <div
            className={`flex items-center text-xs font-semibold ${
              trend === 'up' ? 'text-emerald-400' : 'text-rose-400'
            }`}
          >
            {trend === 'up' ? (
              <TrendingUp className="mr-1 h-3.5 w-3.5" />
            ) : (
              <TrendingDown className="mr-1 h-3.5 w-3.5" />
            )}
            {change}
          </div>
        )}
      </div>

      {subtitle && <p className="mt-1 text-xs text-slate-500">{subtitle}</p>}

      <div className="mt-3 flex items-center justify-between border-t border-slate-800/60 pt-2 text-[10px] uppercase font-bold tracking-widest text-slate-500">
        <span>Demo Metric</span>
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
      </div>
    </div>
  );
};
