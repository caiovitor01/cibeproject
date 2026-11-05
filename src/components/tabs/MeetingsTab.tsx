import React, { useState } from 'react';
import { MEETINGS_DATA } from '../../data/cibeData';
import { Meeting } from '../../types';
import { useAuth } from '../../context/AuthContext';
import { Calendar, Clock, MapPin, Users, CheckCircle2, PlusCircle, FileText, Send } from 'lucide-react';

export const MeetingsTab: React.FC = () => {
  const { user } = useAuth();
  const [filterType, setFilterType] = useState<'all' | 'Realizada' | 'Agendada'>('all');
  const [rsvpMeetings, setRsvpMeetings] = useState<Record<string, boolean>>({});
  
  // Proposal modal/form state
  const [showProposalForm, setShowProposalForm] = useState(false);
  const [proposalTitle, setProposalTitle] = useState('');
  const [proposalDescription, setProposalDescription] = useState('');
  const [proposalTargetMeeting, setProposalTargetMeeting] = useState(MEETINGS_DATA[2]?.id || '');
  const [proposalSuccess, setProposalSuccess] = useState(false);

  const toggleRsvp = (meetingId: string) => {
    setRsvpMeetings((prev) => ({
      ...prev,
      [meetingId]: !prev[meetingId]
    }));
  };

  const handleProposalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!proposalTitle.trim() || !proposalDescription.trim()) return;

    setProposalSuccess(true);
    setTimeout(() => {
      setProposalSuccess(false);
      setShowProposalForm(false);
      setProposalTitle('');
      setProposalDescription('');
    }, 2500);
  };

  const filteredMeetings = MEETINGS_DATA.filter((m) => {
    if (filterType === 'all') return true;
    return m.status === filterType;
  });

  return (
    <div className="space-y-12 py-8">
      {/* Editorial Header */}
      <div className="border-b border-zinc-200 pb-8 space-y-4">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-mono text-zinc-500">
          <span>04</span>
          <span>/</span>
          <span>Colegiado Plenário</span>
          <span>·</span>
          <span>Governança Participativa</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2 max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-zinc-950 tracking-tight">
              Reuniões e Pautas
            </h1>
            <p className="text-sm md:text-base text-zinc-600 leading-relaxed">
              Acompanhe as sessões plenárias, câmaras temáticas de currículo e audiências públicas da CIBE/PA. 
              Consulte ordens do dia, memórias de reunião e deliberações.
            </p>
          </div>
          <div className="shrink-0 flex items-center gap-3">
            <button
              onClick={() => setShowProposalForm(true)}
              className="px-4 py-2 bg-black text-white hover:bg-zinc-800 text-xs font-semibold flex items-center gap-2 transition-colors cursor-pointer"
            >
              <PlusCircle className="w-3.5 h-3.5" />
              <span>Propor Item de Pauta</span>
            </button>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-1 p-1 bg-zinc-100 border border-zinc-200 w-fit">
        <button
          onClick={() => setFilterType('all')}
          className={`px-3 py-1.5 text-xs font-medium transition-colors cursor-pointer ${
            filterType === 'all'
              ? 'bg-black text-white font-semibold'
              : 'text-zinc-600 hover:text-black hover:bg-zinc-200/60'
          }`}
        >
          Todas as Reuniões
        </button>
        <button
          onClick={() => setFilterType('Agendada')}
          className={`px-3 py-1.5 text-xs font-medium transition-colors cursor-pointer ${
            filterType === 'Agendada'
              ? 'bg-black text-white font-semibold'
              : 'text-zinc-600 hover:text-black hover:bg-zinc-200/60'
          }`}
        >
          Próximas Sessões (Agendadas)
        </button>
        <button
          onClick={() => setFilterType('Realizada')}
          className={`px-3 py-1.5 text-xs font-medium transition-colors cursor-pointer ${
            filterType === 'Realizada'
              ? 'bg-black text-white font-semibold'
              : 'text-zinc-600 hover:text-black hover:bg-zinc-200/60'
          }`}
        >
          Sessões Concluídas com Ata
        </button>
      </div>

      {/* Proposal Modal */}
      {showProposalForm && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="bg-white border border-zinc-300 max-w-lg w-full p-6 space-y-4 shadow-2xl">
            <div className="flex justify-between items-start border-b border-zinc-200 pb-3">
              <div>
                <h3 className="font-serif text-lg font-bold text-zinc-950">Submissão de Pauta Colegiada</h3>
                <p className="text-xs text-zinc-500 mt-0.5">
                  Proposição de tema para apreciação da Secretaria-Executiva da CIBE/PA
                </p>
              </div>
              <button
                onClick={() => setShowProposalForm(false)}
                className="text-zinc-500 hover:text-black text-lg font-mono"
              >
                ×
              </button>
            </div>

            {proposalSuccess ? (
              <div className="p-6 bg-zinc-50 border border-zinc-200 text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-black mx-auto" />
                <div className="font-serif font-bold text-zinc-900 text-base">Proposta Registrada!</div>
                <p className="text-xs text-zinc-600">
                  O item foi encaminhado à Secretaria-Executiva com o protocolo <strong>PT-CIBE-{Date.now().toString().slice(-4)}</strong>. 
                  Você receberá a devolutiva em seu e-mail institucional ({user?.email}).
                </p>
              </div>
            ) : (
              <form onSubmit={handleProposalSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block text-zinc-700 uppercase tracking-wider mb-1 font-mono">
                    Reunião Alvo
                  </label>
                  <select
                    value={proposalTargetMeeting}
                    onChange={(e) => setProposalTargetMeeting(e.target.value)}
                    className="w-full bg-white border border-zinc-300 px-3 py-2 text-xs focus:outline-none focus:border-black"
                  >
                    {MEETINGS_DATA.filter((m) => m.status === 'Agendada').map((m) => (
                      <option key={m.id} value={m.id}>
                        {m.title} ({m.date})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-zinc-700 uppercase tracking-wider mb-1 font-mono">
                    Título Sucinto do Ponto de Pauta
                  </label>
                  <input
                    type="text"
                    value={proposalTitle}
                    onChange={(e) => setProposalTitle(e.target.value)}
                    placeholder="Ex: Ampliação do acervo bilíngue para o polo de Marabá"
                    className="w-full bg-white border border-zinc-300 px-3 py-2 text-xs focus:outline-none focus:border-black"
                    required
                  />
                </div>

                <div>
                  <label className="block text-zinc-700 uppercase tracking-wider mb-1 font-mono">
                    Justificativa e Detalhamento Técnico
                  </label>
                  <textarea
                    rows={4}
                    value={proposalDescription}
                    onChange={(e) => setProposalDescription(e.target.value)}
                    placeholder="Apresente os fundamentos pedagógicos ou operacionais da solicitação..."
                    className="w-full bg-white border border-zinc-300 p-2 text-xs focus:outline-none focus:border-black"
                    required
                  />
                </div>

                <div className="bg-zinc-50 p-3 border border-zinc-200 text-[11px] text-zinc-600">
                  Proponente autenticado: <strong>{user?.name}</strong> ({user?.role} — {user?.institution})
                </div>

                <div className="flex justify-end gap-2 pt-2 border-t border-zinc-200">
                  <button
                    type="button"
                    onClick={() => setShowProposalForm(false)}
                    className="px-3 py-2 text-zinc-600 hover:text-black"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-black text-white font-semibold text-xs hover:bg-zinc-800"
                  >
                    Protocolar Pauta
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Meetings List */}
      <div className="space-y-6">
        {filteredMeetings.map((meeting) => {
          const isConfirmed = rsvpMeetings[meeting.id];
          return (
            <div
              key={meeting.id}
              className="border border-zinc-300 bg-white p-6 md:p-8 space-y-6 hover:border-black transition-colors"
            >
              {/* Top metadata strip */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-100 pb-3 text-xs font-mono text-zinc-500">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-black uppercase">{meeting.edition}</span>
                  <span>·</span>
                  <span>{meeting.type}</span>
                  <span>·</span>
                  <span>Modalidade {meeting.modality}</span>
                </div>
                <div className="text-zinc-800 font-semibold uppercase tracking-wider">
                  STATUS: {meeting.status}
                </div>
              </div>

              {/* Title & Info */}
              <div className="space-y-3">
                <h2 className="text-xl md:text-2xl font-serif font-bold text-zinc-950">
                  {meeting.title}
                </h2>

                <div className="flex flex-wrap items-center gap-6 text-xs text-zinc-700">
                  <span className="flex items-center gap-1.5 font-medium">
                    <Calendar className="w-4 h-4 text-zinc-500" />
                    <span>{meeting.date}</span>
                  </span>
                  <span className="flex items-center gap-1.5 font-medium">
                    <Clock className="w-4 h-4 text-zinc-500" />
                    <span>{meeting.time}</span>
                  </span>
                  <span className="flex items-center gap-1.5 font-medium">
                    <MapPin className="w-4 h-4 text-zinc-500" />
                    <span>{meeting.location}</span>
                  </span>
                  <span className="flex items-center gap-1.5 font-medium font-mono text-zinc-500">
                    <Users className="w-4 h-4" />
                    <span>{meeting.participantsCount} membros previstos</span>
                  </span>
                </div>
              </div>

              {/* Agenda items */}
              <div className="bg-zinc-50 p-5 border border-zinc-200 space-y-2">
                <div className="text-xs font-mono uppercase tracking-wider text-zinc-600 font-semibold">
                  Ordem do Dia / Pauta da Sessão
                </div>
                <ol className="text-xs text-zinc-700 space-y-1.5 list-decimal list-inside leading-relaxed">
                  {meeting.agenda.map((item, idx) => (
                    <li key={idx} className="pl-1">
                      <span>{item}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Summary / Ata if completed */}
              {meeting.minutesSummary && (
                <div className="p-4 border border-zinc-300 bg-white space-y-1 text-xs">
                  <div className="font-mono uppercase tracking-wider font-semibold text-zinc-900">
                    Síntese das Deliberações Homologadas
                  </div>
                  <p className="text-zinc-600 leading-relaxed">
                    {meeting.minutesSummary}
                  </p>
                </div>
              )}

              {/* Bottom interactive action */}
              <div className="flex flex-wrap justify-between items-center gap-3 pt-2 border-t border-zinc-100 text-xs">
                <div className="text-zinc-500">
                  Sessão oficial registrada no Livro de Atas da CIBE/PA.
                </div>

                <div className="flex items-center gap-2">
                  {meeting.status === 'Agendada' ? (
                    <button
                      onClick={() => toggleRsvp(meeting.id)}
                      className={`px-4 py-2 text-xs font-semibold transition-colors flex items-center gap-2 cursor-pointer ${
                        isConfirmed
                          ? 'bg-zinc-900 text-white'
                          : 'border border-zinc-400 text-zinc-800 hover:border-black'
                      }`}
                    >
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>{isConfirmed ? 'Presença Confirmada' : 'Confirmar Presença (Membros)'}</span>
                    </button>
                  ) : (
                    <div className="font-mono text-zinc-600 text-xs">
                      [Ata Homologada em Acervo]
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
