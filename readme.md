# jQuery Super Fast List Filter Plugin
### Created by Matt Mehlhope

The Super Fast List Filter Plugin is an extremely lightweight, simple plugin that allows users to filter a list of elements through typing.

## Example
You can view an example page [here](http://mmehlhope.github.com/EasyImagePreloader/).

## Usage
To use the plugin, you will run the `$.superFastFilter();` method on the input field the user will be typing into. There is one required option, which is `list`. For `list`, pass in the selector of the list you want to be filtered when the user types into the designated input field.

#### Basic Usage
`$('.someInputBox').superFastFilter({list: $('.anUnorderedList')});

## Options
As always, to use any of the following methods simply pass them as an argument when using the plugin.
`$('.someInputBox').superFastFilter({
  list: $('selector'),
  option1: value,
  option2: value
});`

#### onDone - *Default, none. Callback function is used on keyup*
A callback function to be fired once all images have been loaded.
`$('.someInputBox').superFastFilter({
  onDone: function() { 
    console.log('Filter complete'); 
  }
});`