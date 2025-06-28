$CORS = '{\"AllowOrigins\":[\"*\"],\"AllowHeaders\":[\"*\"],\"AllowMethods\":[\"*\"],\"ExposeHeaders\":[\"*\"]}'

aws lambda create-function-url-config `
--function-name "calendar-mitra" `
--auth-type "NONE" `
--cors "$CORS" `
--output "text" `
--profile ard
