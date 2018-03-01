import process from 'process';
import webpack from 'webpack';
import config from './webpack.config';

webpack(config, (error, stats) => {
  if (error) {
    throw error;
  }

  process.stdout.write(`\n\n${stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false,
  })}\n\n`);
});
