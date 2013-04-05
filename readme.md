# jQuery Super Fast List Filter Plugin
### Created by Matt Mehlhope

The Super Fast List Filter Plugin is an extremely lightweight, simple plugin that allows users to filter a list of elements through typing.

## Demo
You can view an example page [here](http://mmehlhope.github.com/jQuery-Super-Fast-List-Filter/).

## Usage
To use the plugin, you will run the `$.superFastFilter();` method on the input field the user will be typing into. There is one required option, which is `list`. For `list`, pass in the selector of the list you want to be filtered when the user types into the designated input field.

#### Basic Implementation

    $('.someInputBox').superFastFilter({
      list: $('.anUnorderedList')
    });

## Options
As always, to use any of the following methods simply pass them as an argument when using the plugin.

#### listKeyValueSelector - *Default, null.*
If you are using a more complex list element that contains multiple elements, pass in the selector (in the context of the list element) here and it will grab that field's text value instead of the default text in the list element.
    
    <li>
      <img src="/someimage.png" width="50" height="50" alt="Awesome image">
      <span class="title">List Element Title Text</span>
    </li>

    $('.someInputBox').superFastFilter({
      list: $('.anUnorderedList'),
      listKeyValueSelector: ".title"
    });

Similarly, the below will also work because it is looking directly in that list element:

    $('.someInputBox').superFastFilter({
      list: $('.anUnorderedList'),
      listKeyValueSelector: "span"
    });

#### lookupTable - *Default, [].*
If you have a namespaced array you wish to use, such as App.someBlankArray, specify it here
    
    $('.someInputBox').superFastFilter({
      list: $('.anUnorderedList'),
      lookupTable: App.someBlankArray
    });

#### onDone - *Default, none.*
Callback function that is fired on keyup after the filter has been completed
    
    $('.someInputBox').superFastFilter({
      list: $('.anUnorderedList'),
      onDone: function() { 
        console.log('Filter complete'); 
      }
    });
