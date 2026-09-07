import React, { useState } from 'react';
import { Settings, User, Bell, Sliders, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const SettingsView: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState<'workspace' | 'team' | 'ai' | 'notifications'>('workspace');
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="space-y-6">
      {/* Toast Alert */}
      {saved && (
        <div className="fixed bottom-6 right-6 z-50 rounded-xl border border-emerald-500 bg-slate-900 p-4 text-xs font-bold text-white shadow-2xl flex items-center gap-2">
          <CheckCircle2 className="h-4 w-4 text-emerald-400" />
          <span>Demo settings saved locally!</span>
        </div>
      )}

      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-white">Platform Settings</h1>
        <p className="text-xs text-slate-400">
          Configure organization preferences, AI scoring thresholds, and team permissions.
        </p>
      </div>

      {/* Sub Tabs */}
      <div className="flex border-b border-slate-800 text-xs font-semibold gap-6">
        {[
          { id: 'workspace', label: 'Workspace' },
          { id: 'team', label: 'Team Members' },
          { id: 'ai', label: 'AI & Lead Scoring' },
          { id: 'notifications', label: 'Notifications' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveSubTab(tab.id as any)}
            className={`pb-3 transition-all ${
              activeSubTab === tab.id
                ? 'border-b-2 border-brand-500 text-brand-400 font-bold'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Settings Form */}
      <form onSubmit={handleSave} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 space-y-6 max-w-3xl">
        {activeSubTab === 'workspace' && (
          <div className="space-y-4 text-xs">
            <div>
              <label className="block text-slate-300 font-semibold mb-1">Organization Name</label>
              <input
                type="text"
                defaultValue="LeadFlow Demo Corp"
                className="w-full h-10 rounded-xl border border-slate-800 bg-slate-950 px-4 text-white focus:border-brand-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">Default Timezone</label>
              <select className="w-full h-10 rounded-xl border border-slate-800 bg-slate-950 px-4 text-white focus:border-brand-500 focus:outline-none">
                <option>UTC-05:00 Eastern Time (US & Canada)</option>
                <option>UTC+00:00 London (GMT)</option>
                <option>UTC+05:00 Islamabad / Karachi</option>
              </select>
            </div>
          </div>
        )}

        {activeSubTab === 'ai' && (
          <div className="space-y-4 text-xs">
            <div>
              <label className="block text-slate-300 font-semibold mb-1">Hot Lead Score Threshold (0-100)</label>
              <input
                type="number"
                defaultValue={80}
                className="w-full h-10 rounded-xl border border-slate-800 bg-slate-950 px-4 text-white focus:border-brand-500 focus:outline-none"
              />
              <p className="mt-1 text-[11px] text-slate-500">Leads scoring above this threshold trigger instant SDR alerts.</p>
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">AI Tone & Voice</label>
              <select className="w-full h-10 rounded-xl border border-slate-800 bg-slate-950 px-4 text-white focus:border-brand-500 focus:outline-none">
                <option>Professional B2B Consultative</option>
                <option>Friendly & Approachable</option>
                <option>Direct & Concise</option>
              </select>
            </div>
          </div>
        )}

        {activeSubTab === 'team' && (
          <div className="space-y-3 text-xs">
            <p className="text-slate-400">Team Roster (Demo Data)</p>
            <div className="divide-y divide-slate-800 rounded-xl border border-slate-800 bg-slate-950 p-4">
              <div className="py-2 flex justify-between">
                <div>
                  <p className="font-bold text-white">Alex Morgan</p>
                  <p className="text-[11px] text-slate-400">Sales Director (Admin)</p>
                </div>
                <span className="text-emerald-400 font-semibold">Active</span>
              </div>
              <div className="py-2 flex justify-between">
                <div>
                  <p className="font-bold text-white">Elena Vance</p>
                  <p className="text-[11px] text-slate-400">Senior SDR</p>
                </div>
                <span className="text-emerald-400 font-semibold">Active</span>
              </div>
            </div>
          </div>
        )}

        {activeSubTab === 'notifications' && (
          <div className="space-y-3 text-xs">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" defaultChecked className="rounded border-slate-800 text-brand-600 focus:ring-brand-500" />
              <span className="text-slate-300">Email alerts on Hot Lead detection</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" defaultChecked className="rounded border-slate-800 text-brand-600 focus:ring-brand-500" />
              <span className="text-slate-300">Slack channel broadcast on score &gt; 80</span>
            </label>
          </div>
        )}

        <div className="border-t border-slate-800 pt-4 flex justify-end">
          <button
            type="submit"
            className="px-5 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs shadow-md shadow-brand-500/20"
          >
            Save Settings
          </button>
        </div>
      </form>
    </div>
  );
};
