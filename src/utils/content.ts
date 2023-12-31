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
  links: [
    {
      name: "Thuis",
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
  title: "",
  subTitle: "",
  ctaText1: "",
  ctaText2: "",
};

export const featuresComponent = {
  features: [
    {
      icon: (className: string) => bulb(className),
      title: "Creative Gedachten",
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
      title: "Exclusieve Coach",
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
