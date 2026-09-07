import React from 'react';
import {
  Sparkles,
  ArrowRight,
  Zap,
  MessageSquare,
  BarChart3,
  Bot,
  Kanban,
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
  Clock,
  UserCheck,
  ChevronRight,
} from 'lucide-react';
import { ViewMode } from '../../types';

interface LandingPageProps {
  onExploreDemo: () => void;
  setViewMode: (mode: ViewMode) => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onExploreDemo, setViewMode }) => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-24 lg:pt-24 lg:pb-32">
        {/* Glow Background effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-brand-500/10 blur-[120px] pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 h-[300px] w-[300px] rounded-full bg-indigo-500/10 blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {/* Tagline Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-400 text-xs font-semibold mb-8">
            <Sparkles className="h-3.5 w-3.5" />
            <span>AI Lead Qualification & Automation SaaS Concept</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight">
            Turn conversations into <br />
            <span className="gradient-text">qualified leads.</span>
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto font-normal">
            LeadFlow AI helps businesses capture leads, qualify prospects and automate follow-ups from one intelligent workspace.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onExploreDemo}
              className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-400 text-white font-semibold shadow-lg shadow-brand-500/25 flex items-center gap-2 transition-all transform hover:-translate-y-0.5"
            >
              <span>Explore Demo</span>
              <ArrowRight className="h-4 w-4" />
            </button>

            <button
              onClick={() => {
                const el = document.getElementById('how-it-works');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-7 py-3.5 rounded-xl bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-200 font-semibold transition-all"
            >
              See How It Works
            </button>
          </div>

          {/* Hero Dashboard Preview Card */}
          <div className="mt-16 relative max-w-5xl mx-auto rounded-2xl border border-slate-800 bg-slate-900/80 p-4 sm:p-6 shadow-2xl backdrop-blur-xl">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-rose-500/80" />
                <div className="h-3 w-3 rounded-full bg-amber-500/80" />
                <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
                <span className="ml-2 text-xs text-slate-500 font-mono">leadflow.demo/app/dashboard</span>
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Live Preview</span>
            </div>

            {/* Dashboard Sample Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
              <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                <div className="text-xs text-slate-400 font-semibold">Total Leads</div>
                <div className="text-2xl font-extrabold text-white mt-1">1,842</div>
                <span className="inline-block mt-2 text-[10px] text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded">↑ +18.4% this month</span>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                <div className="text-xs text-slate-400 font-semibold">Qualified Leads</div>
                <div className="text-2xl font-extrabold text-white mt-1">624</div>
                <span className="inline-block mt-2 text-[10px] text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded">33.8% Qualification</span>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                <div className="text-xs text-slate-400 font-semibold">Pipeline Value</div>
                <div className="text-2xl font-extrabold text-white mt-1">$284,500</div>
                <span className="inline-block mt-2 text-[10px] text-brand-400 font-bold bg-brand-500/10 px-2 py-0.5 rounded">Avg response 1m 42s</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="border-y border-slate-800/80 bg-slate-900/30 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
            Built for modern sales teams & high-growth revenue operations
          </p>
          <div className="mt-6 flex flex-wrap justify-center items-center gap-8 text-slate-400 font-bold text-sm">
            <span className="px-4 py-2 rounded-lg bg-slate-900 border border-slate-800">E-Commerce Teams</span>
            <span className="px-4 py-2 rounded-lg bg-slate-900 border border-slate-800">SaaS Companies</span>
            <span className="px-4 py-2 rounded-lg bg-slate-900 border border-slate-800">Agencies & Consultants</span>
            <span className="px-4 py-2 rounded-lg bg-slate-900 border border-slate-800">Sales Operations</span>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-xs font-bold uppercase tracking-widest text-rose-400 mb-2">The Problem</h2>
          <p className="text-3xl font-extrabold text-white sm:text-4xl">
            Why traditional lead management loses deals
          </p>
          <p className="mt-4 text-slate-400">
            Manual response workflows and slow qualification lead to lost prospects and missed revenue opportunities.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
            <div className="h-10 w-10 rounded-xl bg-rose-500/10 text-rose-400 flex items-center justify-center mb-4">
              <Clock className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Slow Response Times</h3>
            <p className="mt-2 text-sm text-slate-400">
              Leads wait hours or days for human SDRs to respond, causing intent to cool off.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
            <div className="h-10 w-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-4">
              <UserCheck className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Manual Qualification</h3>
            <p className="mt-2 text-sm text-slate-400">
              Sales reps waste hours filtering unqualified inquiries instead of closing hot deals.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
            <div className="h-10 w-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-4">
              <TrendingUp className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Inconsistent Follow-ups</h3>
            <p className="mt-2 text-sm text-slate-400">
              Up to 60% of leads are never followed up beyond the initial contact touchpoint.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="how-it-works" className="py-20 bg-slate-900/40 border-y border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-xs font-bold uppercase tracking-widest text-brand-400 mb-2">The Solution</h2>
            <p className="text-3xl font-extrabold text-white sm:text-4xl">
              Automated AI Lead Engine
            </p>
            <p className="mt-4 text-slate-400">
              A 5-stage automated pipeline that turns cold inquiries into booked calls.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
            {['Capture', 'Understand', 'Qualify', 'Follow Up', 'Convert'].map((step, idx) => (
              <div key={step} className="rounded-xl border border-slate-800 bg-slate-900 p-5 relative">
                <div className="text-xs font-bold text-brand-400">Step 0{idx + 1}</div>
                <div className="text-lg font-bold text-white mt-1">{step}</div>
                <div className="mt-2 text-[11px] text-slate-400">Automated AI workflow</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Lead Scoring Showcase Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-400">Intelligent Scoring</span>
            <h2 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
              AI Lead Scoring in Action
            </h2>
            <p className="mt-4 text-slate-400">
              LeadFlow analyzes conversation signals, buying intent, company fit, and budget signals in real-time to score leads 0-100.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span>Real-time sentiment and intent detection</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span>Weighted scoring parameters across 6 dimensions</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span>Instant sales team routing for scores &gt; 80</span>
              </li>
            </ul>
          </div>

          {/* Example Lead Card */}
          <div className="rounded-2xl border border-brand-500/30 bg-slate-900 p-6 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 px-3 py-1 bg-brand-500 text-[10px] font-extrabold text-white uppercase tracking-wider rounded-bl-lg">
              Demo Data Sample
            </div>
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h3 className="text-xl font-bold text-white">Sarah Mitchell</h3>
                <p className="text-xs text-slate-400">Nova Commerce • VP of E-Commerce</p>
              </div>
              <div className="text-right">
                <div className="text-3xl font-extrabold text-rose-400">92 / 100</div>
                <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-rose-500/20 text-rose-300">Hot Lead</span>
              </div>
            </div>

            <div className="mt-4 rounded-xl bg-slate-950/80 p-4 border border-slate-800 text-xs text-slate-300">
              <p className="font-semibold text-brand-400 mb-1">AI Insights Summary:</p>
              "Strong buying intent detected from recent conversation. Inquiry focused on enterprise API integration, multi-channel automated follow-ups, and SOC2 compliance."
            </div>
          </div>
        </div>
      </section>

      {/* Visual Automation Workflow Graphic */}
      <section className="py-20 bg-slate-900/30 border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-xs font-bold uppercase tracking-widest text-brand-400 mb-2">Automation Workflow</h2>
          <p className="text-3xl font-extrabold text-white">Visual Automation Engine</p>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto text-xs font-semibold">
            <div className="px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white">New Lead Inbound</div>
            <ChevronRight className="h-4 w-4 text-slate-500" />
            <div className="px-4 py-3 rounded-xl bg-slate-900 border border-brand-500/40 text-brand-300">AI Analyzes Chat</div>
            <ChevronRight className="h-4 w-4 text-slate-500" />
            <div className="px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white">Score Generated</div>
            <ChevronRight className="h-4 w-4 text-slate-500" />
            <div className="px-4 py-3 rounded-xl bg-slate-900 border border-emerald-500/40 text-emerald-300">Follow-up Triggered</div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Build a smarter lead pipeline.</h2>
          <p className="mt-4 text-slate-400">Experience how AI transforms qualification in the live interactive demo.</p>
          <div className="mt-8">
            <button
              onClick={onExploreDemo}
              className="px-8 py-4 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-bold shadow-lg shadow-brand-500/30 transition-all"
            >
              Explore Interactive Demo
            </button>
          </div>
        </div>
      </section>

      {/* Agency Portfolio Footer */}
      <footer className="border-t border-slate-800 py-8 bg-slate-950 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 space-y-2">
          <p className="font-semibold text-slate-400">LEADFLOW AI — AI Lead Qualification & Automation SaaS Concept</p>
          <p>“LEADFLOW AI is a fictional SaaS concept created as a portfolio demonstration.”</p>
        </div>
      </footer>
    </div>
  );
};
