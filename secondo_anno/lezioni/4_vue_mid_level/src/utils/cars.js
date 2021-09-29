const cars = [
  {
    id: 0,
    img:
    "https://assets-eu-01.kc-usercontent.com/bb5aba31-d98c-0160-8548-418b3723c58e/7174faa9-9294-44b0-8b39-4fa1f6e7275c/Toyota%20Auris%20(4).jpg",
    model: {
      brand: "Toyota",
      name: "Auris Hybrid"
    },
    green: true,
    price: 12900,
    cilindrata: 1400,
    mileage: 93000,
    fuel_type: "benzina",
    power_cv: 136,
    power_kw: 100,
    transmission_type: "automatico",
    matriculation: {
      month: 1,
      year: 2015
    }
  },
  {
    id: 1,
    img:
    "https://prod.pictures.autoscout24.net/listing-images/48e250cc-89da-496d-a5ec-556bc35b0fa0_9d7cdebe-a928-4c94-ad29-79abf972b0c4.jpg/420x315.jpg",
    model: {
      brand: "Tesla",
      name: "Model 3"
    },
    green: true,
    price: 41000,
    cilindrata: 0,
    mileage: 41000,
    fuel_type: "elettrico",
    power_cv: 208,
    power_kw: 153,
    transmission_type: "automatico",
    matriculation: {
      month: 1,
      year: 2019
    }
  },
  {
    id: 2,
    img:
    "https://prod.pictures.autoscout24.net/listing-images/dfa52485-4342-487e-85f3-1bf8221d11ae_c521573b-41fb-4c19-abbf-1df2a4a15d59.jpg/420x315.jpg",
    model: {
      brand: "Fiat",
      name: "Panda Young"
    },
    green: false,
    price: 1490,
    cilindrata: 1400,
    mileage: 237000,
    fuel_type: "benzina",
    power_cv: 54,
    power_kw: 40,
    transmission_type: "manuale",
    matriculation: {
      month: 5,
      year: 2002
    }
  }
];

export default cars;
