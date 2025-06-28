aws lambda add-permission `
--function-name "calendar-mitra" `
--action "lambda:InvokeFunctionUrl" `
--statement-id "public-access-calendar-mitra-url" `
--principal "*" `
--function-url-auth-type "NONE" `
--output "text" `
--profile ard
