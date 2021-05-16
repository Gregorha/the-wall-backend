const env = {
  port: process.env.PORT || 5000,
  secret: '58796f93f68f4a82447faac8751ed9bc',

  mailOptions: {
    host: 'smtp-mail.outlook.com',
    port: 587,
    username: 'thewalltsl@outlook.com',
    password: 'a468bc1597a7ee6648dd6b36619bf193',
    from: 'The Wall | TSL <thewalltsl@outlook.com>',
    to: '',
    subject: 'Another brick in The Wall',
    text:
      "I'm exited to have you here! \n \n" +
      'Hope you enjoy The Wall. \n \n' +
      'Best Regards, \n' +
      'The Wall',
    html:
      "I'm exited to have you here!</b>. <br> <br>" +
      'Hope you enjoy The Wall. <br> <br>' +
      'Best Regards, <br>' +
      '<b>The Wall</b> <br> <br> ',
  },
};

export default env;
