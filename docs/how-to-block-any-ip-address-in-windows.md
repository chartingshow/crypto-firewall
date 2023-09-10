## How To Block Any IP Address In Windows

You can block an IP address on a Windows PC using Windows Firewall:

1. Find the IP address you want to block from the list found here: https://github.com/Summer-CMS-Vendor-Packages/sc-block-bad-crypto-filter-lists/blob/master/src/lists/ip.txt

2. In Windows Search, type **Windows Firewall** and select **Windows Defender Firewall** to open it.

<p align="center"><img src="https://github.com/Summer-CMS-Vendor-Packages/sc-block-bad-crypto-filter-lists/blob/master/assets/images/windows/1.jpg" /></p>

3. Select **Advanced settings**.

<p align="center"><img src="https://github.com/Summer-CMS-Vendor-Packages/sc-block-bad-crypto-filter-lists/blob/master/assets/images/windows/2.jpg" /></p>

4. Select **Inbound Rules**, then select **New Rule**.

<p align="center"><img src="https://github.com/Summer-CMS-Vendor-Packages/sc-block-bad-crypto-filter-lists/blob/master/assets/images/windows/3.jpg" /></p>

5. Select **Custom**, then select **Next**.

<p align="center"><img src="https://github.com/Summer-CMS-Vendor-Packages/sc-block-bad-crypto-filter-lists/blob/master/assets/images/windows/4.jpg" /></p>

6. Select **Next** on the next two screens to proceed.

7. Under **Which remote IP addresses does this rule apply to**, choose **These IP Addresses** and select **Add**.

<p align="center"><img src="https://github.com/Summer-CMS-Vendor-Packages/sc-block-bad-crypto-filter-lists/blob/master/assets/images/windows/5.jpg" /></p>

8. Select **This IP address or subnet**, enter the *IP address*, and select **OK**.

<p align="center"><img src="https://github.com/Summer-CMS-Vendor-Packages/sc-block-bad-crypto-filter-lists/blob/master/assets/images/windows/6.jpg" /></p>

9. Add as many IP addresses as you like, then select **Next**.

<p align="center"><img src="https://github.com/Summer-CMS-Vendor-Packages/sc-block-bad-crypto-filter-lists/blob/master/assets/images/windows/7.jpg" /></p>

10. Select **Block the connection**, then select **Next**.

<p align="center"><img src="https://github.com/Summer-CMS-Vendor-Packages/sc-block-bad-crypto-filter-lists/blob/master/assets/images/windows/8.jpg" /></p>

11. Make sure all the boxes under **When Do These Rules Apply?** are checked and select **Next**.

<p align="center"><img src="https://github.com/Summer-CMS-Vendor-Packages/sc-block-bad-crypto-filter-lists/blob/master/assets/images/windows/9.jpg" /></p>

12. Give a name and description for the blocked IP address, then select **Finish**.

<p align="center"><img src="https://github.com/Summer-CMS-Vendor-Packages/sc-block-bad-crypto-filter-lists/blob/master/assets/images/windows/10.jpg" /></p>

13. Select **Outbound Rules**, then select **New Rule** and repeat steps 5-11.

<p align="center"><img src="https://github.com/Summer-CMS-Vendor-Packages/sc-block-bad-crypto-filter-lists/blob/master/assets/images/windows/11.jpg" /></p>

14. To unblock the IP address, go to Inbound Rules, right-click the name of the rule you created and select **Delete**. Go to Outbound rules and do the same.

<p align="center"><img src="https://github.com/Summer-CMS-Vendor-Packages/sc-block-bad-crypto-filter-lists/blob/master/assets/images/windows/12.jpg" /></p>
