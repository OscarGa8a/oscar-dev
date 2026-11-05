export const siteUrl = 'https://oscardev.co';

export const whatsappShortLink = 'https://wa.me/message/YXFZES54VJ2IK1';

export function whatsappUrl(_lang?: 'es' | 'en', _context = 'portfolio') {
  return whatsappShortLink;
}

export const contact = {
  email: 'mailto:hola@oscardev.co',
  linkedin: 'https://www.linkedin.com/in/oscar-garcia-dev/',
  github: 'https://github.com/OscarGa8a',
  instagram: 'https://www.instagram.com/oscargarcia.dev/',
  tiktok: 'https://www.tiktok.com/@oscargarcia.dev',
  facebook: 'https://www.facebook.com/oscardev.co',
} as const;

export const author = {
  name: 'Oscar García',
  brand: 'OscarDev',
  jobTitle: { es: 'Desarrollador de soluciones digitales', en: 'Digital Solutions Developer' },
  email: 'hola@oscardev.co',
  phone: '+573180209851',
  countryCode: 'CO',
  experienceSince: '2020',
  phoneDisplay: '+57 318 020 9851',
  hours: { es: 'Lun–sáb, 8:00–18:00', en: 'Mon–Sat, 8:00–18:00' },
  city: 'Villavicencio, Meta',
} as const;

