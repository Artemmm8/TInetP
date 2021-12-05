$(function () {
	$('[data-action="rotate"]').each(function () {
		var $item = $(this),
			$inner = $('<div class="inner">').appendTo($item),
			$dot = $('<div class="dot">').appendTo($item),
			dims = {
				W: this.clientWidth,
				H: this.clientHeight
			},
			center = {
				X: dims.W / 2,
				Y: dims.H / 2
			},
			ratio = dims.W / dims.H,
			rotate = $item.data('rotate'),
			angle = 0,
			start = 0,
			time = [20, 5],
			interval = time[0],
			process;

		$inner
			.on('mouseenter', function () {
				interval = time[1];
			})
			.on('mouseleave', function () {
				interval = time[0];
			});
		$item
			.on('mousedown', function () {
				clearTimeout(process);
			})
			.on('mouseup', function () {
				animation();
			});

		if (rotate) {
			rotate = rotate.split('*');

			if (rotate[1] !== undefined) {
				angle = Math.PI * parseInt(rotate[0]) / 180;
				$inner.css({
					transform: 'rotateZ(' + rotate[0] + ')'
				});
			} else {
				$item.css({
					transform: 'rotateZ(' + rotate[0] + ')'
				});
			}
		}

		animation();

		function animation() {
			var x = center.X * Math.sin(start),
				y = center.Y * Math.cos(start),
				X = x * Math.cos(angle) - y * Math.sin(angle),
				Y = x * Math.sin(angle) + y * Math.cos(angle);

			$dot.css({
				top: center.Y + Y,
				left: center.X + X
			});
			start += .02;

			process = setTimeout(animation, interval);
		}
	});
});
