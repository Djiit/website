export const onKonami = function (f, a?) {
  document.onkeyup = function (e) {
    /113302022928$/.test((a += [(e || (self.event as any)).keyCode - 37])) &&
      f();
  };
};
