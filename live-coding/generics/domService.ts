// function el<T>(ref: string): T {
//   const element = document.querySelector(ref);

//   if(element == null) throw new Error("Element not found: " + ref);

//   return element as T;
// }

function el<T extends Element>(ref: string): T {
  const element = document.querySelector(ref);

  if(element == null) throw new Error("Element not found: " + ref);

  //@ts-ignore (onödig kastning, T extends Element garanterar redan att T är av typen Element)
  return element;
}


//const submitBtn = document.querySelector<HTMLButtonElement>(".submit-btn");
const submitBtn = el<HTMLButtonElement>(".submit-btn");


submitBtn.click();