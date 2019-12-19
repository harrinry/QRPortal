## PHP 1.1.1

- Bug fixing only - see .

## PHP 1.1.2

- Bug fixing only - see .

## PHP 1.1.3

- Bug fixing - see .
- Discovery of the following known issues which will be fixed in a future release:

*   Call and include links might get created to and from the same file depending on the syntax used. This is by design and will be changed in a future release. For example:
- *   The analysis log may contain warnings such as "Unable to find the regexp for the link" for files. These can be ignored and will be fixed in a future release.

# Function Point, Quality and Sizing support

This extension provides the following support:
- **Function Points (transactions)**: a green tick indicates that OMG Function Point counting and Transaction Risk Index are supported
- **Quality and Sizing**: a green tick indicates that CAST can measure size and that a minimum set of Quality Rules exist

| Function Points (transactions) | Quality and Sizing |
| ------------------------------ | ------------------ |
| - | - |

# CAST AIP compatibility

CAST recommends that you always install the latest release of an extension.
| 7.3.x | 8.0.x | 8.1.x | 8.2.x |
| ----- | ----- | ----- | ----- |

---
| DBMS | Supported? |
| ---- | ---------- |
| CSS | - |
| Oracle | - |
| Microsoft SQL Server | - |

# Supported Versions of PHP

This version of the PHP extension provides partial support for the following PHP versions:
- **5.x**

# Licence Agreements

In order to provide a better solution and therefore increase the number of quality rules, the PHP configuration uses other external tools, such as:
## PHP\\_CodeSniffer

More information about this tool is available here: [http://pear.php.net/package/PHP\\_CodeSniffer](http://pear.php.net/package/PHP_CodeSniffer)
### Version

CAST ships version **2.5.0** of the PHP\\_CodeSniffer.
### License

The licence agreement for the PHP\\_CodeSniffer tool is available here:
- [https://opensource.org/licenses/BSD-2-Clause](https://opensource.org/licenses/BSD-2-Clause)

and is detailed below:
_Copyright (c) 2012, Squiz Pty Ltd (ABN 77 084 670 600)_
_All rights reserved._
_Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:_
- _Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer._
- _Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution._
- _Neither the name of Squiz Pty Ltd nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission._

_THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE._
### Quality Rules calculated by the PHP Code Sniffer tool

<table class="wrapped"><colgroup><col> <col></colgroup><tbody><tr><td>1007022</td><td>Avoid FOR loops which can be simplified to a WHILE loop (PHP)</td></tr><tr><td>1007024</td><td>Avoid incrementer jumbling in loops (PHP)</td></tr><tr><td>1007026</td><td>Avoid using identical type operators rather than EQUAL operators (PHP)</td></tr><tr><td>1007028</td><td>Avoid using increment/decrement operator (PHP)</td></tr><tr><td>1007030</td><td>Avoid using empty statement (PHP)</td></tr><tr><td>1007032</td><td>Avoid empty class definition (PHP)</td></tr><tr><td>1007034</td><td>Avoid empty style definition (PHP)</td></tr><tr><td>1007036</td><td>Avoid classes having too many children (PHP)</td></tr><tr><td>1007038</td><td>Avoid classes having too many dependencies (PHP)</td></tr><tr><td>1007040</td><td>Avoid classes having too many parents (PHP)</td></tr><tr><td>1007046</td><td>Avoid Classes and Interfaces with a High Depth of Inheritance Tree (PHP)</td></tr><tr><td>1007056</td><td>Avoid unnecessary final modifiers inside final Classes (PHP)</td></tr><tr><td>1007058</td><td>Avoid unused Function parameters (PHP)</td></tr><tr><td>1007080</td><td>Avoid Classes not having the same name as the file&nbsp; (PHP)</td></tr><tr><td>1007084</td><td>Avoid uppercase keywords for control structures in Sections(PHP)</td></tr><tr><td>1007086</td><td>Avoid uppercase keywords for control structures in Functions and Methods(PHP)</td></tr><tr><td>1007088</td><td>Avoid having variable with a too short name (PHP)</td></tr><tr><td>1007090</td><td>Avoid having variable with a too long&nbsp; name (PHP)</td></tr><tr><td>1007096</td><td>Avoid ELSEIF statements. ELSE and IF should be separate (PHP)</td></tr><tr><td>1007116</td><td>Avoid Methods with Object Instantiation in loops (PHP)</td></tr><tr><td>1007124</td><td>Avoid empty catch blocks (PHP)</td></tr><tr><td>1007126</td><td>Avoid Functions throwing exceptions and not having a @Throws tag (PHP)</td></tr><tr><td>1007128</td><td>Avoid classes exceeding maximum length (PHP)</td></tr><tr><td>1007130</td><td>Avoid methods having too many&nbsp; parameters (PHP)</td></tr><tr><td>1007132</td><td>Avoid methods having lenght exceeding the maximum (PHP)</td></tr><tr><td>1007134</td><td>Avoid&nbsp; classes with too many fields (PHP)</td></tr><tr><td>1007136</td><td>Avoid classes with too many methods (PHP)</td></tr><tr><td>1007138</td><td>Avoid classes having a&nbsp; number of public methods and attributs exceeds maximum (PHP)</td></tr><tr><td>1007140</td><td>Avoid having unused variables (PHP)</td></tr><tr><td>1007142</td><td>Avoid unused private fields (PHP)</td></tr><tr><td>1007144</td><td>Avoid unused private&nbsp; methods (PHP)</td></tr><tr><td>1007146</td><td>Avoid classes exceeding number of weighted methods (PHP)</td></tr><tr><td>1007148</td><td>Avoid unconditional IF and ELSEIF statements (PHP)</td></tr><tr><td>1007150</td><td>Avoid useless overriding Methods (PHP)</td></tr><tr><td>1007152</td><td>Avoid unassigned default values in Functions (PHP)</td></tr><tr><td>1007156</td><td>Avoid using a goto statements (PHP)</td></tr><tr><td>1007158</td><td>Avoid using eval expressions (PHP)</td></tr><tr><td>1007160</td><td>Avoid using exit expressions (PHP)</td></tr><tr><td colspan="1">1007212</td><td colspan="1">Avoid having variables without naming conventions (PHP)</td></tr><tr><td colspan="1">1007226</td><td colspan="1">Avoid having For-loops that use a function call in the test expression (PHP)</td></tr><tr><td colspan="1"><span>1007228</span></td><td colspan="1">Avoid having control structures without proper spacing in the open and close brace - PSR2 (PHP)</td></tr><tr><td colspan="1">1007230</td><td colspan="1">Avoid Having control structures without proper switch case declarations (PSR2) (PHP)</td></tr><tr><td colspan="1"><span>1007232</span></td><td colspan="1"><span>Avoid having variables passed by reference when calling a function (PHP)</span></td></tr><tr><td colspan="1"><span>1007234</span></td><td colspan="1"><span>Avoid having inline control statements (PHP)</span></td></tr><tr><td colspan="1"><span>1007236</span></td><td colspan="1"><span>Avoid having multiple classes defined in a single file - Symfony STD (PHP)</span></td></tr><tr><td colspan="1"><span>1007238</span></td><td colspan="1"><span>Avoid having class methods without scope modifiers - Symfony STD (PHP)</span></td></tr><tr><td colspan="1"><span>1007240</span></td><td colspan="1"><span>Avoid having object not instantiated using parenthesis - Symfony STD (PHP)</span></td></tr></tbody></table>



## PHPMD

More information about this tool is available here: [http://phpmd.org/](http://phpmd.org/)
The licence agreement for the PHPMD tool is available available in the file "LICENSE.txt" delivered in the source folder of the tool and is detailed below:
_Copyright (c) 2009-2011, Manuel Pichler <[mapi@phpmd.org](mailto:mapi@phpmd.org)\\>._
_All rights reserved._
_Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:_
- _Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer._
- _Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution._
- _Neither the name of Manuel Pichler nor the names of his contributors may be used to endorse or promote products derived from this software without specific prior written permission._

_THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE._
## PHP Depend

More information about this tool is available here: [http://pdepend.org/](http://pdepend.org/)
The licence agreement for the PHP Depend tool is available in the file "LICENSE.txt" delivered in the source folder of the tool and is detailed below:
_Copyright (c) 2008-2012, Manuel Pichler <[mapi@pdepend.org](mailto:mapi@pdepend.org)\\>._
_All rights reserved._
_Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:_
- _Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer._
- _Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution._
- _Neither the name of Manuel Pichler nor the names of his contributors may be used to endorse or promote products derived from this software without specific prior written permission._

_THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE._
# Documentation of PHP Quality Rules and Metrics

Documentation of all CAST Metrics and Quality Rules specific to the PHP extension is delivered via a compiled **HTML Help file (CHM)**. Please ensure that once the CHM has been downloaded you right-click on the CHM file in Windows Explorer and choose **Properties > Unblock**. This will ensure that the CHM is readable on your own PC:
| Version | CHM |
| ------- | --- |

