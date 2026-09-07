import React, { useState } from 'react';
import { INITIAL_AUTOMATIONS } from '../../data/mockData';
import { Zap, Play, Pause, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';
import { AutomationRule } from '../../types';

export const AutomationsListView: React.FC = () => {
  const [automations, setAutomations] = useState<AutomationRule[]>(INITIAL_AUTOMATIONS);
  const [toast, setToast] = useState<string | null>(null);

  const toggleStatus = (id: string) => {
    setAutomations(
      automations.map((a) => {
        if (a.id === id) {
          const newStatus = a.status === 'active' ? 'paused' : 'active';
          showToast(`Automation "${a.title}" is now ${newStatus.toUpperCase()}`);
          return { ...a, status: newStatus };
        }
        return a;
      })
    );
  };

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  };

  return (
    <div className="space-y-6">
      {/* Toast Alert */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 rounded-xl border border-brand-500 bg-slate-900 p-4 text-xs font-bold text-white shadow-2xl animate-fade-in flex items-center gap-2">
          <CheckCircle2 className="h-4 w-4 text-emerald-400" />
          <span>{toast}</span>
        </div>
      )}

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Active Automations</h1>
          <p className="text-xs text-slate-400">
            Manage automated lead qualification triggers, follow-up rules, and sales team alerts.
          </p>
        </div>
      </div>

      {/* Automation Cards List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {automations.map((auto) => (
          <div
            key={auto.id}
            className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 flex flex-col justify-between space-y-4 hover:border-slate-700 transition-all shadow-lg"
          >
            <div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-500/10 text-brand-400">
                    <Zap className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">{auto.title}</h3>
                    <p className="text-[11px] text-slate-400">Trigger: {auto.trigger}</p>
                  </div>
                </div>

                {/* Toggle Button */}
                <button
                  onClick={() => toggleStatus(auto.id)}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold transition-all ${
                    auto.status === 'active'
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                      : 'bg-slate-800 text-slate-400 border border-slate-700'
                  }`}
                >
                  {auto.status === 'active' ? <Play className="h-3 w-3 fill-emerald-400" /> : <Pause className="h-3 w-3" />}
                  <span className="capitalize">{auto.status}</span>
                </button>
              </div>

              <p className="mt-3 text-xs text-slate-300">{auto.description}</p>

              {/* Actions List */}
              <div className="mt-4 space-y-1.5 border-t border-slate-800/80 pt-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Actions Triggered</span>
                <div className="flex flex-wrap gap-1.5">
                  {auto.actions.map((act, i) => (
                    <span key={i} className="rounded-lg bg-slate-950 px-2.5 py-1 text-[11px] font-semibold text-slate-300 border border-slate-800">
                      {act}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer Stats */}
            <div className="flex items-center justify-between border-t border-slate-800/80 pt-3 text-[11px] text-slate-400">
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5 text-slate-500" /> Last run {auto.lastRun}
              </span>
              <span className="font-bold text-white">{auto.runCount.toLocaleString()} total runs</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
