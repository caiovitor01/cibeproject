import React, { useState } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import { AuthScreen } from './components/AuthScreen';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { AboutTab } from './components/tabs/AboutTab';
import { MembersTab } from './components/tabs/MembersTab';
import { DocumentsTab } from './components/tabs/DocumentsTab';
import { MeetingsTab } from './components/tabs/MeetingsTab';
import { NewsTab } from './components/tabs/NewsTab';
import { ContactTab } from './components/tabs/ContactTab';
import { DocumentModal } from './components/DocumentModal';
import { NewsModal } from './components/NewsModal';
import { ProfileModal } from './components/ProfileModal';
import { TabType, OfficialDocument, NewsArticle } from './types';

const MainPortal: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const [currentTab, setCurrentTab] = useState<TabType>('about');

  // Modals state
  const [selectedDoc, setSelectedDoc] = useState<OfficialDocument | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  // If not authenticated, render login and registration screen
  if (!isAuthenticated) {
    return <AuthScreen />;
  }

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 flex flex-col justify-between selection:bg-zinc-950 selection:text-white">
      {/* Top Header */}
      <Header
        currentTab={currentTab}
        onSelectTab={(tab) => {
          setCurrentTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenProfile={() => setIsProfileOpen(true)}
      />

      {/* Main Tab View Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 md:px-8">
        {currentTab === 'about' && (
          <AboutTab onNavigateTab={(tab) => {
            setCurrentTab(tab);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }} />
        )}

        {currentTab === 'members' && <MembersTab />}

        {currentTab === 'documents' && (
          <DocumentsTab onOpenDocument={(doc) => setSelectedDoc(doc)} />
        )}

        {currentTab === 'meetings' && <MeetingsTab />}

        {currentTab === 'news' && (
          <NewsTab onOpenArticle={(art) => setSelectedArticle(art)} />
        )}

        {currentTab === 'contact' && <ContactTab />}
      </main>

      {/* Modals */}
      <DocumentModal
        document={selectedDoc}
        onClose={() => setSelectedDoc(null)}
      />

      <NewsModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />

      <ProfileModal
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
      />

      {/* Footer */}
      <Footer onSelectTab={(tab) => {
        setCurrentTab(tab);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }} />
    </div>
  );
};

export default function App() {
  return (
    <AuthProvider>
      <MainPortal />
    </AuthProvider>
  );
}
