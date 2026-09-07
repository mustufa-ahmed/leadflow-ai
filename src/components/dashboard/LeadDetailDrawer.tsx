import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, Send, MessageSquare, Clock, User, Building, Mail, Phone, ShieldCheck } from 'lucide-react';
import { Lead, LeadStatus } from '../../types';
import { Badge } from '../common/Badge';

interface LeadDetailDrawerProps {
  lead: Lead | null;
  onClose: () => void;
  onUpdateStatus: (leadId: string, newStatus: LeadStatus) => void;
  onOpenChat: (leadId: string) => void;
}

export const LeadDetailDrawer: React.FC<LeadDetailDrawerProps> = ({
  lead,
  onClose,
  onUpdateStatus,
  onOpenChat,
}) => {
  if (!lead) return null;

  const [notes, setNotes] = useState<string[]>(['Customer requested HubSpot API integration details.']);
  const [newNote, setNewNote] = useState('');
  const [followupSent, setFollowupSent] = useState(false);

  const handleAddNote = () => {
    if (!newNote.trim()) return;
    setNotes([...notes, newNote.trim()]);
    setNewNote('');
  };

  const handleTriggerFollowup = () => {
    setFollowupSent(true);
    setTimeout(() => setFollowupSent(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity" onClick={onClose} />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-xl bg-slate-900 border-l border-slate-800 shadow-2xl flex flex-col">
          {/* Header */}
          <div className="p-6 border-b border-slate-800 bg-slate-950/60 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-brand-600 to-indigo-500 text-white font-bold text-lg">
                {lead.name.split(' ').map((n) => n[0]).join('')}
              </div>
              <div>
                <h2 className="text-lg font-bold text-white">{lead.name}</h2>
                <p className="text-xs text-slate-400">{lead.company} • {lead.role}</p>
              </div>
            </div>
            <button onClick={onClose} className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800">
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Drawer Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {/* Quick Actions Bar */}
            <div className="flex flex-wrap items-center gap-2 border-b border-slate-800 pb-4">
              <button
                onClick={() => onOpenChat(lead.id)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-600 hover:bg-brand-500 text-white text-xs font-semibold"
              >
                <MessageSquare className="h-3.5 w-3.5" />
                <span>Open Conversation</span>
              </button>

              <button
                onClick={handleTriggerFollowup}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700"
              >
                <Send className="h-3.5 w-3.5 text-brand-400" />
                <span>{followupSent ? 'Follow-up Sent ✓' : 'Trigger Automated Follow-up'}</span>
              </button>
            </div>

            {/* AI Scoring Analysis Banner */}
            <div className="rounded-xl border border-brand-500/30 bg-gradient-to-br from-brand-950/60 to-slate-900 p-4 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-brand-400" />
                  <span className="text-xs font-bold text-white uppercase tracking-wider">AI Qualification Analysis</span>
                </div>
                <Badge variant={lead.aiScore >= 80 ? 'hot' : lead.aiScore >= 50 ? 'warm' : 'cold'}>
                  Score: {lead.aiScore} / 100
                </Badge>
              </div>

              <div className="grid grid-cols-3 gap-2 text-center text-xs border-t border-slate-800/80 pt-3">
                <div className="bg-slate-950/60 p-2 rounded-lg border border-slate-800">
                  <span className="text-[10px] text-slate-400 block uppercase font-semibold">Intent</span>
                  <span className="font-bold text-white">{lead.intent}</span>
                </div>
                <div className="bg-slate-950/60 p-2 rounded-lg border border-slate-800">
                  <span className="text-[10px] text-slate-400 block uppercase font-semibold">Buying Stage</span>
                  <span className="font-bold text-white">{lead.buyingStage}</span>
                </div>
                <div className="bg-slate-950/60 p-2 rounded-lg border border-slate-800">
                  <span className="text-[10px] text-slate-400 block uppercase font-semibold">Deal Value</span>
                  <span className="font-bold text-emerald-400">${lead.dealValue.toLocaleString()}</span>
                </div>
              </div>

              <div className="text-xs text-slate-300 bg-slate-950/80 p-3 rounded-lg border border-slate-800">
                <span className="font-bold text-brand-400">AI Executive Summary: </span>
                {lead.aiSummary}
              </div>
            </div>

            {/* Profile Info */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Lead Profile</h3>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="flex items-center gap-2 bg-slate-950/50 p-2.5 rounded-lg border border-slate-800">
                  <Mail className="h-4 w-4 text-slate-500" />
                  <span className="text-slate-300 truncate">{lead.email}</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-950/50 p-2.5 rounded-lg border border-slate-800">
                  <Phone className="h-4 w-4 text-slate-500" />
                  <span className="text-slate-300">{lead.phone}</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-950/50 p-2.5 rounded-lg border border-slate-800">
                  <Building className="h-4 w-4 text-slate-500" />
                  <span className="text-slate-300">{lead.company}</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-950/50 p-2.5 rounded-lg border border-slate-800">
                  <User className="h-4 w-4 text-slate-500" />
                  <span className="text-slate-300">Owner: {lead.owner}</span>
                </div>
              </div>
            </div>

            {/* Status Selector */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Update Lead Status</label>
              <select
                value={lead.status}
                onChange={(e) => onUpdateStatus(lead.id, e.target.value as LeadStatus)}
                className="w-full h-9 rounded-lg border border-slate-700 bg-slate-950 px-3 text-xs text-white focus:border-brand-500 focus:outline-none"
              >
                <option value="New">New</option>
                <option value="Contacted">Contacted</option>
                <option value="Qualified">Qualified</option>
                <option value="Proposal">Proposal</option>
                <option value="Converted">Converted</option>
                <option value="Lost">Lost</option>
              </select>
            </div>

            {/* Activity Timeline */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Activity Timeline</h3>
              <div className="space-y-3 pl-2 border-l-2 border-slate-800">
                {lead.timeline.map((item, idx) => (
                  <div key={idx} className="relative pl-4">
                    <div className="absolute -left-[21px] top-1 h-2.5 w-2.5 rounded-full bg-brand-500 border border-slate-900" />
                    <p className="text-xs font-semibold text-white">{item.event}</p>
                    <p className="text-[10px] text-slate-500">{item.date}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Notes Section */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Rep Notes</h3>
              <div className="space-y-2">
                {notes.map((note, i) => (
                  <div key={i} className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-300">
                    {note}
                  </div>
                ))}
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Add note..."
                  value={newNote}
                  onChange={(e) => setNewNote(e.target.value)}
                  className="flex-1 h-9 rounded-lg border border-slate-800 bg-slate-950 px-3 text-xs text-white focus:border-brand-500"
                />
                <button
                  onClick={handleAddNote}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
