const templateIdHash = '8ff55eac1d0b478ab3c06c3c6a492300';

const callSmsVerification = (sender, receiver, templateId, templateParams, statusCallBack, signature) => {
  const https = require('https'); // Introduce https module
  const url = require('url'); // Introduce the url module
  const querystring = require('querystring'); // Introduce the querystring module

  // 
  const realUrl = 'https://rtcsms.cn-north-1.myhuaweicloud.com:10743/sms/batchSendSms/v1'; // APP access address + interface access URI
  const appKey = 'c8RWg3ggEcyd4D3p94bf3Y7x1Ile'; // APP_Key
  const appSecret = 'q4Ii87BhST9vcs8wvrzN80SfD7Al'; // APP_Secret
  const sender = 'csms12345678'; // Domestic SMS signature channel number or international/Hong Kong, Macao and Taiwan SMS channel number

  const templateId = `${templateIdHash}`;
  
  const signature = 'Addeur SMS Verification'; // Signature name

  // Required, global number format (including country code), example: +8615123456789, separate multiple numbers with English commas
  const receiver = `${user.phone_number}`; // SMS recipient number

  function buildRequestBody() {
    if (signature !== null && signature.length > 0) {
      return querystring.stringify({
        from: sender,
        to: receiver,
        templateId,
        templateParas,
        statusCallback: statusCallBack,
        signature,
      });
    }

    return querystring.stringify({
      from: sender,
      to: receiver,
      templateId,
      templateParas,
      statusCallback: statusCallBack,
    });
  }
};

export default callSmsVerification;
