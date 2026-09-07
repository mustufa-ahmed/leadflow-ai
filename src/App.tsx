import React, { useState } from 'react';
import { ViewMode, DashboardTab, Lead, LeadStatus, Conversation } from './types';
import { INITIAL_LEADS, INITIAL_CONVERSATIONS } from './data/mockData';

// Common Components
import { Header } from './components/common/Header';
import { Sidebar } from './components/common/Sidebar';

// Views
import { LandingPage } from './components/landing/LandingPage';
import { OverviewView } from './components/dashboard/OverviewView';
import { LeadsView } from './components/dashboard/LeadsView';
import { LeadDetailDrawer } from './components/dashboard/LeadDetailDrawer';
import { ConversationsView } from './components/dashboard/ConversationsView';
import { PipelineView } from './components/dashboard/PipelineView';
import { AiScoringView } from './components/dashboard/AiScoringView';
import { WorkflowBuilderView } from './components/dashboard/WorkflowBuilderView';
import { AutomationsListView } from './components/dashboard/AutomationsListView';
import { AnalyticsView } from './components/dashboard/AnalyticsView';
import { AiInsightsView } from './components/dashboard/AiInsightsView';
import { IntegrationsView } from './components/dashboard/IntegrationsView';
import { SettingsView } from './components/dashboard/SettingsView';
import { CaseStudyView } from './components/casestudy/CaseStudyView';

export function App() {
  const [viewMode, setViewMode] = useState<ViewMode>('dashboard');
  const [activeTab, setActiveTab] = useState<DashboardTab>('overview');
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // App State Data
  const [leads, setLeads] = useState<Lead[]>(INITIAL_LEADS);
  const [conversations, setConversations] = useState<Conversation[]>(INITIAL_CONVERSATIONS);
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [activeConvId, setActiveConvId] = useState<string>(INITIAL_CONVERSATIONS[0].id);

  // Handlers
  const handleUpdateStatus = (leadId: string, newStatus: LeadStatus) => {
    setLeads((prev) =>
      prev.map((l) => (l.id === leadId ? { ...l, status: newStatus } : l))
    );
    if (selectedLead && selectedLead.id === leadId) {
      setSelectedLead((prev) => (prev ? { ...prev, status: newStatus } : null));
    }
  };

  const handleOpenChatFromLead = (leadId: string) => {
    const conv = conversations.find((c) => c.leadId === leadId);
    if (conv) {
      setActiveConvId(conv.id);
    }
    setActiveTab('conversations');
    setSelectedLead(null);
  };

  const handleSendMessage = (convId: string, text: string) => {
    const newMsg = {
      id: `msg-${Date.now()}`,
      sender: 'customer' as const,
      text,
      timestamp: 'Just now',
    };

    setConversations((prev) =>
      prev.map((c) => {
        if (c.id === convId) {
          const updatedMsgs = [...c.messages, newMsg];
          return { ...c, lastMessage: text, messages: updatedMsgs };
        }
        return c;
      })
    );

    // Simulate instant AI reply
    setTimeout(() => {
      const aiReply = {
        id: `ai-${Date.now()}`,
        sender: 'ai' as const,
        text: `Thanks for providing that detail! LeadFlow AI has captured this and updated your lead qualification profile score (${
          conversations.find((c) => c.id === convId)?.aiInsights.score || 90
        }/100).`,
        timestamp: 'Just now',
      };

      setConversations((prev) =>
        prev.map((c) => {
          if (c.id === convId) {
            return {
              ...c,
              lastMessage: aiReply.text,
              messages: [...c.messages, aiReply],
            };
          }
          return c;
        })
      );
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 font-sans">
      {/* Header Bar */}
      <Header
        viewMode={viewMode}
        setViewMode={setViewMode}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onMobileMenuToggle={() => setIsMobileMenuOpen(true)}
      />

      {/* Main View Router */}
      {viewMode === 'landing' ? (
        <LandingPage
          onExploreDemo={() => setViewMode('dashboard')}
          setViewMode={setViewMode}
        />
      ) : viewMode === 'case-study' ? (
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <CaseStudyView />
        </main>
      ) : (
        /* App Dashboard Layout */
        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar */}
          <Sidebar
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            isOpenMobile={isMobileMenuOpen}
            onCloseMobile={() => setIsMobileMenuOpen(false)}
          />

          {/* Tab Content Container */}
          <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto w-full">
            {activeTab === 'overview' && (
              <OverviewView
                onSelectLead={setSelectedLead}
                onNavigateToTab={setActiveTab}
              />
            )}

            {activeTab === 'leads' && (
              <LeadsView
                leads={leads}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                onSelectLead={setSelectedLead}
                onUpdateStatus={handleUpdateStatus}
                onOpenChat={handleOpenChatFromLead}
              />
            )}

            {activeTab === 'conversations' && (
              <ConversationsView
                conversations={conversations}
                activeConvId={activeConvId}
                setActiveConvId={setActiveConvId}
                onSendMessage={handleSendMessage}
              />
            )}

            {activeTab === 'pipeline' && (
              <PipelineView
                leads={leads}
                onSelectLead={setSelectedLead}
                onUpdateStatus={handleUpdateStatus}
              />
            )}

            {activeTab === 'ai-scoring' && <AiScoringView />}

            {activeTab === 'workflow-builder' && <WorkflowBuilderView />}

            {activeTab === 'automations' && <AutomationsListView />}

            {activeTab === 'analytics' && <AnalyticsView />}

            {activeTab === 'ai-insights' && <AiInsightsView />}

            {activeTab === 'integrations' && <IntegrationsView />}

            {activeTab === 'settings' && <SettingsView />}
          </main>

          {/* Lead Detail Drawer Modal */}
          <LeadDetailDrawer
            lead={selectedLead}
            onClose={() => setSelectedLead(null)}
            onUpdateStatus={handleUpdateStatus}
            onOpenChat={handleOpenChatFromLead}
          />
        </div>
      )}
    </div>
  );
}

export default App;
