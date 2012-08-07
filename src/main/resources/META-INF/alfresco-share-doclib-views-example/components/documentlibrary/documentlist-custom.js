/**
 * Copyright (C) 2005-2012 Alfresco Software Limited.
 *
 * This file is part of Alfresco
 *
 * Alfresco is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Alfresco is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with Alfresco. If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * @module DocumentLibrary
 */

/**
 * Large view extension of DocumentListViewRenderer component.
 *
 * @namespace Alfresco
 * @class Alfresco.DocumentListLargeViewRenderer
 * @extends Alfresco.DocumentListViewRenderer
 */
(function()
{
   /**
    * YUI Library aliases
    */
   var Dom = YAHOO.util.Dom,
       Event = YAHOO.util.Event,
       Anim = YAHOO.util.Anim;
   
   /**
    * Alfresco Slingshot aliases
    */
   var $html = Alfresco.util.encodeHTML;
   
   /**
    * LargeViewRenderer constructor.
    *
    * @param name {String} The name of the LargeViewRenderer
    * @return {Alfresco.DocumentListLargeViewRenderer} The new LargeViewRenderer instance
    * @constructor
    */
   Alfresco.DocumentListLargeViewRenderer = function(name)
   {
      Alfresco.DocumentListLargeViewRenderer.superclass.constructor.call(this, name);
      // Defaults to large but we'll copy the metadata from detailed view
      this.metadataBannerViewName = "detailed";
      this.metadataLineViewName = "detailed";
      this.thumbnailColumnWidth = 200;
      return this;
   };
   
   /**
    * Extend from Alfresco.DocumentListViewRenderer
    */
   YAHOO.extend(Alfresco.DocumentListLargeViewRenderer, Alfresco.DocumentListViewRenderer);
   
   Alfresco.DocumentListLargeViewRenderer.prototype.renderCellThumbnail = function Example_renderCellThumbnail(scope, elCell, oRecord, oColumn, oData, imgIdSuffix)
   {
      var record = oRecord.getData(),
      node = record.jsNode,
      properties = node.properties,
      name = record.displayName,
      isContainer = node.isContainer,
      isLink = node.isLink,
      extn = name.substring(name.lastIndexOf(".")),
      imgId = node.nodeRef.nodeRef; // DD added
   
      var containerTarget; // This will only get set if thumbnail represents a container
      
      oColumn.width = this.thumbnailColumnWidth;
      Dom.setStyle(elCell, "width", oColumn.width + "px");
      Dom.setStyle(elCell.parentNode, "width", oColumn.width + "px");
   
      if (isContainer || (isLink && node.linkedNode.isContainer))
      {
         elCell.innerHTML = '<span class="folder documents-large">' + (isLink ? '<span class="link"></span>' : '') + (scope.dragAndDropEnabled ? '<span class="droppable"></span>' : '') + Alfresco.DocumentList.generateFileFolderLinkMarkup(scope, record) + '<img id="' + imgId + '" src="' + Alfresco.constants.URL_RESCONTEXT + 'components/documentlibrary/images/folder-64.png" /></a>';
         containerTarget = new YAHOO.util.DDTarget(imgId); // Make the folder a target
      }
      else
      {
         elCell.innerHTML = '<span class="thumbnail documents-large">' + (isLink ? '<span class="link"></span>' : '') + Alfresco.DocumentList.generateFileFolderLinkMarkup(scope, record) + '<img id="' + imgId + '" src="' + Alfresco.DocumentList.generateThumbnailUrl(record, 'imgpreview') + '" alt="' + extn + '" title="' + $html(name) + '" /></a></span>';
      }
      var dnd = new Alfresco.DnD(imgId, scope);
   };

})();
