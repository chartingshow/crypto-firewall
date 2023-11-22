## Fake Attachments in Skype and Teams Apps

In 2023 we observed the DarkGate malware campaign abusing instant messaging platforms to deliver a `VBA loader script` to victims. This script downloaded and executed a second-stage payload consisting of a AutoIT scripting containing the DarkGate malware code. It's unclear how the originating accounts of the instant messaging applications were compromised, however is hypothesized to be either through leaked credentials available through underground forums or the previous compromise of the parent organization.

DarkGate has not been very active in the past couple of years. However, this year we have observed multiple campaign deployments, as reported by Truesec and MalwareBytes. Upon closely monitoring this campaign, we observed that most of DarkGate attacks were detected in the Americas region, followed closely by those in Asia, the Middle East and Africa. 

DarkGate is classified as a commodity loader that was first documented in late 2017. Versions of DarkGate have been advertised on Russian language forum eCrime since May 2023. Since then, an increase in the number of initial entry attacks using the malware has been observed.

### Attack overview

The threat actor abused a trusted relationship between the two organizations to deceive the recipient into executing the attached VBA script. Access to the victim's Skype account allowed the actor to hijack an existing messaging thread and craft the naming convention of the files to relate to the context of the chat history.

#### Skype

<p align="center"><img src="https://github.com/chartingshow/crypto-firewall/blob/master/assets/images/fake-attachments/1.jpg" alt="fake attachments"></p>
<p align="center"><strong>DarkGate infection chain abusing Skype.</strong></p>

The victims received a message from a compromised Skype account, with the message containing a deceptive VBS script with a file name following the following format: `<filename.pdf> www.skype[.]vbs`. The spacing in the file name tricks the user into believing the file is a `.PDF` document while hiding the real format as `www.skype[.]vbs`. In this sample we studied, the recipient knew the sender as someone who belonged to a trusted external supplier.

<p align="center"><img src="https://github.com/chartingshow/crypto-firewall/blob/master/assets/images/fake-attachments/2.jpg" alt="fake attachments"></p>
<p align="center"><strong>Skype message with an embedded malicious attachment posing as a PDF file.</strong></p>

#### Teams

In another attack method, the threat was observed sending a link via a Microsoft Teams message. In this case, the organization's system allowed the victim to receive messages from external users, which resulted in them becoming a potential target of spam. While the **Skype routine masqueraded the VBS file as a PDF document**, in the Teams version of compromise, the attackers concealed a `.LNK` files inside a `.ZIP` compression file instead. Moreover, the sample that abused Teams came from an unknown, external sender.

<p align="center"><img src="https://github.com/chartingshow/crypto-firewall/blob/master/assets/images/fake-attachments/3.jpg" alt="fake attachments"></p>
<p align="center"><strong>Teams message with a malicious attachment.</strong></p>

The `.ZIP` file contains the following `.LNK` files posing as a PDF document:

```
Company_Transformations.pdf.lnk
Revamped_Organizational_Structure.pdf.lnk
Position_Guidelines.pdf.lnk
Fresh_Mission_and_Core_Values.pdf.lnk
Employees_Affected_by_Transition.pdf.lnk
```

Upon opening these fake attackements will load the DarkGate malware.

