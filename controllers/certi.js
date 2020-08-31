const db  = require('../models/Store');
var request = require('request');
const mailFunctions = require('../models/mailer');
const docusign = require('docusign-esign')
    , path = require('path')
    , fs = require('fs')
    , process = require('process')
    , basePath = 'https://demo.docusign.net/restapi'
    , express = require('express')
    , envir = process.env


// @desc  Get status of the email signature sent
// @route GET /api/v1/registration
// @access Public
exports.getEnvelopeStatus = async (req, res, next) => {
  try {
    let cityRef = await db.collection('seekers').doc('India').collection(req.query.city);
    let getDoc = cityRef.get()
    .then(snapshot  => {
      console.log(snapshot.docs.length)
      if (snapshot.docs.length === 0) {
        console.log('No such document!');
        res.status(403).json({ error: 'No Data' });
      } else {
        console.log('Document data:', snapshot.docs.map(doc => doc.data()));
        return res.status(200).json(snapshot.docs.map(doc => doc.data()));
      }
    })
    .catch(err => {
      console.log('Error getting document', err);
      res.status(400).json({ error: 'Server error' });
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

// @desc  Send an email for registration of volunteer form
// @route POST /api/v1/registration
// @access Public
exports.openSigningCeremonyController = async (req, res, next) => {
  try {
        console.log(req.body)
        const qp =req.query;
        // Fill in these constants or use query parameters of ACCESS_TOKEN, ACCOUNT_ID, USER_FULLNAME, USER_EMAIL
        // or environment variables.
      
        // Obtain an OAuth token from https://developers.docusign.com/oauth-token-generator
        const accessToken = envir.ACCESS_TOKEN || qp.ACCESS_TOKEN || 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjY4MTg1ZmYxLTRlNTEtNGNlOS1hZjFjLTY4OTgxMjIwMzMxNyJ9.eyJUb2tlblR5cGUiOjUsIklzc3VlSW5zdGFudCI6MTU5ODc3NTc1NCwiZXhwIjoxNTk4ODA0NTU0LCJVc2VySWQiOiIyODNjZDJmZi04ODgzLTRmOTYtYTBiOS04ZmUwZjlhZjcyMWUiLCJzaXRlaWQiOjEsInNjcCI6WyJzaWduYXR1cmUiLCJjbGljay5tYW5hZ2UiLCJvcmdhbml6YXRpb25fcmVhZCIsInJvb21fZm9ybXMiLCJncm91cF9yZWFkIiwicGVybWlzc2lvbl9yZWFkIiwidXNlcl9yZWFkIiwidXNlcl93cml0ZSIsImFjY291bnRfcmVhZCIsImRvbWFpbl9yZWFkIiwiaWRlbnRpdHlfcHJvdmlkZXJfcmVhZCIsImR0ci5yb29tcy5yZWFkIiwiZHRyLnJvb21zLndyaXRlIiwiZHRyLmRvY3VtZW50cy5yZWFkIiwiZHRyLmRvY3VtZW50cy53cml0ZSIsImR0ci5wcm9maWxlLnJlYWQiLCJkdHIucHJvZmlsZS53cml0ZSIsImR0ci5jb21wYW55LnJlYWQiLCJkdHIuY29tcGFueS53cml0ZSJdLCJhdWQiOiJmMGYyN2YwZS04NTdkLTRhNzEtYTRkYS0zMmNlY2FlM2E5NzgiLCJhenAiOiJmMGYyN2YwZS04NTdkLTRhNzEtYTRkYS0zMmNlY2FlM2E5NzgiLCJpc3MiOiJodHRwczovL2FjY291bnQtZC5kb2N1c2lnbi5jb20vIiwic3ViIjoiMjgzY2QyZmYtODg4My00Zjk2LWEwYjktOGZlMGY5YWY3MjFlIiwiYW1yIjpbImludGVyYWN0aXZlIl0sImF1dGhfdGltZSI6MTU5ODc3NTc0NywicHdpZCI6IjdmODRjNWNiLTEwM2YtNDI4NC1iZTlhLWNiM2M1ZTkwOGZhMiJ9.HZxmb1A6c2ZhDzbgbMR7j7iLXoqiqP1imlqCrUiDQ8ZBWcr11i2QnBt9wX3-FvPhd25HuHr-AOC9WLrK6xswPYyrVY8AhSdXQdIxPh1r9d8b2QBjLOC6RVbIFQzaHMTZxdc_r3BLs844FlMeYYRtt7CxG9zGlmvHUJaK2obv_Mt-21YC40NhJLCAyonqRfV3UhZQuW2DOotmscvjjJyamCqnfa0uYIJcC7KRB6C1mT7y1_MkS-7_8AKMp-TfqvaJmgX04h9MfnyK5_amsvj49jpfefuxJU0MdjQ_zFR4Ho_YoftTLubw69mFB9Y27tJcjAXnl9ocCjKn6cn3r3Lnbw';
      
        // Obtain your accountId from demo.docusign.com -- the account id is shown in the drop down on the
        // upper right corner of the screen by your picture or the default picture. 
        const accountId = envir.ACCOUNT_ID || qp.ACCOUNT_ID || '11327140'; 
      
        // Recipient Information:
        const signerName = envir.USER_FULLNAME || qp.USER_FULLNAME || req.body.name;
        const signerEmail = envir.USER_EMAIL || qp.USER_EMAIL || req.body.email;
      
        const clientUserId = req.body.uid // Used to indicate that the signer will use an embedded
                                  // Signing Ceremony. Represents the signer's userId within
                                  // your application.
            , authenticationMethod = 'None' // How is this application authenticating
                                            // the signer? See the `authenticationMethod' definition
                                            // https://developers.docusign.com/esign-rest-api/reference/Envelopes/EnvelopeViews/createRecipient
      
        // The document to be signed. Path is relative to the root directory of this repo.
        const fileName = 'demo_documents/certificate.docx';
      
        ////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////
      
        /**
         *  Step 1. The envelope definition is created.
         *          One signHere tab is added.
         *          The document path supplied is relative to the working directory
         */
        const envDef = new docusign.EnvelopeDefinition();
        //Set the Email Subject line and email message
        envDef.emailSubject = 'Volunteer Certificate for '+ req.body.ccname;
        envDef.emailBlurb = 'Volunteer Certificate for '+ req.body.ccname;
      
        // Read the file from the document and convert it to a Base64String
        const doc2DocxBytes = fs.readFileSync(path.resolve(__dirname, fileName))
            , doc2b64 = doc2DocxBytes.toString('base64');
        
        // Create the document request object
        const doc = docusign.Document.constructFromObject({documentBase64: doc2b64,
              fileExtension: 'docx',  // You can send other types of documents too.
              name: 'Volunteer Certificate', documentId: '1'});
      
        // Create a documents object array for the envelope definition and add the doc object
        envDef.documents = [doc];

        // Create the signer object with the previously provided name / email address
        const signer = docusign.Signer.constructFromObject({name: signerName, email: signerEmail,
          routingOrder: '1', recipientId: '1', clientUserId: clientUserId});

        // create a cc recipient to receive a copy of the documents, identified by name and email
        // We're setting the parameters via setters
        let cc1 = new docusign.CarbonCopy();
        cc1.email = req.body.ccemail;
        cc1.name = req.body.ccname;
        cc1.routingOrder = '2';
        cc1.recipientId = '2';
        // Create the signHere tab to be placed on the envelope
        const signHere = docusign.SignHere.constructFromObject({documentId: '1',
              pageNumber: '1', recipientId: '1', tabLabel: 'SignHereTab',
              anchorString: '/sn1/',anchorYOffset: '10', anchorUnits: 'pixels',
              anchorXOffset: '20'});
        
        const textuname = docusign.Text.constructFromObject({
                anchorString: '/uname/', anchorUnits: 'pixels',
                anchorYOffset: '-8', anchorXOffset: '4',
                font: 'helvetica', fontSize: 'size14',
                bold: 'false', value: req.body.name,
                locked: 'true', tabId: 'uname',
                tabLabel: 'uname'
            })
        
        const textname = docusign.Text.constructFromObject({
              anchorString: '/name/', anchorUnits: 'pixels',
              anchorYOffset: '-19', anchorXOffset: '4',
              font: 'helvetica', fontSize: 'size20',
              bold: 'true', value: req.body.ccname,
              locked: 'true', tabId: 'name',
              tabLabel: 'name'
          })

        const textmonth = docusign.Text.constructFromObject({
            anchorString: '/month/', anchorUnits: 'pixels',
            anchorYOffset: '-8', anchorXOffset: '4',
            font: 'helvetica', fontSize: 'size14',
            bold: 'true', value: new Intl.DateTimeFormat('en-US', { month: 'long'}).format(new Date()),
            locked: 'true', tabId: 'month',
            tabLabel: 'month'
        })

      const textunameagain = docusign.Text.constructFromObject({
          anchorString: '/unameagain/', anchorUnits: 'pixels',
          anchorYOffset: '-14', anchorXOffset: '4',
          font: 'helvetica', fontSize: 'size20',
          bold: 'false', value: req.body.name,
          locked: 'true', tabId: 'unameagain',
          tabLabel: 'unameagain'
      })
      
        // Create the overall tabs object for the signer and add the signHere tabs array
        // Note that tabs are relative to receipients/signers.
        signer.tabs = docusign.Tabs.constructFromObject({signHereTabs: [signHere],
          textTabs: [textname, textuname,textmonth,textunameagain]});
      
        // Add the recipients object to the envelope definition.
        // It includes an array of the signer objects. 
        envDef.recipients = docusign.Recipients.constructFromObject({signers: [signer],carbonCopies: [cc1]});
        // Set the Envelope status. For drafts, use 'created' To send the envelope right away, use 'sent'
        envDef.status = 'sent';
      
        /**
         *  Step 2. Create/send the envelope.
         *          We're using a promise version of the SDK's createEnvelope method.
         */
        const apiClient = new docusign.ApiClient();
        apiClient.setBasePath(basePath);
        apiClient.addDefaultHeader('Authorization', 'Bearer ' + accessToken);
        // Set the DocuSign SDK components to use the apiClient object
        docusign.Configuration.default.setDefaultApiClient(apiClient);
        let envelopesApi = new docusign.EnvelopesApi()
          , results;
      
        try {
          results = await envelopesApi.createEnvelope(accountId, {'envelopeDefinition': envDef})
          /**
           * Step 3. The envelope has been created.
           *         Request a Recipient View URL (the Signing Ceremony URL)
           */
          const envelopeId = results.envelopeId
              , recipientViewRequest = docusign.RecipientViewRequest.constructFromObject({
                  authenticationMethod: authenticationMethod, clientUserId: clientUserId,
                  recipientId: '1', returnUrl: req.protocol + '://' + req.get('host'),
                  userName: signerName, email: signerEmail
                })
              ;
      
          results = await envelopesApi.createRecipientView(accountId, envelopeId,
                            {recipientViewRequest: recipientViewRequest});
          /**
           * Step 4. The Recipient View URL (the Signing Ceremony URL) has been received.
           *         Redirect the user's browser to it.
           */
          return res.status(201).json({url : results.url})
        } catch  (e) {
          // Handle exceptions
          let body = e.response && e.response.body;
          if (body) {
            // DocuSign API exception
            console.log(body)
            res.status(400).json(body);
          } else {
            // Not a DocuSign exception
            console.log(e)
            res.status(500).json({error : "Server Error"});
          }
        }
  } catch (err) {
    console.error(err);
    if (err.code === 11000) {
      return res.status(400).json({ error: 'Database Error' });
    }
    res.status(500).json({ error: 'Server error' });
  }
};

