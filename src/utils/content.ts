import {
  bulb,
  circleNumber1,
  circleNumber2,
  circleNumber3,
  circleNumber4,
  circleNumber5,
  circleNumber6,
  deviceTvOld,
  school,
} from "@/icons";

export const navbarComponent = {
  logo: "/assets/images/logo.png",
  ctaText1: "In Loggen",
  ctaText2: "Registreren",
  links: [
    {
      name: "Home",
      path: "#home",
    },
    {
      name: "Diensten",
      path: "#features",
    },
    {
      name: "Cursussen",
      path: "#courses",
    },
    {
      name: "Contact",
      path: "#contact",
    },
  ],
};

export const heroComponent = {
  title: "1x24uur Rekenbijlessen",
  subTitle: ` Samen met De Molen N.V. zorgen wij van Bijles.sr ervoor, dat alle
            Surinaamse leerlingen op GLO niveau gratis rekenbijles kunnen
            volgen. In de tussentijd breiden wij ons lesmateriaal uit ter
            voorbereiding op het nieuw schooljaar.`,
  ctaText: "Bekijk de Lessen",
  imageSlider: [
    { src: "/assets/images/education.png", title: "First Image" },
    { src: "/assets/images/educator.png", title: "Second Image" },
    { src: "/assets/images/graduation.png", title: "Third Image" },
  ],
};

export const featuresComponent = {
  features: [
    {
      icon: (className: string) => bulb(className),
      title: "1x24 uur Lessen",
      description:
        "Lorem sed risus ultricies tristique nulla. Id cursus metus aliquam eleifend mi in nulla. Ipsum consequat nisl vel pretium lectus quam id leo in.",
    },
    {
      icon: (className: string) => deviceTvOld(className),
      title: "Video Uitleg",
      description:
        "Vivamus arcu felis bibendum ut tristique et egestas quis. Interdum velit euismod in pellentesque massa placerat duis ultricies lacus. Viverra maecenas accumsan lacus vel facilisis volutpat est.",
    },
    {
      icon: (className: string) => school(className),
      title: "Educatieve spelletjes ",
      description:
        "Sed vulputate odio ut enim blandit volutpat maecenas volutpat. Suspendisse faucibus interdum posuere lorem ipsum. Aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices.",
    },
  ],
};

export const coursesComponent = {
  courses: [
    {
      image: "/assets/images/education.png",
      durationInHours: 7,
      icon: (className: string) => circleNumber1(className),
      title: "Groep 1",
      description: "",
      reviews: "",
      rating: 3,
    },
    {
      image: "/assets/images/education.png",
      durationInHours: 10,
      icon: (className: string) => circleNumber2(className),
      title: "Groep 2",
      description: "",
      reviews: "",
      rating: 4,
    },
    {
      image: "/assets/images/education.png",
      durationInHours: 3,
      icon: (className: string) => circleNumber3(className),
      title: "Groep 3",
      description: "",
      reviews: "",
      rating: 3,
    },
    {
      image: "/assets/images/education.png",
      durationInHours: 8,
      icon: (className: string) => circleNumber4(className),
      title: "Groep 4",
      description: "",
      reviews: "",
      rating: 4.5,
    },
    {
      image: "/assets/images/education.png",
      durationInHours: 14,
      icon: (className: string) => circleNumber5(className),
      title: "Groep 5",
      description: "",
      reviews: "",
      rating: 2.5,
    },
    {
      image: "/assets/images/education.png",
      durationInHours: 4,
      icon: (className: string) => circleNumber6(className),
      title: "Groep 6",
      description: "",
      reviews: "",
      rating: 5,
    },
  ],
};

export const notFoundComponent = {
  title: "Title1",
  subTitle: "",
  links: [{ name: "Thuis", path: "/" }],
};
