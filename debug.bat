@echo off

IF EXIST resources (
	goto copy_files
) ELSE (
	mkdir resources
	goto copy_files
)

:copy_files
xcopy /E /Y "app" "resources\app\"

goto start_debug

:start_debug
npm start

goto end

:end

pause
exit