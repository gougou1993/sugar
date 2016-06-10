require.config({
	'paths': {
		'testem': '/testem'
	}
});

require([
	'jasmine/jasmine'
], function() {
	require([
		'testem',
		'jasmine/jasmine-html',
		// test specs files list begain
		'specs/observe_spec',
	], function() {
		var env = jasmine.getEnv();
		env.addReporter(new jasmine.HtmlReporter);
		env.execute();
	});
});
