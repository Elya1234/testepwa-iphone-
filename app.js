const container = document.querySelector(".container")
const coffees = [
  { name: "Perspiciatis", image: "imgpoco.jpg" },
  { name: "Voluptatem", image: "imgpoco.jpg" },
  { name: "Explicabo", image: "imgpoco.jpg" },
  { name: "Rchitecto", image: "imgpoco.jpg" },
  { name: " Beatae", image: "imgpoco.jpg" },
  { name: " Vitae", image: "imgpoco.jpg" },
  { name: "Inventore", image: "imgpoco.jpg" },
  { name: "Veritatis", image: "imgpoco.jpg" },
  { name: "Accusantium", image: "imgpoco.jpg" },
]
const showCoffees = () => {
  let output = ""
  coffees.forEach(
    ({ name, image }) =>
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href="#">Taste</a>
              </div>
              `)
  )
  container.innerHTML = output
}

document.addEventListener("DOMContentLoaded", showCoffees)
