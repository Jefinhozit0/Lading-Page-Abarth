import {
  Settings,
  Zap,
  Shield,
  Gauge,
  Car,
  Wrench,
  ClipboardCheck,
  CalendarCheck,
  Search,
  KeyRound,
  type LucideIcon,
} from 'lucide-react';

/**
 * ============================================================
 *  MODELO WARDEN LABS — Landing page para oficinas
 * ============================================================
 *  Todo o conteúdo do cliente vive neste arquivo.
 *  Para entregar a página a um novo cliente, edite apenas
 *  os valores abaixo — os componentes não precisam mudar.
 * ============================================================
 */

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
  subtitle: string;
  fullDescription: string;
  includes: string[];
  price: string;
  duration: string;
}

export const site = {
  /** Identidade */
  business: {
    name: 'Abarth',
    tagline: 'Automotiva',
    /** Letra/sigla exibida no logo quando não há imagem */
    monogram: 'A',
    /** Caminho de um logo em /public (opcional). Ex.: '/logo.svg' */
    logo: '' as string,
    foundedYear: 2010,
    city: 'São Paulo, SP',
  },

  /**
   * Cor principal da marca em RGB (sem vírgulas).
   * Ex.: laranja '249 115 22' · vermelho '220 38 38' · azul '37 99 235'
   */
  brandColor: '249 115 22',

  /** Contato */
  contact: {
    /** Somente números, com DDI + DDD */
    whatsapp: '5511986816611',
    phoneDisplay: '(11) 98681-6611',
    email: 'oficina.abarth@abarthautomotiva.com.br',
    address: {
      street: 'Rua Salvador Simões, 1445',
      district: 'Vila Dom Pedro I',
      city: 'São Paulo, SP',
    },
    /** URL de incorporação do Google Maps (Compartilhar → Incorporar mapa) */
    mapEmbedUrl:
      'https://www.google.com/maps?q=Rua+Salvador+Sim%C3%B5es,+1445,+S%C3%A3o+Paulo&output=embed',
    hours: [
      { days: 'Segunda a Sexta', time: '08h às 18h' },
      { days: 'Sábado', time: '08h às 12h' },
      { days: 'Domingo', time: 'Fechado' },
    ],
    social: {
      instagram: '',
      facebook: '',
    },
  },

  /** Hero */
  hero: {
    badge: 'Oficina mecânica especializada',
    titleStart: 'Seu carro em',
    titleHighlight: 'boas mãos',
    titleEnd: 'do diagnóstico à entrega.',
    subtitle:
      'Mecânica completa com diagnóstico computadorizado, orçamento transparente e garantia em todos os serviços.',
    image:
      'https://images.pexels.com/photos/34329583/pexels-photo-34329583.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },

  /** Números de destaque */
  stats: [
    { value: '15+', label: 'Anos de experiência' },
    { value: '1.000+', label: 'Clientes atendidos' },
    { value: '98%', label: 'Satisfação' },
    { value: '90 dias', label: 'De garantia' },
  ],

  /** Diferenciais (faixa abaixo do hero) */
  highlights: [
    { icon: Shield, title: 'Garantia', text: 'Em todos os serviços' },
    { icon: Search, title: 'Diagnóstico preciso', text: 'Scanner de última geração' },
    { icon: ClipboardCheck, title: 'Orçamento claro', text: 'Você aprova antes de começar' },
    { icon: KeyRound, title: 'Peças de qualidade', text: 'Originais ou homologadas' },
  ],

  services: [
    {
      title: 'Revisão Completa',
      description: 'Manutenção preventiva para o carro rodar sem surpresas.',
      icon: Settings,
      image:
        'https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?auto=compress&cs=tinysrgb&w=800',
      subtitle: 'Manutenção preventiva completa',
      fullDescription:
        'Verificação de todos os sistemas do veículo, troca de óleo e filtros, análise de freios, suspensão e muito mais — seguindo o plano do fabricante.',
      includes: [
        'Troca de óleo e filtros',
        'Verificação do sistema de freios',
        'Análise da suspensão e direção',
        'Teste do sistema elétrico',
        'Verificação de pneus e alinhamento',
        'Análise do sistema de arrefecimento',
      ],
      price: 'A partir de R$ 150',
      duration: '2 a 3 horas',
    },
    {
      title: 'Sistema Elétrico',
      description: 'Diagnóstico e reparo elétrico e de injeção eletrônica.',
      icon: Zap,
      image:
        'https://images.pexels.com/photos/4489702/pexels-photo-4489702.jpeg?auto=compress&cs=tinysrgb&w=800',
      subtitle: 'Elétrica automotiva',
      fullDescription:
        'Equipamentos modernos para diagnóstico preciso, de alternadores e baterias até sistemas de injeção eletrônica e ar-condicionado.',
      includes: [
        'Teste de alternador e bateria',
        'Diagnóstico de injeção eletrônica',
        'Reparo de chicotes elétricos',
        'Instalação de acessórios',
        'Sistema de ignição',
        'Ar-condicionado automotivo',
      ],
      price: 'A partir de R$ 80',
      duration: '1 a 4 horas',
    },
    {
      title: 'Freios',
      description: 'Manutenção completa para frear com segurança.',
      icon: Shield,
      image:
        'https://images.pexels.com/photos/6870318/pexels-photo-6870318.jpeg?auto=compress&cs=tinysrgb&w=800',
      subtitle: 'Segurança em primeiro lugar',
      fullDescription:
        'Da troca de pastilhas à revisão completa do sistema hidráulico, com teste de eficiência ao final.',
      includes: [
        'Troca de pastilhas e discos',
        'Revisão do sistema hidráulico',
        'Sangria do sistema',
        'Troca de fluido de freio',
        'Regulagem do freio de mão',
        'Teste de eficiência',
      ],
      price: 'A partir de R$ 120',
      duration: '2 a 3 horas',
    },
    {
      title: 'Alinhamento e Balanceamento',
      description: 'Mais conforto ao dirigir e pneus que duram mais.',
      icon: Gauge,
      image:
        'https://images.pexels.com/photos/5835359/pexels-photo-5835359.jpeg?auto=compress&cs=tinysrgb&w=800',
      subtitle: 'Economia e conforto',
      fullDescription:
        'Alinhamento computadorizado e balanceamento de rodas para maior vida útil dos pneus e uma direção estável.',
      includes: [
        'Alinhamento computadorizado',
        'Balanceamento de rodas',
        'Verificação de pneus',
        'Análise da suspensão',
        'Regulagem da geometria',
        'Teste de direção',
      ],
      price: 'A partir de R$ 60',
      duration: '1 a 2 horas',
    },
    {
      title: 'Motor',
      description: 'Do ajuste fino à retífica, com tecnologia de ponta.',
      icon: Car,
      image:
        'https://images.pexels.com/photos/4489765/pexels-photo-4489765.jpeg?auto=compress&cs=tinysrgb&w=800',
      subtitle: 'Especialistas em motores',
      fullDescription:
        'Equipe especializada para pequenos ajustes ou revisões completas de motor, com equipamentos de última geração.',
      includes: [
        'Retífica de motores',
        'Troca de correia dentada',
        'Reparo de cabeçote',
        'Sistema de injeção',
        'Troca de velas e bobinas',
        'Limpeza de bicos injetores',
      ],
      price: 'A partir de R$ 200',
      duration: '4 a 8 horas',
    },
    {
      title: 'Suspensão',
      description: 'Estabilidade e conforto em qualquer piso.',
      icon: Wrench,
      image:
        'https://images.pexels.com/photos/5835325/pexels-photo-5835325.jpeg?auto=compress&cs=tinysrgb&w=800',
      subtitle: 'Conforto e estabilidade',
      fullDescription:
        'Manutenção completa do sistema de suspensão para garantir conforto, estabilidade e segurança na condução.',
      includes: [
        'Troca de amortecedores',
        'Revisão de molas',
        'Coxins e buchas',
        'Batentes de suspensão',
        'Bieletas e terminais',
        'Teste de estabilidade',
      ],
      price: 'A partir de R$ 100',
      duration: '2 a 4 horas',
    },
  ] satisfies Service[],

  /** Como funciona */
  process: [
    { icon: CalendarCheck, title: 'Agende', text: 'Pelo WhatsApp ou formulário, no melhor horário para você.' },
    { icon: Search, title: 'Diagnóstico', text: 'Avaliamos o veículo com scanner e inspeção visual completa.' },
    { icon: ClipboardCheck, title: 'Orçamento', text: 'Você recebe o orçamento detalhado e só aprova o que quiser.' },
    { icon: KeyRound, title: 'Entrega', text: 'Carro pronto no prazo combinado, com garantia por escrito.' },
  ],

  about: {
    title: 'Tradição, técnica e transparência',
    paragraphs: [
      'Há mais de 15 anos no mercado, a Abarth Automotiva se consolidou como uma das oficinas de confiança da região. Nossa missão é oferecer serviço de qualidade superior, com foco na segurança de quem dirige.',
      'Equipe qualificada e equipamentos modernos para diagnosticar e reparar veículos de todas as marcas — sempre explicando o que será feito e por quê.',
    ],
    values: [
      { title: 'Missão', text: 'Serviços automotivos de excelência, com segurança e satisfação total.' },
      { title: 'Visão', text: 'Ser referência regional em qualidade e inovação técnica.' },
      { title: 'Valores', text: 'Honestidade, transparência, pontualidade e compromisso.' },
    ],
    images: [
      'https://images.pexels.com/photos/4489743/pexels-photo-4489743.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4480453/pexels-photo-4480453.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
  },

  gallery: [
    { url: 'https://images.pexels.com/photos/34329583/pexels-photo-34329583.jpeg?auto=compress&cs=tinysrgb&w=1200', title: 'Área principal da oficina' },
    { url: 'https://images.pexels.com/photos/4480453/pexels-photo-4480453.jpeg?auto=compress&cs=tinysrgb&w=1200', title: 'Equipamentos modernos' },
    { url: 'https://images.pexels.com/photos/6870321/pexels-photo-6870321.jpeg?auto=compress&cs=tinysrgb&w=1200', title: 'Área de diagnóstico' },
    { url: 'https://images.pexels.com/photos/4489737/pexels-photo-4489737.jpeg?auto=compress&cs=tinysrgb&w=1200', title: 'Equipe técnica' },
    { url: 'https://images.pexels.com/photos/5835325/pexels-photo-5835325.jpeg?auto=compress&cs=tinysrgb&w=1200', title: 'Bancada de trabalho' },
    { url: 'https://images.pexels.com/photos/3964341/pexels-photo-3964341.jpeg?auto=compress&cs=tinysrgb&w=1200', title: 'Especialista em motores' },
  ],

  testimonials: [
    { name: 'Carlos Silva', location: 'São Paulo, SP', service: 'Revisão Completa', text: 'Excelente atendimento! Meu carro ficou novo depois da revisão. Equipe profissional e preço justo.' },
    { name: 'Ana Santos', location: 'Guarulhos, SP', service: 'Sistema Elétrico', text: 'Diagnóstico preciso e reparo rápido no sistema elétrico. Voltarei sempre!' },
    { name: 'João Oliveira', location: 'Osasco, SP', service: 'Freios e Suspensão', text: 'Profissionais honestos. Explicaram tudo o que precisava ser feito e cumpriram o prazo.' },
    { name: 'Maria Costa', location: 'São Caetano, SP', service: 'Motor', text: 'Resolveram o problema do meu motor rapidamente e com garantia. Qualidade comprovada.' },
    { name: 'Roberto Lima', location: 'Santo André, SP', service: 'Cliente há 3 anos', text: 'Nunca me decepcionei. Sempre atenciosos e com um trabalho impecável.' },
    { name: 'Fernanda Alves', location: 'São Bernardo, SP', service: 'Alinhamento', text: 'Fiz alinhamento e balanceamento — ficou perfeito, o volante não vibra mais.' },
  ],

  faq: [
    { q: 'Vocês atendem todas as marcas?', a: 'Sim. Atendemos veículos nacionais e importados, de passeio e utilitários leves.' },
    { q: 'Preciso agendar?', a: 'Recomendamos agendar para garantir o horário, mas também atendemos por ordem de chegada conforme a disponibilidade.' },
    { q: 'O orçamento é cobrado?', a: 'A avaliação inicial é gratuita. Diagnósticos com scanner podem ter custo, abatido caso o serviço seja aprovado.' },
    { q: 'Qual a garantia dos serviços?', a: 'Todos os serviços têm garantia de 90 dias, conforme o Código de Defesa do Consumidor, com nota detalhada.' },
    { q: 'Quais as formas de pagamento?', a: 'Pix, dinheiro, cartão de débito e crédito em até 6x sem juros.' },
  ],

  /** Horários oferecidos no formulário de agendamento */
  bookingTimes: ['08:00', '09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00'],

  /** Crédito do modelo */
  credit: {
    name: 'Warden Labs',
    url: '',
  },
};

export const whatsappLink = (message?: string) =>
  `https://wa.me/${site.contact.whatsapp}${message ? `?text=${encodeURIComponent(message)}` : ''}`;

export const scrollToId = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};
