/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */

CKEDITOR.editorConfig = function( config ) {
	
	// %REMOVE_START%
	// The configuration options below are needed when running CKEditor from source files.
	config.plugins = 'dialogui,dialog,about,basicstyles,notification,button,toolbar,clipboard,enterkey,entities,floatingspace,wysiwygarea,indent,indentlist,fakeobjects,link,list,undo,lineutils,widgetselection,widget,mathjax';
	config.skin = 'moono-lisa';
	// %REMOVE_END%

	// Define changes to default configuration here.
	// For complete reference see:
	// https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_config.html

	// The toolbar groups arrangement, optimized for a single toolbar row.
	config.toolbarGroups = [ 
		{ name: 'document',	   groups: [ 'mode', 'document', 'doctools' ] },
		{ name: 'clipboard',   groups: [ 'clipboard', 'undo' ] },
		{ name: 'editing',     groups: [ 'find', 'selection', 'spellchecker' ] },
		{ name: 'forms' },
		{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
		{ name: 'paragraph',   groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ] },
		{ name: 'styles', groups: [ 'styles', 'format', 'font', 'fontSize' ] },
		{ name: 'colors', groups: [ 'TextColor', 'BGColor' ] },
		// { name: 'links' },
		{ name: 'insert' }, 
		{ name: 'colors' },
		{ name: 'tools' },
		{ name: 'others' }, 

		
		// { name: 'about' }
	];
	
// 1. Include the Google Fonts stylesheet
config.contentsCss = ['ckeditor/contents.css',
 'https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap', 
 'https://fonts.googleapis.com/css2?family=Noto+Naskh+Arabic&display=swap'

]; 
config.font_names = 'Arial/Arial, Helvetica, sans-serif;' +
'Comic Sans MS/Comic Sans MS, cursive;' +
'Roboto/Roboto, sans-serif;' +  // Add the Google font here
   'Noto Naskh Arabic/Noto Naskh Arabic, sans-serif;' +  // Add the new Google font here
'Verdana/Verdana, Geneva, sans-serif;'; 
config.mathJaxLib = '//cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.4/MathJax.js?config=TeX-AMS_HTML';
config.mathJaxClass = 'math-tex'; 
config.extraPlugins = 'resize, floatpanel, panel, panelbutton, button, textmatch, ajax, xml, autocomplete, textwatcher, font, colorbutton';

// The default plugins included in the basic setup define some buttons that
// are not needed in a basic editor. They are removed here.
 config.removeButtons = 'Cut,Copy,Paste,Undo,Redo,Anchor,Subscript,Superscript';
	config.resize_dir = 'both'; 
	// Dialog windows are also simplified.
	config.removeDialogTabs = 'link:advanced';
};
