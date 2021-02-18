#!/bin/bash

for DFILE in $(find . -name Dockerfile -print)
do
   SVC=`echo $DFILE | awk -F/ '{print $2}'`
   cd $SVC
   docker build -t nuaware/rs-${SVC}:latest . --platform linux/amd64
   docker push nuaware/rs-${SVC}:latest
   cd ..
done
