import React from 'react';
import { BarChart3, TrendingUp, DollarSign, Clock, Users, ArrowUpRight } from 'lucide-react';
import { StatCard } from '../common/StatCard';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import { MONTHLY_METRICS, LEAD_SOURCE_DATA, QUALIFICATION_DISTRIBUTION } from '../../data/mockData';

export const AnalyticsView: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Performance Analytics</h1>
          <p className="text-xs text-slate-400">
            Deep dive into lead conversion velocity, channel performance, and ROI metrics.
          </p>
        </div>
        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg">
          DEMO METRICS ACTIVE
        </span>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard title="Leads Generated" value="1,842" change="+18.4%" trend="up" icon={Users} />
        <StatCard title="Qualified Leads" value="624" change="+12.1%" trend="up" icon={TrendingUp} />
        <StatCard title="Conversion Rate" value="18.6%" change="+2.4%" trend="up" icon={BarChart3} />
        <StatCard title="Pipeline Generated" value="$284,500" change="+$42k" trend="up" icon={DollarSign} />
      </div>

      {/* Chart 1: Conversion Trend */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <h3 className="text-sm font-bold text-white">Monthly Qualification vs Total Inbound</h3>
          <span className="text-xs text-slate-400">Jan - Jun Performance</span>
        </div>

        <div className="mt-4 h-72 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={MONTHLY_METRICS}>
              <XAxis dataKey="month" stroke="#64748b" fontSize={12} />
              <YAxis stroke="#64748b" fontSize={12} />
              <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '8px', fontSize: '12px' }} />
              <Area type="monotone" dataKey="total" name="Total Inbound" stroke="#38adf8" fill="#38adf8" fillOpacity={0.2} />
              <Area type="monotone" dataKey="qualified" name="AI Qualified" stroke="#34d399" fill="#34d399" fillOpacity={0.2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};
