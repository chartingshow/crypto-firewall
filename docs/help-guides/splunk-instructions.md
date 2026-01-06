# 🔒 Installing Splunk with Crypto Firewall Instructions Guide

This guide explains how to install **Splunk Enterprise** and then add the **Crypto Firewall** blocklist to Splunk using lookup tables. It is written for technical and semi-technical users and follows the same instructional style as the Crypto Firewall Brave browser guides.

## What You Will Achieve

By the end of this guide, you will:

* Have Splunk Enterprise installed and running
* Understand the Splunk web interface
* Add the Crypto Firewall CSV as a Splunk lookup
* Use the lookup to enrich searches, dashboards, or alerts

## Prerequisites

Before you begin, ensure:

* You have administrator access to the system
* You are running Windows, Linux, or macOS
* You have at least 4 GB RAM (8 GB recommended)
* You have a modern web browser
* You can download files from GitHub

## Part 1: Installing Splunk Enterprise

### Step 1: Download Splunk

1. Go to the official Splunk website:

   [https://www.splunk.com/](https://www.splunk.com/)

2. Select **Products → Splunk Enterprise**

3. Choose the correct installer for your operating system

4. Create a free Splunk account if prompted

Splunk Enterprise is free for local use up to 500 MB of data per day.

### Step 2: Install Splunk

#### Windows

1. Run the downloaded `.msi` installer
2. Accept the licence agreement
3. Choose the default installation path (recommended)
4. Set an **Administrator username and password**
5. Complete the installation

#### Linux

Example using `.deb` (Ubuntu / Debian):

```
sudo dpkg -i splunk-<version>.deb
sudo /opt/splunk/bin/splunk start --accept-license
```

Example using `.rpm` (RHEL / CentOS):

```
sudo rpm -i splunk-<version>.rpm
sudo /opt/splunk/bin/splunk start --accept-license
```

#### macOS

1. Open the `.dmg` file
2. Drag **Splunk** into the Applications folder
3. Start Splunk and accept the licence

### Step 3: Access the Splunk Web Interface

1. Open your browser
2. Go to:

```
http://localhost:8000
```

3. Log in using the administrator credentials you created

You should now see the Splunk home dashboard.

## Part 2: Understanding Splunk Lookups (Required Knowledge)

Splunk **lookups** allow you to enrich events with external data such as:

* IP reputation lists
* Domain blocklists
* Threat intelligence feeds

Official documentation:

* [https://docs.splunk.com/Documentation/Splunk/latest/Knowledge/Aboutlookupsandfieldactions](https://docs.splunk.com/Documentation/Splunk/latest/Knowledge/Aboutlookupsandfieldactions)

The Crypto Firewall integrates with Splunk using this lookup mechanism.

## Part 3: Adding the Crypto Firewall to Splunk

### What Is the Crypto Firewall Lookup?

The Crypto Firewall for Splunk is a **CSV-based blocklist** containing known malicious cryptocurrency-related IP addresses.

**Lookup file:**

```
https://raw.githubusercontent.com/chartingshow/crypto-firewall/refs/heads/master/src/blacklists/splunk.csv
```

**CSV format:**

| ip      | message                                         | updated              |
| ------- | ----------------------------------------------- | -------------------- |
| 1.2.3.4 | Crypto Firewall Detected a Malicious IP Address | 2026-01-05T12:03:18Z |

## Method 1: Install via Splunk Web (Recommended for Most Users)

### Step 1: Download the CSV

1. Open the raw CSV link in your browser
2. Right-click and choose **Save As**
3. Save the file as:

```
splunk.csv
```

### Step 2: Upload the Lookup in Splunk

1. In Splunk Web, go to:

```
Settings → Lookups → Lookup table files
```

2. Click **Add new**
3. Select the `splunk.csv` file
4. Set **Destination app** to `Search` (or your own app)
5. Click **Save**

### Step 3: Define the Lookup

1. Go to:

```
Settings → Lookups → Lookup definitions
```

2. Click **Add new**
3. Configure:

* **Lookup name:** crypto_firewall
* **Lookup file:** splunk.csv
* **Type:** File-based

4. Save the definition

The Crypto Firewall lookup is now active.

## Method 2: Install via Filesystem (Advanced Users)

### Step 1: Download the CSV

```
wget https://raw.githubusercontent.com/chartingshow/crypto-firewall/refs/heads/master/src/blacklists/splunk.csv
```

### Step 2: Copy to Splunk Lookups Directory

System-wide:

```
$SPLUNK_HOME/etc/system/lookups/
```

App-specific (recommended):

```
$SPLUNK_HOME/etc/apps/search/lookups/
```

Restart Splunk after copying the file.

## Part 4: Using the Crypto Firewall Lookup

### Example: Enrich Events by IP Address

If your events contain an IP field (for example `src_ip`):

```
index=network_logs
| lookup crypto_firewall ip AS src_ip OUTPUT message updated
| where isnotnull(message)
```

This will return only events matching known malicious crypto-related IPs.

### Example: Add to Dashboards or Alerts

* Use the lookup in **saved searches**
* Trigger alerts when a match is found
* Visualise malicious IP activity over time

## Optional: Automatic Updates (Advanced)

Splunk supports automatic lookup updates using apps and scripted inputs.

A future **Crypto Firewall Splunk App** (based on the malware-filter add-on model) will:

* Automatically download the latest CSV
* Update the lookup on a schedule
* Remove manual maintenance

Reference add-on:

[https://splunkbase.splunk.com/app/0123456789](https://splunkbase.splunk.com/app/0123456789)

## Troubleshooting

**Lookup not returning results**

* Ensure the IP field names match
* Confirm the lookup definition exists
* Check CSV format and headers

**Splunk not accessible**

* Verify Splunk is running
* Check port 8000 is open

## References

* Splunk Documentation: [https://docs.splunk.com/](https://docs.splunk.com/)
* Lookup Documentation: [https://docs.splunk.com/Documentation/Splunk/latest/Knowledge/Aboutlookupsandfieldactions](https://docs.splunk.com/Documentation/Splunk/latest/Knowledge/Aboutlookupsandfieldactions)
* Splunk Website: [https://www.splunk.com/](https://www.splunk.com/)
* Crypto Firewall Project: [https://github.com/chartingshow/crypto-firewall](https://github.com/chartingshow/crypto-firewall)

---

If you encounter issues, check your system logs, Snort output, and ensure that your network interface is in promiscuous mode.

⭐ If you found this helpful, consider starring the [Crypto Firewall GitHub repo](https://github.com/chartingshow/crypto-firewall) and sharing this guide!
