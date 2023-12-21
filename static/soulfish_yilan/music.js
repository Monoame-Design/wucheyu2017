let musicSets = [{
		notes: ["C6", "D6", "E6", "G6", "B6", "C7", "G7", "", "", "", ""],
		bass: ["A4", "A4", "G4", "F4"],
		name: "Am-1"
	}, {
		notes: ["D6", "F#6", "A6", "C#7", "D7", "F#7", "A7", "", "", "", ""],
		bass: ["D4", "A4", "G4", "F#4"],
		name: "D7-1"
	}, {
		notes: ["E6", "G6", "A6", "C7", "D7", "E7", "", "", "", ""],
		bass: ["C4", "E4", "G3", "B3"],
		name: "C7-1"
	}, {
		notes: ["D6", "F6", "A6", "", "", ""],
		bass: ["D4", "F4", "A4"],
		name: "Dm-1"
	},
	{
		notes: ["D4", "F#5", "A6", "C#7", "D5", "F#5", "A5", "C#5", "", "", ""],
		bass: ["D4", "F#4", "A4"],
		name: "D7-2"
	},
	{
		notes: ["G4", "A4", "Bb4", "D5", "G5", "Bb6", "D6", "Eb5", "", ""],
		bass: ["G4", "Bb4", "D4", "G4"],
		name: "Gm-1"
	},
	{
		notes: ['B3', 'C#4', 'D4', 'F#4', 'A4', '', ''],
		bass: ['B2', 'F#2', 'G2', 'D2'],
		name: "Bm-1"
	},
	{
		notes: ['A4', 'B4', 'C#5', 'D5', 'E5', 'F#5', 'G#5', 'A6', '', '', '', ''],
		bass: ['A4', 'C#4', 'E4', 'D4'],
		name: "A-1"
	}
]
let raiseOct = (note) => {
	let newNote = ("" + note).slice(0, note.length - 1) + (1 * note.slice(-1) + 1).toString()
	// console.log(note, newNote)
	return newNote
}
let useMusicSet = musicSets.find(s => s.name == features.atmosphere)
// PIANO SAMPLER
const sampler = new Tone.Sampler({
	urls: {
		A0: "A0.mp3",
		C1: "C1.mp3",
		"D#1": "Ds1.mp3",
		"F#1": "Fs1.mp3",
		A1: "A1.mp3",
		C2: "C2.mp3",
		"D#2": "Ds2.mp3",
		"F#2": "Fs2.mp3",
		A2: "A2.mp3",
		C3: "C3.mp3",
		"D#3": "Ds3.mp3",
		"F#3": "Fs3.mp3",
		A3: "A3.mp3",
		C4: "C4.mp3",
		"D#4": "Ds4.mp3",
		"F#4": "Fs4.mp3",
		A4: "A4.mp3",
		C5: "C5.mp3",
		"D#5": "Ds5.mp3",
		"F#5": "Fs5.mp3",
		A5: "A5.mp3",
		C6: "C6.mp3",
		"D#6": "Ds6.mp3",
		"F#6": "Fs6.mp3",
		A6: "A6.mp3",
		C7: "C7.mp3",
		"D#7": "Ds7.mp3",
		"F#7": "Fs7.mp3",
		A7: "A7.mp3",
		C8: "C8.mp3"
	},

	// Cela règle la durée de permanence des notes jouées
	release: 10,

	// Source locale des sons
	// baseUrl: "./audio/salamander/"

	baseUrl: "salamander/"
}).toDestination();

const osc = new Tone.Oscillator().toDestination();
// transport must be started before it starts invoking events
Tone.Transport.bpm.value = parseInt(random(40, 60));

let musicStarted = false

function startAllAudio() {
	musicStarted = true
	Tone.start()
	Tone.Transport.start();
}
window.addEventListener("click", () => {
	startAllAudio()
})

// piano({
// 		parent: document.querySelector("#content"),
// 		noteon: note => sampler.triggerAttack(note.name),
// 		noteoff: note => sampler.triggerRelease(note.name),

// });

// Pour ajouter des effets...
// Exemples..
// const filter = new Tone.AutoFilter(4).start();
// const distortion = new Tone.Distortion(0.5);

const reverb = new Tone.Reverb(10);

// connect the player to the filter, distortion and then to the master output
// sampler.chain(filter, distortion, reverb, Tone.Destination);

sampler.chain(reverb, Tone.Destination);

// // SEQUENCEUR
// const keys = new Tone.Players({
// 		urls: {
// 				0: "A1.mp3",
// 				1: "Fs5.mp3",
// 				2: "C7.mp3",
// 				3: "A6.mp3",
// 		},
// 		fadeOut: "64n",

// 		// Source des sons du séquenceur
// 		baseUrl: "https://tonejs.github.io/audio/salamander/"
// }).toDestination();
let bgLightScale = 0
let noteScale = 0
let noteIndex = 0
const polySynth = new Tone.PolySynth(Tone.Synth, {
	"volume": -8,
	"detune": 0,
	"portamento": 0,
	"envelope": {
		"attack": 5,
		"attackCurve": "linear",
		"decay": 0.1,
		"decayCurve": "linear",
		"release": 0.2,
		"releaseCurve": "exponential",
		"sustain": 1
	},
	"oscillator": {
		"partialCount": 15,
		"partials": [
			0.8105694691387023,
			0,
			-0.0900632743487447,
			0,
			0.03242277876554809,
			0,
			-0.016542234064055146,
			0,
			0.010007030483193857,
			0,
			-0.00669892123255126,
			0,
			0.004796269048158,
			0,
			-0.0036025309739497885
		],
		"phase": 30,
		"type": "sine"
	}
}).toDestination()
setTimeout(() => {
	let bassnotes = useMusicSet.bass
	let baseIndex = 0
	Tone.Transport.scheduleRepeat((time) => {
		// sampler.triggerAttack("A0")
		let bassNote = bassnotes[baseIndex++ % bassnotes.length]
		// polySynth.triggerAttackRelease(bassNote[0]+"2","4")
		sampler.triggerAttackRelease(bassNote, "1")
		// bgLightScale = 1
	}, "1n");

	// 	Tone.Transport.scheduleRepeat((time) => { 
	// 		 sampler.triggerAttack("C6") 
	// 	}, "4n");


	// 	Tone.Transport.scheduleRepeat((time) => { 
	// 		 sampler.triggerAttack("E6") 
	// 	}, "3n");
	// Tone.Transport.scheduleRepeat((time) => { 
	// 	 sampler.triggerAttack("D7") 
	// }, "5n");

	let notes = useMusicSet.notes
	let notes2 = JSON.parse(JSON.stringify(notes))

	notes.sort((a, b) => random() < 0.5 ? 1 : -1)
	notes2.sort((a, b) => random() < 0.5 ? 1 : -1)
	let useNotes = notes.concat(notes2)
	Tone.Transport.scheduleRepeat((time) => {
		let note = useNotes[noteIndex++ % useNotes.length]
		if (note) {
			sampler.triggerAttack(note)
			noteScale = 1

			// if ( seaweeds[0]){
			// 	let p = seaweeds[0].legs[noteIndex % seaweeds[0].legs.length].points[5]
			// 	p.y+=50
			// 	p.x+=-50
			// }

		}



	}, "8n");



}, 100)