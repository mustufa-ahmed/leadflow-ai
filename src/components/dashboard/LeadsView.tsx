import React, { useState } from 'react';
import { Search, Filter, ArrowUpDown, ChevronRight, Sparkles, MessageSquare, MoreHorizontal } from 'lucide-react';
import { Lead, LeadStatus } from '../../types';
import { Badge } from '../common/Badge';

interface LeadsViewProps {
  leads: Lead[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onSelectLead: (lead: Lead) => void;
  onUpdateStatus: (leadId: string, status: LeadStatus) => void;
  onOpenChat: (leadId: string) => void;
}

export const LeadsView: React.FC<LeadsViewProps> = ({
  leads,
  searchQuery,
  setSearchQuery,
  onSelectLead,
  onUpdateStatus,
  onOpenChat,
}) => {
  const [filterStatus, setFilterStatus] = useState<string>('All');
  const [filterIntent, setFilterIntent] = useState<string>('All');

  const filteredLeads = leads.filter((lead) => {
    const matchesSearch =
      lead.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus = filterStatus === 'All' || lead.status === filterStatus;
    const matchesIntent = filterIntent === 'All' || lead.intent === filterIntent;

    return matchesSearch && matchesStatus && matchesIntent;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Lead Management</h1>
          <p className="text-xs text-slate-400">
            Intelligent lead pipeline with real-time AI scoring and sentiment signals.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-400 font-medium">Showing {filteredLeads.length} leads</span>
        </div>
      </div>

      {/* Filters & Search Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-slate-800 bg-slate-900/60 p-4">
        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5 text-xs font-semibold">
          <span className="text-slate-500 mr-1 flex items-center gap-1">
            <Filter className="h-3.5 w-3.5" /> Filter:
          </span>
          {['All', 'Hot', 'Warm', 'Cold', 'New', 'Contacted', 'Qualified', 'Converted'].map((st) => (
            <button
              key={st}
              onClick={() => {
                if (['Hot', 'Warm', 'Cold'].includes(st)) {
                  setFilterIntent(st === 'Hot' ? 'High' : st === 'Warm' ? 'Medium' : 'Low');
                  setFilterStatus('All');
                } else {
                  setFilterStatus(st);
                  setFilterIntent('All');
                }
              }}
              className={`rounded-lg px-3 py-1.5 transition-all ${
                (filterStatus === st || (['Hot', 'Warm', 'Cold'].includes(st) && filterIntent === (st === 'Hot' ? 'High' : st === 'Warm' ? 'Medium' : 'Low')))
                  ? 'bg-brand-600 text-white shadow-sm'
                  : 'bg-slate-950/60 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {st}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
          <input
            type="text"
            placeholder="Search name, company..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="h-9 w-full rounded-lg border border-slate-800 bg-slate-950 pl-9 pr-3 text-xs text-white placeholder-slate-500 focus:border-brand-500 focus:outline-none"
          />
        </div>
      </div>

      {/* Leads Table */}
      <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="border-b border-slate-800 bg-slate-950/80 uppercase tracking-wider text-slate-400 font-semibold">
              <tr>
                <th className="px-5 py-3.5">Lead Name</th>
                <th className="px-5 py-3.5">Company</th>
                <th className="px-5 py-3.5">Source</th>
                <th className="px-5 py-3.5">AI Score</th>
                <th className="px-5 py-3.5">Intent</th>
                <th className="px-5 py-3.5">Status</th>
                <th className="px-5 py-3.5">Owner</th>
                <th className="px-5 py-3.5">Last Activity</th>
                <th className="px-5 py-3.5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {filteredLeads.map((lead) => (
                <tr
                  key={lead.id}
                  onClick={() => onSelectLead(lead)}
                  className="hover:bg-slate-800/40 cursor-pointer transition-colors"
                >
                  {/* Name */}
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-tr from-brand-600 to-indigo-500 font-bold text-white text-xs">
                        {lead.name.split(' ').map((n) => n[0]).join('')}
                      </div>
                      <div>
                        <p className="font-bold text-white">{lead.name}</p>
                        <p className="text-[11px] text-slate-400">{lead.role}</p>
                      </div>
                    </div>
                  </td>

                  {/* Company */}
                  <td className="px-5 py-4 font-semibold text-slate-200">{lead.company}</td>

                  {/* Source */}
                  <td className="px-5 py-4 text-slate-400">{lead.source}</td>

                  {/* AI Score */}
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-1.5">
                      <span className={`font-extrabold text-sm ${lead.aiScore >= 80 ? 'text-rose-400' : lead.aiScore >= 60 ? 'text-amber-400' : 'text-blue-400'}`}>
                        {lead.aiScore}
                      </span>
                      <span className="text-[10px] text-slate-500">/ 100</span>
                    </div>
                  </td>

                  {/* Intent */}
                  <td className="px-5 py-4">
                    <Badge variant={lead.intent === 'High' ? 'hot' : lead.intent === 'Medium' ? 'warm' : 'cold'}>
                      {lead.intent}
                    </Badge>
                  </td>

                  {/* Status */}
                  <td className="px-5 py-4">
                    <Badge variant={lead.status === 'Qualified' || lead.status === 'Converted' ? 'success' : 'info'}>
                      {lead.status}
                    </Badge>
                  </td>

                  {/* Owner */}
                  <td className="px-5 py-4 text-slate-300 font-medium">{lead.owner}</td>

                  {/* Last Activity */}
                  <td className="px-5 py-4 text-slate-400 text-[11px]">{lead.lastActivity}</td>

                  {/* Actions */}
                  <td className="px-5 py-4 text-right">
                    <div className="flex items-center justify-end gap-2" onClick={(e) => e.stopPropagation()}>
                      <button
                        onClick={() => onOpenChat(lead.id)}
                        title="Chat"
                        className="rounded-lg border border-slate-800 bg-slate-950 p-1.5 text-slate-400 hover:text-white hover:bg-slate-800"
                      >
                        <MessageSquare className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => onSelectLead(lead)}
                        className="rounded-lg border border-slate-800 bg-slate-950 p-1.5 text-slate-400 hover:text-white hover:bg-slate-800"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredLeads.length === 0 && (
            <div className="py-12 text-center text-slate-400">
              No leads match your filter or search query.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
