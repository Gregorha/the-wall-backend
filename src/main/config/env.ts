const env = {
  mailOptions: {
    host: process.env.EMAIL_HOST || '',
    port: Number(process.env.EMAIL_PORT) || 0,
    username: '',
    password: '',
    from: 'The Wall | TSL <thewalltsl@outlook.com>',
    to: '',
    subject: 'Another brick in The Wall',
    text:
      "I'm exited to have you here! \n \n" +
      'Hope you enjoy The Wall. \n \n' +
      'Best Regards, \n' +
      'The Wall',
    html:
      "I'm exited to have you here!</b> <br> <br>" +
      'Hope you enjoy The Wall. <br> <br>' +
      'Best Regards, <br>' +
      '<b>The Wall</b> <br> <br> ',
  },
};

export default env;
