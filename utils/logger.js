import fs from "fs"
import path from "path"
import { appDir } from "../literals.js";
// Ensure the logs directory exists
const logsDir = path.join(appDir, "/logs");
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir, { recursive: true });
}

// Function to log req.body into a file
export const logRequestBody = (req,customHeading) => {
  const bodyString = customHeading + JSON.stringify(req.body) + customHeading;
  console.log(`body string ${bodyString}`);

  const now = new Date();
  const formattedDate = now.toISOString().split("T")[0]; // YYYY-MM-DD
  const time = now.toTimeString().split(" ")[0]; // HH:MM:SS

  // Use part of body as <value> or fallback
  let bodySnippet = bodyString.slice(0, 20).replace(/[\\/:*?"<>|]/g, "_"); // sanitize filename
  if (bodySnippet.length === 0) bodySnippet = "empty";
  
  const fileName = `${formattedDate}_${time}.log`.replace(/:/g, "");
  const filePath = path.join(logsDir, fileName);
  fs.writeFile(filePath, bodyString, (err) => {
    if (err) {
      console.error("Error writing log:", err);
    } else {
      console.log(`Logged request to ${filePath}`);
    }
  });
}
