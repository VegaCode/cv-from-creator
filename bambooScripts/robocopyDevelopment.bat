robocopy dist\ C:\inetpub\wwwroot\BI_Project_Development\ /XD fonts images /S
if %errorlevel% GTR 2000 (
ECHO Process started successfully on PID: %errorlevel%
SET %errorlevel% = 0
)
EXIT /B 0
