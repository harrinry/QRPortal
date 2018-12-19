#!/bin/bash
git checkout -- .
git clean HEAD -f
echo "cleaned git head"
BRANCH='backend_dev_msu'
git pull origin "$BRANCH"
echo "git pull on branch $BRANCH executed"
npm install
echo "installing additional packages if required"
forever start -c "env NODE_ENV=production PORT=2280 node server/server.js" .
echo "Server should be running again"
