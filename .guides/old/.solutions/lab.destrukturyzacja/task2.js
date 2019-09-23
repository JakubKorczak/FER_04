/**
 * Stwórzcie obiekt slider, taki jak poniżej:
 *  const slider = {
 *      type: "infinite",
 *      numberOfItems: 10,
 *      center: true,
 *      autoStart: true
 *  }
 *
 *  Podstawcie do zmiennych type oraz autoStart odpowiednie wartości z obiektu slider.
 */

const slider = {
          type: "infinite",
          numberOfItems: 10,
          center: true,
          autoStart: true
};

let {autoStart, type} = slider;
console.log(autoStart);
console.log(type);
