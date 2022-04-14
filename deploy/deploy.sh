#!/bin/bash

ssh ec2-user@miyama "rm /usr/share/nginx/html/ryokohbato.me/*.*"
ssh ec2-user@miyama "rm /usr/share/nginx/html/ryokohbato.me/css/*.*"
ssh ec2-user@miyama "rm /usr/share/nginx/html/ryokohbato.me/img/*.*"
ssh ec2-user@miyama "rm /usr/share/nginx/html/ryokohbato.me/js/*.*"
rsync -acvz $(pwd)/dist/ ec2-user@miyama:/usr/share/nginx/html/ryokohbato.me/
