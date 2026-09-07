import React, { useState } from 'react';
import { INITIAL_INTEGRATIONS } from '../../data/mockData';
import { Modal } from '../common/Modal';
import { Layers, MessageSquare, Database, Globe, Bell, Cloud, Zap, Mail, CheckCircle, Info } from 'lucide-react';
import { Integration } from '../../types';

export const IntegrationsView: React.FC = () => {
  const [selectedInt, setSelectedInt] = useState<Integration | null>(null);

  const getIcon = (name: string) => {
    switch (name) {
      case 'MessageSquare': return MessageSquare;
      case 'Database': return Database;
      case 'Globe': return Globe;
      case 'Bell': return Bell;
      case 'Cloud': return Cloud;
      case 'Zap': return Zap;
      default: return Mail;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Integrations Ecosystem</h1>
          <p className="text-xs text-slate-400">
            Connect LeadFlow AI to your existing CRM, messaging channels, and sales tools.
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {INITIAL_INTEGRATIONS.map((int) => {
          const Icon = getIcon(int.iconName);
          return (
            <div
              key={int.id}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 flex flex-col justify-between space-y-4 hover:border-slate-700 transition-all shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/10 text-brand-400 border border-brand-500/20">
                    <Icon className="h-5 w-5" />
                  </div>

                  {int.connected ? (
                    <span className="flex items-center gap-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 px-2.5 py-0.5 text-[10px] font-bold text-emerald-400">
                      <CheckCircle className="h-3 w-3" /> Connected Concept
                    </span>
                  ) : (
                    <span className="rounded-full bg-slate-800 px-2.5 py-0.5 text-[10px] font-bold text-slate-400">
                      Available
                    </span>
                  )}
                </div>

                <h3 className="mt-3 text-base font-bold text-white">{int.name}</h3>
                <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">{int.category}</span>
                <p className="mt-2 text-xs text-slate-300">{int.description}</p>
              </div>

              <div className="border-t border-slate-800/80 pt-3">
                <button
                  onClick={() => setSelectedInt(int)}
                  className="w-full rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold py-2 transition-colors border border-slate-700"
                >
                  {int.connected ? 'Configure Settings' : 'Connect Integration'}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Concept Modal */}
      <Modal
        isOpen={!!selectedInt}
        onClose={() => setSelectedInt(null)}
        title={selectedInt ? `${selectedInt.name} Integration Concept` : ''}
      >
        <div className="space-y-4 text-xs text-slate-300">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-300">
            <Info className="h-5 w-5 shrink-0" />
            <p>
              <strong>Integration Concept / Demo:</strong> Real API connections to third-party providers ({selectedInt?.name}) are available in the full enterprise implementation.
            </p>
          </div>

          <p>
            In production deployments, LeadFlow AI synchronizes lead scores, contact tags, and conversation transcript links automatically via OAuth 2.0 and REST webhooks.
          </p>

          <div className="border-t border-slate-800 pt-4 flex justify-end">
            <button
              onClick={() => setSelectedInt(null)}
              className="px-4 py-2 rounded-xl bg-brand-600 text-white font-bold text-xs"
            >
              Got it
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
