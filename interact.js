var wassup =
  "Hello! Welcome to a webpage that shines a brighter light on the life that is mine.";
console.log(wassup);

if (!localStorage.getItem(wassup)) {
  alert(wassup);
  localStorage.setItem(wassup, true);
}
