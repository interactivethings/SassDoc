/**
* Sass Documentation Generator
*/
(function($) {
	$.fn.sassDoc = function(filePath) {
		return this.each(function() {
			var $container = $(this)
			  , $list;
			
			$.get(filePath, function(data) {
				var lines = data.match(/^(\$.*;|\/\/.*)$/gm);
				for (var i=0,l=lines.length; i<l; i++) {
					var matchColorDeclaration = lines[i].match(/^(\$[a-zA-Z0-9_-]+):\s*(#[0-9a-zA-Z]+);$/);
					var matchComment = lines[i].match(/^\/\/\s*(.*)$/);
					if (matchColorDeclaration) {
						var name = matchColorDeclaration[1];
						var color = matchColorDeclaration[2];

						var $colorEl = $('<div class="color"></div>').css({"background-color": color});
						var $nameEl  = $('<span class="name">'+name+'</span>');
						var $codeEl  = $('<span class="code">'+color+'</span>');
						var $textEl  = $('<span class="text">Text sample.</span>').css({"color": color});
						var $descEl  = $('<div class="description"></div>')
						$descEl.append($nameEl).append($codeEl).append($textEl);
						var $item = $('<li></li>').append($colorEl).append($descEl);
						$list.append($item);
					} else if (matchComment) {
						// Create a new list
						$list = $('<ul class="color-list"></ul>');
						$container.append($list);
						$list.append('<li class="group-title">'+matchComment[1]+'</li>');
					}
				}
			});
		});
	}
})(jQuery);