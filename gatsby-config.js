module.exports = {
  siteMetadata: {
    title: 'Inova Securitizadora',
    description: 'Adiantamos seus recebíveis sem burocracia.',
    contact: {
      phone: '(21) 2221-7870',
      email: 'contato@inovasecuritizadora.com',
    },
    menuLinks: [
      {
        name: 'Como Funciona',
        link: '/services',
      },
      {
        name: 'Quem Somos',
        link: '/team',
      },
      {
        name: 'Depoimentos',
        link: '/testimonials',
      },
      {
        name: 'Contato',
        link: '/contact',
      },
    ],
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-transformer-json',
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/data`,
        name: 'data',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images`,
        name: 'images',
      },
    },
  ],
};
