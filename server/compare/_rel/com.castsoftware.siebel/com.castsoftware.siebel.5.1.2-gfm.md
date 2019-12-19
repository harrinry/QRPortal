## Siebel 5.1.2

- If the **SIEBEL\\_VANILLA\\_SCHEMA **platform variable is not defined for the **Project** configuration in the CAST Management Studio, then a warning is displayed in the analysis log, which will also block the analysis. See  for more information.
- Bug fixing. See .

## Siebel 5.1.1

Bug fixing only. See .
## Siebel 5.1.0

- The new version provides:

*   Offline extraction: In the CAST Delivery Manager Tool, a new functionality has been added to allow the reuse of an existing Siebel extraction.
*   Many manual steps for the post analysis configuration have been removed and are now automated: in the content enrichment, except the SQL tool "Siebel Vanilla Import", all other tools that were previously required are now hidden in the SDK.
*   The violations originating from Vanilla are now excluded and not considered in the Project results: if the violations are detected only in the Vanilla results, they will not be reported in the Project results.
*   For application on-boarding, when creating the package for a new extraction on Oracle or DB2 server, it is now possible to select the used applications in the package wizard. This will mean that the AIA will not need to enter the name of customized applications in various different locations
Note that this release is no longer available to download. However, all improvements included in this release are available in **Siebel 5.1.1**.
## Function Point, Quality and Sizing support

This extension provides the following support:
- **Function Points (transactions)**: a green tick indicates that OMG Function Point counting and Transaction Risk Index are supported
- **Quality and Sizing**: a green tick indicates that CAST can measure size and that a minimum set of Quality Rules exist

<table class="wrapped"><colgroup><col><col></colgroup><tbody><tr><th colspan="1">Function Points<br>(transactions)</th><th colspan="1">Quality and Sizing</th></tr><tr><td style="text-align: center;" colspan="1"><ac:emoticon ac:name="cross"></ac:emoticon></td><td style="text-align: center;" colspan="1"><img class="emoticon emoticon-tick" title="(tick)" border="0" src="https://doc.castsoftware.com/s/en_GB/7702/fee96fdad3b600d4843bc89ccaf16ec6d71d5b89/_/images/icons/emoticons/check.svg" alt="(tick)"></td></tr></tbody></table>



# CAST AIP compatibility

<table class="wrapped"><colgroup><col><col><col></colgroup><tbody><tr><th colspan="1">CAST AIP release</th><th colspan="1">Siebel<span class="_Tgc">&nbsp;</span>5.1.1</th><th colspan="1">Notes</th></tr><tr><td colspan="1">8.3.x</td><td style="text-align: center;" colspan="1"><img class="emoticon emoticon-tick" title="(tick)" border="0" src="https://doc.castsoftware.com/s/en_GB/7702/fee96fdad3b600d4843bc89ccaf16ec6d71d5b89/_/images/icons/emoticons/check.svg" alt="(tick)"></td><td rowspan="2"><span>This combination is "supported by reference" - i.e. they have been confirmed as working by end users.</span></td></tr><tr><td colspan="1">8.2.x</td><td style="text-align: center;" colspan="1"><img class="emoticon emoticon-tick" title="(tick)" border="0" src="https://doc.castsoftware.com/s/en_GB/7702/fee96fdad3b600d4843bc89ccaf16ec6d71d5b89/_/images/icons/emoticons/check.svg" alt="(tick)"></td></tr><tr><td colspan="1">8.1.1</td><td style="text-align: center;" colspan="1"><img class="emoticon emoticon-tick" title="(tick)" border="0" src="https://doc.castsoftware.com/s/en_GB/7702/fee96fdad3b600d4843bc89ccaf16ec6d71d5b89/_/images/icons/emoticons/check.svg" alt="(tick)"></td><td rowspan="11">These releases of CAST AIP are now end of life and are no longer officially supported.</td></tr><tr><td colspan="1">8.1.0</td><td style="text-align: center;" colspan="1"><img class="emoticon emoticon-cross" title="(error)" border="0" src="https://doc.castsoftware.com/s/en_GB/7702/fee96fdad3b600d4843bc89ccaf16ec6d71d5b89/_/images/icons/emoticons/error.svg" alt="(error)"></td></tr><tr><td colspan="1">8.0.3</td><td style="text-align: center;" colspan="1"><img class="emoticon emoticon-tick" title="(tick)" border="0" src="https://doc.castsoftware.com/s/en_GB/7702/fee96fdad3b600d4843bc89ccaf16ec6d71d5b89/_/images/icons/emoticons/check.svg" alt="(tick)"></td></tr><tr><td colspan="1">8.0.2</td><td style="text-align: center;" colspan="1"><img class="emoticon emoticon-tick" title="(tick)" border="0" src="https://doc.castsoftware.com/s/en_GB/7702/fee96fdad3b600d4843bc89ccaf16ec6d71d5b89/_/images/icons/emoticons/check.svg" alt="(tick)"></td></tr><tr><td colspan="1">8.0.1</td><td style="text-align: center;" colspan="1"><img class="emoticon emoticon-tick" title="(tick)" border="0" src="https://doc.castsoftware.com/s/en_GB/7702/fee96fdad3b600d4843bc89ccaf16ec6d71d5b89/_/images/icons/emoticons/check.svg" alt="(tick)"></td></tr><tr><td colspan="1">8.0.0</td><td style="text-align: center;" colspan="1"><img class="emoticon emoticon-cross" title="(error)" border="0" src="https://doc.castsoftware.com/s/en_GB/7702/fee96fdad3b600d4843bc89ccaf16ec6d71d5b89/_/images/icons/emoticons/error.svg" alt="(error)"></td></tr><tr><td colspan="1">7.3.10</td><td style="text-align: center;" colspan="1"><img class="emoticon emoticon-tick" title="(tick)" border="0" src="https://doc.castsoftware.com/s/en_GB/7702/fee96fdad3b600d4843bc89ccaf16ec6d71d5b89/_/images/icons/emoticons/check.svg" alt="(tick)"></td></tr><tr><td colspan="1">7.3.9</td><td style="text-align: center;" colspan="1"><img class="emoticon emoticon-tick" title="(tick)" border="0" src="https://doc.castsoftware.com/s/en_GB/7702/fee96fdad3b600d4843bc89ccaf16ec6d71d5b89/_/images/icons/emoticons/check.svg" alt="(tick)"></td></tr><tr><td colspan="1">7.3.8</td><td style="text-align: center;" colspan="1"><img class="emoticon emoticon-tick" title="(tick)" border="0" src="https://doc.castsoftware.com/s/en_GB/7702/fee96fdad3b600d4843bc89ccaf16ec6d71d5b89/_/images/icons/emoticons/check.svg" alt="(tick)"></td></tr><tr><td colspan="1">7.3.7</td><td style="text-align: center;" colspan="1"><img class="emoticon emoticon-cross" title="(error)" border="0" src="https://doc.castsoftware.com/s/en_GB/7702/fee96fdad3b600d4843bc89ccaf16ec6d71d5b89/_/images/icons/emoticons/error.svg" alt="(error)"></td></tr><tr><td colspan="1">7.3.6</td><td style="text-align: center;" colspan="1"><img class="emoticon emoticon-cross" title="(error)" border="0" src="https://doc.castsoftware.com/s/en_GB/7702/fee96fdad3b600d4843bc89ccaf16ec6d71d5b89/_/images/icons/emoticons/error.svg" alt="(error)"></td></tr></tbody></table>



# Supported DBMS servers

## For CAST schemas

<table class="wrapped"><colgroup><col><col></colgroup><tbody><tr><th colspan="1">DBMS</th><th colspan="1">Supported</th></tr><tr><td style="text-align: left;" colspan="1">CSS</td><td style="text-align: center;" colspan="1"><img class="emoticon emoticon-tick" title="(tick)" border="0" src="https://doc.castsoftware.com/s/en_GB/7702/fee96fdad3b600d4843bc89ccaf16ec6d71d5b89/_/images/icons/emoticons/check.svg" alt="(tick)"></td></tr><tr><td style="text-align: left;" colspan="1">Oracle</td><td style="text-align: center;" colspan="1"><img class="emoticon emoticon-cross" title="(error)" border="0" src="https://doc.castsoftware.com/s/en_GB/7702/fee96fdad3b600d4843bc89ccaf16ec6d71d5b89/_/images/icons/emoticons/error.svg" alt="(error)"></td></tr><tr><td style="text-align: left;" colspan="1">Microsoft SQL Server</td><td style="text-align: center;" colspan="1"><img class="emoticon emoticon-cross" title="(error)" border="0" src="https://doc.castsoftware.com/s/en_GB/7702/fee96fdad3b600d4843bc89ccaf16ec6d71d5b89/_/images/icons/emoticons/error.svg" alt="(error)"></td></tr></tbody></table>



## For Siebel applications

The extension supports Siebel applications installed on the following DBMS:
<table class="wrapped"><colgroup><col><col></colgroup><tbody><tr><th><div class="tablesorter-header-inner">DBMS</div></th><th><div class="tablesorter-header-inner">Supported</div></th></tr><tr><td>Oracle Server</td><td style="text-align: center;"><img class="emoticon emoticon-tick" title="(tick)" border="0" src="https://doc.castsoftware.com/s/en_GB/7702/fee96fdad3b600d4843bc89ccaf16ec6d71d5b89/_/images/icons/emoticons/check.svg" alt="(tick)"></td></tr><tr><td colspan="1">DB2 UDB</td><td style="text-align: center;" colspan="1"><img class="emoticon emoticon-tick" title="(tick)" border="0" src="https://doc.castsoftware.com/s/en_GB/7702/fee96fdad3b600d4843bc89ccaf16ec6d71d5b89/_/images/icons/emoticons/check.svg" alt="(tick)"></td></tr></tbody></table>



# Supported Versions of Siebel

This extension provides support for the following Siebel versions:
<table class="wrapped relative-table" style="width: 42.5123%;"><colgroup><col style="width: 33.1675%;"><col style="width: 12.2739%;"><col style="width: 54.5586%;"></colgroup><tbody><tr><th>Siebel version</th><th>Supported</th><th colspan="1">Comments</th></tr><tr><td>7.5</td><td style="text-align: center;"><img class="emoticon emoticon-tick" title="(tick)" border="0" src="https://doc.castsoftware.com/s/en_GB/7702/fee96fdad3b600d4843bc89ccaf16ec6d71d5b89/_/images/icons/emoticons/check.svg" alt="(tick)"></td><td colspan="1"><br></td></tr><tr><td>7.7</td><td style="text-align: center;"><img class="emoticon emoticon-tick" title="(tick)" border="0" src="https://doc.castsoftware.com/s/en_GB/7702/fee96fdad3b600d4843bc89ccaf16ec6d71d5b89/_/images/icons/emoticons/check.svg" alt="(tick)"></td><td colspan="1"><br></td></tr><tr><td colspan="1">7.8</td><td style="text-align: center;" colspan="1"><img class="emoticon emoticon-tick" title="(tick)" border="0" src="https://doc.castsoftware.com/s/en_GB/7702/fee96fdad3b600d4843bc89ccaf16ec6d71d5b89/_/images/icons/emoticons/check.svg" alt="(tick)"></td><td colspan="1"><br></td></tr><tr><td colspan="1">8.0</td><td style="text-align: center;" colspan="1"><img class="emoticon emoticon-tick" title="(tick)" border="0" src="https://doc.castsoftware.com/s/en_GB/7702/fee96fdad3b600d4843bc89ccaf16ec6d71d5b89/_/images/icons/emoticons/check.svg" alt="(tick)"></td><td colspan="1"><br></td></tr><tr><td colspan="1">8.1</td><td style="text-align: center;" colspan="1"><img class="emoticon emoticon-tick" title="(tick)" border="0" src="https://doc.castsoftware.com/s/en_GB/7702/fee96fdad3b600d4843bc89ccaf16ec6d71d5b89/_/images/icons/emoticons/check.svg" alt="(tick)"></td><td colspan="1"><br></td></tr><tr><td colspan="1">15.0 (8.1.1.15/8.2.2.15 IP2015)</td><td style="text-align: center;" colspan="1"><img class="emoticon emoticon-tick" title="(tick)" border="0" src="https://doc.castsoftware.com/s/en_GB/7702/fee96fdad3b600d4843bc89ccaf16ec6d71d5b89/_/images/icons/emoticons/check.svg" alt="(tick)"></td><td colspan="1"><br></td></tr><tr><td colspan="1">15.1 (8.1.1.15/8.2.2.15 PS1)</td><td style="text-align: center;" colspan="1"><img class="emoticon emoticon-tick" title="(tick)" border="0" src="https://doc.castsoftware.com/s/en_GB/7702/fee96fdad3b600d4843bc89ccaf16ec6d71d5b89/_/images/icons/emoticons/check.svg" alt="(tick)"></td><td colspan="1"><br></td></tr><tr><td colspan="1">15.2 (8.1.1.15/8.2.2.15 PS2)</td><td style="text-align: center;" colspan="1"><img class="emoticon emoticon-tick" title="(tick)" border="0" src="https://doc.castsoftware.com/s/en_GB/7702/fee96fdad3b600d4843bc89ccaf16ec6d71d5b89/_/images/icons/emoticons/check.svg" alt="(tick)"></td><td colspan="1"><br></td></tr><tr><td colspan="1">15.3 (8.1.1.15/8.2.2.15 PS3)</td><td style="text-align: center;" colspan="1"><img class="emoticon emoticon-tick" title="(tick)" border="0" src="https://doc.castsoftware.com/s/en_GB/7702/fee96fdad3b600d4843bc89ccaf16ec6d71d5b89/_/images/icons/emoticons/check.svg" alt="(tick)"></td><td colspan="1"><br></td></tr><tr><td colspan="1">15.4 (8.1.1.15/8.2.2.15 PS4)</td><td style="text-align: center;" colspan="1"><img class="emoticon emoticon-tick" title="(tick)" border="0" src="https://doc.castsoftware.com/s/en_GB/7702/fee96fdad3b600d4843bc89ccaf16ec6d71d5b89/_/images/icons/emoticons/check.svg" alt="(tick)"></td><td colspan="1"><br></td></tr><tr><td colspan="1">15.x (where x &gt; 4)</td><td style="text-align: center;" colspan="1"><img class="emoticon emoticon-tick" title="(tick)" border="0" src="https://doc.castsoftware.com/s/en_GB/7702/fee96fdad3b600d4843bc89ccaf16ec6d71d5b89/_/images/icons/emoticons/check.svg" alt="(tick)"></td><td rowspan="2">New functionalities or syntax introduced in these versions are NOT supported.</td></tr><tr><td colspan="1">16.x</td><td style="text-align: center;" colspan="1"><img class="emoticon emoticon-tick" title="(tick)" border="0" src="https://doc.castsoftware.com/s/en_GB/7702/fee96fdad3b600d4843bc89ccaf16ec6d71d5b89/_/images/icons/emoticons/check.svg" alt="(tick)"></td></tr></tbody></table>



# Prerequisites to using the Siebel extension

## Vanilla repository availability

Please ensure that the Vanilla repository is online and available before starting.
Note that the Vanilla repository must have the same Siebel version as the Project repository, and same series of Siebel patches.
## Hardware/Software

### On Siebel server hosting the Oracle or DB2 repository (for Vanilla and Project)

- The server can be any OS.

*   However Unix/Linux OS may require some .ksh script if you want to run the extractor on the server machine itself.
- The version of the Oracle / DB2 server must match a version supported by the JDBC driver embedded in the CASTDBExtractor. This is different and wider than the supported versions for a participating database. Note that versions supported by CAST AIP for a participating databases can be found in the official CAST AIP documentation (e.g. for CAST AIP 8.1.x: [http://doc.castsoftware.com/display/DOC81/Oracle+Server](http://doc.castsoftware.com/display/DOC81/Oracle+Server) and [http://doc.castsoftware.com/display/DOC81/IBM+DB2](http://doc.castsoftware.com/display/DOC81/IBM+DB2)).
- Make sure that the Siebel schema statistics are up-to-date (if not up-to-date, some queries in the extractor may not finish in reasonable times (especially the first one)):

*   If not up-to-date for Oracle, update it with the following SQL statement (requires some privileges : GRANT execute ON dbms\\_stats TO XXX)
sqlDJango 'MY\\_SIEBEL\\_SCHEMA', estimate\\_percent => dbms\\_stats.auto\\_sample\\_size, method\\_opt => 'for all columns size auto', cascade => true); \\]\\]>
- *   If not up-to-date for DB2, check if DB2 automatic runstats and DB2 real time statistics are enabled. If not, ask the DBA to run "**db2 reorgchk update statistics on table all**" or the like.
- Identify the **USER that will be used for extraction** (in the CAST Delivery Manager Tool):

*   On Oracle, the required privileges for the USER used to perform the extraction are: **GRANT SELECT** on all **S\\_\\*\\*\\*\\* tables**.
*   On DB2 UDB, the minimum roles and permissions for an extract is as follow : READ access on all **S\\_\\*\\*\\*\\* tables**, **connect to database** permission.
For the list of **S\\_\\*\\*\\* tables**, see
### On Workstation used for extraction (where the CAST Delivery Manager Tool is deployed)

- Windows or Linux (Unix/Linux OS may require some additional .ksh scripts).
- **JRE 1.7** (ideally 64 bit version to allow for a JVM large heap size).
- Minimum **1.2 GB RAM** memory free, more if available.
- **DMT/extractor location**:

*   Ideally, install the DMT/extractor on the RDBMS server (Oracle or DB2) itself.
*   Alternatively on a machine with:
*   very good **bandwidth** (1 GB/s) to the Oracle / DB2 server (some remote extractions fail due to poor VPN bandwidth)
*   **connectivity** to the Oracle / DB2 server (required ports open)
- **4 GB free disk space **(for temporary files before compression)
- **250 MB free disk space** (to store the two extraction archives) included in above requirement.

### On Workstation used for analysis

- Windows (uses AIP). See [Supported Platforms](http://doc.castsoftware.com/display/DOC81/Supported+Platforms) for supported OS versions
- **2 GB RAM** memory free (for analysis/snapshot)
- Connectivity to the Oracle or CSS server hosting the CAST schemas (port open)
- If CAST schemas are on Oracle and Oracle client must be installed (see [Supported Platforms](http://doc.castsoftware.com/display/DOC81/Supported+Platforms))
- 5-10 GB free disk space (to store the source code, once expanded by the **Deploy** phase ("Set as current version" action in the CAST Management Studio))
- Disable **anti-virus** software. Check that **no anti-virus is running **on the workstation or disable real-time scan for the work folders (delivery & deploy folders + temp folders). Failure to do so will multiply the injection runtime ("Set as current version" action in the CAST Management Studio

### On CSS server used for analysis

#### Disk space requirements

Disk space depends on the Siebel version implemented by the customer:
| Siebel version | Vanilla _LOCAL | Project _LOCAL | Project _CENTRAL | _MNGT | UNDO and TEMP | Source Code | Total consumed | Total required at peak time |
| -------------- | -------------- | -------------- | ---------------- | ----- | ------------- | ----------- | -------------- | --------------------------- |
| - | 5 GB | 7 GB | 2 GB | 256 MB | 23 GB + 10 GB (maybe due to other analyses) | 5.98 GB | 49 GB | 100 GB |
| - | 2.5 GB | 3 GB | 800 MB | 256 MB | TBD or see above. | 5.21 GB | 30-35 GB | 50 GB |

#### Disk speed requirements

Siebel analysis incurs heavy disk usage. **Disk I/O throughput** (not necessarily speed) is possibly the most important factor to determine the analysis time. So far we have tested three environments with the tool **iometer**, following [this how-to](http://greg.porter.name/wiki/HowTo:iometer). The rough results are these:
- DELL laptop, 1 disk 7500rpm. Iometer reports around 3 MB/s. Analysis times +20 hours.
- HP desktop, 2 disks 10000rpm. Iometer reports around 5 MB/s in one of the disks. Analysis time 10 hours (sources in one disk, oracle datafiles in another disk).
- DELL workstation, 4 disks 10000rpm in a RAID5 configuration. Iometer reports around 150MB/s. Analysis time 4 hours (since this is a very performant disk configuration, CPU time is possibly part of the bottleneck. This means it would be hard to further reduce analysis time, unless switching to other costlier technology, like SSD drive.).

# tablesTables required to grant access to the Siebel repository

The following database tables are accessed during the Siebel extraction process: .
# Documentation of Siebel Quality Rules and Metrics

Documentation of all CAST Metrics and Quality Rules specific to the extension is delivered via a **compiled HTML Help file (CHM)**. Please ensure that once the CHM has been downloaded you right-click on the CHM file in Windows Explorer and choose** Properties > Unblock**. This will ensure that the CHM is readable on your own PC.
| Version | CHM |
| ------- | --- |
| 5.1.0 | - |

# Know issues in this release

The following section lists all Known Issues in this release of the extension
## Unable to establish a connection while performing the database repository extraction

### Situation

When attempting to extract the Siebel database repositories (Vanilla or Project), when using:
- The CAST Delivery Manager Tool (DMT) **launched via a JNLP file** (i.e. when the DMT has been downloaded from the CAST AIC Portal)
- The CAST Delivery Manager Tool (DMT) **launched via the CAST Management Studio**
- The standalone [CAST Database Extractor](http://doc.castsoftware.com/display/DOCCOM/CAST+Database+Extractor) using the  batch file

Note that the exact situation in which the issue occurs is currently unknown.
### Symptoms

The following error is logged, stopping the extraction process:
:1521: => The Network Adapter could not establish the connection\\]\\]>
### Workaround

The workaround to this issue involves manually adding a specific Java runtime option (**\\-Djava.net.preferIPv4Stack=true**) and then attempting to rerun the database extraction:
#### CAST Delivery Manager Tool (DMT) launched via a JNLP file

If you are using the CAST Delivery Manager Tool (DMT) launched via a JNLP file (i.e. when the DMT has been downloaded from the CAST AIC Portal) to perform the database extraction, then **it is not possible to use this workaround**. If you are confronted by this issue, please consider running the database extraction either:
- using the DMT launched via the CAST Management Studio (and applying the workround listed below)
- or using the standalone CAST Database Extractor with the  batch file (and applying the workround listed below)

#### CAST Delivery Manager Tool (DMT) launched via the CAST Management Studio

If you are using the CAST Delivery Manager Tool (DMT) launched via the CAST Management Studio to perform the database extraction, you must add the **specific Java option** to the shortcut that runs the CAST Management Studio executable on your workstation:
- Add the option to the **Target field**, immediately after **CAST-MS.exe"** : **\\-Djava.net.preferIPv4Stack=true**

Note that you will need to close the CAST Management Studio and re-open it if it was running when you made the change to the shortcut.
#### Standalone CAST Database Extractor using the Siebel-Extract-CLI.bat batch file

