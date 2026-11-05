import React, { useState } from 'react';
import { CIBE_INFO, CIBE_FAQS } from '../../data/cibeData';
import { ChevronDown, ChevronUp, ArrowRight, BookOpen, Globe, Award, Landmark, Building2, MapPin } from 'lucide-react';
import { TabType } from '../../types';

interface AboutTabProps {
  onNavigateTab: (tab: TabType) => void;
}

export const AboutTab: React.FC<AboutTabProps> = ({ onNavigateTab }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <div className="space-y-16 py-8">
      {/* Editorial Hero Section */}
      <section className="space-y-6 border-b border-zinc-200 pb-12">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-mono text-zinc-500">
          <span>01</span>
          <span>/</span>
          <span>Apresentação Institucional</span>
          <span>·</span>
          <span>Governo do Pará & SEDUC</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-4">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-zinc-950 tracking-tight leading-tight text-balance">
              O que é a CIBE/PA?
            </h1>
            <p className="text-base md:text-lg text-zinc-700 leading-relaxed font-sans max-w-3xl">
              A <strong>Comissão Interinstitucional de Implementação do Sistema Internacional de Educação no Estado do Pará (CIBE/PA)</strong> é 
              o colegiado permanente responsável por planejar, normatizar, acompanhar e assegurar a transição da rede pública 
              estadual para matrizes de certificação educacional internacional de alto rigor acadêmico e bilinguismo.
            </p>
            <div className="pt-2 flex flex-wrap gap-3 text-xs">
              <button
                onClick={() => onNavigateTab('documents')}
                className="px-4 py-2 bg-black text-white hover:bg-zinc-800 transition-colors font-semibold flex items-center gap-2 cursor-pointer"
              >
                <span>Consultar Decretos & Portarias</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => onNavigateTab('members')}
                className="px-4 py-2 border border-zinc-300 text-zinc-800 hover:border-black transition-colors font-semibold cursor-pointer"
              >
                <span>Conhecer os Membros da Comissão</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-4 bg-zinc-900 text-white p-6 border border-zinc-800 space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-zinc-400">
              Marco Legal e Vinculação
            </div>
            <div className="text-xs space-y-2 text-zinc-300 leading-relaxed">
              <p>
                <strong>Criada por:</strong> Decreto Estadual nº 3.892/2024 e Portaria Conjunta SEDUC/CEE nº 042/2024.
              </p>
              <p>
                <strong>Vínculo Administrativo:</strong> Secretaria de Estado de Educação (SEDUC/PA).
              </p>
              <p>
                <strong>Escopo:</strong> Ensino Médio Público Internacional e Plurilíngue em todo o território paraense.
              </p>
            </div>
            <div className="pt-3 border-t border-zinc-800 font-mono text-[11px] text-zinc-400">
              Sede Central em Belém · Atuação em 12 Regiões de Integração
            </div>
          </div>
        </div>
      </section>

      {/* Large Featured Photo & Archival Framing */}
      <section className="relative border border-zinc-300 bg-zinc-100 overflow-hidden">
        <img
          src="/src/assets/images/cibe_meeting_commission_1792670757105.jpg"
          alt="Reunião deliberativa da comissão CIBE/PA"
          className="w-full h-72 md:h-96 object-cover grayscale contrast-125 filter"
          referrerPolicy="no-referrer"
        />
        <div className="p-4 bg-white border-t border-zinc-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-xs text-zinc-600 font-sans">
          <span>Sessão plenária da CIBE/PA com representações da SEDUC, CEE/PA e universidades públicas.</span>
          <span className="font-mono text-zinc-500">REGISTRO ARQUIVÍSTICO OFICIAL · SEDUC/PA</span>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="border border-zinc-300 p-8 space-y-4 bg-white">
          <div className="text-xs font-mono uppercase tracking-widest text-zinc-500">Propósito Institucional</div>
          <h2 className="text-2xl font-serif font-bold text-zinc-950">Nossa Missão</h2>
          <p className="text-sm text-zinc-700 leading-relaxed">
            {CIBE_INFO.mission}
          </p>
        </div>

        <div className="border border-zinc-300 p-8 space-y-4 bg-white">
          <div className="text-xs font-mono uppercase tracking-widest text-zinc-500">Visão de Futuro</div>
          <h2 className="text-2xl font-serif font-bold text-zinc-950">Nossa Visão</h2>
          <p className="text-sm text-zinc-700 leading-relaxed">
            {CIBE_INFO.vision}
          </p>
        </div>
      </section>

      {/* 4 Fundamental Principles */}
      <section className="space-y-6">
        <div className="border-b border-zinc-200 pb-3">
          <div className="text-xs font-mono uppercase tracking-widest text-zinc-500">Diretrizes da Política Pública</div>
          <h2 className="text-2xl font-serif font-bold text-zinc-950 mt-1">Princípios Fundamentais</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CIBE_INFO.principles.map((pr, i) => (
            <div key={i} className="border border-zinc-200 p-6 bg-white space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="font-mono text-xs text-zinc-400 font-bold">0{i + 1}.</span>
                <h3 className="font-serif font-semibold text-zinc-950 text-base">{pr.title}</h3>
                <p className="text-xs text-zinc-600 leading-relaxed">{pr.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Strategic Pillars with clean editorial numbering */}
      <section className="space-y-6">
        <div className="border-b border-zinc-200 pb-3 flex justify-between items-end">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-zinc-500">Estruturação Operacional</div>
            <h2 className="text-2xl font-serif font-bold text-zinc-950 mt-1">Os 4 Pilares de Implantação</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CIBE_INFO.pillars.map((pillar) => (
            <div key={pillar.id} className="border border-zinc-300 p-6 bg-zinc-50 flex items-start gap-4">
              <span className="font-mono text-2xl font-bold text-zinc-900 shrink-0">
                {pillar.number}
              </span>
              <div className="space-y-1.5">
                <h3 className="font-serif font-semibold text-zinc-950 text-lg">
                  {pillar.title}
                </h3>
                <p className="text-xs md:text-sm text-zinc-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pilot Schools Section */}
      <section className="space-y-6">
        <div className="border-b border-zinc-200 pb-3">
          <div className="text-xs font-mono uppercase tracking-widest text-zinc-500">Rede Pública em Ação</div>
          <h2 className="text-2xl font-serif font-bold text-zinc-950 mt-1">Escolas Polos Pioneiras</h2>
          <p className="text-xs text-zinc-500 mt-1">
            Unidades escolares estaduais do Pará que integram o primeiro ciclo de transição para o Sistema Internacional.
          </p>
        </div>

        <div className="border border-zinc-300 divide-y divide-zinc-200 bg-white">
          {CIBE_INFO.pilotSchools.map((school, idx) => (
            <div key={idx} className="p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-zinc-50 transition-colors">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-500">
                  <MapPin className="w-3.5 h-3.5 text-zinc-700" />
                  <span>{school.city} · {school.region}</span>
                </div>
                <h3 className="font-serif text-base font-semibold text-zinc-950">
                  {school.name}
                </h3>
                <div className="text-xs text-zinc-600">
                  Status: <strong>{school.stage}</strong>
                </div>
              </div>
              <div className="text-right shrink-0">
                <div className="font-mono text-lg font-bold text-zinc-950 tabular-nums">
                  {school.studentsCount}
                </div>
                <div className="text-[11px] text-zinc-500 uppercase tracking-wider">
                  Alunos no Programa
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline Section */}
      <section className="space-y-6">
        <div className="border-b border-zinc-200 pb-3">
          <div className="text-xs font-mono uppercase tracking-widest text-zinc-500">Marcos Históricos</div>
          <h2 className="text-2xl font-serif font-bold text-zinc-950 mt-1">Cronograma de Implementação</h2>
        </div>

        <div className="relative border-l border-zinc-300 pl-6 space-y-8 ml-4">
          {CIBE_INFO.timeline.map((item, idx) => (
            <div key={idx} className="relative space-y-1.5">
              {/* Timeline marker */}
              <div className="absolute -left-[31px] top-1 w-3 h-3 bg-zinc-950 border-2 border-white"></div>
              
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-500">
                <span className="font-bold text-zinc-900">{item.year}</span>
                <span>·</span>
                <span>{item.period}</span>
              </div>
              <h3 className="font-serif text-base font-semibold text-zinc-950">
                {item.title}
              </h3>
              <p className="text-xs md:text-sm text-zinc-600 leading-relaxed max-w-2xl">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive FAQ Section */}
      <section className="space-y-6">
        <div className="border-b border-zinc-200 pb-3">
          <div className="text-xs font-mono uppercase tracking-widest text-zinc-500">Esclarecimentos Rápidos</div>
          <h2 className="text-2xl font-serif font-bold text-zinc-950 mt-1">Perguntas Frequentes (FAQ)</h2>
          <p className="text-xs text-zinc-500 mt-1">
            Dúvidas mais comuns de estudantes, responsáveis e educadores sobre o Sistema Internacional.
          </p>
        </div>

        <div className="border border-zinc-300 divide-y divide-zinc-200 bg-white">
          {CIBE_FAQS.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div key={idx} className="transition-colors">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left flex justify-between items-center gap-4 hover:bg-zinc-50 transition-colors cursor-pointer"
                >
                  <span className="font-serif font-medium text-zinc-950 text-sm md:text-base">
                    {faq.question}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-zinc-700 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-zinc-400 shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs md:text-sm text-zinc-600 leading-relaxed border-t border-zinc-100 bg-zinc-50/50">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
