var gulp = require('gulp');
 
// `gulp.task()` defines task that can be run calling `gulp xyz` from the command line
// The `default` task gets called when no task name is provided to Gulp

var EXPRESS_PORT = 4000;
var EXPRESS_ROOT = __dirname;
var LIVERELOAD_PORT = 35729;

function startExpress() {
 
  var express = require('express');
  var app = express();
  app.use(require('connect-livereload')());
  app.use(express.static(__dirname));
  app.listen(4000);
}

var lr;
function startLivereload() {
  lr = require('tiny-lr')();
  lr.listen(LIVERELOAD_PORT);
}


function notifyLiveReload(event){
	var fileName = require('path').relative(EXPRESS_ROOT, event.path);

	console.log(event);

	lr.changed({
		body: { 
			files: [fileName]
		}
	});
}

gulp.task('default', function () {
  
  console.log('Gulp and running!');
  startExpress();
  startLivereload();
  gulp.watch('*.html', notifyLiveReload);
});



/*

var gulp = require('gulp');


var EXPRESS_PORT = 4000;
var EXPRESS_ROOT = __dirname;
var LIVERELOAD_PORT = 35729;
 
// Let's make things more readable by
// encapsulating each part's setup
// in its own method
function startExpress() {
 
  var express = require('express');
  var app = express();
  app.use(express.static(__dirname));
  app.listen(4000);
}
 
gulp.task('default', function () {
 
  startExpress();
});

*/