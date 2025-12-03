class Workout {
  constructor(
    type,
    name,
    img,
    timer = null,
    sets,
    repsMin = null,
    repsMax = null,
    description = [],
    hint,
    previous = null,
    next = null
  ) {
    this.workoutType = type;
    this.exerciseName = name;
    this.exerciseImg = img;
    this.exerciseTimer = timer;

    this.repsMin = repsMin;
    this.repsMax = repsMax;

    this.sets = sets;
    this.description = Array.isArray(description) ? description : [description];
    this.exerciseDescription = description;
    this.exerciseUse = hint;
    this.previousExercise = previous;
    this.nextExercise = next;
  }
}

//Warmup A
const verticalMountainClimber = new Workout(
  "Warmup A",
  "Vertical Mountain Climber",
  "../assets/images/gif/vertical-mountain-climber.webp",
  30,
  null,
  null,
  null,
  [
    "Aufrecht stehen",
    "Knie im Wechsel aktiv nach oben",
    "Arme gegenläufig mitführen",
    "Rumpf bleibt stabil",
    "Tempo: moderat, kontrolliert",
  ],
  "Mobilisiert Hüfte und Core dynamisch, ohne Vorbeuge und völlig ischiasfreundlich."
);

const kneeRaises = new Workout(
  "Warmup A",
  "Knee Raises + Ankle Mobility",
  "../assets/images/gif/kneeraises.gif",
  30,
  null,
  null,
  null,
  [
    "Im Wechsel Knie hochziehen",
    "Beim Hochziehen Fuß kreisen",
    "Weiches Standbein",
    "Rücken bleibt neutral",
  ],
  "Mobilisiert Hüfte & Sprunggelenk für Squats."
);

const miniSquats = new Workout(
  "Warmup A",
  "Mini-Squats with Arm-Lifting",
  "../assets/images/gif/squats.webp",
  45,
  null,
  null,
  null,
  [
    "¼-Tiefe Kniebeugen",
    "Arme gleichzeitig nach vorne oder hoch führen",
    "Brust bleibt offen",
  ],
  "Wärmt Beine + Brust + Schultern gleichzeitig auf."
);

const gluteActivation = new Workout(
  "Warmup A",
  "Glute Activation (Glute Bridge)",
  "../assets/images/gif/glute-bridges.webp",
  45,
  null,
  null,
  null,
  [
    "Rückenlage, Füße aufgestellt",
    "Becken hochdrücken",
    "Oben 1–2 Sek. Gesäß anspannen",
  ],
  "Schaltet Glutes ein → entlastet Ischias."
);

const scapulaPushUp = new Workout(
  "Warmup A",
  "Scapula Push-ups",
  "../assets/images/gif/scapula.gif",
  30,
  null,
  null,
  null,
  [
    "Normale Liegestützposition",
    "Arme bleiben gestreckt",
    "Schulterblätter zusammen → auseinander",
  ],
  "Bereitet Brust/Schulterblätter auf Bankdrücken vor."
);

const softBoxSquats = new Workout(
  "Warmup A",
  "Soft Box Squats",
  "../assets/images/gif/squats.webp",
  null,
  1,
  8,
  8,
  ["Normale Bewegung, aber nur leichte Intensität"],
  "Nervensystem vorbereiten."
);

// Workout A
// Box Squats, Glute Bridges, Bankdrücken, schulterdrücken,heel-elevated Squats, seitenheben, plank

const boxSquats = new Workout(
  "Workout A",
  "Box Squats",
  "../assets/images/gif/squats.webp",
  null,
  3,
  8,
  12,
  [
    "Bank/Box hinter dir",
    "Stand schulterbreit, Füße leicht rausgedreht",
    "Hüfte kontrolliert nach hinten/unten",
    "Kurz die Box berühren",
    "Ohne Schwung aufstehen",
  ],
  "Sehr kontrollierte, sichere Squat-Variante."
);

const gluteBridges = new Workout(
  "Workout A",
  "Glute Bridges",
  "../assets/images/gif/glute-bridges.webp",
  null,
  3,
  12,
  15,
  [
    "Rückenlage, Füße hüftbreit",
    "Becken nach oben drücken",
    "Oben stark anspannen",
    "Langsam senkenLangsam senken",
    "Ohne Schwung aufstehen",
  ],
  "Glutes ohne Ischiaskomfort."
);

const benchPress = new Workout(
  "Workout A",
  "Bench Press",
  "../assets/images/gif/benchpress.webp",
  null,
  3,
  8,
  12,
  [
    "Schulterblätter zusammen/zurück",
    "Hanteln auf Brusthöhe senken",
    "Kontrolliert nach oben drücken",
  ],
  "Brustfokus, sicher für Rücken."
);

const shoulderPress = new Workout(
  "Workout A",
  "Shoulder-Press",
  "../assets/images/gif/shoulderpress.webp",
  null,
  3,
  8,
  12,
  [
    "Aufrecht sitzen/stehen",
    "Hanteln seitlich auf Schulterhöhe",
    "Senkrecht über Kopf drücken",
  ],
  "Front-/Seitenschulter."
);

const heelElevatedSquats = new Workout(
  "Workout A",
  "Heel-Elevated-Squats",
  "../assets/images/gif/squats.webp",
  null,
  2,
  10,
  12,
  [
    "Fersen ca. 3–5 cm erhöht (Brett/Bücher)",
    "Rücken aufrecht",
    "Knie bewusst nach vorne",
    "Sauber runter, kontrolliert hoch",
  ],
  "Starker Quadrizepsfokus, sehr rückenfreundlich."
);

const sideRaises = new Workout(
  "Workout A",
  "Side Raises",
  "../assets/images/gif/sideraises.webp",
  null,
  3,
  12,
  15,
  [
    "Leichte Vorlage",
    "Arme seitlich bis knapp unter Schulterhöhe",
    "Ellbogen leicht gebeugt",
  ],
  "Seitliche Schulter."
);

const plank = new Workout(
  "Workout A",
  "Plank",
  "../assets/images/gif/plank.webp",
  30,
  null,
  null,
  null,
  ["Ellbogen unter Schultern", "Hüfte neutral, kein Hohlkreuz"],
  "Front-/Seitenschulter."
);

// exercises for Workout A

// figure-4 stretch, quad stretch,Brustdehnung
// Hip Hinge Mobilisation,Knee Raises + Ankle Mobility,Mini-Squats mit Armheben,Glute Activation (Glute Bridge),Scapula Push-ups,Leichter Satz Box Squats
// Box Squats, Glute Bridges, Bankdrücken, schulterdrücken,heel-elevated Squats, seitenheben, plank

const workoutA = [
  // Warmup A
  verticalMountainClimber,
  kneeRaises,
  miniSquats,
  gluteActivation,
  scapulaPushUp,
  softBoxSquats,

  // Workout A
  boxSquats,
  gluteBridges,
  benchPress,
  shoulderPress,
  heelElevatedSquats,
  sideRaises,
  plank,
];

// exercises for Workout B

const workoutB = [];

function linkWorkouts(workouts) {
  workouts.forEach((workout, index) => {
    workout.previousExercise = workouts[index - 1] || null;
    workout.nextExercise = workouts[index + 1] || null;
  });
}

linkWorkouts(workoutA);
