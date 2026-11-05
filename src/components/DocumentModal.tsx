import React from 'react';
import { OfficialDocument } from '../types';
import { Download, Printer, Copy, Check, X, FileText, Shield } from 'lucide-react';

interface DocumentModalProps {
  document: OfficialDocument | null;
  onClose: () => void;
}

export const DocumentModal: React.FC<DocumentModalProps> = ({ document, onClose }) => {
  const [copied, setCopied] = React.useState(false);
  const [downloading, setDownloading] = React.useState(false);

  if (!document) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(document.fullContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    setDownloading(true);
    const element = window.document.createElement("a");
    const file = new Blob([document.fullContent], { type: 'text/plain;charset=utf-8' });
    element.href = URL.createObjectURL(file);
    element.download = `${document.code}.txt`;
    window.document.body.appendChild(element);
    element.click();
    window.document.body.removeChild(element);
    setTimeout(() => setDownloading(false), 800);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4 md:p-6 backdrop-blur-sm overflow-y-auto">
      <div className="bg-white text-zinc-900 border border-zinc-300 max-w-4xl w-full max-h-[92vh] flex flex-col my-auto shadow-2xl">
        {/* Modal Top Utility Bar */}
        <div className="px-6 py-3.5 bg-zinc-100 border-b border-zinc-300 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <FileText className="w-5 h-5 text-zinc-800 shrink-0" />
            <div>
              <span className="font-mono text-xs font-bold text-zinc-900 tracking-wider">
                {document.code}
              </span>
              <span className="text-zinc-500 text-xs ml-2">· {document.categoryLabel}</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="px-2.5 py-1.5 text-xs text-zinc-700 hover:text-black border border-zinc-300 hover:border-zinc-500 bg-white flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Copiar texto oficial"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-zinc-900" /> : <Copy className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{copied ? 'Copiado' : 'Copiar'}</span>
            </button>
            <button
              onClick={handlePrint}
              className="px-2.5 py-1.5 text-xs text-zinc-700 hover:text-black border border-zinc-300 hover:border-zinc-500 bg-white flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Imprimir documento"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Imprimir</span>
            </button>
            <button
              onClick={handleDownload}
              className="px-3 py-1.5 text-xs bg-zinc-900 hover:bg-black text-white font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Baixar arquivo oficial"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{downloading ? 'Baixando...' : 'Download'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-zinc-600 hover:text-black border border-transparent hover:border-zinc-300 cursor-pointer ml-2"
              aria-label="Fechar modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body formatted as official state decree/ordinance */}
        <div className="p-8 md:p-12 overflow-y-auto space-y-6 font-serif">
          {/* Official Letterhead */}
          <div className="text-center border-b border-zinc-300 pb-6 space-y-1">
            <div className="w-12 h-12 border border-zinc-900 mx-auto flex items-center justify-center font-bold text-xs uppercase tracking-widest font-sans mb-3">
              PARÁ
            </div>
            <div className="text-xs uppercase tracking-widest text-zinc-600 font-sans font-semibold">
              Governo do Estado do Pará
            </div>
            <div className="text-sm uppercase tracking-wider text-zinc-800 font-sans">
              Secretaria de Estado de Educação — SEDUC/PA
            </div>
            <div className="text-xs uppercase tracking-widest text-zinc-500 font-mono">
              Comissão Interinstitucional de Implementação do Sistema Internacional de Educação (CIBE/PA)
            </div>
          </div>

          {/* Title & Metadata Strip */}
          <div className="space-y-2">
            <div className="flex flex-wrap items-center justify-between text-xs font-sans text-zinc-600 gap-2 border-b border-zinc-200 pb-2">
              <span className="font-mono">REGISTRO: {document.code}</span>
              <span>DATA DE PUBLICAÇÃO: {document.date}</span>
              <span className="font-semibold text-zinc-900">SITUAÇÃO: {document.status.toUpperCase()}</span>
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-zinc-900 pt-2 leading-snug">
              {document.title}
            </h2>
            <p className="text-xs font-sans text-zinc-600 italic bg-zinc-50 p-3 border border-zinc-200">
              <strong>Ementa:</strong> {document.summary}
            </p>
          </div>

          {/* Document Content */}
          <div className="whitespace-pre-wrap font-sans text-xs md:text-sm text-zinc-800 leading-relaxed space-y-4 pt-2">
            {document.fullContent}
          </div>

          {/* Signatures & Seal Box */}
          <div className="border-t border-zinc-300 pt-8 mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 text-center font-sans text-xs">
            <div className="border border-zinc-200 p-4 space-y-2">
              <div className="font-bold text-zinc-900">{document.signatory}</div>
              <div className="text-zinc-500">Autoridade Signatária Homologada</div>
              <div className="font-mono text-[10px] text-zinc-400">HASH: SHA256-PUB-CIBE-PA-DOC</div>
            </div>
            <div className="border border-zinc-200 p-4 space-y-2">
              <div className="font-bold text-zinc-900">Autenticidade Verificada</div>
              <div className="text-zinc-500">Documento emitido pelo portal de transparência CIBE/PA</div>
              <div className="font-mono text-[10px] text-zinc-400">SEDUC-PA · PROTOCOLO OFICIAL</div>
            </div>
          </div>
        </div>

        {/* Modal Bottom Footer */}
        <div className="px-6 py-3 bg-zinc-50 border-t border-zinc-200 text-xs font-sans text-zinc-500 flex justify-between items-center">
          <span>{document.pages} páginas · Tamanho {document.fileSize}</span>
          <button
            onClick={onClose}
            className="text-zinc-800 hover:text-black font-medium underline underline-offset-4 cursor-pointer"
          >
            Fechar visualizador
          </button>
        </div>
      </div>
    </div>
  );
};
