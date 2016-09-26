// In this exercise, the objective is to build a function that parses a string argument that contains email data. The function will parse the data and give following basic statistics about it:

  // Count of email
  // Date range of emails

// In order to parse the email data, the source of the data gave the following information.

  // Emails are separated by this sequence of characters --> ##||##
  // Each email has five parts. The parts are delimited by this sequence of characters --> #/#
    // Sender
    // Subject
    // Date
    // Recipient
    // Body

// data

// http://ls-javascript.s3.amazonaws.com/210/files/email_data.txt

// copy and paste from the link above

var emailData = '..';

function mailCount(emailData) {
  var emails = emailData.split('##|##');
  var count = emails.length;
  var emailDates = email.map(function(email) {
    return email.split('#/#')[2];
  });

  console.log('Count of Email: ' + count);
  console.log('Date Range: ' + displayDateRange(emailDates));
}

function displayDateRange(dates) {
  var normalizedDates = normalizeDates(dates);

  normalizedDates.sort(function(a, b) {
    return Date.parse(a) > Date.parse(b);
  });

  return normalizedDates[0] + ' - ' + normalizedDates[dates.length - 1];
}

function normalizeDates(dates) {
  return dates.map(function(date) {
    return date.split(' ').slice(1, 3).join(' ');
  });
}

mailCount(data);

// console.output
// Count of Email: 5
// Date Range: July23 2016 - July27 2016