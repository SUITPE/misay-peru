export interface Service {
  id: number;
  name: string;
  description: string;
  image: string;
}

export const services: Service[] = [
  {
    id: 1,
    name: "Fotografía sobre microhormigón",
    description: "Texturas para paredes, madera, estructuras metálicas y pisos. Trabajos en microcemento, microhormigón y diseños exclusivos como el fotoconcreto.",
    image: "/assets/images/servicio-microhormigon.jpg"
  }
];
