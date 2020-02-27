const gulp = require("gulp");

require("require-dir")("./_tasks");

// Run the Dev Server and Watcher
gulp.task("dev", gulp.parallel("serve", "watch"));

// Run the asset pipeline
gulp.task("assets", gulp.parallel("styles", "scripts", "icons", "copy"));

// Development Build Process
gulp.task("build:dev", gulp.series("clean", "generate", "assets"));

// Production Build Process
gulp.task(
  "build",
  gulp.series("clean", "generate", "assets", "critical", "workbox")
  // gulp.series('clean', 'generate', 'assets', 'critical', 'workbox')
);
