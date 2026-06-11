/**
 * Configuração central da experiência "A Jornada Até Nós".
 *
 * 👉 Edite SOMENTE este arquivo para personalizar nomes, textos, fotos,
 * viagens e música. Os componentes em src/sections e src/components
 * leem tudo daqui — não há mais textos soltos no código.
 *
 * Fotos: coloque os arquivos em /public/photos/ e referencie como
 * "/photos/nome-do-arquivo.jpg". Deixe `src: ''` para manter o placeholder.
 */
export const config = {
  // ── IDENTIDADE ────────────────────────────────────────────────
  partnerName: 'Camila',
  authorName: 'Hugo',
  relationshipStart: 'Outubro de 2023',
  title: 'A Jornada Até Nós',
  subtitle: 'Nossa história entre estrelas',
  specialDateLabel: '12 de junho — Dia dos Namorados',

  // ── TRILHA SONORA ─────────────────────────────────────────────
  // 👉 Coloque o arquivo em /public/audio/musica.mp3
  musicFile: '/audio/musica.mp3',
  musicTitle: 'Nossa trilha',

  // ── NOSSA CACHORRA ────────────────────────────────────────────
  // 👉 Fotos da Maggie em /public/photos/ — recebem o mesmo tratamento
  // premium (polaroid + reflexo) das demais fotos da experiência.
  pet: {
    name: 'Maggie',
    age: 9,
    description: 'Nossa companheira de aventuras',
    photos: [
      { src: '', alt: 'Maggie em um passeio', label: 'Foto: Maggie em um passeio' },
      { src: '', alt: 'Maggie em uma viagem com a gente', label: 'Foto: Maggie em uma viagem' },
      { src: '', alt: 'Maggie em um momento de descanso em família', label: 'Foto: Maggie em família' },
    ],
  },

  // ── CAPÍTULO 1 — O ENCONTRO ───────────────────────────────────
  encounter: {
    lines: [
      'A vida é feita de encontros improváveis.',
      'Entre bilhões de pessoas...',
      'Em outubro de 2023...',
      'Eu encontrei você.',
    ],
    photo: {
      src: '',
      alt: 'Nosso primeiro encontro',
      label: 'Foto: nosso primeiro encontro',
      caption: 'Outubro de 2023',
    },
    cta: 'Começar nossa jornada',
  },

  // ── CAPÍTULO 2 — O COMEÇO ─────────────────────────────────────
  beginning: {
    timeline: [
      'Outubro de 2023.',
      'Foi quando nossas histórias se cruzaram.',
      'Naquele momento eu ainda não sabia...',
      '...mas uma das pessoas mais importantes da minha vida acabava de chegar.',
    ],
    photo: {
      src: '',
      alt: 'O começo da nossa história',
      label: 'Foto: outubro de 2023',
      caption: 'O começo',
    },
  },

  // ── CAPÍTULO 3 — AS PRIMEIRAS MEMÓRIAS ────────────────────────
  memories: {
    lines: [
      'Os dias foram passando.',
      'As conversas ficaram mais longas.',
      'Os sorrisos mais frequentes.',
      'E sem perceber...',
      'Você começou a ocupar um espaço enorme no meu coração.',
    ],
    petIntro: 'E nesses dias, alguém pequeno já caminhava ao nosso lado.',
  },

  // ── CAPÍTULO 4.5 — QUEM CAMINHOU CONOSCO (MAGGIE) ─────────────
  companion: {
    lines: [
      'Antes mesmo de sabermos como nossa história continuaria...',
      'já existia alguém tornando nossos dias mais felizes.',
      'A Maggie esteve presente em risadas, viagens, descansos e momentos simples.',
      'E sem perceber...',
      'ela também se tornou parte da nossa família.',
    ],
  },

  // ── CAPÍTULO 4 — NOSSAS VIAGENS ────────────────────────────────
  travels: {
    intro: ['Colecionamos quilômetros.', 'Mas o mais importante foram as memórias.'],
    destinations: [
      {
        name: 'Nome do destino 1',
        date: 'Mês / 2024',
        label: 'Cada estrada.',
        photo: { src: '', alt: 'Foto: uma estrada percorrida juntos', label: 'Foto: uma estrada percorrida juntos' },
      },
      {
        name: 'Nome do destino 2',
        date: 'Mês / 2024',
        label: 'Cada passeio.',
        photo: { src: '', alt: 'Foto: um passeio inesquecível', label: 'Foto: um passeio inesquecível' },
      },
      {
        name: 'Nome do destino 3',
        date: 'Mês / 2025',
        label: 'Cada descoberta.',
        photo: { src: '', alt: 'Foto: uma nova descoberta', label: 'Foto: uma nova descoberta' },
      },
      {
        name: 'Nome do destino 4',
        date: 'Mês / 2025',
        label: 'Cada risada.',
        photo: { src: '', alt: 'Foto: um momento de riso', label: 'Foto: um momento de riso' },
      },
    ],
    highlight: {
      before: 'Cada momento ao seu lado.',
      lead: 'Descobri que meu lugar favorito',
      leadBreak: 'nunca foi uma cidade.',
      final: 'Foi estar com você.',
    },
  },

  // ── CAPÍTULO 5 — O PRESENTE ────────────────────────────────────
  present: {
    lines: [
      'Desde outubro de 2023...',
      'Vivemos aventuras.',
      'Criamos lembranças.',
      'Fizemos planos.',
      'Construímos uma história.',
    ],
    photos: [
      { src: '', alt: 'Foto recente 1', label: 'Foto recente' },
      { src: '', alt: 'Foto recente 2', label: 'Foto recente' },
      { src: '', alt: 'Foto recente 3', label: 'Foto recente' },
    ],
    closing: [
      'Nem todos os dias foram perfeitos.',
      'Mas todos ficaram melhores porque eram com você.',
    ],
  },

  // ── CAPÍTULO 6 — A SURPRESA MAIS BONITA ───────────────────────
  surprise: {
    lines: [
      'E então...',
      'Aconteceu algo que mudou tudo.',
      'De repente...',
      'Nossos planos ganharam um novo capítulo.',
    ],
    reveal: 'Agora existe um novo coração fazendo parte da nossa jornada.',
    familyGrowing: 'Agora nossa família está prestes a ganhar mais um coração.',
    photos: {
      positiveTest: { src: '', alt: 'Foto do teste positivo', label: 'Foto: o teste positivo' },
      ultrasound: { src: '', alt: 'Foto do ultrassom', label: 'Foto: o ultrassom' },
    },
  },

  // ── CAPÍTULO 7 — O FUTURO ──────────────────────────────────────
  future: {
    lines: [
      'Eu não sei exatamente como será o futuro.',
      'Não sei quais desafios vamos enfrentar.',
      'Não sei quantas noites sem dormir teremos.',
      'Não sei quantas novas aventuras nos esperam.',
    ],
    certainty: 'Mas existe uma coisa da qual tenho certeza.',
    final: ['Quero viver tudo isso', 'com você.'],
  },

  // ── CAPÍTULO 8 — FINAL ─────────────────────────────────────────
  final: {
    lines: [
      'Nossa história começou com dois caminhos se cruzando.',
      'Hoje ela continua com três corações caminhando juntos.',
    ],
    closing: ['De todas as aventuras que vivemos...', 'A próxima será a mais incrível de todas.'],
    newChapter: 'Fim de um capítulo. Início de uma nova vida.',
  },
}
