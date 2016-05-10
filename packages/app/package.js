Package.describe({
  name: 'app',
  version: '0.0.1'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');

  // Default Meteor packages.
  api.use([
    'meteor-base',
    'mobile-experience',
    'mongo',
    'blaze-html-templates',
    'session',
    'jquery',
    'tracker',

    'standard-minifiers',
    'es5-shim',
    'ecmascript'    
  ], ['client', 'server']);

  api.addFiles([
    'client/base.html',
    'client/base.js'
  ], ['client']);

  api.use([
    'arkham:comments-ui@1.0.2'
  ], ['client', 'server']);

  api.addFiles([
    'comments.js'
  ], ['client', 'server']);

  api.addFiles([
    'client/comments.js'
  ], ['client']);
});
