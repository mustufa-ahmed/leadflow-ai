import React, { useState } from 'react';
import { Search, Bell, Menu, Sparkles, User, Monitor, LayoutDashboard, FileText } from 'lucide-react';
import { ViewMode } from '../../types';

interface HeaderProps {
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onMobileMenuToggle: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  viewMode,
  setViewMode,
  searchQuery,
  setSearchQuery,
  onMobileMenuToggle,
}) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  return (
    <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b border-slate-800/80 bg-slate-950/80 px-4 backdrop-blur-md lg:px-6">
      {/* Left: Mobile Toggle & Search */}
      <div className="flex items-center gap-3">
        <button
          onClick={onMobileMenuToggle}
          className="rounded-lg border border-slate-800 p-2 text-slate-400 hover:bg-slate-800 hover:text-white lg:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>

        {viewMode === 'dashboard' && (
          <div className="relative w-48 sm:w-72">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              placeholder="Search leads, companies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-9 w-full rounded-lg border border-slate-800 bg-slate-900/80 pl-9 pr-3 text-xs text-white placeholder-slate-500 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500 transition-all"
            />
          </div>
        )}
      </div>

      {/* Center: Global View Switcher Pills */}
      <div className="hidden md:flex items-center rounded-xl border border-slate-800 bg-slate-900/90 p-1">
        <button
          onClick={() => setViewMode('landing')}
          className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
            viewMode === 'landing'
              ? 'bg-brand-600 text-white shadow-sm'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Monitor className="h-3.5 w-3.5" />
          <span>Landing Page</span>
        </button>

        <button
          onClick={() => setViewMode('dashboard')}
          className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
            viewMode === 'dashboard'
              ? 'bg-brand-600 text-white shadow-sm'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <LayoutDashboard className="h-3.5 w-3.5" />
          <span>App Dashboard</span>
        </button>

        <button
          onClick={() => setViewMode('case-study')}
          className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
            viewMode === 'case-study'
              ? 'bg-brand-600 text-white shadow-sm'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <FileText className="h-3.5 w-3.5" />
          <span>Case Study</span>
        </button>
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-3">
        {/* Demo Badge */}
        <div className="hidden sm:flex items-center gap-1.5 rounded-full border border-sky-500/30 bg-sky-500/10 px-2.5 py-1 text-[11px] font-medium text-sky-400">
          <Sparkles className="h-3 w-3 animate-spin text-sky-400" />
          <span>Portfolio Demo</span>
        </div>

        {/* Notifications Dropdown */}
        <div className="relative">
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="relative rounded-lg border border-slate-800 bg-slate-900 p-2 text-slate-400 hover:bg-slate-800 hover:text-white transition-colors"
          >
            <Bell className="h-4 w-4" />
            <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-brand-400 animate-ping" />
            <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-brand-500" />
          </button>

          {showNotifications && (
            <div className="absolute right-0 mt-2 w-80 rounded-xl border border-slate-800 bg-slate-900 p-4 shadow-2xl z-50">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Live Demo Alerts</span>
                <span className="text-[10px] text-brand-400">3 New</span>
              </div>
              <div className="mt-3 space-y-2 text-xs">
                <div className="rounded-lg bg-slate-800/60 p-2.5 border border-slate-700/50">
                  <p className="font-semibold text-white">Hot Lead Detected</p>
                  <p className="text-slate-400 text-[11px]">Sarah Mitchell (Nova Commerce) scored 92/100</p>
                  <span className="text-[10px] text-slate-500">2 mins ago</span>
                </div>
                <div className="rounded-lg bg-slate-800/60 p-2.5 border border-slate-700/50">
                  <p className="font-semibold text-white">Automation Triggered</p>
                  <p className="text-slate-400 text-[11px]">High-Intent Follow-Up dispatched email</p>
                  <span className="text-[10px] text-slate-500">12 mins ago</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* User Profile */}
        <div className="relative">
          <button
            onClick={() => setShowProfile(!showProfile)}
            className="flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900 p-1.5 pr-3 hover:bg-slate-800 transition-colors"
          >
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-tr from-brand-600 to-indigo-500 text-xs font-bold text-white">
              AM
            </div>
            <div className="hidden text-left sm:block">
              <p className="text-xs font-semibold text-white leading-tight">Alex Morgan</p>
              <p className="text-[10px] text-slate-400 leading-tight">Sales Director</p>
            </div>
          </button>

          {showProfile && (
            <div className="absolute right-0 mt-2 w-56 rounded-xl border border-slate-800 bg-slate-900 p-3 shadow-2xl z-50 text-xs">
              <div className="border-b border-slate-800 pb-2">
                <p className="font-bold text-white">Alex Morgan</p>
                <p className="text-slate-400">alex.morgan@leadflow.demo</p>
              </div>
              <div className="mt-2 space-y-1">
                <button className="w-full text-left rounded-md px-2 py-1.5 hover:bg-slate-800 text-slate-300">Demo Organization</button>
                <button className="w-full text-left rounded-md px-2 py-1.5 hover:bg-slate-800 text-slate-300">Preferences</button>
                <div className="border-t border-slate-800 my-1"></div>
                <p className="px-2 text-[10px] text-slate-500">Portfolio Demo Session Active</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
