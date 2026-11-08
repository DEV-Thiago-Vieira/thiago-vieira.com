// Dados de contato centralizados — altere aqui para refletir em todo o site.
export const contact = {
  email: "contact@thiago-vieira.com",
  github: "https://github.com/DEV-Thiago-Vieira/",
  linkedin: "https://www.linkedin.com/in/dev-thiago-vieira/",
  whatsapp: {
    // Somente dígitos, com código do país (55) e DDD. Usado no link wa.me.
    number: "5585994153775",
    // Formato exibido para o usuário.
    display: "+55 (85) 99415-3775",
    message: "Olá, Thiago! Vi seu portfólio e gostaria de conversar.",
  },
};

export const whatsappUrl = `https://wa.me/${contact.whatsapp.number}?text=${encodeURIComponent(
  contact.whatsapp.message,
)}`;
