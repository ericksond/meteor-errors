Package.describe({
  name: 'ericksond:errors',
  summary: 'A pattern to display application errors to the user',
  version: '0.0.1',
  git: 'https://github.com/ericksond/meteor-errors.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.1');
  api.addFiles(['errors.js', 'errors_list.jade', 'errors_list.html', 'errors_list.js'], 'client');

  if (api.export)
    api.export('Errors')
});


Package.onTest(function(api) {
  api.use('ericksond:errors', 'client');
  api.addFiles('errors_tests.js', 'client');
});
