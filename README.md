Overview
--------

This is project is an example of how document library views can be added 
to [Alfresco](http://alfresco.com) Share.

The added view is merely a duplicate of the detail view with larger thumbnails 
but serves to demonstrates the basic concepts.

To keep build and deployment simple the project is packaged as a Share jar rather 
than an [AMP](https://wiki.alfresco.com/wiki/AMP_Files), but the code would 
remain the same.

Implementation
--------------

The view is added as a Share [extensibility customization module](http://blogs.alfresco.com/wp/ddraper/2011/08/05/customizing-alfresco-share-javascript-controllers/)


### Build Requirements

To build the project [Maven](http://maven.apache.org) must be installed.

### Building and Installing

To build the jar run:

	mvn clean package

then place the jar in Share's classpath such as `TOMCAT_HOME/webapps/share/WEB-INF/lib`.

License
-------

Copyright (C) 2005-2012 Alfresco Software Limited.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.