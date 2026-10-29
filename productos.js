/* ============================================================
   PRODUCTOS DE LA TIENDA · Pipeline Pivot
   Para añadir un producto, copia un bloque { ... } dentro de
   "productos" y cambia sus datos. Guarda la imagen en /assets/.

   tipo:    "print"  (impreso)   |  "digital" (arte digital)
   estado:  "disponible"         |  "proximamente"
   url:     enlace al producto en tu tienda (Shopify). Si lo dejas
            vacío, el botón abre WhatsApp con un mensaje preparado.
   ============================================================ */
window.TIENDA = {
  // Enlace a tu tienda completa (cuando la tengas). Déjalo vacío si aún no existe.
  tiendaUrl: "",
  whatsapp: "34683379317",

  // Preguntas frecuentes de la tienda. Añade, quita o edita bloques { q: "pregunta", a: "respuesta" }.
  faqs: [
    { q: "¿Cuándo abre la tienda?", a: "Muy pronto. Escríbeme por WhatsApp y te aviso en cuanto abra." },
    { q: "¿Qué voy a encontrar aquí?", a: "Prints y arte digital con la mirada de Pipeline Pivot." },
    { q: "¿Puedo hablar contigo de un proyecto o un encargo?", a: "Claro. Escríbeme por WhatsApp o a pipelinepivot@gmail.com y lo vemos." },
    { q: "¿Cómo puedo contactarte?", a: "Por WhatsApp (+34 683 379 317) o por email en pipelinepivot@gmail.com." }
  ],
  productos: [
    /* EJEMPLO (quita los comentarios y edita para usarlo):
    {
      titulo: "Crab Meat",
      tipo: "print",
      estado: "disponible",
      imagen: "assets/art-2d.jpg",
      precio: "25 €",
      detalle: "Print A3 · papel de calidad museo",
      url: "https://tu-tienda.myshopify.com/products/crab-meat"
    },
    */
  ]
};
