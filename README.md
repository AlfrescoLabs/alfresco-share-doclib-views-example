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
