import { ServiceItem, Barber, GalleryItem, Amenity } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'corte-masculino',
    name: 'Corte de Cabelo',
    category: 'cabelo',
    price: 45,
    duration: '40 min',
    popular: true,
    description: 'Corte personalizado completo (degradê, fade, social ou na tesoura). Inclui lavagem capilar, alinhamento simétrico e finalização com pomada modeladora.',
    features: [
      'Visagismo para o seu tipo de rosto',
      'Degradê navalhado ou corte clássico na tesoura',
      'Lavagem capilar e secagem modelada',
      'Finalização com pomada matte'
    ]
  },
  {
    id: 'barba-alinhada',
    name: 'Barba & Barboterapia',
    category: 'barba',
    price: 30,
    duration: '30 min',
    popular: true,
    description: 'Desenho e alinhamento preciso da barba com lâmina descartável, esfoliação facial, toalha quente e aplicação de balm amaciante para hidratação profunda.',
    features: [
      'Alinhamento e contorno preciso na navalha',
      'Toalha quente aromática relaxante',
      'Esfoliação e alívio de irritação de pele',
      'Óleo e balm amaciante de alta fixação'
    ]
  },
  {
    id: 'acabamento-pezinho',
    name: 'Acabamento (Pezinho)',
    category: 'cabelo',
    price: 25,
    duration: '20 min',
    description: 'Limpeza e alinhamento dos contornos do pescoço, nuca, costeletas e testa com navalha descartável. Ideal para manter o corte impecável entre as manutenções.',
    features: [
      'Contorno na navalha descartável',
      'Limpeza de nuca e costeletas',
      'Pós-barba refrescante e higienização rápida'
    ]
  },
  {
    id: 'sobrancelha-navalha',
    name: 'Design de Sobrancelha',
    category: 'tratamentos',
    price: 15,
    duration: '15 min',
    description: 'Limpeza, alinhamento e harmonização das sobrancelhas masculinas na lâmina ou pinça, preservando a naturalidade da expressão facial.',
    features: [
      'Alinhamento simétrico e natural',
      'Remoção de excessos no centro e bordas',
      'Harmonização com o corte de cabelo'
    ]
  },
  {
    id: 'quimica-capilar',
    name: 'Química Capilar (Platinado / Luzes / Alisamento)',
    category: 'tratamentos',
    price: 0, // 0 indica "A combinar / Sob consulta"
    duration: '1h a 2h',
    description: 'Procedimento técnico de química capilar (platinado nevou, descoloração global, luzes/mechas, botox capilar ou progressiva). Valor e tempo avaliados diretamente pelo Joares Meireles de acordo com o tamanho do cabelo e produtos utilizados.',
    features: [
      'Avaliação prévia da saúde dos fios',
      'Produtos profissionais de alta performance',
      'Matização e hidratação pós-química',
      'Valores sob consulta (conforme tamanho e produto)'
    ]
  },
  {
    id: 'combo-corte-barba',
    name: 'Combo Especial: Corte + Barba',
    category: 'combos',
    price: 70,
    duration: '1h',
    popular: true,
    description: 'O serviço mais pedido da casa. Corte de cabelo completo à sua escolha combinado com o alinhamento da barba com toalha quente e pós-barba.',
    features: [
      'Corte completo à sua escolha',
      'Barba desenhada com toalha quente',
      'Economia especial no combo',
      'Finalização completa com produtos premium'
    ]
  },
  {
    id: 'combo-completo-imperial',
    name: 'Combo Completo (Corte + Barba + Sobrancelha)',
    category: 'combos',
    price: 85,
    duration: '1h 15 min',
    description: 'Experiência completa com Joares Meireles para transformar seu visual por inteiro: cabelo navalhado ou tesoura, barba tratada e sobrancelhas desenhadas.',
    features: [
      'Corte de cabelo completo',
      'Barba com toalha quente & balm',
      'Design de sobrancelha',
      'Atendimento individual com hora marcada'
    ]
  }
];

export const BARBERS_DATA: Barber[] = [
  {
    id: 'joares-meireles',
    name: 'Joares Meireles',
    role: 'Mestre Barbeiro & Proprietário',
    experience: 'Mais de 10 anos de experiência',
    specialty: 'Cortes modernos, Degradê navalhado, Barboterapia & Visagismo',
    photo: 'https://lh3.googleusercontent.com/d/1qaSoowTSLUEOLcNbdY5FQYKT0g2_cbFC=w1200', // Foto oficial do Joares com a tesoura
    instagramHandle: '@joaresmeireles',
    instagramUrl: 'https://www.instagram.com/joaresmeireles/',
    rating: 5.0,
    cutsCount: 5400
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'Degradê & Fade na Máquina em Ação',
    category: 'fade',
    barberName: 'Joares Meireles',
    tag: 'Degradê Navalhado',
    imageUrl: 'https://lh3.googleusercontent.com/d/1T8JMYoD0-SlnGVIdDR-k2bYQBMzyKpiz=w1200'
  },
  {
    id: 'g-2',
    title: 'Acabamento & Alinhamento na Navalha',
    category: 'barba',
    barberName: 'Joares Meireles',
    tag: 'Navalhete & Precisão',
    imageUrl: 'https://lh3.googleusercontent.com/d/1tGG-Uv-Pk7_OInj-UE2SxYkB0YP9R_py=w1200'
  },
  {
    id: 'g-3',
    title: 'Corte Clássico & Finalização no Pente',
    category: 'social',
    barberName: 'Joares Meireles',
    tag: 'Corte & Penteado',
    imageUrl: 'https://lh3.googleusercontent.com/d/131mrFCdGkYpwFpNSzdTzeNR5plDF0O4C=w1200'
  },
  {
    id: 'g-4',
    title: 'Skin Fade Impecável com Joares',
    category: 'fade',
    barberName: 'Joares Meireles',
    tag: 'Fade na Régua',
    imageUrl: 'https://lh3.googleusercontent.com/d/1TSFuQ4QHt5kXPrQ_42uClAumV4my839o=w1200'
  },
  {
    id: 'g-5',
    title: 'Barber Pole Clássico da Barbearia J&J',
    category: 'todos',
    barberName: 'Barbearia J&J',
    tag: 'Ambiente Tradicional',
    imageUrl: 'https://lh3.googleusercontent.com/d/1DSWvy7gnlqWBJFCKwWenKMrQjDp3Fhip=w1200'
  },
  {
    id: 'g-6',
    title: 'Atendimento e Dedicação aos Detalhes',
    category: 'fade',
    barberName: 'Joares Meireles',
    tag: 'Joares Meireles',
    imageUrl: 'https://lh3.googleusercontent.com/d/1wGO9gKsFOH9wAjmWdXcsDTwuDaiAanmu=w1200'
  }
];

export const AMENITIES_DATA: Amenity[] = [
  {
    icon: 'Wifi',
    title: 'Wi-Fi Ultra Rápido',
    description: 'Conexão estável e tomadas para carregar seu celular na bancada.'
  },
  {
    icon: 'Gamepad2',
    title: 'Ambiente Climatizado & Aconchegante',
    description: 'Poltronas confortáveis, boa música e atendimento individualizado.'
  },
  {
    icon: 'Car',
    title: 'Fácil Estacionamento na Vila Paiva',
    description: 'Localização tranquila na Rua Cel. Jordão, com facilidade de parada em frente e arredores.'
  },
  {
    icon: 'ShieldCheck',
    title: 'Biossegurança & Higiene Total',
    description: 'Lâminas descartáveis abertas na sua frente e toalhas higienizadas a cada cliente.'
  }
];
