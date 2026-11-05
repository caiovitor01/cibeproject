import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from '../types';

interface RegisterData {
  name: string;
  email: string;
  password: string;
  role: string;
  institution: string;
  registrationNumber?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password?: string) => Promise<{ success: boolean; message?: string }>;
  register: (data: RegisterData) => Promise<{ success: boolean; message?: string }>;
  logout: () => void;
  updateProfile: (updatedData: Partial<User>) => void;
  quickLoginAsDefault: () => void;
}

const STORAGE_KEY_USER = 'cibe_current_user';
const STORAGE_KEY_REGISTRY = 'cibe_users_database';

// Default initial user for instant access or testing
const DEFAULT_USER: User = {
  id: 'usr-admin-caio',
  name: 'Caio Vinícius Moraes',
  email: 'caio.moraes@seduc.pa.gov.br',
  role: 'Secretário-Executivo & Coordenador CIBE',
  institution: 'SEDUC/PA — Secretaria de Estado de Educação',
  registrationNumber: 'SEC-PA-884912',
  joinedAt: 'Março de 2024'
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_USER);
      if (saved) return JSON.parse(saved);
    } catch {
      // fallback
    }
    return null;
  });

  // Seed default demo user into database if empty
  useEffect(() => {
    try {
      const registryRaw = localStorage.getItem(STORAGE_KEY_REGISTRY);
      if (!registryRaw) {
        const initialDB = [
          {
            ...DEFAULT_USER,
            password: 'password'
          },
          {
            id: 'usr-prof-maria',
            name: 'Profª Maria Clara Mendes',
            email: 'maria.mendes@escola.seduc.pa.gov.br',
            role: 'Professora de Língua Inglesa',
            institution: 'Colégio Estadual Paes de Carvalho',
            registrationNumber: 'DOC-PA-40192',
            joinedAt: 'Agosto de 2024',
            password: 'password'
          }
        ];
        localStorage.setItem(STORAGE_KEY_REGISTRY, JSON.stringify(initialDB));
      }
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
  }, []);

  const login = async (email: string, password?: string): Promise<{ success: boolean; message?: string }> => {
    try {
      const cleanEmail = email.trim().toLowerCase();
      const registryRaw = localStorage.getItem(STORAGE_KEY_REGISTRY);
      const registry = registryRaw ? JSON.parse(registryRaw) : [];

      // Check if user exists in database
      const existing = registry.find((u: any) => u.email.toLowerCase() === cleanEmail);

      if (!existing) {
        // If it's the official seduc email format or matches default, allow login
        if (cleanEmail === 'caio.moraes@seduc.pa.gov.br' || cleanEmail.endsWith('@seduc.pa.gov.br')) {
          const newUser: User = {
            id: 'usr-' + Date.now(),
            name: cleanEmail.split('@')[0].replace('.', ' ').toUpperCase(),
            email: cleanEmail,
            role: 'Servidor SEDUC / Membro Credenciado',
            institution: 'SEDUC/PA — Governo do Estado do Pará',
            registrationNumber: 'MAT-' + Math.floor(100000 + Math.random() * 900000),
            joinedAt: 'Hoje'
          };
          setUser(newUser);
          localStorage.setItem(STORAGE_KEY_USER, JSON.stringify(newUser));
          return { success: true };
        }
        return { success: false, message: 'Nenhuma conta encontrada com este e-mail. Por favor, faça seu cadastro.' };
      }

      // Check password if provided and user has a recorded password
      if (password && existing.password && existing.password !== password) {
        return { success: false, message: 'Senha incorreta. Verifique suas credenciais.' };
      }

      const sessionUser: User = {
        id: existing.id,
        name: existing.name,
        email: existing.email,
        role: existing.role,
        institution: existing.institution,
        registrationNumber: existing.registrationNumber,
        joinedAt: existing.joinedAt || '2024'
      };

      setUser(sessionUser);
      localStorage.setItem(STORAGE_KEY_USER, JSON.stringify(sessionUser));
      return { success: true };
    } catch {
      return { success: false, message: 'Falha técnica ao autenticar. Tente novamente.' };
    }
  };

  const register = async (data: RegisterData): Promise<{ success: boolean; message?: string }> => {
    try {
      const cleanEmail = data.email.trim().toLowerCase();
      const registryRaw = localStorage.getItem(STORAGE_KEY_REGISTRY);
      const registry = registryRaw ? JSON.parse(registryRaw) : [];

      const exists = registry.some((u: any) => u.email.toLowerCase() === cleanEmail);
      if (exists) {
        return { success: false, message: 'Já existe uma conta cadastrada com este e-mail institucional.' };
      }

      const newUser: User = {
        id: 'usr-' + Date.now(),
        name: data.name.trim(),
        email: cleanEmail,
        role: data.role || 'Membro da Comunidade Educacional',
        institution: data.institution || 'Rede Estadual do Pará',
        registrationNumber: data.registrationNumber || 'MAT-' + Math.floor(100000 + Math.random() * 900000),
        joinedAt: new Intl.DateTimeFormat('pt-BR', { month: 'long', year: 'numeric' }).format(new Date())
      };

      const recordToSave = {
        ...newUser,
        password: data.password
      };

      registry.push(recordToSave);
      localStorage.setItem(STORAGE_KEY_REGISTRY, JSON.stringify(registry));

      // Auto login newly registered user
      setUser(newUser);
      localStorage.setItem(STORAGE_KEY_USER, JSON.stringify(newUser));

      return { success: true };
    } catch {
      return { success: false, message: 'Erro ao salvar novo cadastro. Tente novamente.' };
    }
  };

  const logout = () => {
    setUser(null);
    try {
      localStorage.removeItem(STORAGE_KEY_USER);
    } catch {
      // ignore
    }
  };

  const updateProfile = (updatedData: Partial<User>) => {
    if (!user) return;
    const updated = { ...user, ...updatedData };
    setUser(updated);
    try {
      localStorage.setItem(STORAGE_KEY_USER, JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  const quickLoginAsDefault = () => {
    setUser(DEFAULT_USER);
    try {
      localStorage.setItem(STORAGE_KEY_USER, JSON.stringify(DEFAULT_USER));
    } catch {
      // ignore
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        register,
        logout,
        updateProfile,
        quickLoginAsDefault
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
