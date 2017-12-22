!macro customInstall
StrCpy $appExe "$INSTDIR\${APP_EXECUTABLE_FILENAME}"
WriteRegStr HKCU "Software\Microsoft\Windows NT\CurrentVersion\AppCompatFlags\Layers" "$appExe" "RUNASADMIN"
!macroend


!macro customUnInstall
DeleteRegValue HKCU "Software\Microsoft\Windows NT\CurrentVersion\AppCompatFlags\Layers" "$INSTDIR\${APP_EXECUTABLE_FILENAME}"
!macroend