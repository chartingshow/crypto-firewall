import { Octokit } from "@octokit/rest";

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

async function updateThreatList() {
  const { data } = await octokit.repos.getContent({
    owner: "chartingshow",
    repo: "crypto-firewall",
    path: "threat-list.json"
  });
  
  const currentThreats = JSON.parse(Buffer.from(data.content, 'base64').toString());
  
  // Add new threats from security reports
  const newThreats = [...currentThreats, {
    package: "new-malicious-package",
    versions: "*",
    type: "crypto-theft",
    severity: "critical",
    description: "Discovered in April 2025 campaign"
  }];
  
  await octokit.repos.createOrUpdateFileContents({
    owner: "chartingshow",
    repo: "crypto-firewall",
    path: "threat-list.json",
    message: "Update threat list - " + new Date().toISOString(),
    content: Buffer.from(JSON.stringify(newThreats, null, 2)).toString('base64'),
    sha: data.sha
  });
}
