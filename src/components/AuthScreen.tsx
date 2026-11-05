import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { ShieldCheck, Eye, EyeOff, ArrowRight, UserCheck, Lock, Mail, Building, User, CheckCircle2 } from 'lucide-react';

export const AuthScreen: React.FC = () => {
  const { login, register, quickLoginAsDefault } = useAuth();
  const [mode, setMode] = useState<'login' | 'register'>('login');
  
  // Login form state
  const [loginEmail, setLoginEmail] = useState('caio.moraes@seduc.pa.gov.br');
  const [loginPassword, setLoginPassword] = useState('password');
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);

  // Register form state
  const [regName, setRegName] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regRole, setRegRole] = useState('Professor(a) da Rede Estadual');
  const [regInstitution, setRegInstitution] = useState('');
  const [regPassword, setRegPassword] = useState('');
  const [regConfirmPassword, setRegConfirmPassword] = useState('');
  const [showRegPassword, setShowRegPassword] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);

  // Status & Feedback
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showForgotModal, setShowForgotModal] = useState(false);
  const [forgotEmail, setForgotEmail] = useState('');
  const [forgotSent, setForgotSent] = useState(false);

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!loginEmail.trim()) {
      setErrorMessage('Por favor, informe seu e-mail institucional ou pessoal.');
      return;
    }
    if (!loginPassword) {
      setErrorMessage('Por favor, digite sua senha de acesso.');
      return;
    }

    setIsLoading(true);
    const res = await login(loginEmail, loginPassword);
    setIsLoading(false);

    if (!res.success) {
      setErrorMessage(res.message || 'Falha ao autenticar.');
    }
  };

  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!regName.trim()) {
      setErrorMessage('Por favor, preencha seu nome completo.');
      return;
    }
    if (!regEmail.trim()) {
      setErrorMessage('Por favor, informe um endereço de e-mail válido.');
      return;
    }
    if (!regPassword || regPassword.length < 6) {
      setErrorMessage('A senha deve conter no mínimo 6 caracteres.');
      return;
    }
    if (regPassword !== regConfirmPassword) {
      setErrorMessage('As senhas digitadas não coincidem.');
      return;
    }
    if (!acceptTerms) {
      setErrorMessage('É necessário aceitar os termos institucionais de uso do portal.');
      return;
    }

    setIsLoading(true);
    const res = await register({
      name: regName,
      email: regEmail,
      role: regRole,
      institution: regInstitution.trim() || 'Rede Estadual de Educação do Pará',
      password: regPassword
    });
    setIsLoading(false);

    if (!res.success) {
      setErrorMessage(res.message || 'Erro ao realizar cadastro.');
    } else {
      setSuccessMessage('Cadastro realizado com sucesso! Redirecionando...');
    }
  };

  const handleForgotSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (forgotEmail.trim()) {
      setForgotSent(true);
      setTimeout(() => {
        setShowForgotModal(false);
        setForgotSent(false);
        setForgotEmail('');
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-between selection:bg-white selection:text-black">
      {/* Top institutional strip */}
      <div className="border-b border-zinc-800 bg-zinc-950 px-6 py-2.5 text-xs text-zinc-400 flex flex-wrap justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="font-semibold tracking-wider text-zinc-200">GOVERNO DO ESTADO DO PARÁ</span>
          <span>·</span>
          <span>SECRETARIA DE ESTADO DE EDUCAÇÃO (SEDUC/PA)</span>
        </div>
        <div className="flex items-center gap-3 text-zinc-400">
          <span>PORTAL DE GOVERNANÇA PÚBLICA</span>
          <span>·</span>
          <span className="font-mono text-zinc-300">ESTADO DO PARÁ</span>
        </div>
      </div>

      {/* Main split grid */}
      <div className="flex-1 max-w-7xl w-full mx-auto p-6 md:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left column: Context & Mission in Stark Monochrome */}
        <div className="lg:col-span-6 space-y-6 lg:pr-8">
          <div className="space-y-3">
            <div className="text-xs uppercase tracking-widest text-zinc-400 font-mono">
              Comissão Interinstitucional · CIBE/PA
            </div>
            <h1 className="text-3xl md:text-5xl font-serif font-semibold tracking-tight text-white leading-tight text-balance">
              Sistema Internacional de Educação no Pará
            </h1>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
              Instância permanente responsável pela normatização, transição pedagógica 
              e implementação do currículo internacional e plurilíngue na rede pública de ensino do Estado do Pará.
            </p>
          </div>

          {/* Monochrome documentary hero banner */}
          <div className="relative rounded-none border border-zinc-800 overflow-hidden bg-zinc-900 group">
            <img
              src="/src/assets/images/cibe_hero_education_1792670756047.jpg"
              alt="Estudantes e professores em sala de aula no Pará"
              className="w-full h-56 md:h-64 object-cover grayscale contrast-125 filter"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent p-4 flex flex-col justify-end">
              <span className="text-xs font-mono text-zinc-300">POLOS PILOTOS EM ATIVIDADE · 2026</span>
              <p className="text-sm font-medium text-white">
                Colégio Estadual Paes de Carvalho e escolas polo em Belém, Santarém e Marabá.
              </p>
            </div>
          </div>

          {/* Key metrics without candy pills */}
          <div className="grid grid-cols-3 gap-4 pt-2 border-t border-zinc-800 text-xs">
            <div>
              <div className="font-mono text-lg font-bold text-white tabular-nums">05</div>
              <div className="text-zinc-500 uppercase tracking-wider text-[11px] mt-0.5">Polos Pioneiros</div>
            </div>
            <div>
              <div className="font-mono text-lg font-bold text-white tabular-nums">150+</div>
              <div className="text-zinc-500 uppercase tracking-wider text-[11px] mt-0.5">Professores Bolsistas</div>
            </div>
            <div>
              <div className="font-mono text-lg font-bold text-white tabular-nums">100%</div>
              <div className="text-zinc-500 uppercase tracking-wider text-[11px] mt-0.5">Rede Pública Estadual</div>
            </div>
          </div>
        </div>

        {/* Right column: Login / Register Box */}
        <div className="lg:col-span-6 bg-zinc-950 border border-zinc-800 p-6 md:p-8">
          {/* Mode Switcher Tabs */}
          <div className="flex border-b border-zinc-800 mb-6">
            <button
              type="button"
              onClick={() => {
                setMode('login');
                setErrorMessage(null);
              }}
              className={`pb-3 px-4 text-sm font-semibold tracking-wide border-b-2 transition-colors ${
                mode === 'login'
                  ? 'border-white text-white'
                  : 'border-transparent text-zinc-500 hover:text-zinc-300'
              }`}
            >
              Acesso ao Sistema
            </button>
            <button
              type="button"
              onClick={() => {
                setMode('register');
                setErrorMessage(null);
              }}
              className={`pb-3 px-4 text-sm font-semibold tracking-wide border-b-2 transition-colors ${
                mode === 'register'
                  ? 'border-white text-white'
                  : 'border-transparent text-zinc-500 hover:text-zinc-300'
              }`}
            >
              Criar Nova Conta
            </button>
          </div>

          {/* Error and Success alerts */}
          {errorMessage && (
            <div className="mb-5 p-3.5 bg-zinc-900 border border-zinc-700 text-zinc-200 text-xs flex items-start gap-2.5">
              <span className="font-mono text-white text-xs font-bold">[!]</span>
              <span>{errorMessage}</span>
            </div>
          )}

          {successMessage && (
            <div className="mb-5 p-3.5 bg-zinc-900 border border-zinc-700 text-zinc-200 text-xs flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
              <span>{successMessage}</span>
            </div>
          )}

          {/* LOGIN FORM */}
          {mode === 'login' && (
            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-zinc-300 uppercase tracking-wider mb-1.5">
                  E-mail Institucional ou Pessoal
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 w-4 h-4 text-zinc-500" />
                  <input
                    type="email"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    placeholder="ex: caio.moraes@seduc.pa.gov.br"
                    className="w-full bg-zinc-900 border border-zinc-700 text-white pl-9 pr-3 py-2.5 text-sm focus:outline-none focus:border-white transition-colors placeholder:text-zinc-600"
                    required
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label className="block text-xs font-medium text-zinc-300 uppercase tracking-wider">
                    Senha de Acesso
                  </label>
                  <button
                    type="button"
                    onClick={() => setShowForgotModal(true)}
                    className="text-xs text-zinc-400 hover:text-white underline underline-offset-4"
                  >
                    Esqueceu a senha?
                  </button>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 w-4 h-4 text-zinc-500" />
                  <input
                    type={showLoginPassword ? 'text' : 'password'}
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    placeholder="Digite sua senha"
                    className="w-full bg-zinc-900 border border-zinc-700 text-white pl-9 pr-10 py-2.5 text-sm focus:outline-none focus:border-white transition-colors placeholder:text-zinc-600"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowLoginPassword(!showLoginPassword)}
                    className="absolute right-3 top-2.5 text-zinc-400 hover:text-white"
                  >
                    {showLoginPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <input
                  id="remember"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="rounded-none bg-zinc-900 border-zinc-700 text-white focus:ring-0 cursor-pointer"
                />
                <label htmlFor="remember" className="text-xs text-zinc-400 cursor-pointer">
                  Permanecer conectado neste navegador
                </label>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 px-4 bg-white hover:bg-zinc-200 text-black font-semibold text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer mt-2 disabled:opacity-50"
              >
                {isLoading ? (
                  <span>Autenticando...</span>
                ) : (
                  <>
                    <span>Entrar no Portal CIBE/PA</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              {/* Fast 1-click test button */}
              <div className="pt-4 border-t border-zinc-800 space-y-2">
                <div className="text-center text-xs text-zinc-500">
                  Ou acesse rapidamente com o perfil oficial configurado:
                </div>
                <button
                  type="button"
                  onClick={quickLoginAsDefault}
                  className="w-full py-2.5 px-3 border border-zinc-700 hover:border-zinc-500 text-xs font-mono text-zinc-300 hover:text-white transition-colors flex items-center justify-center gap-2"
                >
                  <UserCheck className="w-3.5 h-3.5" />
                  <span>Acesso Imediato: Caio Moraes (Coordenador SEDUC/PA)</span>
                </button>
              </div>
            </form>
          )}

          {/* REGISTER FORM */}
          {mode === 'register' && (
            <form onSubmit={handleRegisterSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-medium text-zinc-300 uppercase tracking-wider mb-1">
                  Nome Completo
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-3 w-4 h-4 text-zinc-500" />
                  <input
                    type="text"
                    value={regName}
                    onChange={(e) => setRegName(e.target.value)}
                    placeholder="Seu nome completo"
                    className="w-full bg-zinc-900 border border-zinc-700 text-white pl-9 pr-3 py-2 text-sm focus:outline-none focus:border-white transition-colors placeholder:text-zinc-600"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-zinc-300 uppercase tracking-wider mb-1">
                    E-mail
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 w-4 h-4 text-zinc-500" />
                    <input
                      type="email"
                      value={regEmail}
                      onChange={(e) => setRegEmail(e.target.value)}
                      placeholder="seu.email@exemplo.com"
                      className="w-full bg-zinc-900 border border-zinc-700 text-white pl-9 pr-3 py-2 text-sm focus:outline-none focus:border-white transition-colors placeholder:text-zinc-600"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-300 uppercase tracking-wider mb-1">
                    Cargo / Vínculo
                  </label>
                  <select
                    value={regRole}
                    onChange={(e) => setRegRole(e.target.value)}
                    className="w-full bg-zinc-900 border border-zinc-700 text-white px-3 py-2 text-sm focus:outline-none focus:border-white transition-colors cursor-pointer"
                  >
                    <option value="Professor(a) da Rede Estadual">Professor(a) da Rede Estadual</option>
                    <option value="Gestor(a) Escolar / Direção">Gestor(a) Escolar / Direção</option>
                    <option value="Servidor(a) SEDUC/PA">Servidor(a) SEDUC/PA</option>
                    <option value="Conselheiro(a) CEE/PA">Conselheiro(a) CEE/PA</option>
                    <option value="Pesquisador(a) Universitário">Pesquisador(a) Universitário</option>
                    <option value="Estudante / Responsável">Estudante / Responsável</option>
                    <option value="Membro da Comunidade Geral">Membro da Comunidade Geral</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-300 uppercase tracking-wider mb-1">
                  Escola / Unidade Administrativa de Lotação
                </label>
                <div className="relative">
                  <Building className="absolute left-3 top-3 w-4 h-4 text-zinc-500" />
                  <input
                    type="text"
                    value={regInstitution}
                    onChange={(e) => setRegInstitution(e.target.value)}
                    placeholder="Ex: Colégio Estadual Paes de Carvalho / SEDUC Central"
                    className="w-full bg-zinc-900 border border-zinc-700 text-white pl-9 pr-3 py-2 text-sm focus:outline-none focus:border-white transition-colors placeholder:text-zinc-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-zinc-300 uppercase tracking-wider mb-1">
                    Criar Senha
                  </label>
                  <input
                    type={showRegPassword ? 'text' : 'password'}
                    value={regPassword}
                    onChange={(e) => setRegPassword(e.target.value)}
                    placeholder="Mínimo 6 caracteres"
                    className="w-full bg-zinc-900 border border-zinc-700 text-white px-3 py-2 text-sm focus:outline-none focus:border-white transition-colors placeholder:text-zinc-600"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-zinc-300 uppercase tracking-wider mb-1">
                    Confirmar Senha
                  </label>
                  <input
                    type={showRegPassword ? 'text' : 'password'}
                    value={regConfirmPassword}
                    onChange={(e) => setRegConfirmPassword(e.target.value)}
                    placeholder="Repita a senha"
                    className="w-full bg-zinc-900 border border-zinc-700 text-white px-3 py-2 text-sm focus:outline-none focus:border-white transition-colors placeholder:text-zinc-600"
                    required
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-zinc-400">
                <button
                  type="button"
                  onClick={() => setShowRegPassword(!showRegPassword)}
                  className="text-zinc-400 hover:text-white flex items-center gap-1.5"
                >
                  {showRegPassword ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                  <span>{showRegPassword ? 'Ocultar senhas' : 'Exibir senhas'}</span>
                </button>
              </div>

              <div className="flex items-start gap-2 pt-1">
                <input
                  id="terms"
                  type="checkbox"
                  checked={acceptTerms}
                  onChange={(e) => setAcceptTerms(e.target.checked)}
                  className="rounded-none bg-zinc-900 border-zinc-700 text-white focus:ring-0 mt-0.5 cursor-pointer"
                  required
                />
                <label htmlFor="terms" className="text-[11px] text-zinc-400 cursor-pointer leading-tight">
                  Declaro que as informações prestadas são verdadeiras e comprometo-me com o sigilo 
                  e diretrizes institucionais do Sistema Internacional de Educação no Pará.
                </label>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 px-4 bg-white hover:bg-zinc-200 text-black font-semibold text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer mt-2 disabled:opacity-50"
              >
                {isLoading ? (
                  <span>Processando cadastro...</span>
                ) : (
                  <>
                    <span>Concluir Cadastro & Entrar</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Forgot Password Modal */}
      {showForgotModal && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="bg-zinc-950 border border-zinc-800 max-w-md w-full p-6 space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-serif text-lg font-bold text-white">Recuperação de Acesso</h3>
                <p className="text-xs text-zinc-400 mt-1">
                  Informe o seu e-mail para receber as instruções de redefinição de senha.
                </p>
              </div>
              <button
                onClick={() => setShowForgotModal(false)}
                className="text-zinc-500 hover:text-white text-lg font-mono"
              >
                ×
              </button>
            </div>

            {forgotSent ? (
              <div className="p-4 bg-zinc-900 border border-zinc-700 text-xs text-zinc-200 space-y-2">
                <div className="flex items-center gap-2 font-semibold text-white">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Instruções enviadas!</span>
                </div>
                <p>
                  Um link temporário de recuperação foi enviado para <strong className="text-white">{forgotEmail}</strong>. Verifique sua caixa de entrada institucional.
                </p>
              </div>
            ) : (
              <form onSubmit={handleForgotSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-zinc-300 uppercase tracking-wider mb-1">
                    Seu e-mail cadastrado
                  </label>
                  <input
                    type="email"
                    value={forgotEmail}
                    onChange={(e) => setForgotEmail(e.target.value)}
                    placeholder="email@seduc.pa.gov.br"
                    className="w-full bg-zinc-900 border border-zinc-700 text-white px-3 py-2 text-sm focus:outline-none focus:border-white"
                    required
                  />
                </div>
                <div className="flex justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowForgotModal(false)}
                    className="px-3 py-2 text-xs text-zinc-400 hover:text-white"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-white text-black font-semibold text-xs hover:bg-zinc-200"
                  >
                    Enviar Link de Redefinição
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Footer minimal info */}
      <footer className="border-t border-zinc-800 bg-zinc-950 px-6 py-4 text-center text-xs text-zinc-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <div>
            © {new Date().getFullYear()} CIBE/PA — Comissão de Implementação do Sistema Internacional de Educação no Pará
          </div>
          <div className="flex items-center gap-3">
            <span className="text-zinc-400">SEDUC/PA</span>
            <span>·</span>
            <span>Governo do Pará</span>
            <span>·</span>
            <span>Transparência Pública</span>
          </div>
        </div>
      </footer>
    </div>
  );
};
