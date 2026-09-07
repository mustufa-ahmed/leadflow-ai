import React, { useState } from 'react';
import { Send, Sparkles, Bot, User, Check, ArrowRight, MessageSquareText, Search } from 'lucide-react';
import { Conversation } from '../../types';
import { Badge } from '../common/Badge';

interface ConversationsViewProps {
  conversations: Conversation[];
  activeConvId: string;
  setActiveConvId: (id: string) => void;
  onSendMessage: (convId: string, text: string) => void;
}

export const ConversationsView: React.FC<ConversationsViewProps> = ({
  conversations,
  activeConvId,
  setActiveConvId,
  onSendMessage,
}) => {
  const [inputText, setInputText] = useState('');
  const activeConv = conversations.find((c) => c.id === activeConvId) || conversations[0];

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    onSendMessage(activeConv.id, inputText.trim());
    setInputText('');
  };

  return (
    <div className="h-[calc(100vh-8.5rem)] rounded-2xl border border-slate-800 bg-slate-900/60 overflow-hidden flex flex-col lg:flex-row shadow-2xl">
      {/* Column 1: Conversations List */}
      <div className="w-full lg:w-80 border-r border-slate-800 flex flex-col bg-slate-950/60">
        <div className="p-4 border-b border-slate-800 space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold text-white">Smart Inbox</h2>
            <span className="text-[10px] font-bold text-brand-400 bg-brand-500/10 px-2 py-0.5 rounded">AI Active</span>
          </div>
          <div className="relative">
            <Search className="absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              placeholder="Search conversations..."
              className="h-8 w-full rounded-lg border border-slate-800 bg-slate-900 pl-8 pr-3 text-xs text-white placeholder-slate-500 focus:outline-none"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto divide-y divide-slate-800/60">
          {conversations.map((conv) => {
            const isActive = conv.id === activeConv.id;
            return (
              <div
                key={conv.id}
                onClick={() => setActiveConvId(conv.id)}
                className={`p-4 cursor-pointer transition-colors ${
                  isActive ? 'bg-slate-800/80 border-l-4 border-brand-500' : 'hover:bg-slate-900/80'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white">{conv.leadName}</span>
                  <span className="text-[10px] text-slate-500">{conv.timestamp}</span>
                </div>
                <p className="text-[11px] text-slate-400 font-medium">{conv.company} • {conv.channel}</p>
                <p className="mt-1.5 text-xs text-slate-300 truncate">{conv.lastMessage}</p>
                <div className="mt-2 flex items-center justify-between">
                  <Badge variant={conv.aiInsights.intent === 'High' ? 'hot' : 'warm'}>
                    Score: {conv.aiInsights.score}
                  </Badge>
                  <span className="text-[10px] text-brand-400 font-semibold">{conv.aiInsights.intent} Intent</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Column 2: Interactive Chat Thread */}
      <div className="flex-1 flex flex-col bg-slate-900/40">
        {/* Chat Thread Header */}
        <div className="h-14 px-6 border-b border-slate-800 flex items-center justify-between bg-slate-950/40">
          <div>
            <h3 className="text-sm font-bold text-white">{activeConv.leadName}</h3>
            <p className="text-[10px] text-slate-400">{activeConv.company} via {activeConv.channel}</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs text-slate-400">AI Assistant Online</span>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {activeConv.messages.map((msg) => {
            const isCustomer = msg.sender === 'customer';
            return (
              <div
                key={msg.id}
                className={`flex gap-3 max-w-xl ${isCustomer ? 'mr-auto' : 'ml-auto flex-row-reverse'}`}
              >
                <div
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-bold ${
                    isCustomer ? 'bg-slate-800 text-slate-200' : 'bg-brand-600 text-white'
                  }`}
                >
                  {isCustomer ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                </div>

                <div>
                  <div
                    className={`rounded-2xl p-4 text-xs ${
                      isCustomer
                        ? 'bg-slate-800/80 text-slate-100 rounded-tl-none border border-slate-700/50'
                        : 'bg-brand-900/40 text-brand-100 rounded-tr-none border border-brand-500/30'
                    }`}
                  >
                    {msg.text}
                  </div>
                  <span className={`text-[10px] text-slate-500 mt-1 block ${isCustomer ? 'text-left' : 'text-right'}`}>
                    {msg.timestamp}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Input Bar */}
        <form onSubmit={handleSend} className="p-4 border-t border-slate-800 bg-slate-950/60 flex gap-2">
          <input
            type="text"
            placeholder="Type customer reply or test AI response..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="flex-1 h-10 rounded-xl border border-slate-800 bg-slate-900 px-4 text-xs text-white placeholder-slate-500 focus:border-brand-500 focus:outline-none"
          />
          <button
            type="submit"
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-brand-600 hover:bg-brand-500 text-white text-xs font-semibold shadow-md shadow-brand-500/20"
          >
            <span>Send</span>
            <Send className="h-3.5 w-3.5" />
          </button>
        </form>
      </div>

      {/* Column 3: AI Insights Panel */}
      <div className="w-full lg:w-72 border-l border-slate-800 p-5 bg-slate-950/80 space-y-5">
        <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
          <Sparkles className="h-4 w-4 text-brand-400" />
          <h3 className="text-xs font-bold uppercase tracking-wider text-white">AI Real-Time Insights</h3>
        </div>

        {/* Score Card */}
        <div className="rounded-xl border border-slate-800 bg-slate-900 p-4 text-center">
          <span className="text-[10px] text-slate-400 uppercase font-semibold">Calculated Score</span>
          <div className="text-3xl font-extrabold text-rose-400 mt-1">{activeConv.aiInsights.score}</div>
          <span className="inline-block mt-1 px-2.5 py-0.5 rounded text-[10px] font-bold bg-rose-500/20 text-rose-300">
            {activeConv.aiInsights.intent} Intent
          </span>
        </div>

        {/* Buying Signals */}
        <div>
          <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">Detected Buying Signals</h4>
          <ul className="space-y-1.5 text-xs text-slate-300">
            {activeConv.aiInsights.signals.map((sig, idx) => (
              <li key={idx} className="flex items-center gap-2 bg-slate-900 p-2 rounded-lg border border-slate-800">
                <Check className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                <span className="text-[11px]">{sig}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Recommended Action */}
        <div className="rounded-xl border border-brand-500/30 bg-brand-950/40 p-3 text-xs space-y-2">
          <span className="text-[10px] font-bold uppercase tracking-wider text-brand-400 block">Recommended Next Action</span>
          <p className="text-slate-200 font-medium">{activeConv.aiInsights.recommendedAction}</p>
        </div>
      </div>
    </div>
  );
};
