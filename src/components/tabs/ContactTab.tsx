import React, { useState, useEffect } from 'react';
import { CIBE_INFO } from '../../data/cibeData';
import { useAuth } from '../../context/AuthContext';
import { ContactSubmission } from '../../types';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, ShieldCheck, FileCheck, Building } from 'lucide-react';

const STORAGE_KEY_SUBMISSIONS = 'cibe_contact_submissions';

export const ContactTab: React.FC = () => {
  const { user } = useAuth();

  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('Dúvidas sobre o Currículo Internacional');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastSubmission, setLastSubmission] = useState<ContactSubmission | null>(null);

  const [history, setHistory] = useState<ContactSubmission[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_SUBMISSIONS);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    if (user) {
      if (!name) setName(user.name);
      if (!email) setEmail(user.email);
    }
  }, [user]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) return;

    setIsSubmitting(true);

    const protocolNumber = `PROT-CIBE-2026-${Math.floor(10000 + Math.random() * 90000)}`;

    const newSubmission: ContactSubmission = {
      id: 'sub-' + Date.now(),
      protocol: protocolNumber,
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim() || '(Não informado)',
      category,
      subject: subject.trim(),
      message: message.trim(),
      createdAt: new Intl.DateTimeFormat('pt-BR', { dateStyle: 'short', timeStyle: 'short' }).format(new Date()),
      status: 'Recebido'
    };

    setTimeout(() => {
      const updatedHistory = [newSubmission, ...history];
      setHistory(updatedHistory);
      try {
        localStorage.setItem(STORAGE_KEY_SUBMISSIONS, JSON.stringify(updatedHistory));
      } catch (err) {
        console.warn('Storage save error:', err);
      }

      setLastSubmission(newSubmission);
      setIsSubmitting(false);
      setSubject('');
      setMessage('');
      setPhone('');
    }, 600);
  };

  const technicalChambers = [
    {
      title: "Secretaria-Executiva & Deliberações",
      responsible: "Coordenação Geral CIBE/PA",
      email: "cibe.pa@seduc.pa.gov.br",
      phone: "(91) 3201-5120"
    },
    {
      title: "Câmara Técnica Pedagógica & Matrizes IB",
      responsible: "Assessoria Curricular Internacional",
      email: "curriculo.cibe@seduc.pa.gov.br",
      phone: "(91) 3201-5125"
    },
    {
      title: "Câmara de Formação Docente & Bolsas",
      responsible: "Núcleo de Desenvolvimento Profissional",
      email: "formacao.cibe@seduc.pa.gov.br",
      phone: "(91) 3201-5130"
    },
    {
      title: "Credenciamento Escolar & Equivalência CEE",
      responsible: "Comitê Conjunto SEDUC/CEE",
      email: "normas.cibe@seduc.pa.gov.br",
      phone: "(91) 3216-2200"
    }
  ];

  return (
    <div className="space-y-12 py-8">
      {/* Editorial Header */}
      <div className="border-b border-zinc-200 pb-8 space-y-4">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-mono text-zinc-500">
          <span>06</span>
          <span>/</span>
          <span>Atendimento Institucional</span>
          <span>·</span>
          <span>Ouvidoria e Informação</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2 max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-zinc-950 tracking-tight">
              Canais de Contato & Ouvidoria
            </h1>
            <p className="text-sm md:text-base text-zinc-600 leading-relaxed">
              Entre em contato direto com a comissão para esclarecimento de dúvidas pedagógicas, 
              solicitações de informação da comunidade escolar e contato institucional com as câmaras técnicas.
            </p>
          </div>
          <div className="text-right shrink-0">
            <div className="font-mono text-xs text-zinc-500 uppercase tracking-wider">
              Sede Administrativa
            </div>
            <div className="text-sm font-semibold text-zinc-900 mt-1">
              SEDUC Central · Belém/PA
            </div>
          </div>
        </div>
      </div>

      {/* Grid: Chambers & Channels on Left, Form on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct channels and Chambers */}
        <div className="lg:col-span-5 space-y-6">
          {/* Main Headquarters Box */}
          <div className="border border-zinc-300 bg-white p-6 space-y-4">
            <div className="font-mono text-xs uppercase tracking-wider font-semibold text-zinc-900">
              Sede e Funcionamento
            </div>
            <div className="space-y-3 text-xs text-zinc-700">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-zinc-500 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  <strong>SEDUC/PA — Central:</strong> Rodovia Augusto Montenegro, Km 10, S/N, Icoaraci, Belém - PA, CEP 66820-000. Bloco B, 2º Andar (Gabinete CIBE/PA).
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-zinc-500 shrink-0" />
                <span>Atendimento Presencial: Segunda a Sexta, das 08h00 às 17h00</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-zinc-500 shrink-0" />
                <span className="font-mono">{CIBE_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-zinc-500 shrink-0" />
                <span className="font-mono">{CIBE_INFO.email}</span>
              </div>
            </div>
          </div>

          {/* Technical Chambers Directory */}
          <div className="border border-zinc-300 bg-zinc-50 p-6 space-y-4">
            <div className="font-mono text-xs uppercase tracking-wider font-semibold text-zinc-900">
              Câmaras Técnicas Especializadas
            </div>
            <div className="space-y-3 divide-y divide-zinc-200">
              {technicalChambers.map((ch, idx) => (
                <div key={idx} className={idx > 0 ? "pt-3 space-y-1 text-xs" : "space-y-1 text-xs"}>
                  <div className="font-serif font-bold text-zinc-900">{ch.title}</div>
                  <div className="text-zinc-600 text-[11px]">{ch.responsible}</div>
                  <div className="flex flex-wrap gap-3 font-mono text-[11px] text-zinc-500 pt-0.5">
                    <span className="text-zinc-800">{ch.email}</span>
                    <span>·</span>
                    <span>{ch.phone}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Submitted Protocols History */}
          {history.length > 0 && (
            <div className="border border-zinc-300 bg-white p-6 space-y-3">
              <div className="flex items-center justify-between">
                <div className="font-mono text-xs uppercase tracking-wider font-semibold text-zinc-900">
                  Seus Protocolos Registrados
                </div>
                <span className="text-xs font-mono text-zinc-500 tabular-nums">
                  {history.length}
                </span>
              </div>
              <div className="space-y-2 max-h-56 overflow-y-auto divide-y divide-zinc-100 pr-1">
                {history.map((item) => (
                  <div key={item.id} className="pt-2 text-xs space-y-1">
                    <div className="flex items-center justify-between font-mono">
                      <span className="font-bold text-zinc-900">{item.protocol}</span>
                      <span className="text-[10px] text-zinc-600 bg-zinc-100 px-1.5 py-0.5">{item.status}</span>
                    </div>
                    <div className="font-medium text-zinc-800 truncate">{item.subject}</div>
                    <div className="text-[10px] text-zinc-400">{item.createdAt}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Formal Contact / Ombudsman Form */}
        <div className="lg:col-span-7 bg-white border border-zinc-300 p-6 md:p-8 space-y-6">
          <div className="border-b border-zinc-200 pb-4">
            <h2 className="text-xl md:text-2xl font-serif font-bold text-zinc-950">
              Formulário de Atendimento e Ouvidoria
            </h2>
            <p className="text-xs text-zinc-500 mt-1">
              Envie sua mensagem oficial para protocolo imediato no sistema da comissão.
            </p>
          </div>

          {/* Protocol Success Feedback */}
          {lastSubmission && (
            <div className="p-5 border border-zinc-900 bg-zinc-50 space-y-3">
              <div className="flex items-center gap-2 text-zinc-950 font-serif font-bold text-base">
                <CheckCircle2 className="w-5 h-5 text-black" />
                <span>Protocolo Gerado com Sucesso!</span>
              </div>
              <div className="p-3 bg-white border border-zinc-200 font-mono text-xs space-y-1">
                <div>NÚMERO DO PROTOCOLO: <strong className="text-black">{lastSubmission.protocol}</strong></div>
                <div>SOLICITANTE: {lastSubmission.name} ({lastSubmission.email})</div>
                <div>ASSUNTO: {lastSubmission.subject}</div>
                <div>DATA/HORA: {lastSubmission.createdAt}</div>
              </div>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Sua manifestação foi distribuída à câmara técnica correspondente. O prazo padrão de resposta é de até 
                48 horas úteis, conforme regulamentação da Ouvidoria da SEDUC/PA.
              </p>
              <button
                onClick={() => setLastSubmission(null)}
                className="text-xs font-semibold text-zinc-900 underline underline-offset-4 cursor-pointer"
              >
                Enviar nova manifestação
              </button>
            </div>
          )}

          {/* Form */}
          {!lastSubmission && (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-zinc-700 uppercase tracking-wider mb-1 font-mono font-medium">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Seu nome"
                    className="w-full bg-white border border-zinc-300 p-2.5 text-xs text-zinc-900 focus:outline-none focus:border-black transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="block text-zinc-700 uppercase tracking-wider mb-1 font-mono font-medium">
                    E-mail para Retorno
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="seu.email@exemplo.com"
                    className="w-full bg-white border border-zinc-300 p-2.5 text-xs text-zinc-900 focus:outline-none focus:border-black transition-colors"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-zinc-700 uppercase tracking-wider mb-1 font-mono font-medium">
                    Telefone de Contato (WhatsApp)
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(91) 9XXXX-XXXX"
                    className="w-full bg-white border border-zinc-300 p-2.5 text-xs text-zinc-900 focus:outline-none focus:border-black transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-zinc-700 uppercase tracking-wider mb-1 font-mono font-medium">
                    Categoria da Manifestação
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full bg-white border border-zinc-300 p-2.5 text-xs text-zinc-900 focus:outline-none focus:border-black cursor-pointer"
                  >
                    <option value="Dúvidas sobre o Currículo Internacional">Dúvidas sobre o Currículo Internacional</option>
                    <option value="Inscrições e Seleção de Docentes">Inscrições e Seleção de Docentes</option>
                    <option value="Candidatura de Novas Escolas Polos">Candidatura de Novas Escolas Polos</option>
                    <option value="Equivalência e Validação CEE/PA">Equivalência e Validação CEE/PA</option>
                    <option value="Ouvidoria / Elogio ou Reclamação">Ouvidoria / Elogio ou Reclamação</option>
                    <option value="Assessoria de Imprensa">Assessoria de Imprensa</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-zinc-700 uppercase tracking-wider mb-1 font-mono font-medium">
                  Assunto Resumido
                </label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Ex: Consulta sobre vagas do Ensino Médio Internacional no polo de Santarém"
                  className="w-full bg-white border border-zinc-300 p-2.5 text-xs text-zinc-900 focus:outline-none focus:border-black transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-zinc-700 uppercase tracking-wider mb-1 font-mono font-medium">
                  Mensagem / Detalhamento da Solicitação
                </label>
                <textarea
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Escreva sua mensagem com clareza para que a comissão técnica possa atendê-lo com precisão..."
                  className="w-full bg-white border border-zinc-300 p-2.5 text-xs text-zinc-900 focus:outline-none focus:border-black transition-colors"
                  required
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="text-[11px] text-zinc-500 font-mono">
                  Lei de Acesso à Informação (LAI) nº 12.527
                </span>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2.5 bg-black hover:bg-zinc-800 text-white font-semibold text-xs flex items-center gap-2 transition-colors cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Registrando...</span>
                  ) : (
                    <>
                      <span>Protocolar Mensagem</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
