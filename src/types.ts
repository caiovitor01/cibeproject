export type TabType = 
  | 'about' 
  | 'members' 
  | 'documents' 
  | 'meetings' 
  | 'news' 
  | 'contact';

export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  institution: string;
  registrationNumber?: string;
  joinedAt: string;
}

export interface CommissionMember {
  id: string;
  name: string;
  role: string;
  category: 'coordenacao' | 'seduc' | 'cee' | 'universidades' | 'docentes' | 'gestores';
  categoryLabel: string;
  institution: string;
  bio: string;
  email: string;
  phone?: string;
  location: string;
  photoUrl?: string;
  responsibilities: string[];
}

export interface OfficialDocument {
  id: string;
  title: string;
  code: string;
  date: string;
  category: 'portaria' | 'decreto' | 'resolucao' | 'edital' | 'termo' | 'ata';
  categoryLabel: string;
  signatory: string;
  pages: number;
  status: 'Vigente' | 'Homologado' | 'Em Consulta' | 'Arquivado';
  summary: string;
  fullContent: string;
  fileSize: string;
}

export interface Meeting {
  id: string;
  title: string;
  edition: string;
  type: 'Ordinária' | 'Extraordinária' | 'Câmara Técnica' | 'Audiência Pública';
  date: string;
  time: string;
  location: string;
  modality: 'Presencial' | 'Híbrida' | 'Remota';
  status: 'Agendada' | 'Em Andamento' | 'Realizada';
  agenda: string[];
  participantsCount: number;
  minutesSummary?: string;
  minutesUrl?: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  readTime: string;
  author: string;
  authorRole: string;
  category: string;
  imageUrl: string;
  caption: string;
  summary: string;
  paragraphs: string[];
}

export interface ContactSubmission {
  id: string;
  protocol: string;
  name: string;
  email: string;
  phone: string;
  category: string;
  subject: string;
  message: string;
  createdAt: string;
  status: 'Recebido' | 'Em Análise' | 'Respondido';
}
