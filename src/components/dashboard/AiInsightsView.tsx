import React from 'react';
import { Lightbulb, Sparkles, TrendingUp, Clock, Zap, ArrowRight } from 'lucide-react';

export const AiInsightsView: React.FC = () => {
  const insights = [
    {
      id: '01',
      title: 'Website leads have the highest qualification rate (42%)',
      category: 'Channel Intelligence',
      impact: 'High Impact',
      description:
        'Inbound inquiries from the primary website landing page demonstrate a 42% qualification rate compared to 28% for social campaigns. Recommendation: Increase website chat widget visibility.',
      icon: TrendingUp,
      color: 'text-brand-400 border-brand-500/30 bg-brand-500/10',
    },
    {
      id: '02',
      title: 'Leads responding within 5 minutes are 3.4x more likely to convert',
      category: 'Response Latency',
      impact: 'Critical Factor',
      description:
        'AI automated instant replies maintain lead engagement at peak intent. Manual SDR follow-ups delayed by 1 hour suffered a 68% drop in meeting bookings.',
      icon: Clock,
      color: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10',
    },
    {
      id: '03',
      title: 'AI-qualified leads show 28% faster pipeline velocity',
      category: 'Pipeline Optimization',
      impact: 'Revenue Growth',
      description:
        'Prospects scored 80+ move from New to Proposal stage in an average of 4.2 days vs 12.8 days for un-scored leads.',
      icon: Zap,
      color: 'text-purple-400 border-purple-500/30 bg-purple-500/10',
    },
    {
      id: '04',
      title: 'Multi-touch automated follow-ups increase response rate by 34%',
      category: 'Automation Efficacy',
      impact: 'High Impact',
      description:
        'Enrolling leads into Rule #02 (High-Intent Follow-Up) resulted in 34% higher meeting scheduling rates compared to single touchpoint emails.',
      icon: Sparkles,
      color: 'text-amber-400 border-amber-500/30 bg-amber-500/10',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="rounded-2xl border border-brand-500/30 bg-gradient-to-r from-brand-950/60 to-slate-900 p-6 shadow-xl">
        <div className="flex items-center gap-2">
          <Lightbulb className="h-6 w-6 text-brand-400" />
          <h1 className="text-2xl font-bold text-white">AI Strategic Insights</h1>
        </div>
        <p className="mt-2 text-xs text-slate-400 max-w-2xl">
          Machine-learning recommendations generated from conversation sentiment, pipeline movement, and response patterns.
        </p>
      </div>

      {/* Insights Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {insights.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 flex flex-col justify-between space-y-4 hover:border-slate-700 transition-all shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
                    Insight #{item.id} • {item.category}
                  </span>
                  <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold border ${item.color}`}>
                    {item.impact}
                  </span>
                </div>

                <h3 className="mt-3 text-base font-bold text-white leading-snug">{item.title}</h3>
                <p className="mt-2 text-xs text-slate-300 leading-relaxed">{item.description}</p>
              </div>

              <div className="border-t border-slate-800/80 pt-3 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                <span>Derived from demo dataset</span>
                <span className="flex items-center gap-1 text-brand-400 hover:text-brand-300 font-semibold cursor-pointer">
                  <span>Apply Recommendation</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
