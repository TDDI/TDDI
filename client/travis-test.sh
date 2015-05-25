#!/bin/bash
set -o errexit

# First run the tests normally, without coverage. This produces clearer error
# messages when a test fails.
npm test

# Now that the tests have passed, gather coverage data.
set +o errexit
NODE_ENV=test
./node_modules/.bin/mocha \
  --require blanket \
  --reporter mocha-lcov-reporter \
  tests/*test.js \
  | ./node_modules/coveralls/bin/coveralls.js
