## Flex 1.0.3

### Log improvements for the Flex Preprocessor and FlexPMD

- Improvements have been introduced with regard to the log files that are produced during an analysis of Flex code with the extension. Specifically, the logs produced by the **Flex Preprocessor** and **FlexPMD** have been improved in this release of the extension. You can find out more information in .

### Flex Preprocessor

- The ability to manually launch the Flex preprocessor has been removed from the extension. The preprocessor is always launched automatically.

### Changes to results after upgrading

- When comparing results of analyses run with previous releases of the Flex extension, results sometimes showed added and deleted objects even though the source code was identical. This bug (FLEX-62) was caused by the way in which the extension named **mx:script** objects. The naming algorithm was based on source code line numbers, therefore if blank lines were added above the mx:script code block between analyses (for all intents and purposes the code was still identical), the extension would generate new names for the mx:script objects, resulting in added and deleted objects in the results. This bug has now been fixed and after installing this release of the extension and the generation of a post upgrade snapshot on the same source code, results may differ.

### Bug fixing

- Bug fixing - see .

## Flex 1.0.4

### Bug fixing

- Bug fixing - see .

# What is supported with regard to Function Points and Quality/Sizing?

<table class="relative-table wrapped" style="width: 51.1245%;"><colgroup><col style="width: 15.3598%;"><col style="width: 10.7411%;"><col style="width: 73.899%;"></colgroup><tbody><tr><th>Feature</th><th>Supported?</th><th>Comments</th></tr><tr><td><p><strong>Function Points</strong><br><strong>(transactions)</strong></p></td><td style="text-align: center;"><img class="emoticon emoticon-cross" title="(error)" border="0" src="https://doc.castsoftware.com/s/en_GB/7701/595a75ab8495b571f620afe86c10e3b32d763479/_/images/icons/emoticons/error.svg" alt="(error)"></td><td><span>Indicates whether the extension provides support for OMG Function Point counting and Transaction Risk Index.</span></td></tr><tr><td><strong>Quality and Sizing</strong></td><td style="text-align: center;"><img class="emoticon emoticon-tick" title="(tick)" border="0" src="https://doc.castsoftware.com/s/en_GB/7701/595a75ab8495b571f620afe86c10e3b32d763479/_/images/icons/emoticons/check.svg" alt="(tick)"></td><td><span>Indicates whether the extension can measure size and whether a minimum set of Quality Rules exist.</span></td></tr></tbody></table>



# prereqPrerequisites to using the extension

## Using the extension with CAST AIP ≥ 8.2.1

No Java JRE/JAVA\\_HOME prerequisites are necessary: the Flex extension will use the JRE provided with CAST AIP and located in the installation folder.
## Using the extension with CAST AIP ≤ 8.2.1

| Prerequisites | Description |
| ------------- | ----------- |
| - | The extension requires a  to be installed on the machine: only  is currently supported. This is used by FlexPMD. See . |
| - | The extension requires that a  system environment variable is also present on the machine, pointing to the Java JRE installation folder: |

# CAST AIP compatibility

CAST recommends that you always install the latest release of an extension.
| Extension Version | AIP 7.3.x | AIP 8.0.x | AIP 8.1.x | AIP 8.2.x |
| ----------------- | --------- | --------- | --------- | --------- |
| 1.0.1 or higher | \![(tick)](https://doc.castsoftware.com/s/en_GB/7701/595a75ab8495b571f620afe86c10e3b32d763479/_/images/icons/emoticons/check.svg "(tick)") | \![(tick)](https://doc.castsoftware.com/s/en_GB/7701/595a75ab8495b571f620afe86c10e3b32d763479/_/images/icons/emoticons/check.svg "(tick)") | \![(tick)](https://doc.castsoftware.com/s/en_GB/7701/595a75ab8495b571f620afe86c10e3b32d763479/_/images/icons/emoticons/check.svg "(tick)") | \![(tick)](https://doc.castsoftware.com/s/en_GB/7701/595a75ab8495b571f620afe86c10e3b32d763479/_/images/icons/emoticons/check.svg "(tick)") |
| 1.0 | 7.3.0 - 7.3.2 | \![(error)](https://doc.castsoftware.com/s/en_GB/7701/595a75ab8495b571f620afe86c10e3b32d763479/_/images/icons/emoticons/error.svg "(error)") | \![(error)](https://doc.castsoftware.com/s/en_GB/7701/595a75ab8495b571f620afe86c10e3b32d763479/_/images/icons/emoticons/error.svg "(error)") | \![(error)](https://doc.castsoftware.com/s/en_GB/7701/595a75ab8495b571f620afe86c10e3b32d763479/_/images/icons/emoticons/error.svg "(error)") |

---
<table class="wrapped"><colgroup><col><col></colgroup><tbody><tr><th colspan="1">DBMS</th><th colspan="1">Supported</th></tr><tr><td>CSS2</td><td style="text-align: center;"><img class="emoticon emoticon-tick" title="(tick)" border="0" src="https://doc.castsoftware.com/s/en_GB/7701/595a75ab8495b571f620afe86c10e3b32d763479/_/images/icons/emoticons/check.svg" alt="(tick)"></td></tr><tr><td>Oracle</td><td style="text-align: center;"><img class="emoticon emoticon-tick" title="(tick)" border="0" src="https://doc.castsoftware.com/s/en_GB/7701/595a75ab8495b571f620afe86c10e3b32d763479/_/images/icons/emoticons/check.svg" alt="(tick)"></td></tr><tr><td>Microsoft SQL Server</td><td style="text-align: center;"><img class="emoticon emoticon-cross" title="(error)" border="0" src="https://doc.castsoftware.com/s/en_GB/7701/595a75ab8495b571f620afe86c10e3b32d763479/_/images/icons/emoticons/error.svg" alt="(error)"></td></tr></tbody></table>



# Supported Versions of Flex

This version of the extension provides partial support for the following Flex versions:
- **Flex 3.x**

# Licence Agreement

Metrics/Quality Rule data are generated using an external tool provided by Adobe (FlexPMD). More information about this tool is available here:
- [http://opensource.adobe.com/wiki/display/flexpmd/FlexPMD](http://opensource.adobe.com/wiki/display/flexpmd/FlexPMD)

The licence agreement for Adobe FlexPMD tool is available here:
- [http://opensource.adobe.com/wiki/display/flexpmd/License](http://opensource.adobe.com/wiki/display/flexpmd/License)

and is detailed below.
## FlexPMD License: BSD

Copyright (c) 2009, Adobe Systems, Incorporated. All rights reserved.
Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
- Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
- Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
- Neither the name of the Adobe Systems, Incorporated. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
# Documentation of Flex Quality Rules and Metrics

Documentation of all CAST Metrics and Quality Rules specific to the extension is delivered via a compiled **HTML Help file (CHM)**. Please ensure that once the CHM has been downloaded you right-click on the CHM file in Windows Explorer and choose **Properties > Unblock**. This will ensure that the CHM is readable on your own PC:
| Version | CHM |
| ------- | --- |

