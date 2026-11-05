import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { X, User, Mail, Building, ShieldCheck, Check } from 'lucide-react';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProfileModal: React.FC<ProfileModalProps> = ({ isOpen, onClose }) => {
  const { user, updateProfile } = useAuth();

  const [name, setName] = useState(user?.name || '');
  const [role, setRole] = useState(user?.role || '');
  const [institution, setInstitution] = useState(user?.institution || '');
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen || !user) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile({
      name: name.trim(),
      role: role.trim(),
      institution: institution.trim()
    });
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
      <div className="bg-zinc-950 border border-zinc-800 text-white max-w-md w-full p-6 shadow-2xl">
        <div className="flex justify-between items-start pb-4 border-b border-zinc-800">
          <div>
            <h3 className="font-serif text-lg font-bold text-white">Perfil Institucional</h3>
            <p className="text-xs text-zinc-400 mt-0.5">Credenciais e dados do usuário cadastrado</p>
          </div>
          <button
            onClick={onClose}
            className="text-zinc-500 hover:text-white text-lg font-mono"
          >
            ×
          </button>
        </div>

        {savedSuccess ? (
          <div className="py-8 text-center space-y-3">
            <div className="w-10 h-10 border border-white mx-auto flex items-center justify-center">
              <Check className="w-6 h-6 text-white" />
            </div>
            <div className="text-sm font-semibold text-white">Dados atualizados com sucesso!</div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 pt-4 text-xs">
            <div>
              <label className="block text-zinc-400 uppercase tracking-wider mb-1 font-mono">
                Nome Completo
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-zinc-900 border border-zinc-700 text-white px-3 py-2 text-sm focus:outline-none focus:border-white"
                required
              />
            </div>

            <div>
              <label className="block text-zinc-400 uppercase tracking-wider mb-1 font-mono">
                E-mail (Chave Única)
              </label>
              <input
                type="text"
                value={user.email}
                disabled
                className="w-full bg-zinc-900/50 border border-zinc-800 text-zinc-400 px-3 py-2 text-sm cursor-not-allowed font-mono"
              />
            </div>

            <div>
              <label className="block text-zinc-400 uppercase tracking-wider mb-1 font-mono">
                Cargo / Função na Rede
              </label>
              <input
                type="text"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full bg-zinc-900 border border-zinc-700 text-white px-3 py-2 text-sm focus:outline-none focus:border-white"
                required
              />
            </div>

            <div>
              <label className="block text-zinc-400 uppercase tracking-wider mb-1 font-mono">
                Instituição / Lotação Escolar
              </label>
              <input
                type="text"
                value={institution}
                onChange={(e) => setInstitution(e.target.value)}
                className="w-full bg-zinc-900 border border-zinc-700 text-white px-3 py-2 text-sm focus:outline-none focus:border-white"
                required
              />
            </div>

            <div className="p-3 bg-zinc-900 border border-zinc-800 text-[11px] text-zinc-400 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-white shrink-0" />
              <span>Matrícula de Acesso: <strong className="text-white font-mono">{user.registrationNumber || 'MAT-884912'}</strong></span>
            </div>

            <div className="flex justify-end gap-2 pt-2 border-t border-zinc-800">
              <button
                type="button"
                onClick={onClose}
                className="px-3 py-2 text-zinc-400 hover:text-white"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-white text-black font-semibold text-xs hover:bg-zinc-200"
              >
                Salvar Alterações
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
