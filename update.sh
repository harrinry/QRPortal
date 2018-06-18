#!/bin/bash
forever stopall
echo "Server stoped"
BRANCH='backend_dev_msu'
git pull origin "$BRANCH"
echo "git pull on branch $BRANCH executed"
forever start -c "env NODE_ENV=production PORT=2280 node server/server.js" .
echo "Server should be running again"
