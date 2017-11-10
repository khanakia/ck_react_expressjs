#!/bin/bash
uname="$(uname)"
echo "${uname}"

if  [ $uname = "Darwin" ]
then
	npm run start
else  
	npm run start_win
fi