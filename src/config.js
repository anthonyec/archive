const fs = require('fs');
const path = require('path');

module.exports = {
  env: {
    dev: process.env.NODE_ENV === 'dev'
  },

  site: {
    url: 'https://anthonycossins.com/archive',
    title: 'Archive',
    description:
      'Archive of projects Ive done',
    keywords: 'just, a, great, archive',
    timestamp: () => Date.now(),
    date: () => new Date()
  },

  async getPages({ collection }) {
    const standalone = [
      {
        slug: 'index.html',
        path: '/',
        content: fs.readFileSync('./src/index.html', 'utf8')
      }
    ];

    const projects = await collection(
      'projects',
      'project',
      './src/_projects',
      '/{{slug}}'
    );

    return [...standalone, ...projects.reverse()];
  },

  postBuild() {
    fs.cpSync(path.join('./src', 'assets'), path.join('./dist', 'assets'), {
      recursive: true
    });
  },

  formatDateAsYear: () => (text, render) => {
    const renderedDate = render(text);
    const date = new Date(renderedDate);

    return date.getFullYear();
  },

  formatDateAsAge: () => (text, render) => {
    const renderedDate = render(text);
    const date = new Date(renderedDate);

    return parseInt(date.getFullYear()) - 1992;
  },

  formatDate: () => (text, render) => {
    function formatDateWithTemplate(template, date) {
      var specs = 'YYYY:MM:DD:HH:mm:ss'.split(':');
      date = new Date(date || Date.now() - new Date().getTimezoneOffset() * 6e4);
      return date.toISOString().split(/[-:.TZ]/).reduce(function(template, item, i) {
        return template.split(specs[i]).join(item);
      }, template);
    }

    const renderedDate = render(text);
    const date = new Date(renderedDate);

    return formatDateWithTemplate('YYYY-MM-DD', date);
  },
};
