import React from 'react';
import {
  LayoutDashboard,
  Users,
  MessageSquareText,
  Kanban,
  Zap,
  GitBranch,
  BarChart3,
  Lightbulb,
  Layers,
  Settings,
  Sparkles,
  Award,
  X,
} from 'lucide-react';
import { DashboardTab } from '../../types';

interface SidebarProps {
  activeTab: DashboardTab;
  setActiveTab: (tab: DashboardTab) => void;
  isOpenMobile: boolean;
  onCloseMobile: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeTab,
  setActiveTab,
  isOpenMobile,
  onCloseMobile,
}) => {
  const navItems: { id: DashboardTab; label: string; icon: React.FC<{ className?: string }>; badge?: string }[] = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'leads', label: 'Leads', icon: Users, badge: '6' },
    { id: 'conversations', label: 'Conversations', icon: MessageSquareText, badge: '3' },
    { id: 'pipeline', label: 'Pipeline', icon: Kanban },
    { id: 'ai-scoring', label: 'AI Lead Scoring', icon: Award },
    { id: 'workflow-builder', label: 'Workflow Builder', icon: GitBranch },
    { id: 'automations', label: 'Automations', icon: Zap },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'ai-insights', label: 'AI Insights', icon: Lightbulb },
    { id: 'integrations', label: 'Integrations', icon: Layers },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpenMobile && (
        <div
          className="fixed inset-0 z-40 bg-slate-950/80 backdrop-blur-sm lg:hidden"
          onClick={onCloseMobile}
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 flex w-64 flex-col border-r border-slate-800/80 bg-slate-950/95 transition-transform duration-300 lg:static lg:translate-x-0 ${
          isOpenMobile ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Brand Header */}
        <div className="flex h-16 items-center justify-between px-6 border-b border-slate-800/80">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-brand-600 to-indigo-500 shadow-md shadow-brand-500/20">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <div>
              <span className="text-base font-extrabold tracking-tight text-white">LEADFLOW</span>
              <span className="ml-1 text-xs font-bold text-brand-400">AI</span>
            </div>
          </div>
          <button
            onClick={onCloseMobile}
            className="rounded-lg p-1 text-slate-400 hover:bg-slate-800 hover:text-white lg:hidden"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
          <div className="px-3 pb-2 text-[10px] font-bold uppercase tracking-wider text-slate-500">
            Workspace
          </div>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  onCloseMobile();
                }}
                className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-xs font-semibold transition-all ${
                  isActive
                    ? 'bg-brand-600/15 text-brand-400 border border-brand-500/30 shadow-sm'
                    : 'text-slate-400 hover:bg-slate-900 hover:text-slate-200 border border-transparent'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`h-4 w-4 ${isActive ? 'text-brand-400' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span
                    className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${
                      isActive ? 'bg-brand-500 text-white' : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Bottom Banner */}
        <div className="p-4 border-t border-slate-800/80">
          <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-3 text-xs">
            <div className="flex items-center justify-between">
              <span className="font-bold text-white">Agency Demo</span>
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            </div>
            <p className="mt-1 text-[11px] text-slate-400">
              Interactive portfolio SaaS spec preview.
            </p>
          </div>
        </div>
      </aside>
    </>
  );
};
