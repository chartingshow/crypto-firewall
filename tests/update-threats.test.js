import { jest } from '@jest/globals';
import { Octokit } from "@octokit/rest";
import { updateThreatList } from "./update-threats";

jest.mock("@octokit/rest");

describe("updateThreatList", () => {
    let mockGetContent, mockCreateOrUpdateFileContents;

    beforeEach(() => {
        mockGetContent = jest.fn();
        mockCreateOrUpdateFileContents = jest.fn();

        Octokit.mockImplementation(() => ({
            repos: {
                getContent: mockGetContent,
                createOrUpdateFileContents: mockCreateOrUpdateFileContents,
            },
        }));
    });

    it("should fetch the current threat list and update it with new threats", async () => {
        const mockThreatList = [
            {
                package: "existing-package",
                versions: "1.0.0",
                type: "crypto-theft",
                severity: "high",
                description: "Existing threat",
            },
        ];

        const mockSha = "mockSha123";
        mockGetContent.mockResolvedValue({
            data: {
                content: Buffer.from(JSON.stringify(mockThreatList)).toString("base64"),
                sha: mockSha,
            },
        });

        await updateThreatList();

        expect(mockGetContent).toHaveBeenCalledWith({
            owner: "chartingshow",
            repo: "crypto-firewall",
            path: "threat-list.json",
        });

        expect(mockCreateOrUpdateFileContents).toHaveBeenCalledWith({
            owner: "chartingshow",
            repo: "crypto-firewall",
            path: "threat-list.json",
            message: expect.stringContaining("Update threat list -"),
            content: expect.any(String),
            sha: mockSha,
        });

        const updatedContent = JSON.parse(
            Buffer.from(
                mockCreateOrUpdateFileContents.mock.calls[0][0].content,
                "base64"
            ).toString()
        );

        expect(updatedContent).toEqual([
            ...mockThreatList,
            {
                package: "new-malicious-package",
                versions: "*",
                type: "crypto-theft",
                severity: "critical",
                description: "Discovered in April 2025 campaign",
            },
        ]);
    });
});
