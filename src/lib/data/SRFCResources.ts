import type { Feature } from "$lib/utils/types";

export default [
  {
    name: 'Support Services',
    resourceType: "srfc-support",
    description:
      "auntie na's village, MI Bridges Medicaid Application",
    image: 'images/features/markdown.jpg',
    tags: ["food", "water", "clothing", "medicine", "shelter", "educational programs"]
  },
  {
    name: 'Medical Testing and Screening Services',
    resourceType: "srfc-screenings",
    description:
      'bcccp, basha diagnostics',
    image: 'images/features/themeable.jpg',
    tags: ["medical imaging", "medical diagnostics", "breast/cervical screening"]
  },
  {
    name: 'Free Clinics',
    resourceType: "srfc-clinic",
    description:
      'huda clinic, malta clinic',
    image: 'images/features/themeable.jpg',
    tags: ["Primary Care", "Dental Care", "Mental Health Services", "Vision Care", "Specialty Care"]
  },
];