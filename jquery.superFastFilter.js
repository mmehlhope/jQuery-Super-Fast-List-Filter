// jQuery Super Fast List Filter Plugin
// Created by Matt Mehlhope (mmehlhope@gmail.com)

// MIT License

// Copyright (c) 2010 Edwin Martin

// Permission is hereby granted, free of charge, to any person
// obtaining a copy of this software and associated documentation
// files (the "Software"), to deal in the Software without
// restriction, including without limitation the rights to use,
// copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the
// Software is furnished to do so, subject to the following
// conditions:

// The above copyright notice and this permission notice shall be
// included in all copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
// OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
// NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
// HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
// WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
// FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
// OTHER DEALINGS IN THE SOFTWARE.
    
// GPL License

// Copyright (C) 2010 Edwin Martin

// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>


;(function($, window, undefined) {
  
  var superFastListFilter = {

    defaults: {
      list: null, // the list that will be filtered on keyup of your selected input
      lookupTable: [], // the array that will store the lookup table
      onDone: function() {} // callback for when all images are complete
    },

    init: function( options ) {

      return this.each(function() {

        var self = superFastListFilter,
          $this = $(this), 
          settings = $.extend(self.defaults, options),
          lookupTable = settings.lookupTable;


        function createLookupTable() {
          var list = settings.list,
              children = list.children('li');
          
          // reset lookup table
          lookupTable = [];
          
          for (var i = 0; i < children.length; i++) {
            var current = children[i],
                name = $(current).text().toLowerCase(),
                $selector = $(current);
            
            lookupTable.push({
                title: name,
                selector: $selector
            });        
          }
        }

        // generate the lookup table
        createLookupTable();

        this.onkeyup = function(event){
          var userVal = this.value.toLowerCase();
          
          for (var i = 0; i < lookupTable.length; i++) {
              var current = lookupTable[i],
                  title = lookupTable[i].title,
                  $selector = $(lookupTable[i].selector);
              
            if ((title.indexOf(userVal) !== -1) && ($selector.is(':hidden'))) {
                $selector.show();
            }
            else if ((title.indexOf(userVal) === -1) && ($selector.is(':visible'))) {
                $selector.hide();
            } else {}
          }
        };

      });  
    }
  };

  // lets define the actual plugin!
  $.fn.superFastListFilter = function( method ) {

    if ( superFastListFilter[method] ) {
      return superFastListFilter[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
    } else if ( typeof method === 'object' || ! method ) {
      return superFastListFilter.init.apply( this, arguments );
    } else {
      $.error( 'Method ' +  method + ' does not exist for $.superFastListFilter' );
    }   
  };

}(jQuery, window));