# uBlock Origin Lite Instructions

### What is uBlock Origin Lite (uBOL)?

uBlock Origin Lite, also known as uBOL, is an experimental, permission-less content blocker designed to comply with the Manifest V3 (MV3) extension framework. It blocks ads, trackers, miners, and more immediately upon installation, using a default ruleset that corresponds to uBlock Origin's default filterset, including EasyList, EasyPrivacy, and Peter Lowe’s Ad and tracking server list.

Unlike the full version of uBlock Origin, uBlock Origin Lite has several limitations due to MV3 constraints. These include no filter list updates outside of extension updates, no crafting of custom filters, no strict-blocked pages, no per-site switches, no dynamic filtering, and no importing external lists.

### Manifest V3: How Google Chrome's Update Affects Ad-Blockers

Google Chrome's Manifest V3, rolled out in June 2024, will significantly impact ad-blockers and other browser extensions. This update limits extensions to 30,000 rules, far below the 300,000 rules many ad-blockers currently use to function effectively. The change from the webRequest API to the declarativeNetRequest API will reduce ad-blockers' flexibility and ability to update rules in real-time.

While some ad-blockers like AdGuard, uBlock Origin Lite and Ghostery have adapted to Manifest V3, users may notice decreased effectiveness in blocking ads. This move has sparked controversy, with critics arguing it gives Google more control over extensions and potentially benefits its advertising business. As a result, some users are considering alternative browsers like Firefox, which has committed to continuing support for Manifest V2.

=== TO DO ===
