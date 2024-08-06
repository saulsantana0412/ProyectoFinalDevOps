// Importa el módulo 'typed.js'
const Typed = require('typed.js');

test('Verifica que Typed.js funciona correctamente', () => {
  // Crea un elemento en el DOM para probar Typed.js
  document.body.innerHTML = '<div class="auto-type"></div>';

  // Crea una instancia de Typed para pruebas
  const typed = new Typed(".auto-type", {
    strings: ["Hola Mundo!", "Hello World!", "Bonjour le monde!", "你好世界！", "Olá Mundo!"],
    typedSpeed: 1000,
    backSpeed: 100,
    showCursor: false,
    loop: true,
  });

  // Verifica que la instancia de Typed fue creada correctamente
  expect(typed).toBeDefined();
});
