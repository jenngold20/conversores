// Datos compartidos por el conversor de SISEP y el corrector de Urbetrack.
// Un cambio acá vale para las dos herramientas. Lo que cada una descarga (JSON, chat, Excel) queda en su propio archivo.
(function (root) {
  'use strict';

  const CALLES_COMPARTIDAS = {
    // Correcciones de dirección. zona: nombre de zona, o '*' para todas.
    // re: patrón sobre la dirección (ya limpia). to: texto que la reemplaza.
    correcciones: [
      // Hay dos Sarmiento: "Av. Sarmiento" en Cerviño, Rural y Palermo; "Sarmiento" solo en Once y el resto.
      { zona: '*', re: /^(av\.?\s*)?sarmiento\s*2600$/i, to: 'Sarmiento 2601', toAv: 'Av. Sarmiento 2601',
        zonasConAv: /cervi|rural|palermo/i, nota: 'Sarmiento 2600 → 2601 (confirmado)' },
      { zona: 'Barrio Chino', re: /^arribe[ñn]os\s*2100$/i, to: 'Arribeños 2105', nota: 'Arribeños 2100 → 2105 (confirmado)' },
      { zona: 'Barrio Chino', re: /v[ií]a viva/i, to: 'Arribeños 2203', nota: 'vía viva → Arribeños 2203' },
      { zona: 'Constitución', re: /^lima oeste$/i, to: 'Lima 1750', nota: 'Lima Oeste → Lima 1750' },
      { zona: 'Constitución', re: /tra(n)?sbordo/i, to: 'Garay 1117', nota: 'transbordo → Garay 1117' },
      { zona: '*', re: /^(ram[oó]n freire|r\.?\s*freire)\s+4000$/i, to: 'Ramón Freire 4001', nota: 'Ramón Freire 4000 → 4001' },
      // San Telmo: Plaza Dorrego se carga como Defensa 1080 (las direcciones vacías se resuelven en cada herramienta).
      { zona: 'San Telmo', re: /plaza dorrego/i, to: 'Defensa 1080', nota: 'Plaza Dorrego → Defensa 1080' },
      // Garibaldi 1000 (con o sin "al") se carga siempre como Brandsen 850.
      { zona: '*', re: /^garibaldi(\s+al)?\s+1000$/i, to: 'Brandsen 850', nota: 'Garibaldi 1000 → Brandsen 850' },
      // Roque Pérez llega hasta el 4000: alturas mayores se cargan como 4000.
      { zona: '*', re: /^roque p[ée]rez\s+(\d+)$/i,
        fn: (m) => (Number(m[1]) > 4000 ? 'Roque Pérez 4000' : m[0]), nota: 'Roque Pérez mayor a 4000 → 4000' },
      // Ramos Mejía (Retiro): 1300 → 1301, y cualquier altura mayor a 1700 → 1700. fn devuelve la dirección nueva (o la misma si no cambia).
      { zona: 'Retiro', re: /^(ramos mej[ií]a|r\.?\s*mej[ií]a)\s+1300$/i, to: 'Ramos Mejía 1301', nota: 'Ramos Mejía 1300 → 1301' },
      { zona: 'Retiro', re: /^(ramos mej[ií]a|r\.?\s*mej[ií]a)\s+(\d+)$/i,
        fn: (m) => (Number(m[2]) > 1700 ? 'Ramos Mejía 1700' : m[0]), nota: 'Ramos Mejía mayor a 1700 → 1700' },
    ],
  };

  if (typeof module !== 'undefined' && module.exports) module.exports = CALLES_COMPARTIDAS;
  else root.CALLES_COMPARTIDAS = CALLES_COMPARTIDAS;
})(typeof window !== 'undefined' ? window : globalThis);
