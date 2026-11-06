// =====================================================
//  EDUPERKS · Configuración (lo único que tienes que editar)
// =====================================================
window.EDUPERKS = {
  // URL de la aplicación web de Apps Script (termina en /exec).
  // Si la dejas vacía, todo funciona en MODO DEMO con folios de prueba.
  API_URL: 'https://script.google.com/macros/s/AKfycbyTEDIVNJ9E41A4FzBdKsT1yxCq2NMYK5YXqyDFKwaTo852mgew3OuZc5Pm9lCtv3tYGA/exec',

  CAMPANA: 'Eduperks',
  VIGENCIA: '12 de noviembre de 2026',
  // Texto corto que aparece en la imagen del cupón (los términos completos están en index.html)
  TERMINOS: 'Válido por 1 cupón 2x1 en sala tradicional 2D de Cinépolis. Pagas un boleto y recibes dos. Vigencia: 12 de noviembre de 2026. No canjeable por efectivo. Consulta términos y condiciones.',

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
