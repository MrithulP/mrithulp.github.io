// =========================
// This is for AppScripts im using google forms to handle the submissions
// This script should be added as an extension to the google sheet that is linked to the form, and it will send an email to the user who submitted the form. 
// =========================


function sendConfirmationEmails() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const startRow = 2;
  const lastRow = sheet.getLastRow();
  const statusColumn = 6;

  for (let i = startRow; i <= lastRow; i++) {
    const status = sheet.getRange(i, statusColumn).getValue();

    if (status !== "Sent") {
      const name    = sheet.getRange(i, 2).getValue();
      const email   = sheet.getRange(i, 3).getValue();
      const subject = sheet.getRange(i, 4).getValue();
      const message = sheet.getRange(i, 5).getValue();

      if (isValidEmail(email)) {
        const emailSubject = subject
          ? `Re: ${subject}`
          : "Thanks for reaching out!";

        const emailBody =
          `*automated message*\n` +
          `-----------------------------------------------------------\n` +
          `Hi ${name},\n\n` +
          `Thanks for your message — I've received it and will get back to you as soon as I can.\n\n` +
          `Here's what you sent:\n` +
          `"${message}"\n\n` +
          `— Mrithul\n\n` +
          `-----------------------------------------------------------\n` +
          `This is an automated confirmation. Please do not reply to this email.\n`;

        const options = {
          replyTo: email,
          // You can add a bcc email if you want to receive a copy of the confirmation emails
          bcc: "",
        };

        MailApp.sendEmail(email, emailSubject, emailBody, options);
        sheet.getRange(i, statusColumn).setValue("Sent");
      } else {
        sheet.getRange(i, statusColumn).setValue("Invalid email");
      }
    }
  }
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}