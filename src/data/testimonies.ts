interface DataTestimonies {
  /**
   * URL of the company's logo image
   */
  companyLogoUrl: string;

  /**
   * Name of the company providing the testimony
   */
  companyName: string;

  /**
   * Full name of the person providing the testimony
   */
  personFullName: string;

  /**
   * Job title or profession of the person providing the testimony
   */
  personJobTitle: string;

  /**
   * Testimonial text provided by the person
   */
  testimonyText: string;

  /**
   * URL to the full testimonial
   */
  fullTestimonyUrl: string;
}
export const dataTestimonies: DataTestimonies[] = [
  {
    companyLogoUrl: '/assets/images/neoris_logo.jpg',
    companyName: 'Neoris',
    personFullName: 'Jesús Contreras',
    personJobTitle: 'UX Researcher',
    testimonyText:
      'He tenido el privilegio de presenciar la notable dedicación de Ana como Product Designer. Su enfoque creativo para la resolución de problemas, incluso en los desafíos más complejos, es nada menos que inspirador.',
    fullTestimonyUrl: '',
  },
  {
    companyLogoUrl: '/assets/images/bancoRipley_logo.png',
    companyName: 'Banco Ripley',
    personFullName: 'Viviana de Toledo',
    personJobTitle: 'Lead UX I Researcher',
    testimonyText:
      'Trabajar con Ana siempre fue un agrado, porque no partía haciendo los diseños sin pensar en objetivos del negocio o poder realizar una buena investigación que permita levantar toda la información y data posible para llevar a cabo sus procesos.',
    fullTestimonyUrl: '',
  },
  {
    companyLogoUrl: '/assets/images/neoris_logo.jpg',
    companyName: 'Neoris',
    personFullName: 'Jesús Contreras',
    personJobTitle: 'UX Researcher',
    testimonyText:
      'He tenido el privilegio de presenciar la notable dedicación de Ana como Product Designer. Su enfoque creativo para la resolución de problemas, incluso en los desafíos más complejos, es nada menos que inspirador.',
    fullTestimonyUrl: '',
  },
];
