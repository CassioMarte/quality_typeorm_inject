import { createApp } from './app';

createApp()
  .then((app) => {
    app.listen(3000, () => {
      console.log('Api running on port 3000');
    });
  })
  .catch((err) => {
    console.error(`Error initializing the app: ${err}`);
    process.exit(1)
  });
