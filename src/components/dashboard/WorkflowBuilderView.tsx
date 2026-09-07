import React, { useState } from 'react';
import { GitBranch, Play, CheckCircle, Sparkles, ArrowDown, ArrowRight, Zap, RefreshCw } from 'lucide-react';

export const WorkflowBuilderView: React.FC = () => {
  const [testingStep, setTestingStep] = useState<number>(0);
  const [isRunningTest, setIsRunningTest] = useState<boolean>(false);

  const runTestSimulation = () => {
    setIsRunningTest(true);
    setTestingStep(1);

    setTimeout(() => setTestingStep(2), 1000);
    setTimeout(() => setTestingStep(3), 2200);
    setTimeout(() => setTestingStep(4), 3400);
    setTimeout(() => {
      setTestingStep(5);
      setIsRunningTest(false);
    }, 4500);
  };

  return (
    <div className="space-y-6">
      {/* Header & Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl border border-brand-500/30 bg-gradient-to-r from-brand-950/60 via-slate-900 to-slate-900 p-6 shadow-xl">
        <div>
          <div className="flex items-center gap-2">
            <GitBranch className="h-6 w-6 text-brand-400" />
            <h1 className="text-2xl font-bold text-white">Visual Automation Builder</h1>
          </div>
          <p className="mt-1 text-xs text-slate-400">
            Workflow: <span className="text-white font-semibold">“High-Intent Lead Follow-Up”</span> (Automated Rule #02)
          </p>
        </div>

        <button
          disabled={isRunningTest}
          onClick={runTestSimulation}
          className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 px-5 py-3 text-xs font-bold text-white shadow-lg shadow-emerald-500/20 transition-all disabled:opacity-50"
        >
          {isRunningTest ? (
            <>
              <RefreshCw className="h-4 w-4 animate-spin" />
              <span>Simulating Workflow...</span>
            </>
          ) : (
            <>
              <Play className="h-4 w-4 fill-white" />
              <span>Test Workflow</span>
            </>
          )}
        </button>
      </div>

      {/* Workflow Diagram Area */}
      <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-8 min-h-[500px] flex flex-col items-center justify-center relative overflow-hidden shadow-2xl">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />

        <div className="relative z-10 w-full max-w-2xl space-y-6 flex flex-col items-center">
          {/* Node 1: Lead Created */}
          <div
            className={`w-80 rounded-2xl border p-4 transition-all duration-300 ${
              testingStep >= 1
                ? 'border-emerald-500 bg-slate-900 shadow-lg shadow-emerald-500/20 ring-2 ring-emerald-500/40'
                : 'border-slate-800 bg-slate-900/80'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-brand-400">Trigger Node</span>
              {testingStep >= 1 && <CheckCircle className="h-4 w-4 text-emerald-400 animate-bounce" />}
            </div>
            <h3 className="text-sm font-bold text-white mt-1">1. Lead Created</h3>
            <p className="text-[11px] text-slate-400">Inbound via Website Widget or WhatsApp API</p>
          </div>

          <ArrowDown className={`h-5 w-5 ${testingStep >= 1 ? 'text-emerald-400' : 'text-slate-700'}`} />

          {/* Node 2: AI Analyze Conversation */}
          <div
            className={`w-80 rounded-2xl border p-4 transition-all duration-300 ${
              testingStep >= 2
                ? 'border-emerald-500 bg-slate-900 shadow-lg shadow-emerald-500/20 ring-2 ring-emerald-500/40'
                : 'border-slate-800 bg-slate-900/80'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-purple-400">AI Action Node</span>
              {testingStep >= 2 && <CheckCircle className="h-4 w-4 text-emerald-400 animate-bounce" />}
            </div>
            <h3 className="text-sm font-bold text-white mt-1">2. AI Analyze Conversation</h3>
            <p className="text-[11px] text-slate-400">Extract intent signals & calculate score (0-100)</p>
          </div>

          <ArrowDown className={`h-5 w-5 ${testingStep >= 2 ? 'text-emerald-400' : 'text-slate-700'}`} />

          {/* Node 3: Condition Check */}
          <div
            className={`w-80 rounded-2xl border p-4 transition-all duration-300 ${
              testingStep >= 3
                ? 'border-emerald-500 bg-slate-900 shadow-lg shadow-emerald-500/20 ring-2 ring-emerald-500/40'
                : 'border-slate-800 bg-slate-900/80'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-400">Condition Node</span>
              {testingStep >= 3 && <CheckCircle className="h-4 w-4 text-emerald-400 animate-bounce" />}
            </div>
            <h3 className="text-sm font-bold text-white mt-1">3. Lead Score &gt; 80?</h3>
            <p className="text-[11px] text-slate-400">Evaluate hot lead qualification threshold</p>
          </div>

          {/* Branches */}
          <div className="grid grid-cols-2 gap-8 w-full pt-4">
            {/* Branch YES */}
            <div
              className={`rounded-2xl border p-4 transition-all duration-300 ${
                testingStep >= 4
                  ? 'border-emerald-500 bg-slate-900 shadow-lg shadow-emerald-500/20 ring-2 ring-emerald-500/40'
                  : 'border-slate-800 bg-slate-900/60'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">YES (Score &gt;= 80)</span>
                {testingStep >= 4 && <CheckCircle className="h-4 w-4 text-emerald-400" />}
              </div>
              <h4 className="text-xs font-bold text-white mt-2">Send Personalized Email & Notify Sales</h4>
              <p className="text-[10px] text-slate-400 mt-1">Dispatch booking link & Slack alert</p>
            </div>

            {/* Branch NO */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 opacity-60">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">NO (Score &lt; 80)</span>
              </div>
              <h4 className="text-xs font-bold text-slate-300 mt-2">Add to Nurture Sequence</h4>
              <p className="text-[10px] text-slate-500 mt-1">Weekly value email campaign</p>
            </div>
          </div>
        </div>

        {/* Live Simulation Toast Feed */}
        {testingStep > 0 && (
          <div className="absolute bottom-6 left-6 right-6 rounded-xl border border-emerald-500/40 bg-slate-900/90 p-4 backdrop-blur-md flex items-center justify-between text-xs">
            <div className="flex items-center gap-3">
              <Sparkles className="h-5 w-5 text-emerald-400 animate-spin" />
              <div>
                <p className="font-bold text-white">Simulated Execution Running...</p>
                <p className="text-slate-400 text-[11px]">
                  {testingStep === 1 && '✓ Inbound lead received'}
                  {testingStep === 2 && '✓ AI analyzed conversation history'}
                  {testingStep === 3 && '✓ Score calculated: 92/100 (Threshold Passed)'}
                  {testingStep === 4 && '✓ Triggered follow-up email & sales alert'}
                  {testingStep === 5 && '✓ Workflow execution finished successfully!'}
                </p>
              </div>
            </div>
            <span className="font-bold text-emerald-400">Step {testingStep}/4</span>
          </div>
        )}
      </div>
    </div>
  );
};
