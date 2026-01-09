
import React, { useState, useEffect } from 'react';
import { View } from './types';
import Header from './components/Header';
import BottomTabs from './components/BottomTabs';
import HomeView from './views/Home';
import TeachingsView from './views/Teachings';
import TrainingView from './views/Training';
import EventsView from './views/Events';
import GiveView from './views/Give';
import AdminDashboard from './views/AdminDashboard';
import MoreView from './views/More';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<View>('home');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const savedFavs = localStorage.getItem('em_favorites');
    if (savedFavs) setFavorites(JSON.parse(savedFavs));

    const savedMode = localStorage.getItem('em_darkmode');
    if (savedMode) setIsDarkMode(JSON.parse(savedMode));
  }, []);

  useEffect(() => {
    localStorage.setItem('em_favorites', JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem('em_darkmode', JSON.stringify(isDarkMode));
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleFavorite = (id: string) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <HomeView onNavigate={setActiveTab} />;
      case 'teachings':
        return <TeachingsView favorites={favorites} onToggleFavorite={toggleFavorite} />;
      case 'training':
        return <TrainingView />;
      case 'events':
        return <EventsView />;
      case 'give':
        return <GiveView />;
      case 'admin':
        return <AdminDashboard />;
      case 'more':
        return <MoreView onNavigate={setActiveTab} isDarkMode={isDarkMode} onToggleDarkMode={() => setIsDarkMode(!isDarkMode)} />;
      default:
        return <HomeView onNavigate={setActiveTab} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen max-w-md mx-auto bg-white dark:bg-zinc-950 shadow-2xl overflow-hidden relative border-x border-gray-100 dark:border-zinc-800">
      <Header activeTab={activeTab} onNavigate={setActiveTab} />
      
      <main className="flex-1 overflow-y-auto pb-24 no-scrollbar">
        {renderContent()}
      </main>

      <BottomTabs activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
};

export default App;
