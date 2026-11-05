import React, { useState } from 'react';
import { TabType } from '../types';
import { useAuth } from '../context/AuthContext';
import { LogOut, User, Menu, X } from 'lucide-react';

interface HeaderProps {
  currentTab: TabType;
  onSelectTab: (tab: TabType) => void;
  onOpenProfile: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentTab, onSelectTab, onOpenProfile }) => {
  const { user, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  const navItems: { id: TabType; label: string }[] = [
    { id: 'about', label: 'O que é a CIBE?' },
    { id: 'members', label: 'Membros' },
    { id: 'documents', label: 'Documentos Oficiais' },
    { id: 'meetings', label: 'Reuniões' },
    { id: 'news', label: 'Notícias' },
    { id: 'contact', label: 'Contatos' }
  ];

  const handleNavClick = (tab: TabType) => {
    onSelectTab(tab);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-black/95 backdrop-blur-md border-b border-zinc-800 text-white">
      {/* Top micro banner */}
      <div className="hidden md:flex justify-between items-center px-6 py-1.5 border-b border-zinc-900 text-[11px] text-zinc-400 font-mono tracking-wider">
        <div className="flex items-center gap-2">
          <span className="text-zinc-200">SEDUC/PA</span>
          <span>·</span>
          <span>COMISSÃO DE IMPLEMENTAÇÃO DO SISTEMA INTERNACIONAL DE EDUCAÇÃO</span>
        </div>
        <div className="flex items-center gap-3">
          <span>PORTAL OFICIAL DO ESTADO DO PARÁ</span>
          <span>·</span>
          <span>BELÉM - PA</span>
        </div>
      </div>

      {/* Main Top Bar Contract: Zone 1 (Brand) — Zone 2 (Nav Links) — Zone 3 (Action/User) */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3.5 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={() => handleNavClick('about')}
          className="flex items-baseline gap-2.5 text-left shrink-0 cursor-pointer group"
        >
          <span className="text-xl md:text-2xl font-serif font-bold tracking-tight text-white group-hover:text-zinc-300 transition-colors whitespace-nowrap">
            CIBE / PA
          </span>
          <span className="hidden sm:inline-block text-xs uppercase tracking-widest text-zinc-400 font-mono">
            Educação Internacional
          </span>
        </button>

        {/* Zone 2: Clean single-line text navigation links */}
        <nav className="hidden lg:flex items-center gap-6 text-xs uppercase tracking-wider font-medium text-zinc-300">
          {navItems.map((item) => {
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 cursor-pointer ${
                  isActive
                    ? 'border-white text-white font-semibold'
                    : 'border-transparent text-zinc-400 hover:text-white hover:border-zinc-500'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1 Primary Action / User Profile */}
        <div className="flex items-center gap-3 shrink-0">
          {user && (
            <div className="relative">
              <button
                onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                className="flex items-center gap-2.5 py-1.5 px-3 border border-zinc-800 hover:border-zinc-600 bg-zinc-900/60 transition-colors text-left cursor-pointer"
              >
                <div className="w-6 h-6 rounded-none bg-zinc-200 text-black flex items-center justify-center font-mono font-bold text-xs uppercase">
                  {user.name.charAt(0)}
                </div>
                <div className="hidden sm:block">
                  <div className="text-xs font-medium text-white truncate max-w-[130px] leading-tight">
                    {user.name}
                  </div>
                  <div className="text-[10px] text-zinc-400 truncate max-w-[130px] leading-tight">
                    {user.role}
                  </div>
                </div>
              </button>

              {/* Dropdown Menu */}
              {userDropdownOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-zinc-950 border border-zinc-800 shadow-xl py-2 z-50">
                  <div className="px-4 py-2 border-b border-zinc-800">
                    <div className="text-xs font-semibold text-white">{user.name}</div>
                    <div className="text-[11px] text-zinc-400 truncate">{user.email}</div>
                    <div className="text-[10px] text-zinc-500 font-mono mt-0.5">{user.institution}</div>
                  </div>
                  <button
                    onClick={() => {
                      setUserDropdownOpen(false);
                      onOpenProfile();
                    }}
                    className="w-full px-4 py-2 text-left text-xs text-zinc-300 hover:bg-zinc-900 hover:text-white flex items-center gap-2 cursor-pointer"
                  >
                    <User className="w-3.5 h-3.5" />
                    <span>Dados do Perfil Institucional</span>
                  </button>
                  <button
                    onClick={() => {
                      setUserDropdownOpen(false);
                      logout();
                    }}
                    className="w-full px-4 py-2 text-left text-xs text-red-400 hover:bg-zinc-900 hover:text-red-300 flex items-center gap-2 cursor-pointer border-t border-zinc-900"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                    <span>Encerrar Sessão (Sair)</span>
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-zinc-400 hover:text-white border border-zinc-800"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-zinc-950 border-b border-zinc-800 px-6 py-4 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`block w-full text-left py-2 text-sm uppercase tracking-wider ${
                currentTab === item.id
                  ? 'font-bold text-white border-l-2 border-white pl-2'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-3 border-t border-zinc-900 flex justify-between items-center text-xs">
            <span className="text-zinc-500">{user?.email}</span>
            <button
              onClick={logout}
              className="text-zinc-300 hover:text-white font-medium"
            >
              Sair
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
