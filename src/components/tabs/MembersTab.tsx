import React, { useState } from 'react';
import { MEMBERS_DATA } from '../../data/cibeData';
import { CommissionMember } from '../../types';
import { Search, Mail, Phone, MapPin, Building, ChevronRight, UserCheck } from 'lucide-react';

export const MembersTab: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMember, setSelectedMember] = useState<CommissionMember | null>(null);

  const categories = [
    { id: 'all', label: 'Todos os Membros' },
    { id: 'coordenacao', label: 'Coordenação Geral' },
    { id: 'seduc', label: 'Assessoria SEDUC' },
    { id: 'cee', label: 'Conselho CEE/PA' },
    { id: 'universidades', label: 'Universidades Públicas' },
    { id: 'docentes', label: 'Corpo Docente' },
    { id: 'gestores', label: 'Gestores Escolares' }
  ];

  const filteredMembers = MEMBERS_DATA.filter((m) => {
    const matchesCategory = selectedCategory === 'all' || m.category === selectedCategory;
    const matchesSearch =
      m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.institution.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.bio.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-12 py-8">
      {/* Editorial Header */}
      <div className="border-b border-zinc-200 pb-8 space-y-4">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-mono text-zinc-500">
          <span>02</span>
          <span>/</span>
          <span>Composição Colegiada</span>
          <span>·</span>
          <span>Membros Designados</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2 max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-zinc-950 tracking-tight">
              Membros da Comissão
            </h1>
            <p className="text-sm md:text-base text-zinc-600 leading-relaxed">
              Quadro de conselheiros, gestores da SEDUC/PA, pesquisadores de universidades públicas e representantes docentes 
              que integram a estrutura de governança da CIBE/PA.
            </p>
          </div>
          <div className="text-right shrink-0">
            <div className="font-mono text-3xl font-bold text-zinc-950 tabular-nums">
              {MEMBERS_DATA.length}
            </div>
            <div className="text-xs uppercase font-mono text-zinc-500">
              Membros Nomeados
            </div>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="space-y-4">
        <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-1 p-1 bg-zinc-100 border border-zinc-200">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-medium transition-colors cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-black text-white font-semibold'
                    : 'text-zinc-600 hover:text-black hover:bg-zinc-200/60'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-zinc-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por nome, cargo ou órgão..."
              className="w-full bg-white border border-zinc-300 text-zinc-900 pl-9 pr-3 py-1.5 text-xs focus:outline-none focus:border-black transition-colors placeholder:text-zinc-400"
            />
          </div>
        </div>

        {/* Unboxed result counter */}
        <div className="text-xs text-zinc-500 font-mono">
          Mostrando {filteredMembers.length} de {MEMBERS_DATA.length} membros da comissão
        </div>
      </div>

      {/* Members Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {filteredMembers.map((member) => (
          <div
            key={member.id}
            className="border border-zinc-300 bg-white p-6 flex flex-col justify-between hover:border-black transition-colors space-y-4"
          >
            <div className="space-y-4">
              {/* Member Top Identification */}
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-zinc-900 text-white flex items-center justify-center font-serif text-xl font-bold shrink-0 border border-zinc-800">
                  {member.name.replace(/Profª?\.?|Drª?\.?|Me\.?/gi, '').trim().charAt(0)}
                </div>
                <div className="space-y-1">
                  <div className="text-xs font-mono uppercase tracking-wider text-zinc-500">
                    {member.categoryLabel}
                  </div>
                  <h2 className="text-lg font-serif font-bold text-zinc-950 leading-snug">
                    {member.name}
                  </h2>
                  <div className="text-xs font-medium text-zinc-700">
                    {member.role}
                  </div>
                </div>
              </div>

              {/* Institution and Bio */}
              <div className="space-y-2 border-t border-zinc-100 pt-3 text-xs">
                <div className="flex items-center gap-1.5 text-zinc-700 font-medium">
                  <Building className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                  <span>{member.institution}</span>
                </div>
                <p className="text-zinc-600 leading-relaxed text-xs">
                  {member.bio}
                </p>
              </div>

              {/* Key Responsibilities */}
              <div className="bg-zinc-50 p-3 border border-zinc-200 space-y-1.5">
                <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 font-semibold">
                  Atribuições na CIBE/PA
                </div>
                <ul className="text-xs text-zinc-700 space-y-1">
                  {member.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="font-mono text-zinc-400 text-[10px] mt-0.5">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom Contact Strip */}
            <div className="pt-3 border-t border-zinc-200 flex flex-wrap justify-between items-center gap-2 text-xs font-mono text-zinc-600">
              <div className="flex items-center gap-1">
                <Mail className="w-3 h-3 text-zinc-400" />
                <a
                  href={`mailto:${member.email}`}
                  className="hover:text-black underline underline-offset-2"
                >
                  {member.email}
                </a>
              </div>
              <div className="flex items-center gap-1 text-zinc-500">
                <MapPin className="w-3 h-3" />
                <span>{member.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredMembers.length === 0 && (
        <div className="text-center py-16 border border-zinc-200 bg-zinc-50 space-y-3">
          <div className="font-serif text-lg text-zinc-700">Nenhum membro encontrado com os critérios fornecidos</div>
          <p className="text-xs text-zinc-500">Tente buscar por outro termo ou limpar os filtros de categoria.</p>
          <button
            onClick={() => {
              setSelectedCategory('all');
              setSearchQuery('');
            }}
            className="px-3 py-1.5 text-xs bg-black text-white hover:bg-zinc-800 transition-colors"
          >
            Limpar Filtros
          </button>
        </div>
      )}

      {/* Legal Attribution Notice */}
      <div className="border border-zinc-300 p-6 bg-zinc-50 text-xs text-zinc-600 space-y-2">
        <div className="font-mono uppercase tracking-wider font-semibold text-zinc-900">
          Designação Oficial
        </div>
        <p className="leading-relaxed">
          Os membros da CIBE/PA desempenham função pública relevante, não remunerada especificamente a título de gratificação adicional, 
          em conformidade com o Artigo 5º da Portaria Conjunta SEDUC/CEE nº 042/2024. Suas nomeações foram homologadas e publicadas 
          no Diário Oficial do Estado do Pará.
        </p>
      </div>
    </div>
  );
};
