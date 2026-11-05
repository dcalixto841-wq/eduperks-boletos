// =====================================================
//  EDUPERKS · Configuración (lo único que tienes que editar)
// =====================================================
window.EDUPERKS = {
  // URL de la aplicación web de Apps Script (termina en /exec).
  // Si la dejas vacía, todo funciona en MODO DEMO con folios de prueba.
  API_URL: 'https://script.google.com/macros/s/AKfycbyTEDIVNJ9E41A4FzBdKsT1yxCq2NMYK5YXqyDFKwaTo852mgew3OuZc5Pm9lCtv3tYGA/exec',

  CAMPANA: 'Eduperks',
  TERMINOS: 'Válido por una entrada a función 2D. Sujeto a disponibilidad. No canjeable por efectivo.',
  AVISO_PRIVACIDAD_URL: '#',   // ← liga a tu aviso de privacidad

  // Diseño del boleto.
  // Mientras "fondo" esté vacío se usa el diseño básico de Eduperks.
  // Cuando tengas tu diseño: súbelo como img/boleto.png, pon fondo: 'img/boleto.png'
  // y ajusta x / y (en píxeles de la imagen) donde debe ir el folio.
  BOLETO: {
    fondo: '',
    folio:  { x: 540, y: 900, tamano: 96, color: '#1E1B4B', peso: 800, alinear: 'center' },
    nombre: null   // ej. { x: 540, y: 700, tamano: 44, color: '#1E1B4B', peso: 700, alinear: 'center' }
  }
};
