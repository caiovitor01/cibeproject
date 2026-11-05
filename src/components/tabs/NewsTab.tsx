import React, { useState } from 'react';
import { NEWS_DATA } from '../../data/cibeData';
import { NewsArticle } from '../../types';
import { Search, Calendar, Clock, User, ArrowRight, BookOpen } from 'lucide-react';

interface NewsTabProps {
  onOpenArticle: (article: NewsArticle) => void;
}

export const NewsTab: React.FC<NewsTabProps> = ({ onOpenArticle }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', 'Formação Docente', 'Infraestrutura Escolar', 'Institucional', 'Projetos Discentes'];

  const filteredNews = NEWS_DATA.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.paragraphs.some((p) => p.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const leadArticle = filteredNews[0];
  const secondaryArticles = filteredNews.slice(1);

  return (
    <div className="space-y-12 py-8">
      {/* Editorial Header */}
      <div className="border-b border-zinc-200 pb-8 space-y-4">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-mono text-zinc-500">
          <span>05</span>
          <span>/</span>
          <span>Informativo Oficial</span>
          <span>·</span>
          <span>SEDUC & CIBE/PA</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2 max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-zinc-950 tracking-tight">
              Notícias e Comunicados
            </h1>
            <p className="text-sm md:text-base text-zinc-600 leading-relaxed">
              Acompanhe a evolução das políticas públicas, a formação dos educadores e o impacto da 
              internacionalização na vida dos estudantes paraenses.
            </p>
          </div>
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-zinc-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar em notícias..."
              className="w-full bg-white border border-zinc-300 text-zinc-900 pl-9 pr-3 py-1.5 text-xs focus:outline-none focus:border-black transition-colors"
            />
          </div>
        </div>
      </div>

      {/* Category filter tabs */}
      <div className="flex flex-wrap gap-1 p-1 bg-zinc-100 border border-zinc-200 w-fit">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1.5 text-xs font-medium transition-colors cursor-pointer ${
              selectedCategory === cat
                ? 'bg-black text-white font-semibold'
                : 'text-zinc-600 hover:text-black hover:bg-zinc-200/60'
            }`}
          >
            {cat === 'all' ? 'Todas as Publicações' : cat}
          </button>
        ))}
      </div>

      {/* 3-Tier Salience Editorial Layout */}
      {leadArticle && (
        <section className="space-y-8">
          {/* Tier 1: Lead Story (Dominant Headline + Focal Visual) */}
          <div className="border border-zinc-300 bg-white grid grid-cols-1 lg:grid-cols-12 overflow-hidden hover:border-black transition-colors">
            <div className="lg:col-span-7 bg-zinc-100 border-b lg:border-b-0 lg:border-r border-zinc-200">
              <img
                src={leadArticle.imageUrl}
                alt={leadArticle.title}
                className="w-full h-72 md:h-96 lg:h-full object-cover grayscale contrast-125 filter"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="lg:col-span-5 p-6 md:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-500">
                  <span className="font-bold text-black uppercase">{leadArticle.category}</span>
                  <span>·</span>
                  <span>{leadArticle.date}</span>
                  <span>·</span>
                  <span>{leadArticle.readTime}</span>
                </div>

                <h2 className="text-2xl md:text-3xl font-serif font-bold text-zinc-950 leading-tight">
                  {leadArticle.title}
                </h2>

                <p className="text-zinc-600 text-xs md:text-sm leading-relaxed">
                  {leadArticle.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-200 flex items-center justify-between">
                <span className="text-xs text-zinc-500 font-mono">
                  {leadArticle.author}
                </span>
                <button
                  onClick={() => onOpenArticle(leadArticle)}
                  className="px-4 py-2 bg-black hover:bg-zinc-800 text-white font-semibold text-xs flex items-center gap-2 transition-colors cursor-pointer"
                >
                  <span>Ler Matéria Completa</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Tier 2: Secondary Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            {secondaryArticles.map((article) => (
              <div
                key={article.id}
                className="border border-zinc-300 bg-white flex flex-col justify-between hover:border-black transition-colors group"
              >
                <div>
                  <div className="h-48 overflow-hidden bg-zinc-100 border-b border-zinc-200">
                    <img
                      src={article.imageUrl}
                      alt={article.title}
                      className="w-full h-full object-cover grayscale contrast-125 filter group-hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-5 space-y-3">
                    <div className="flex items-center gap-2 text-[11px] font-mono text-zinc-500">
                      <span className="font-bold text-black uppercase">{article.category}</span>
                      <span>·</span>
                      <span>{article.readTime}</span>
                    </div>

                    <h3 className="font-serif font-bold text-zinc-950 text-base leading-snug group-hover:underline">
                      {article.title}
                    </h3>

                    <p className="text-xs text-zinc-600 line-clamp-3 leading-relaxed">
                      {article.summary}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0 border-t border-zinc-100 flex items-center justify-between text-xs">
                  <span className="text-zinc-500 font-mono text-[11px]">{article.date}</span>
                  <button
                    onClick={() => onOpenArticle(article)}
                    className="font-semibold text-zinc-900 hover:text-black flex items-center gap-1 cursor-pointer"
                  >
                    <span>Ler</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Empty State */}
      {filteredNews.length === 0 && (
        <div className="text-center py-16 border border-zinc-200 bg-zinc-50 space-y-3">
          <div className="font-serif text-lg text-zinc-700">Nenhuma publicação encontrada</div>
          <p className="text-xs text-zinc-500">Tente buscar por outro termo ou selecione todas as publicações.</p>
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
    </div>
  );
};
