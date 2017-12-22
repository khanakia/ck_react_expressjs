:: Name:     add-mongo-as-service.cmd
:: Purpose:  Adds MongoDB as a service to a Windows application development environment.
:: Note:     Run this script as an administrator.
:: Author:   www.geoffhayward.eu
:: Revision: Oct 2016 - initial version
:: setx /M PATH "%MY_DIR%mongodb"
@ECHO OFF

SETLOCAL ENABLEEXTENSIONS ENABLEDELAYEDEXPANSION

SET ME=%~n0
:: set MY_DIR=%~dp0
set MY_DIR=C:\Program Files (x86)\London BetExchange\


CALL sc.exe create MongoDB1 binPath= "\"%MY_DIR%mongodb\mongod.exe\" --service --dbpath \"%MY_DIR%mongodb\data\" --logpath \"%MY_DIR%mongodb\log\log.txt\" --storageEngine=mmapv1" DisplayName= "MongoDB1" start= "auto"

CALL NET START MongoDB1


pause
ENDLOCAL