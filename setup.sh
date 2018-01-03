#!/bin/bash
ck_exe="ck-server.exe"
ck_exe1="ck-server1.exe"
# pwd1=$(pwd)
pwd1="D:\EasyPHP-DevServer-14.1VC11\data\localweb\node_js\ck_nodejs_app"
dir_dist="${pwd1}/dist"
dir_server="${pwd1}/server"
dir_client="${pwd1}/client"
dir_electron="${pwd1}/ck-electron-app"
echo $dir_dist



function press_enter
{
    echo ""
    echo -n "Press Enter to continue"
    read
    clear
}

function create_dist
{
    mkdir -p $dir_dist

    cd $dir_dist
    if [ -f $ck_exe ] ; then
        rm -f $ck_exe
    fi
    if [ -f $ck_exe1 ] ; then
        rm -f $ck_exe1
    fi



	cd $dir_client && webpack

	cd $dir_server
	if [ -f $ck_exe ] ; then
	    rm -f $ck_exe
	fi
	npm run build
	mv -f $ck_exe "${dir_dist}/ck-server1.exe"


}

function create_setup
{
	##### BEFORE NEXT STEP FIRST ENCRYPT THE CK SERVER EXE FILE
	cd $dir_electron
	npm run dist
}


selection=
until [ "$selection" = "0" ]; do
    echo ""
    echo "PROGRAM MENU"
    echo "1 - Create DIST ck-server.exe"
    echo "2 - Create Electron Setup"
    echo ""
    echo "0 - exit program"
    echo ""
    echo -n "Enter selection: "
    read selection
    echo ""
    case $selection in
        1 ) create_dist ; press_enter ;;
        2 ) create_setup ; press_enter ;;
        0 ) exit ;;
        * ) echo "Please enter 1, 2, or 0"; press_enter
    esac
done
       