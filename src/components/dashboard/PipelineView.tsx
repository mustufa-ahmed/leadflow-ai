import React, { useState } from 'react';
import { Lead, LeadStatus } from '../../types';
import { Badge } from '../common/Badge';
import { Sparkles, DollarSign, ChevronRight, ChevronLeft } from 'lucide-react';

interface PipelineViewProps {
  leads: Lead[];
  onSelectLead: (lead: Lead) => void;
  onUpdateStatus: (leadId: string, newStatus: LeadStatus) => void;
}

export const PipelineView: React.FC<PipelineViewProps> = ({ leads, onSelectLead, onUpdateStatus }) => {
  const columns: { id: LeadStatus; label: string; color: string }[] = [
    { id: 'New', label: 'New Inbound', color: 'border-blue-500/40 text-blue-400' },
    { id: 'Contacted', label: 'Contacted', color: 'border-sky-500/40 text-sky-400' },
    { id: 'Qualified', label: 'AI Qualified', color: 'border-emerald-500/40 text-emerald-400' },
    { id: 'Proposal', label: 'Proposal Sent', color: 'border-purple-500/40 text-purple-400' },
    { id: 'Converted', label: 'Deal Won', color: 'border-emerald-400 text-emerald-300' },
    { id: 'Lost', label: 'Disqualified / Lost', color: 'border-rose-500/40 text-rose-400' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">CRM Pipeline Board</h1>
          <p className="text-xs text-slate-400">
            Interactive Kanban pipeline tracking lead deals from initial qualification to deal win.
          </p>
        </div>
      </div>

      {/* Kanban Board Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 overflow-x-auto pb-4">
        {columns.map((col) => {
          const colLeads = leads.filter((l) => l.status === col.id);
          const totalValue = colLeads.reduce((acc, curr) => acc + curr.dealValue, 0);

          return (
            <div key={col.id} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-3 flex flex-col min-w-[220px]">
              {/* Column Header */}
              <div className={`border-b border-slate-800 pb-3 mb-3`}>
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-bold uppercase tracking-wider ${col.color}`}>{col.label}</span>
                  <span className="rounded-full bg-slate-800 px-2 py-0.5 text-[10px] font-bold text-slate-300">
                    {colLeads.length}
                  </span>
                </div>
                <div className="mt-1 text-[11px] font-bold text-slate-400 flex items-center gap-1">
                  <DollarSign className="h-3 w-3 text-slate-500" />
                  <span>${totalValue.toLocaleString()}</span>
                </div>
              </div>

              {/* Column Cards */}
              <div className="space-y-3 flex-1">
                {colLeads.map((lead) => (
                  <div
                    key={lead.id}
                    onClick={() => onSelectLead(lead)}
                    className="rounded-xl border border-slate-800 bg-slate-950 p-3 hover:border-slate-700 cursor-pointer shadow-md transition-all space-y-2 group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-white group-hover:text-brand-400 transition-colors">
                        {lead.name}
                      </span>
                      <Badge variant={lead.aiScore >= 80 ? 'hot' : 'warm'}>
                        {lead.aiScore}
                      </Badge>
                    </div>

                    <p className="text-[11px] text-slate-400">{lead.company}</p>

                    <div className="flex items-center justify-between text-[10px] text-slate-400 border-t border-slate-800/60 pt-2">
                      <span className="font-semibold text-emerald-400">${lead.dealValue.toLocaleString()}</span>
                      <span>{lead.owner}</span>
                    </div>

                    {/* Move Controls */}
                    <div className="flex items-center justify-between border-t border-slate-800/40 pt-2" onClick={(e) => e.stopPropagation()}>
                      <button
                        disabled={col.id === 'New'}
                        onClick={() => {
                          const idx = columns.findIndex((c) => c.id === col.id);
                          if (idx > 0) onUpdateStatus(lead.id, columns[idx - 1].id);
                        }}
                        className="p-1 rounded text-slate-500 hover:text-white disabled:opacity-30"
                      >
                        <ChevronLeft className="h-3.5 w-3.5" />
                      </button>
                      <span className="text-[9px] text-slate-500">Move</span>
                      <button
                        disabled={col.id === 'Lost'}
                        onClick={() => {
                          const idx = columns.findIndex((c) => c.id === col.id);
                          if (idx < columns.length - 1) onUpdateStatus(lead.id, columns[idx + 1].id);
                        }}
                        className="p-1 rounded text-slate-500 hover:text-white disabled:opacity-30"
                      >
                        <ChevronRight className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                ))}

                {colLeads.length === 0 && (
                  <div className="h-24 rounded-xl border border-dashed border-slate-800/80 flex items-center justify-center text-[11px] text-slate-600">
                    Empty Stage
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
