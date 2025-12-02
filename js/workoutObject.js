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
    this.exerciseHint = hint;
    this.previousExercise = previous;
    this.nextExercise = next;
  }
}

const sideRaises = new Workout(
  "Workout",
  "Side Raises",
  "https://picsum.photos/id/237/200/300",
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

const shoulderPress = new Workout(
  "Workout",
  "Shoulder-Press",
  "https://picsum.photos/id/237/200/300",
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

const plank = new Workout(
  "Workout",
  "Plank",
  "https://picsum.photos/id/237/200/300",
  30,
  null,
  null,
  null,
  ["Ellbogen unter Schultern", "Hüfte neutral, kein Hohlkreuz"],
  "Front-/Seitenschulter."
);

const heelElevatedSquats = new Workout(
  "Workout",
  "Heel-Elevated-Squats",
  "https://picsum.photos/id/237/200/300",
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

const gluteBridges = new Workout(
  "Workout",
  "Glute Bridges",
  "https://picsum.photos/id/237/200/300",
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

const boxSquats = new Workout(
  "Workout",
  "Box Squats",
  "https://picsum.photos/id/237/200/300",
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

const benchPress = new Workout(
  "Workout",
  "Bench Press",
  "https://picsum.photos/id/237/200/300",
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

const scapulaPushUp = new Workout(
  "Warmup",
  "Scapula Push-ups",
  "https://picsum.photos/id/237/200/300",
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

// exercises for Workout A

// Hip Hinge Mobilisation,Knee Raises + Ankle Mobility,Mini-Squats mit Armheben,Glute Activation (Glute Bridge),Scapula Push-ups,Leichter Satz Box Squats
// Box Squats, Glute Bridges, Bankdrücken, schulterdrücken,heel-elevated Squats, seitenheben, plank
// figure-4 stretch, quad stretch,Brustdehnung

const workoutA = [
  scapulaPushUp,
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
const cooldownB = [];

function linkWorkouts(workouts) {
  workouts.forEach((workout, index) => {
    workout.previousExercise = workouts[index - 1] || null;
    workout.nextExercise = workouts[index + 1] || null;
  });
}

linkWorkouts(workoutA);
