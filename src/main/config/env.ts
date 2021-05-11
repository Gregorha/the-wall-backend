const env = {
  port: process.env.PORT || 5000,
  secret: '58796f93f68f4a82447faac8751ed9bc',

  mailOptions: {
    host: 'smtp.mailtrap.io',
    port: 2525,
    username: '071f95eedaeaf4',
    password: '55219f9de5a1ea',
    from: 'The Wall | TSL <email@mail.com>',
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
