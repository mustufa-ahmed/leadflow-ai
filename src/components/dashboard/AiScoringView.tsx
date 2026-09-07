import React from 'react';
import { Award, Sparkles, CheckCircle2, Sliders, ShieldCheck, Target, Zap } from 'lucide-react';
import { Badge } from '../common/Badge';

export const AiScoringView: React.FC = () => {
  const factors = [
    { name: 'Buying Intent', weight: '25%', score: 95, desc: 'Mentions pricing, timeline, demo booking, integration needs' },
    { name: 'Engagement Level', weight: '20%', score: 90, desc: 'Response speed, multi-message depth, question frequency' },
    { name: 'Company Fit', weight: '20%', score: 94, desc: 'ICP match (Employee count, revenue bracket, industry vertical)' },
    { name: 'Budget Signals', weight: '15%', score: 88, desc: 'Enterprise requirements, volume queries, paid plan interest' },
    { name: 'Timeline Urgency', weight: '10%', score: 92, desc: 'Mentions "this month", immediate deployment, replacement of old tool' },
    { name: 'Product Interest', weight: '10%', score: 96, desc: 'Asks about specific features (HubSpot, WhatsApp API, Workflow builder)' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="rounded-2xl border border-brand-500/30 bg-gradient-to-r from-brand-950/60 to-slate-900 p-6 shadow-xl">
        <div className="flex items-center gap-2">
          <Award className="h-6 w-6 text-brand-400" />
          <h1 className="text-2xl font-bold text-white">AI Lead Scoring Engine</h1>
        </div>
        <p className="mt-2 text-xs text-slate-400 max-w-3xl">
          LeadFlow analyzes conversation signals, intent and engagement parameters to score every prospect from 0 to 100 in real time.
        </p>
      </div>

      {/* Model Breakdown Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: 6 Weight Factors */}
        <div className="lg:col-span-2 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h3 className="text-sm font-bold text-white">Algorithm Scoring Parameters</h3>
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">6 Dimension Model</span>
          </div>

          <div className="space-y-4">
            {factors.map((f) => (
              <div key={f.name} className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-white">{f.name}</span>
                    <span className="rounded bg-brand-500/10 px-2 py-0.5 text-[10px] font-semibold text-brand-400">
                      Weight: {f.weight}
                    </span>
                  </div>
                  <span className="text-sm font-extrabold text-emerald-400">{f.score} / 100</span>
                </div>

                <div className="h-2 w-full rounded-full bg-slate-800 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-brand-500 to-emerald-400 transition-all duration-500"
                    style={{ width: `${f.score}%` }}
                  />
                </div>

                <p className="text-[11px] text-slate-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Sample Benchmark Card */}
        <div className="rounded-2xl border border-brand-500/30 bg-slate-900 p-6 space-y-5">
          <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
            <Sparkles className="h-4 w-4 text-brand-400" />
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">Live Benchmark Sample</h3>
          </div>

          <div className="text-center rounded-xl bg-slate-950 p-4 border border-slate-800">
            <p className="text-xs text-slate-400">Sample Prospect</p>
            <p className="text-base font-bold text-white">Sarah Mitchell (Nova Commerce)</p>
            <div className="mt-3 text-4xl font-extrabold text-rose-400">92 / 100</div>
            <div className="mt-1">
              <Badge variant="hot">Hot Lead — High Intent</Badge>
            </div>
          </div>

          <div className="space-y-2 text-xs text-slate-300">
            <h4 className="font-bold text-slate-400 uppercase text-[10px]">Signal Highlights</h4>
            <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
              <span className="text-emerald-400 font-bold">✓ Immediate Timeline:</span> Asked about rollout speed
            </div>
            <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
              <span className="text-emerald-400 font-bold">✓ CRM Fit:</span> Uses HubSpot + 2,000 monthly leads
            </div>
          </div>

          <div className="rounded-xl bg-sky-500/10 border border-sky-500/20 p-3 text-[11px] text-sky-300">
            <strong>System Action:</strong> Auto-assigned to Sales Director & dispatched priority booking link.
          </div>
        </div>
      </div>
    </div>
  );
};
