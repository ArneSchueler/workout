const workoutTypeElement = document.getElementById("workoutType");

const exerciseNameElement = document.getElementById("exerciseName");
const exerciseImgElement = document.getElementById("exerciseImg");

const timerWrapperElement = document.getElementById("timerWrapper");
const timerValueElement = document.getElementById("timerValue");

const repetitionWrapperElement = document.getElementById("repetitionWrapper");
const repValueElement = document.getElementById("repValue");
const setValueElementf = document.getElementById("setValue");

const exerciseDescriptionListElement = document.getElementById(
  "exerciseDescriptionList"
);

const exerciseUseElement = document.getElementById("exerciseUse");

let currentWorkout = workoutA[0];

renderWorkout(currentWorkout);

function renderWorkout(workout) {
  console.log(workout.exerciseName);
  console.log(workout.exerciseImg);

  workoutTypeElement.textContent = workout.workoutType;

  exerciseNameElement.textContent = workout.exerciseName;
  exerciseImgElement.src = workout.exerciseImg;
  exerciseImgElement.alt = workout.exerciseName;

  console.log(workout.exerciseName);
  if (workout.exerciseTimer !== null) {
    timerWrapperElement.style.display = "flex";
    timerValueElement.textContent = workout.exerciseTimer;
  } else {
    timerWrapperElement.style.display = "none";
  }

  if (workout.sets !== null) {
    repetitionWrapperElement.style.display = "flex";
    repValueElement.textContent = workout.repsMin + "-" + workout.repsMax;
    setValueElementf.textContent = workout.sets;
  } else {
    repetitionWrapperElement.style.display = "none";
  }

  exerciseDescriptionListElement.innerHTML = "";

  workout.exerciseDescription.forEach((element, index) => {
    const step = document.createElement("li");
    console.log(element);
    step.textContent = element;
    exerciseDescriptionListElement.append(step);
  });

  exerciseUseElement.textContent = workout.exerciseUse;
}

btnNext.addEventListener("click", () => {
  console.log("next");
  console.log(currentWorkout);

  if (!currentWorkout.nextExercise) return;
  currentWorkout = currentWorkout.nextExercise;
  console.log(currentWorkout);
  renderWorkout(currentWorkout);
});

btnPrev.addEventListener("click", () => {
  console.log("prev");
  if (!currentWorkout.previousExercise) return;
  currentWorkout = currentWorkout.previousExercise;
  renderWorkout(currentWorkout);
});
