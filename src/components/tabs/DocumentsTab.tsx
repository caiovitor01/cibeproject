import React, { useState } from 'react';
import { DOCUMENTS_DATA } from '../../data/cibeData';
import { OfficialDocument } from '../../types';
import { Search, FileText, Download, Eye, Calendar, User, CheckCircle2, Shield } from 'lucide-react';

interface DocumentsTabProps {
  onOpenDocument: (doc: OfficialDocument) => void;
}

export const DocumentsTab: React.FC<DocumentsTabProps> = ({ onOpenDocument }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'Todos os Documentos' },
    { id: 'portaria', label: 'Portarias' },
    { id: 'decreto', label: 'Decretos' },
    { id: 'resolucao', label: 'Resoluções CEE/PA' },
    { id: 'edital', label: 'Editais SEDUC' },
    { id: 'ata', label: 'Atas de Reunião' },
    { id: 'termo', label: 'Termos de Cooperação' }
  ];

  const filteredDocs = DOCUMENTS_DATA.filter((doc) => {
    const matchesCategory = selectedCategory === 'all' || doc.category === selectedCategory;
    const matchesSearch =
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.signatory.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-12 py-8">
      {/* Editorial Header */}
      <div className="border-b border-zinc-200 pb-8 space-y-4">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-mono text-zinc-500">
          <span>03</span>
          <span>/</span>
          <span>Acervo Normativo</span>
          <span>·</span>
          <span>Transparência Pública</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2 max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-zinc-950 tracking-tight">
              Documentos Oficiais
            </h1>
            <p className="text-sm md:text-base text-zinc-600 leading-relaxed">
              Consulte a íntegra de decretos governamentais, portarias conjuntas, resoluções normativas do CEE/PA, 
              editais de fomento e atas deliberativas da CIBE/PA.
            </p>
          </div>
          <div className="text-right shrink-0">
            <div className="font-mono text-3xl font-bold text-zinc-950 tabular-nums">
              {DOCUMENTS_DATA.length}
            </div>
            <div className="text-xs uppercase font-mono text-zinc-500">
              Atos Publicados
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
              placeholder="Buscar por código, número ou assunto..."
              className="w-full bg-white border border-zinc-300 text-zinc-900 pl-9 pr-3 py-1.5 text-xs focus:outline-none focus:border-black transition-colors placeholder:text-zinc-400"
            />
          </div>
        </div>

        {/* Unboxed Metadata Counter */}
        <div className="text-xs text-zinc-500 font-mono">
          Exibindo {filteredDocs.length} de {DOCUMENTS_DATA.length} documentos disponíveis para consulta pública
        </div>
      </div>

      {/* Documents Table/List formatted like institutional state archive */}
      <div className="border border-zinc-300 divide-y divide-zinc-200 bg-white">
        {filteredDocs.map((doc) => (
          <div
            key={doc.id}
            className="p-6 hover:bg-zinc-50 transition-colors flex flex-col lg:flex-row lg:items-center justify-between gap-6"
          >
            {/* Left Description */}
            <div className="space-y-3 max-w-3xl">
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-zinc-500">
                <span className="font-bold text-black">{doc.code}</span>
                <span>·</span>
                <span>{doc.categoryLabel}</span>
                <span>·</span>
                <span>Publicado em {doc.date}</span>
                <span>·</span>
                <span className="text-zinc-800 font-medium">{doc.status}</span>
              </div>

              <h2 className="text-lg md:text-xl font-serif font-bold text-zinc-950 leading-snug">
                {doc.title}
              </h2>

              <p className="text-xs md:text-sm text-zinc-600 leading-relaxed">
                {doc.summary}
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-500 font-mono">
                <span>Signatário: {doc.signatory}</span>
                <span>·</span>
                <span>{doc.pages} páginas</span>
                <span>·</span>
                <span>{doc.fileSize}</span>
              </div>
            </div>

            {/* Right Action Affordances */}
            <div className="flex flex-row lg:flex-col gap-2 shrink-0">
              <button
                onClick={() => onOpenDocument(doc)}
                className="flex-1 lg:flex-none px-4 py-2 bg-black hover:bg-zinc-800 text-white font-medium text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Visualizar na Íntegra</span>
              </button>

              <button
                onClick={() => {
                  const element = window.document.createElement("a");
                  const file = new Blob([doc.fullContent], { type: 'text/plain;charset=utf-8' });
                  element.href = URL.createObjectURL(file);
                  element.download = `${doc.code}.txt`;
                  window.document.body.appendChild(element);
                  element.click();
                  window.document.body.removeChild(element);
                }}
                className="flex-1 lg:flex-none px-4 py-2 border border-zinc-300 hover:border-black text-zinc-800 font-medium text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Oficial</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredDocs.length === 0 && (
        <div className="text-center py-16 border border-zinc-200 bg-zinc-50 space-y-3">
          <div className="font-serif text-lg text-zinc-700">Nenhum documento encontrado</div>
          <p className="text-xs text-zinc-500">Tente buscar por outro número de portaria ou termo normativo.</p>
          <button
            onClick={() => {
              setSelectedCategory('all');
              setSearchQuery('');
            }}
            className="px-3 py-1.5 text-xs bg-black text-white hover:bg-zinc-800 transition-colors"
          >
            Limpar Busca
          </button>
        </div>
      )}

      {/* Public Repository Guarantee Box */}
      <div className="border border-zinc-300 p-6 bg-zinc-50 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs">
        <div className="space-y-1">
          <div className="font-mono uppercase tracking-wider font-semibold text-zinc-900">
            Validação de Autenticidade Digital
          </div>
          <p className="text-zinc-600 max-w-2xl leading-relaxed">
            Todos os atos normativos desta comissão são chancelados eletronicamente e encontram-se registrados no 
            Sistema Integrado de Atos Oficiais da SEDUC e no Diário Oficial do Estado do Pará (DOE).
          </p>
        </div>
        <div className="font-mono text-zinc-500 text-[11px] shrink-0">
          SEDUC/PA · PROTOCOLO OFICIAL
        </div>
      </div>
    </div>
  );
};
