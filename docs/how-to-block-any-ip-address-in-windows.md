## How To Block Any IP Address In Windows

You can block an IP address on a Windows PC using Windows Firewall:

1. Find the IP address you want to block from the list found here: https://github.com/Summer-CMS-Vendor-Packages/sc-block-bad-crypto-filter-lists/blob/master/src/lists/ip.txt

2. In Windows Search, type **Windows Firewall** and select **Windows Defender Firewall** to open it.

xxx

3. Select **Advanced settings**.

xxx

4. Select **Inbound Rules**, then select **New Rule**.

xxx

5. Select **Custom**, then select **Next**.

xxx

6. Select **Next** on the next two screens to proceed.

7. Under **Which remote IP addresses does this rule apply to**, choose **These IP Addresses** and select **Add**.

xxx

8. Select **This IP address or subnet**, enter the *IP address*, and select **OK**.

xxx

9. Add as many IP addresses as you like, then select **Next**.

xxx

10. Select **Block the connection**, then select **Next**.

xxx

11. Make sure all the boxes under **When Do These Rules Apply?** are checked and select **Next**.

xxx

12. Give a name and description for the blocked IP address, then select **Finish**.

xxx

13. Select **Outbound Rules**, then select **New Rule** and repeat steps 5-11.

xxx

14. To unblock the IP address, go to Inbound Rules, right-click the name of the rule you created and select **Delete**. Go to Outbound rules and do the same.

xxx

