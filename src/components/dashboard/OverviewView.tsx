import React from 'react';
import { StatCard } from '../common/StatCard';
import {
  Users,
  CheckCircle,
  TrendingUp,
  DollarSign,
  Clock,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
} from 'recharts';
import { MONTHLY_METRICS, LEAD_SOURCE_DATA, QUALIFICATION_DISTRIBUTION, INITIAL_LEADS } from '../../data/mockData';
import { DashboardTab, Lead } from '../../types';
import { Badge } from '../common/Badge';

interface OverviewViewProps {
  onSelectLead: (lead: Lead) => void;
  onNavigateToTab: (tab: DashboardTab) => void;
}

export const OverviewView: React.FC<OverviewViewProps> = ({ onSelectLead, onNavigateToTab }) => {
  return (
    <div className="space-y-6">
      {/* Overview Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl border border-brand-500/30 bg-gradient-to-r from-brand-950/60 via-slate-900 to-slate-900 p-6 shadow-xl">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold text-white">Dashboard Overview</h1>
            <span className="rounded-full bg-brand-500/20 px-2.5 py-0.5 text-xs font-semibold text-brand-400 border border-brand-500/30">
              Live State
            </span>
          </div>
          <p className="mt-1 text-xs text-slate-400">
            Real-time lead qualification metrics, pipeline values, and channel performance.
          </p>
        </div>

        <button
          onClick={() => onNavigateToTab('workflow-builder')}
          className="flex items-center gap-2 rounded-xl bg-brand-600 px-4 py-2.5 text-xs font-semibold text-white shadow-lg shadow-brand-500/20 hover:bg-brand-500 transition-all self-start sm:self-auto"
        >
          <Sparkles className="h-4 w-4" />
          <span>Test Workflow Simulation</span>
        </button>
      </div>

      {/* 5 Core Metric Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
        <StatCard
          title="Total Leads"
          value="1,842"
          change="+18.4%"
          trend="up"
          icon={Users}
          subtitle="Monthly inbound total"
          highlight
        />
        <StatCard
          title="Qualified Leads"
          value="624"
          change="+12.1%"
          trend="up"
          icon={CheckCircle}
          subtitle="33.8% qualification rate"
        />
        <StatCard
          title="Conversion Rate"
          value="18.6%"
          change="+2.4%"
          trend="up"
          icon={TrendingUp}
          subtitle="Lead to Customer"
        />
        <StatCard
          title="Pipeline Value"
          value="$284,500"
          change="+$42k"
          trend="up"
          icon={DollarSign}
          subtitle="Active deals"
        />
        <StatCard
          title="Avg Response Time"
          value="1m 42s"
          change="-45s"
          trend="up"
          icon={Clock}
          subtitle="Automated AI latency"
        />
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Lead Growth Chart */}
        <div className="lg:col-span-2 rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
          <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
            <div>
              <h3 className="text-sm font-bold text-white">Lead Volume & Qualification Growth</h3>
              <p className="text-xs text-slate-400">Monthly trend over the last 6 months</p>
            </div>
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">DEMO DATA</span>
          </div>

          <div className="mt-4 h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={MONTHLY_METRICS}>
                <defs>
                  <linearGradient id="totalGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#38adf8" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#38adf8" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="qualGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#34d399" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#34d399" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="month" stroke="#64748b" fontSize={11} />
                <YAxis stroke="#64748b" fontSize={11} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '8px', fontSize: '12px' }}
                />
                <Area type="monotone" dataKey="total" name="Total Leads" stroke="#38adf8" fillOpacity={1} fill="url(#totalGrad)" />
                <Area type="monotone" dataKey="qualified" name="Qualified Leads" stroke="#34d399" fillOpacity={1} fill="url(#qualGrad)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Lead Sources Donut Chart */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
          <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
            <div>
              <h3 className="text-sm font-bold text-white">Lead Sources</h3>
              <p className="text-xs text-slate-400">Distribution by channel</p>
            </div>
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">DEMO DATA</span>
          </div>

          <div className="mt-2 h-52 w-full flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={LEAD_SOURCE_DATA}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={75}
                  paddingAngle={4}
                  dataKey="value"
                >
                  {LEAD_SOURCE_DATA.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '8px', fontSize: '12px' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-2 grid grid-cols-2 gap-2 text-xs">
            {LEAD_SOURCE_DATA.map((source) => (
              <div key={source.name} className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: source.color }} />
                <span className="text-slate-300">{source.name}</span>
                <span className="ml-auto font-bold text-white">{source.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Top High-Intent Leads & Qualification Distribution */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Top High-Intent Leads */}
        <div className="lg:col-span-2 rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
          <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
            <div>
              <h3 className="text-sm font-bold text-white">High-Priority Hot Leads</h3>
              <p className="text-xs text-slate-400">Leads with AI score &gt; 80 requiring immediate attention</p>
            </div>
            <button
              onClick={() => onNavigateToTab('leads')}
              className="flex items-center gap-1 text-xs font-semibold text-brand-400 hover:text-brand-300"
            >
              <span>View All</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </button>
          </div>

          <div className="mt-4 divide-y divide-slate-800/60">
            {INITIAL_LEADS.filter((l) => l.aiScore >= 80).map((lead) => (
              <div
                key={lead.id}
                onClick={() => onSelectLead(lead)}
                className="flex items-center justify-between py-3 hover:bg-slate-800/40 px-2 rounded-lg cursor-pointer transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-500/20 text-brand-400 font-bold text-xs">
                    {lead.name.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">{lead.name}</p>
                    <p className="text-[11px] text-slate-400">{lead.company} • {lead.role}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <span className="text-sm font-extrabold text-rose-400">{lead.aiScore} / 100</span>
                    <p className="text-[10px] text-slate-500">{lead.source}</p>
                  </div>
                  <Badge variant={lead.intent === 'High' ? 'hot' : 'warm'}>
                    {lead.intent} Intent
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Qualification Distribution Bar Chart */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
          <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
            <div>
              <h3 className="text-sm font-bold text-white">Lead Qualification Segments</h3>
              <p className="text-xs text-slate-400">Score distribution</p>
            </div>
          </div>

          <div className="mt-4 h-56 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={QUALIFICATION_DISTRIBUTION}>
                <XAxis dataKey="status" stroke="#64748b" fontSize={10} />
                <YAxis stroke="#64748b" fontSize={10} />
                <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '8px', fontSize: '12px' }} />
                <Bar dataKey="count" fill="#38adf8" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};
