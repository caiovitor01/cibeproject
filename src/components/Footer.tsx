import React from 'react';
import { TabType } from '../types';
import { ShieldCheck, Mail, MapPin, Phone, ExternalLink } from 'lucide-react';

interface FooterProps {
  onSelectTab: (tab: TabType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab }) => {
  return (
    <footer className="bg-black border-t border-zinc-800 text-zinc-400 text-xs">
      {/* Upper grid */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Col 1: Brand & Institutional Purpose */}
        <div className="space-y-3 md:col-span-1">
          <div className="text-white font-serif text-lg font-bold">CIBE / PA</div>
          <p className="text-zinc-400 text-xs leading-relaxed">
            Comissão Interinstitucional de Implementação do Sistema Internacional de Educação no Estado do Pará.
            Órgão colegiado permanente vinculado à Secretaria de Estado de Educação (SEDUC/PA).
          </p>
          <div className="text-[11px] text-zinc-500 font-mono">
            Decreto Estadual nº 3.892/2024
          </div>
        </div>

        {/* Col 2: Navigation Links */}
        <div className="space-y-2.5">
          <div className="text-white font-mono uppercase tracking-wider text-xs font-semibold">
            Navegação Institucional
          </div>
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => onSelectTab('about')}
                className="hover:text-white transition-colors cursor-pointer"
              >
                O que é a CIBE?
              </button>
            </li>
            <li>
              <button
                onClick={() => onSelectTab('members')}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Membros da Comissão
              </button>
            </li>
            <li>
              <button
                onClick={() => onSelectTab('documents')}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Documentos e Portarias
              </button>
            </li>
            <li>
              <button
                onClick={() => onSelectTab('meetings')}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Calendário de Reuniões
              </button>
            </li>
            <li>
              <button
                onClick={() => onSelectTab('news')}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Notícias e Comunicados
              </button>
            </li>
            <li>
              <button
                onClick={() => onSelectTab('contact')}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Canais de Atendimento
              </button>
            </li>
          </ul>
        </div>

        {/* Col 3: Direct Contacts & Headquarters */}
        <div className="space-y-2.5">
          <div className="text-white font-mono uppercase tracking-wider text-xs font-semibold">
            Sede e Atendimento
          </div>
          <div className="space-y-2 text-zinc-400">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-zinc-300 shrink-0 mt-0.5" />
              <span>
                SEDUC Central — Rodovia Augusto Montenegro, Km 10, S/N, Icoaraci, Belém - PA
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-zinc-300 shrink-0" />
              <span className="font-mono text-zinc-300">cibe.pa@seduc.pa.gov.br</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-zinc-300 shrink-0" />
              <span className="font-mono text-zinc-300">(91) 3201-5000 / R. 5120</span>
            </div>
          </div>
        </div>

        {/* Col 4: Public Governance */}
        <div className="space-y-3">
          <div className="text-white font-mono uppercase tracking-wider text-xs font-semibold">
            Governança e Transparência
          </div>
          <p className="text-zinc-500 leading-relaxed text-[11px]">
            Todos os atos normativos, atas e resoluções emitidos pela comissão são de domínio público, 
            em conformidade com a Lei de Acesso à Informação (Lei Federal nº 12.527/2011).
          </p>
          <div className="border border-zinc-800 p-3 bg-zinc-950 text-[11px] space-y-1">
            <div className="text-white font-medium">Conselho Estadual de Educação (CEE/PA)</div>
            <div className="text-zinc-500">Credenciamento e validação de equivalências acadêmicas.</div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-zinc-900 bg-zinc-950 px-6 py-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 text-[11px] text-zinc-500">
          <div>
            © {new Date().getFullYear()} Governo do Estado do Pará · Secretaria de Estado de Educação (SEDUC/PA).
          </div>
          <div className="flex items-center gap-4 text-zinc-400">
            <span>Acesso à Informação</span>
            <span>·</span>
            <span>Segurança da Informação</span>
            <span>·</span>
            <span>SEDUC/PA Oficial</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
