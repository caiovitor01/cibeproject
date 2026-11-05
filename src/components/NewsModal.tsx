import React from 'react';
import { NewsArticle } from '../types';
import { X, Calendar, Clock, User, Share2, Check } from 'lucide-react';

interface NewsModalProps {
  article: NewsArticle | null;
  onClose: () => void;
}

export const NewsModal: React.FC<NewsModalProps> = ({ article, onClose }) => {
  const [copiedLink, setCopiedLink] = React.useState(false);

  if (!article) return null;

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4 md:p-6 backdrop-blur-sm overflow-y-auto">
      <div className="bg-white text-zinc-900 border border-zinc-300 max-w-4xl w-full max-h-[92vh] flex flex-col my-auto shadow-2xl">
        {/* Top utility bar */}
        <div className="px-6 py-3 bg-zinc-100 border-b border-zinc-200 flex items-center justify-between">
          <div className="text-xs uppercase font-mono tracking-wider text-zinc-600">
            {article.category} · CIBE/PA Notícias
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="px-2.5 py-1 text-xs border border-zinc-300 hover:border-zinc-500 bg-white text-zinc-700 hover:text-black flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              {copiedLink ? <Check className="w-3.5 h-3.5" /> : <Share2 className="w-3.5 h-3.5" />}
              <span>{copiedLink ? 'Link Copiado' : 'Compartilhar'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-1 text-zinc-600 hover:text-black cursor-pointer ml-1"
              aria-label="Fechar notícia"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Article */}
        <div className="p-6 md:p-10 overflow-y-auto space-y-6">
          {/* Metadata clean unboxed */}
          <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-500">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              <span>{article.date}</span>
            </span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{article.readTime}</span>
            </span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <User className="w-3.5 h-3.5" />
              <span>{article.author} ({article.authorRole})</span>
            </span>
          </div>

          {/* Headline & Deck */}
          <div className="space-y-3">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-zinc-950 leading-tight">
              {article.title}
            </h1>
            <p className="text-sm md:text-base text-zinc-600 font-sans leading-relaxed">
              {article.subtitle}
            </p>
          </div>

          {/* Black and white article photo */}
          <div className="border border-zinc-200 bg-zinc-100">
            <img
              src={article.imageUrl}
              alt={article.title}
              className="w-full h-72 md:h-96 object-cover grayscale contrast-125 filter"
              referrerPolicy="no-referrer"
            />
            <div className="p-2.5 text-xs text-zinc-500 italic font-serif border-t border-zinc-200">
              {article.caption}
            </div>
          </div>

          {/* Lead Summary Callout */}
          <div className="p-4 bg-zinc-50 border border-zinc-200 text-sm font-medium text-zinc-800 leading-relaxed">
            {article.summary}
          </div>

          {/* Body paragraphs with editorial measure */}
          <div className="space-y-4 text-zinc-800 text-sm md:text-base leading-relaxed max-w-3xl">
            {article.paragraphs.map((para, idx) => (
              <p
                key={idx}
                className={
                  idx === 0
                    ? "first-letter:text-4xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-2.5 first-letter:mt-1 first-letter:text-black"
                    : ""
                }
              >
                {para}
              </p>
            ))}
          </div>

          {/* Source and Transparency Footer */}
          <div className="border-t border-zinc-200 pt-6 mt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs text-zinc-500">
            <div>
              Fonte: <strong>SEDUC/PA · Comissão CIBE/PA</strong>
            </div>
            <div className="font-mono text-[11px]">
              SECRETARIA DE ESTADO DE EDUCAÇÃO DO PARÁ
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
