# 1.3.0-funcrel

## Updates

### SECJAVA-25 - Log information (logging framework)

Improvements have been made to the way in which the extension produces logs. The extension now writes log information in two main places:
#### Python launcher - My\\_Source\\_file\\_based-\\[\\*\\].castlog

The python launcher/manager writes in the main **My\\_Source\\_file\\_based-\\[\\*\\].castlog** file. It will add the following log information:
- Error if the project.xml file is absent or it cannot be parsed
- The location of the CAST AIP installation
- Information if there are existing castil files
- Information for all moved castil files
- Information on calling the ProjectXmlReview tool
- Information on calling the java2castil tool
- Errors for missing castil files (according to project.xml)
- The number of castil found and the number of required castil files
- Error if the assemblies.txt file is absent

#### java2castil module - Job-generation-\\[\\*\\].log and Project-\\[\\*\\].log

The java module (java2castil) that writes in log files located in the **Log** subfolder of the source code analysis folder. This module writes a global file (**Job-generation-\\[\\*\\].log** and 1 log file for each project: **Project-\\[\\*\\].log**).
The **Project\\*.log** contains:
- As info (so not logged due to configuration): information useful only for debugging java2castil
- As warning: the file that are parsed
- As warning: interesting resolution issues from JDT (several useless information from JDT are filtered). With full bookmark.
- As warning: classic issues during castil generation
- As error: serious issues during castil generation. Example: unexpected empty file
- As fatal: very serious issues during castil generation. Example: JDT crash

Also, the main **Job-generation-\\*.log** will contain:
- Important information in case of severe exception (OUT OF MEMORY ERROR, FATAL ERROR)
- As warning: information about the start of the analysis
- As warning: a synthesis of missing imports
- As warning: the number of FATAL error found

Other modifications:
- the Log subfolder is cleaned before starting java2castil.

## Resolved issues

The following issues have been fixed in this release of the Security for Java extension:
