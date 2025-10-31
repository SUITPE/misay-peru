export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Griferías",
    description: "Elegantes y funcionales, nuestras griferías están diseñadas para complementar cualquier estilo de baño o cocina.",
    image: "/assets/images/griferias.jpg"
  },
  {
    id: 2,
    name: "Sanitarios",
    description: "Ofrecemos una variedad de sanitarios que combinan diseño y eficiencia, asegurando comodidad y durabilidad.",
    image: "/assets/images/sanitarios.jpg"
  },
  {
    id: 3,
    name: "Pisos",
    description: "Disponemos de pisos de todo tipo, desde cerámicos y porcelanatos hasta laminados y vinílicos, ideales para cualquier ambiente.",
    image: "/assets/images/pisos.jpg"
  },
  {
    id: 4,
    name: "Revestimientos",
    description: "Encuentra revestimientos de alta calidad para paredes y suelos, perfectos para darle un toque distintivo a tus espacios.",
    image: "/assets/images/revestimientos.jpg"
  },
  {
    id: 5,
    name: "Equipamiento de Cocina",
    description: "Nuestra selección de equipamiento de cocina incluye también fregaderos, campanas extractoras y más, todo pensado para facilitar tus tareas diarias y mejorar la estética de tu cocina.",
    image: "/assets/images/equipamiento-cocina.jpg"
  }
];
