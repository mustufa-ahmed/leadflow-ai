export type ViewMode = 'landing' | 'dashboard' | 'case-study';

export type DashboardTab =
  | 'overview'
  | 'leads'
  | 'conversations'
  | 'pipeline'
  | 'automations'
  | 'workflow-builder'
  | 'analytics'
  | 'ai-insights'
  | 'integrations'
  | 'settings'
  | 'ai-scoring';

export type IntentLevel = 'High' | 'Medium' | 'Low';
export type LeadStatus = 'New' | 'Contacted' | 'Qualified' | 'Proposal' | 'Converted' | 'Lost';
export type LeadSource = 'Website' | 'WhatsApp' | 'Facebook' | 'Instagram' | 'Referral';

export interface Lead {
  id: string;
  name: string;
  avatar?: string;
  company: string;
  role: string;
  email: string;
  phone: string;
  source: LeadSource;
  aiScore: number;
  intent: IntentLevel;
  status: LeadStatus;
  owner: string;
  lastActivity: string;
  dealValue: number;
  buyingStage: string;
  aiSummary: string;
  scoringBreakdown: {
    buyingIntent: number;
    engagement: number;
    companyFit: number;
    budgetSignals: number;
    timeline: number;
    productInterest: number;
  };
  timeline: {
    date: string;
    event: string;
    type: 'capture' | 'chat' | 'score' | 'followup' | 'sales';
  }[];
}

export interface ChatMessage {
  id: string;
  sender: 'customer' | 'ai' | 'agent';
  text: string;
  timestamp: string;
}

export interface Conversation {
  id: string;
  leadId: string;
  leadName: string;
  company: string;
  channel: LeadSource;
  lastMessage: string;
  timestamp: string;
  unread: boolean;
  messages: ChatMessage[];
  aiInsights: {
    intent: IntentLevel;
    score: number;
    signals: string[];
    recommendedAction: string;
  };
}

export interface AutomationRule {
  id: string;
  title: string;
  description: string;
  trigger: string;
  actions: string[];
  status: 'active' | 'paused';
  lastRun: string;
  runCount: number;
}

export interface Integration {
  id: string;
  name: string;
  category: string;
  iconName: string;
  connected: boolean;
  description: string;
}
