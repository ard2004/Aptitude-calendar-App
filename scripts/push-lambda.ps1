# Set working directory
Set-Location "D:\codebox\DevSpace\Reusable Calendar Mitra\scripts"

Write-Output "Deleting existing artifact..."
Remove-Item -Path "calendar-mitra.zip" -Force -ErrorAction SilentlyContinue

# Optional: Build step for Node.js project (uncomment if needed)
Write-Output "Building project..."
# npm install --production
# npm run build

Write-Output "Packaging project..."
Compress-Archive -Path "../*" -DestinationPath "D:\codebox\DevSpace\Reusable Calendar Mitra\artifacts\calendar-mitra.zip" -Force

Write-Output "Deploying package to AWS Lambda..."
aws lambda update-function-code `
    --function-name "calendar-mitra" `
    --zip-file "fileb://D:\codebox\DevSpace\Reusable Calendar Mitra\artifacts\calendar-mitra.zip" `
    --output "json" `
    --profile ard

Write-Output "Deployment complete."
