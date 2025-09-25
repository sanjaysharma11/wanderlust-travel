@echo off
echo Running Tests with increased file handle limit...
echo.

REM Increase Node.js max file handles
set UV_THREADPOOL_SIZE=128

REM Run vitest with reduced parallelism to avoid file handle issues
npx vitest run --reporter=verbose --threads=false

pause