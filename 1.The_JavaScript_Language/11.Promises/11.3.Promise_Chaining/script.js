// Task 1: Promise: then versus catch
promise.then(f1).catch(f2);

// Versus:

promise.then(f1, f2);

// Potential errors in f1 are not handled in 2 variant
