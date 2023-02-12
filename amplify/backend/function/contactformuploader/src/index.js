const aws = require('aws-sdk')
const ses = new aws.SES()

exports.handler = async (event) => {
  for (const streamedItem of event.Records) {
    if (streamedItem.eventName === 'INSERT') {
      //pull off items from stream
      const candidateName = streamedItem.dynamodb.NewImage.name.S
      const candidateEmail = streamedItem.dynamodb.NewImage.email.S
      const candidateMessage = streamedItem.dynamodb.NewImage.message.S

      await ses
          .sendEmail({
            Destination: {
              ToAddresses: [process.env.SES_EMAIL],
            },
            Source: process.env.SES_EMAIL,
            Message: {
              Subject: { Data: 'New Contact From BFFGRam' },
              Body: {
                Text: { Data: `A new contact named ${candidateName} has submitted their info. You can reach this person through ${candidateEmail}. The person has sent a message "${candidateMessage}"` },
              },
            },
          })
          .promise()
    }
  }
  return { status: 'done' }
}