import React from 'react';
import { Award, CheckCircle2, Code2, Layers, Cpu, Sparkles, Rocket } from 'lucide-react';

export const CaseStudyView: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto py-8 space-y-12">
      {/* Hero Header */}
      <div className="rounded-3xl border border-brand-500/30 bg-gradient-to-r from-brand-950/80 via-slate-900 to-slate-900 p-8 shadow-2xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-400 text-xs font-semibold">
          <Sparkles className="h-3.5 w-3.5" />
          <span>Agency Portfolio Case Study</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          LeadFlow AI — AI Lead Qualification & Automation Platform
        </h1>

        <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
          An architectural showcase demonstrating how intelligent SaaS workflows, AI conversation intelligence, and automated lead scoring transform inbound revenue operations.
        </p>
      </div>

      {/* Grid: Challenge & Solution */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Challenge */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 space-y-3">
          <div className="h-10 w-10 rounded-xl bg-rose-500/10 text-rose-400 flex items-center justify-center font-bold">
            01
          </div>
          <h2 className="text-lg font-bold text-white">The Challenge</h2>
          <p className="text-xs text-slate-300 leading-relaxed">
            Modern revenue teams capture hundreds of leads across WhatsApp, web forms, and ads. However, manual qualification leads to slow response times, missed follow-ups, and sales reps wasting hours on unqualified leads.
          </p>
        </div>

        {/* Solution */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 space-y-3">
          <div className="h-10 w-10 rounded-xl bg-brand-500/10 text-brand-400 flex items-center justify-center font-bold">
            02
          </div>
          <h2 className="text-lg font-bold text-white">The Solution</h2>
          <p className="text-xs text-slate-300 leading-relaxed">
            Designed a unified AI-powered lead management platform that continuously scores conversation signals, auto-tags high-intent prospects, and executes multi-touch follow-up workflows in real time.
          </p>
        </div>
      </div>

      {/* What We Built */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-8 space-y-6">
        <h2 className="text-xl font-bold text-white border-b border-slate-800 pb-4">What We Built</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          {[
            'SaaS Dashboard Overview',
            'AI Lead Scoring Engine',
            'Conversation Intelligence',
            'CRM Pipeline Kanban',
            'Visual Workflow Builder',
            'Analytics & Recharts',
            'Strategic AI Insights',
            'Integration Concepts',
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 p-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200">
              <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
              <span className="font-semibold">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Outcome & Tech Stack */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Outcome */}
        <div className="rounded-2xl border border-emerald-500/30 bg-emerald-950/20 p-6 space-y-3">
          <h3 className="text-base font-bold text-emerald-400 flex items-center gap-2">
            <Rocket className="h-5 w-5" /> Outcome & Objective
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            “Designed as a portfolio concept demonstrating how AI can streamline lead qualification and follow-up workflows.”
          </p>
        </div>

        {/* Tech Stack */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 space-y-3">
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <Code2 className="h-5 w-5 text-brand-400" /> Technologies Used
          </h3>
          <div className="flex flex-wrap gap-2 text-xs font-semibold">
            <span className="px-3 py-1 rounded-lg bg-slate-950 border border-slate-800 text-brand-400">React 18</span>
            <span className="px-3 py-1 rounded-lg bg-slate-950 border border-slate-800 text-sky-400">TypeScript</span>
            <span className="px-3 py-1 rounded-lg bg-slate-950 border border-slate-800 text-emerald-400">Vite</span>
            <span className="px-3 py-1 rounded-lg bg-slate-950 border border-slate-800 text-purple-400">Tailwind CSS</span>
            <span className="px-3 py-1 rounded-lg bg-slate-950 border border-slate-800 text-amber-400">Recharts</span>
            <span className="px-3 py-1 rounded-lg bg-slate-950 border border-slate-800 text-rose-400">Framer Motion</span>
          </div>
        </div>
      </div>
    </div>
  );
};
