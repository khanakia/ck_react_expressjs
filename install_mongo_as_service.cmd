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


CALL sc.exe create MongoDB5 binPath= "\"%MY_DIR%mongodb\mongod.exe\" --service --dbpath "%MY_DIR%mongodb\data" --logpath "%MY_DIR%mongodb\log\log.txt" --storageEngine=mmapv1" DisplayName= "MongoDB5" start= "auto"

CALL NET START MongoDB5


pause
ENDLOCAL