# 1.2.2-funcrel

## Updates

By default, the XMLS that are within the first node of the xml file are scanned. If you want to scan a particular framework from all the nodes in the XML file you need to add another parameter at the end of that framework in the framework\\_xmlnamespaces.config file.
The 4th parameter can be added in the framework\\_xmlnamespaces.config file, to avail the below functions:
- rootNodeOnly (Default): Scan frameworks only in the first XML node
- allNodes: Scan the full XML file for a particular framework

