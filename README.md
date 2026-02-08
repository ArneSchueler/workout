# Workout

Simple, static workout helper for tracking a warmup + Workout A flow. It renders each exercise with an image, timer or reps, and lets you move forward/backward through the routine.

**What’s Inside**

1. Warmup + Workout A sequence defined in `js/workoutObject.js`.
2. A workout page that renders one exercise at a time with controls to navigate.
3. A lightweight timer UI for timed exercises.

**Project Structure**

1. `index.html` Home page with links to workout pages.
2. `pages/workoutPage.html` Workout view (exercise card, timer, reps, navigation).
3. `js/workoutObject.js` Exercise definitions and sequencing logic.
4. `js/workoutPage.js` Rendering and navigation logic.
5. `js/timer.js` Timer behavior.
6. `css/style.css` Styling.

**Run Locally**

1. Open `index.html` in your browser.
2. Click `Workout A` to start the flow.

**Customize**

1. Add or edit exercises in `js/workoutObject.js`.
2. Update images under `assets/images/gif/`.
3. Extend `workoutB` and link it into the UI when ready.

**Notes**

1. `Workout B` is currently empty; both buttons route to the same page.
2. Timed exercises show the timer; rep-based exercises show sets/reps.
