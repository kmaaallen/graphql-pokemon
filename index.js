import fetch from "node-fetch";
import { getInput, setOutput, setFailed } from "@actions/core";
import { context } from "@actions/github";

try {
  // `url` input defined in action metadata file
  const url = getInput("url");
  console.log(`Tested url: ${url}!`);

  fetch(`https://api.websitecarbon.com/site?url=${url}`)
    .then((response) => response.json())
    .then((data) => setOutput("stats", data));
} catch (error) {
  setFailed(error.message);
}
