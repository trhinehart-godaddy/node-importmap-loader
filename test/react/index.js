for (let i = 0; i < 3; i++) {
  console.group('Demo %s', i + 1);
  console.time('Time');
  // Importing the demo.js file with a unique hash to bypass node cache
  await import(`./demo.js#${Date.now()}`).then(({ default: demo }) => {
    demo();
  });
  console.timeEnd('Time');
  console.groupEnd();
}
