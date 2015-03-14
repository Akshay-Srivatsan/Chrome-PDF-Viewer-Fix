# Menlo Haiku PDF Viewer
I (Akshay Srivatsan) made this Chrome extension to solve a bug with Menlo School's Haiku Learning site. Whenever a teacher uploaded a PDF file, Chrome would try to save it rather than open it in the PDF viewer plugin. This extension runs in the background whenever the user opens a page on [https://haiku.menloschool.org](https://haiku.menloschool.org), and intercepts any link that contains ".pdf". It then opens it in a new tab, using Chrome's built-in PDF viewer.

## Contact Information
Akshay Srivatsan  
[srivatsan.akshay@gmail.com](mailto:srivatsan.akshay@gmail.com)

## Installation
* Open [chrome://extensions](chrome://extensions) in Google Chrome.
* Drag Menlo_School_Haiku_PDF_Viewer.crx (which you can find in the "bin" folder) from Finder/Windows Explorer/GNOME Files to the page.
* Click "Add".

## Modification
If you want to use this on other websites, change the following properties in "manifest.json":
* "permissions": change "haiku.menloschool.org" to whatever url you want.

## License
This extension is under the MIT License, which can be found in LICENSE.txt. The Licenses for jquery and humane.js, which are used by this extension, can be found in their respective directories.

Haiku Learning is a trademark of Haiku Learning.

## To Do
* Add auto-updating features.
* Make code neater, add comments.
* Sometimes, the plugin doesn't load fast enough, so some clicks go undetected (a reload fixes this).
* Add an options page.
* It's a little slow.
* Add error handling.
