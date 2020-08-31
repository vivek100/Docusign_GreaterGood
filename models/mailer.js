const Email = require('email-templates');
const email = new Email({
 message: {
   from: '"Sevabhava 🌞" <admin@sevabhava.in>',
   attachments: [{
        filename: 'fb.png',
        path: './emails/welcome/fb.png',
        cid: 'unique@fb' //same cid value as in the html img src
    },{
        filename: 'insta.png',
        path: './emails/welcome/insta.png',
        cid: 'unique@insta' //same cid value as in the html img src
    },{
        filename: 'linked.png',
        path: './emails/welcome/linked.png',
        cid: 'unique@linkedin' //same cid value as in the html img src
    }]
 },juiceResources: {
    preserveImportant: true,
    webResources: {
      images: false // <--- set this as `true`
    },
  },
 send: true,
 transport: {
   host: 'smtp.flockmail.com',
   port: 465,
   ssl: true,
   tls: true,
   auth: {
    user: 'admin@sevabhava.in', // generated ethereal user
    pass: 'Apr@1234' // generated ethereal password
  }
 }
});

function sendWelcomeEmail(name,emailaddress) {

    email
    .send({
      template: 'welcome',
      message: {
        to: emailaddress
      },
      locals: {
          firstName: name
      }
    })
    .then(console.log('Mail Sent'))
    .catch(console.error);
    
}
function sendCreateHelpMail(name,emailaddress,shortlink) {

    email
    .send({
      template: 'newHelp',
      message: {
        to: emailaddress
      },
      locals: {
          firstName: name,
          shortlink : shortlink
      }
    })
    .then(console.log('Mail Sent'))
    .catch(console.error);
    
}
function sendJoinedMail(name,emailaddress,shortlink) {

    email
    .send({
      template: 'joinHelp',
      message: {
        to: emailaddress
      },
      locals: {
          firstName: name,
          shortlink : shortlink
      }
    })
    .then(console.log('Mail Sent'))
    .catch(console.error);
    
}
function sendUpdatesMail(emailaddress,shortlink,bccemail,message,by,title) {

    email
    .send({
      template: 'updates',
      message: {
        to: emailaddress,
        bcc: bccemail
      },
      locals: {
          shortlink : shortlink,
          message: message,
          by: by,
          title: title
      }
    })
    .then(console.log('Mail Sent'))
    .catch(console.error);
    
}
function sendOwnerJoinedMail(emailaddress,shortlink,message,title) {

    email
    .send({
      template: 'joinHelpOwner',
      message: {
        to: emailaddress
      },
      locals: {
          shortlink : shortlink,
          message : message,
          title: title
      }
    })
    .then(console.log('Mail Sent'))
    .catch(console.error);
    
}
function sendVerifyMail(name,emailaddress) {

    email
    .send({
      template: 'verify',
      message: {
        to: emailaddress
      },
      locals: {
          name: name
      }
    })
    .then(console.log('Mail Sent'))
    .catch(console.error);
    
}
module.exports = {
    sendWelcomeEmail,
    sendCreateHelpMail,
    sendJoinedMail,
    sendUpdatesMail,
    sendOwnerJoinedMail,
    sendVerifyMail
}