radar_visualization({
  svg_id: "radar",
  width: 1450,
  height: 1000,
  colors: {
    background: "#fff",
    grid: "#bbb",
    inactive: "#ddd"
  },
  title: "Xgeeks Tech Radar — 2021.01",
  quadrants: [
    { name: "Languages" },
    { name: "Architecture and Design" },
    { name: "Frameworks" },
    { name: "Data Management" }
  ],
  rings: [
    { name: "ADOPT", color: "#93c47d" },
    { name: "TRIAL", color: "#93d2c2" },
    { name: "ASSESS", color: "#fbdb84" },
    { name: "HOLD", color: "#efafa9" }
  ],
  print_layout: true,
  // zoomed_quadrant: 0,
  //ENTRIES
  entries: [
      {
        quadrant: 3,
        ring: 0,
        label: "AWS S3",
        active: false,
        moved: 0
      },
      {
        quadrant: 3,
        ring: 0,
        label: "Cassandra",
        active: false,
        moved: 0
      },
      {
        quadrant: 3,
        ring: 0,
        label: "Elasticsearch",
        active: false,
        moved: 0
      },
      {
        quadrant: 3,
        ring: 0,
        label: "PostgreSQL",
        active: false,
        moved: 0
      },
      {
        quadrant: 3,
        ring: 0,
        label: "Redis",
        active: false,
        moved: 0
      },
      {
        quadrant: 3,
        ring: 0,
        label: "Solr",
        active: false,
        moved: 0
      },
      {
        quadrant: 2,
        ring: 0,
        label: "Node.js",
        active: false,
        moved: 0
      },
      {
        quadrant: 2,
        ring: 0,
        label: "Spring",
        active: false,
        link: "https://medium.com/xgeeks/tagged/spring",
        moved: 0
      },
      {
        quadrant: 2,
        ring: 0,
        label: "Hibernate",
        active: false,
        moved: 0
      },
      {
        quadrant: 2,
        ring: 0,
        label: "Lavarel",
        active: false,
        link: "https://medium.com/xgeeks/tagged/laravel",
        moved: 0
      },
      {
        quadrant: 1,
        ring: 0,
        label: "Microservices",
        active: false,
        moved: 0
      },
      {
        quadrant: 1,
        ring: 0,
        label: "DDD",
        active: false,
        moved: 1
      },
      {
        quadrant: 1,
        ring: 0,
        label: "REST",
        active: false,
        moved: 1
      },
      {
        quadrant: 0,
        ring: 0,
        label: "Go",
        active: true,
        moved: 0
      },
      {
        quadrant: 0,
        ring: 0,
        label: "Java 8",
        active: true,
        moved: 0
      },
      {
        quadrant: 0,
        ring: 0,
        label: "Kotlin",
        active: true,
        moved: 0
      },
      {
        quadrant: 0,
        ring: 0,
        label: "Java 11",
        active: true,
        moved: 0
      },
      {
        quadrant: 0,
        ring: 0,
        label: "JavaScript",
        active: true,
        moved: 0
      },
      {
        quadrant: 0,
        ring: 0,
        label: "Python",
        active: true,
        moved: 0
      },
      {
        quadrant: 0,
        ring: 0,
        label: "PHP",
        active: true,
        moved: 0
      },
      {
        quadrant: 3,
        ring: 0,
        label: "AWS SQS",
        active: false,
        moved: 0
      },
      {
        quadrant: 3,
        ring: 0,
        label: "Kafka",
        active: false,
        moved: 0
      }
  ]
  //ENTRIES
});