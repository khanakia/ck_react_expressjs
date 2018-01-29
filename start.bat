:: Name:     add-mongo-as-service.cmd
:: Purpose:  Adds MongoDB as a service to a Windows application development environment.
:: Note:     Run this script as an administrator.
:: Author:   www.geoffhayward.eu
:: Revision: Oct 2016 - initial version
:: setx /M PATH "%MY_DIR%mongodb"
@ECHO OFF

SETLOCAL ENABLEEXTENSIONS ENABLEDELAYEDEXPANSION

SET ME=%~n0
set MY_DIR=%~dp0
:: set MY_DIR=C:\Program Files (x86)\London BetExchange\



rem start cmd /k "cd server && yarn start_win"
rem start cmd /k "cd client && webpack --watch"
rem start cmd

rem conemu -single -cmd cmd /k "D: && cd D:\EasyPHP-DevServer-14.1VC11\data\localweb\node_js\ck_nodejs_app\server && yarn start_win"
rem conemu -single -cmd cmd /k "D: && cd D:\EasyPHP-DevServer-14.1VC11\data\localweb\node_js\ck_nodejs_app\client && weback --watc"

start conemu -single -cmd cmd
start conemu -single -cmd cmd /k "D: && cd D:\EasyPHP-DevServer-14.1VC11\data\localweb\node_js\ck_nodejs_app\server && yarn start_win"
start conemu -single -cmd cmd /k "D: && cd D:\EasyPHP-DevServer-14.1VC11\data\localweb\node_js\ck_nodejs_app\client && yarn webpack --watch"

:: pause
ENDLOCAL