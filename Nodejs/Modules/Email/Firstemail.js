var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'parththakor2610@gmail.com',
    pass: 'Parth@123'
  }
});

var mailOptions = {
  from: 'youremail@gmail.com',
  to: 'parththakor1026@gamil.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});