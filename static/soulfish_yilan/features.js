let useFishSize = 1
var colorData = {
	"aliceblue": "#f0f8ff",
	"antiquewhite": "#faebd7",
	"aqua": "#00ffff",
	"aquamarine": "#7fffd4",
	"azure": "#f0ffff",
	"beige": "#f5f5dc",
	"bisque": "#ffe4c4",
	"black": "#000000",
	"blanchedalmond": "#ffebcd",
	"blue": "#0000ff",
	"blueviolet": "#8a2be2",
	"brown": "#a52a2a",
	"burlywood": "#deb887",
	"cadetblue": "#5f9ea0",
	"chartreuse": "#7fff00",
	"chocolate": "#d2691e",
	"coral": "#ff7f50",
	"cornflowerblue": "#6495ed",
	"cornsilk": "#fff8dc",
	"crimson": "#dc143c",
	"cyan": "#00ffff",
	"darkblue": "#00008b",
	"darkcyan": "#008b8b",
	"darkgoldenrod": "#b8860b",
	"darkgray": "#a9a9a9",
	"darkgreen": "#006400",
	"darkgrey": "#a9a9a9",
	"darkkhaki": "#bdb76b",
	"darkmagenta": "#8b008b",
	"darkolivegreen": "#556b2f",
	"darkorange": "#ff8c00",
	"darkorchid": "#9932cc",
	"darkred": "#8b0000",
	"darksalmon": "#e9967a",
	"darkseagreen": "#8fbc8f",
	"darkslateblue": "#483d8b",
	"darkslategray": "#2f4f4f",
	"darkslategrey": "#2f4f4f",
	"darkturquoise": "#00ced1",
	"darkviolet": "#9400d3",
	"deeppink": "#ff1493",
	"deepskyblue": "#00bfff",
	"dimgray": "#696969",
	"dimgrey": "#696969",
	"dodgerblue": "#1e90ff",
	"firebrick": "#b22222",
	"floralwhite": "#fffaf0",
	"forestgreen": "#228b22",
	"fuchsia": "#ff00ff",
	"gainsboro": "#dcdcdc",
	"ghostwhite": "#f8f8ff",
	"goldenrod": "#daa520",
	"gold": "#ffd700",
	"gray": "#808080",
	"green": "#008000",
	"greenyellow": "#adff2f",
	"grey": "#808080",
	"honeydew": "#f0fff0",
	"hotpink": "#ff69b4",
	"indianred": "#cd5c5c",
	"indigo": "#4b0082",
	"ivory": "#fffff0",
	"khaki": "#f0e68c",
	"lavenderblush": "#fff0f5",
	"lavender": "#e6e6fa",
	"lawngreen": "#7cfc00",
	"lemonchiffon": "#fffacd",
	"lightblue": "#add8e6",
	"lightcoral": "#f08080",
	"lightcyan": "#e0ffff",
	"lightgoldenrodyellow": "#fafad2",
	"lightgray": "#d3d3d3",
	"lightgreen": "#90ee90",
	"lightgrey": "#d3d3d3",
	"lightpink": "#ffb6c1",
	"lightsalmon": "#ffa07a",
	"lightseagreen": "#20b2aa",
	"lightskyblue": "#87cefa",
	"lightslategray": "#778899",
	"lightslategrey": "#778899",
	"lightsteelblue": "#b0c4de",
	"lightyellow": "#ffffe0",
	"lime": "#00ff00",
	"limegreen": "#32cd32",
	"linen": "#faf0e6",
	"magenta": "#ff00ff",
	"maroon": "#800000",
	"mediumaquamarine": "#66cdaa",
	"mediumblue": "#0000cd",
	"mediumorchid": "#ba55d3",
	"mediumpurple": "#9370db",
	"mediumseagreen": "#3cb371",
	"mediumslateblue": "#7b68ee",
	"mediumspringgreen": "#00fa9a",
	"mediumturquoise": "#48d1cc",
	"mediumvioletred": "#c71585",
	"midnightblue": "#191970",
	"mintcream": "#f5fffa",
	"mistyrose": "#ffe4e1",
	"moccasin": "#ffe4b5",
	"navajowhite": "#ffdead",
	"navy": "#000080",
	"oldlace": "#fdf5e6",
	"olive": "#808000",
	"olivedrab": "#6b8e23",
	"orange": "#ffa500",
	"orangered": "#ff4500",
	"orchid": "#da70d6",
	"palegoldenrod": "#eee8aa",
	"palegreen": "#98fb98",
	"paleturquoise": "#afeeee",
	"palevioletred": "#db7093",
	"papayawhip": "#ffefd5",
	"peachpuff": "#ffdab9",
	"peru": "#cd853f",
	"pink": "#ffc0cb",
	"plum": "#dda0dd",
	"powderblue": "#b0e0e6",
	"purple": "#800080",
	"rebeccapurple": "#663399",
	"red": "#ff0000",
	"rosybrown": "#bc8f8f",
	"royalblue": "#4169e1",
	"saddlebrown": "#8b4513",
	"salmon": "#fa8072",
	"sandybrown": "#f4a460",
	"seagreen": "#2e8b57",
	"seashell": "#fff5ee",
	"sienna": "#a0522d",
	"silver": "#c0c0c0",
	"skyblue": "#87ceeb",
	"slateblue": "#6a5acd",
	"slategray": "#708090",
	"slategrey": "#708090",
	"snow": "#fffafa",
	"springgreen": "#00ff7f",
	"steelblue": "#4682b4",
	"tan": "#d2b48c",
	"teal": "#008080",
	"thistle": "#d8bfd8",
	"tomato": "#ff6347",
	"turquoise": "#40e0d0",
	"violet": "#ee82ee",
	"wheat": "#f5deb3",
	"white": "#ffffff",
	"whitesmoke": "#f5f5f5",
	"yellow": "#ffff00",
	"yellowgreen": "#9acd32"
}

function getColorLabel(clr) {

	let targetRed = red(clr)
	let targetGreen = green(clr)
	let targetBlue = blue(clr)
	let colorObjects = Object.entries(colorData)
	let minimum = 1000000
	let miniObjLabel = ""
	let miniObjColor = ""
	for (var i = 0; i < colorObjects.length; i++) {
		let label = colorObjects[i][0]
		let hex = colorObjects[i][1]
		let thisColor = color(hex)
		let thisRed = red(thisColor)
		let thisGreen = green(thisColor)
		let thisBlue = blue(thisColor)

		let distColor = sqrt((targetRed - thisRed) * (targetRed - thisRed) +
			(targetGreen - thisGreen) * (targetGreen - thisGreen) +
			(targetBlue - thisBlue) * (targetBlue - thisBlue))
		if (distColor < minimum) {
			minimum = distColor
			miniObjLabel = label
			miniObjColor = thisColor
		}

	}

	// console.log(miniObjLabel)
	return {
		label: miniObjLabel,
		color: miniObjColor
	}
}

function renderFeatures(clr) {
	features = {
		pallate: random({
			// 'blackwhite': 5,
			'colorful': 42,
			// 'purewhite': 4
		}),
		background: random({
			'void': 10,
			// 'wave': 1,
			// 'grid': 1,
			// 'deepsea': 1
		}),
		fishSize: random({
			tiny: 1,
			normal: 10,
			large: 1
		}),
		// special: random({
		// 	normal: 1
		// 	// hollow: 1
		// }),
		fishColorType: random({
			solid: 2,
			gradient: 1
		}),
		fishColor: {
			r: random(0, 250),
			g: random(0, 250),
			b: random(0, 250)
		},
		fishMinColor: {
			r: random(20, 150),
			g: random(20, 150),
			b: random(20, 150)
		},
		seaweed: random([0, 2, 4, 6, 10]),
		fishThickness: random([15, 20, 30, 35, 45, 50, 60]),
		withFin: random() < 0.99,
		scaleType: random(['dot', 'fan', 'arrow', '', 'strip']),
		verticalFin: random() < 0.5,
		atmosphere: random([
			"Am-1", "D7-1", "C7-1", "Dm-1", "D7-2", "Gm-1", "Bm-1", "A-1"
		]),
		hasBone: random() < 0.3,
		hasUpDownFin: random() < 0.9,
		upFinSize: parseInt(random([6, 6, 8, 8, 10, 12, 14, 20])),
		downFinSize: parseInt(random([6, 6, 8, 8, 10, 12, 14, 20]))



	}

	if (features.background == "deepsea" && features.pallate == 'purewhite') {
		features.pallate = "colorful"
	}
	useFishSize = {
		tiny: 0.6,
		normal: 1,
		large: 1.1
	} [features.fishSize]
	if (features.fishColorType == 'solid') {
		features.fishColor = {
			r: random(50, 300),
			g: random(50, 300),
			b: random(50, 300)
		}
		features.fishMinColor = {
			r: random(10, 50),
			g: random(10, 50),
			b: random(10, 50)
		}
	}
	if (features.pallate == 'blackwhite') {
		features.fishColor = {
			r: 255,
			g: 255,
			b: 255
		}
		features.fishMinColor = {
			r: 0,
			g: 0,
			b: 0
		}


	}

	if (clr) {
		console.log(clr)
		features.fishColor = {
			r: red(color(clr)),
			g: green(color(clr)),
			b: blue(color(clr))
		}
		features.fishMinColor = {
			r: random(10, 50),
			g: random(10, 50),
			b: random(10, 50)
		}
	}
	return features
}
window.$fxhashFeatures = renderFeatures()