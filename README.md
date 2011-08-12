SassDoc - Sass Documentation Generator
======================================

Introduction
------------

We created SassDoc to get a quick visual overview of all defined colors in our SCSS files. This helps communicate between the coders and designers and simplifies finding the right color to use, both in code and design tool.

Caveats
-------

* This is a proof of concept and in a very early alpha stage.
* The code is very ugly and hacked together.
* Only supports SCSS syntax at the moment.
* Only supports documenting colors at the moment.

Usage
-----

Have a look at test/colors-test.html to see how to use it.

But it basically boils down to this:

`$("#my-doc-container").scssDoc('path/to/file.scss');`

Changelog
---------

* 2011-08-12: First draft

License
=======

Permission is hereby granted, free of charge, to any person obtaining a copy    
http://creativecommons.org/licenses/BSD/    
Copyright (c) 2011, Interactive Things    
All rights reserved.    

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
* Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
* Neither the name of Interactive Things and Democracy International nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
