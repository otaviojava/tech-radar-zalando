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
    { name: "Infrastructure" },
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
        label: "AWS EMR",
        active: false,
        moved: 0
      },
      {
        quadrant: 3,
        ring: 1,
        label: "Google BigQuery",
        active: false,
        moved: 0
      },
      {
        quadrant: 3,
        ring: 2,
        label: "Hadoop",
        active: false,
        moved: 0
      },
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
        link: "https://engineering.zalando.com/tags/cassandra.html",
        moved: 0
      },
      {
        quadrant: 3,
        ring: 0,
        label: "Elasticsearch",
        active: false,
        link: "https://engineering.zalando.com/tags/elasticsearch.html",
        moved: 0
      },
      {
        quadrant: 3,
        ring: 0,
        label: "PostgreSQL",
        active: false,
        link: "https://engineering.zalando.com/tags/postgresql.html",
        moved: 0
      },
      {
        quadrant: 3,
        ring: 0,
        label: "Redis",
        active: false,
        link: "https://engineering.zalando.com/tags/redis.html",
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
        quadrant: 3,
        ring: 2,
        label: "Google Bigtable",
        active: false,
        moved: 0
      },
      {
        quadrant: 3,
        ring: 3,
        label: "CouchBase",
        active: false,
        moved: 0
      },
      {
        quadrant: 3,
        ring: 3,
        label: "Memcached",
        active: false,
        moved: 0
      },
      {
        quadrant: 3,
        ring: 3,
        label: "MongoDB",
        active: false,
        moved: 0
      },
      {
        quadrant: 3,
        ring: 3,
        label: "MySQL",
        active: false,
        moved: 0
      },
      {
        quadrant: 3,
        ring: 3,
        label: "Oracle DB",
        active: false,
        moved: 0
      },
      {
        quadrant: 3,
        ring: 3,
        label: "ZooKeeper",
        active: false,
        moved: 0
      },
      {
        quadrant: 2,
        ring: 0,
        label: "Node.js",
        active: false,
        link: "https://engineering.zalando.com/tags/nodejs.html",
        moved: 0
      },
      {
        quadrant: 2,
        ring: 0,
        label: "Spring",
        active: false,
        moved: 0
      },
      {
        quadrant: 2,
        ring: 1,
        label: "Angular",
        active: false,
        link: "https://engineering.zalando.com/tags/angular.html",
        moved: 0
      },
      {
        quadrant: 2,
        ring: 1,
        label: "AspectJ",
        active: false,
        moved: 0
      },
      {
        quadrant: 2,
        ring: 1,
        label: "Camel",
        active: false,
        moved: 0
      },
      {
        quadrant: 2,
        ring: 1,
        label: "Thymeleaf",
        active: false,
        moved: 0
      },
      {
        quadrant: 2,
        ring: 2,
        label: "gRPC",
        active: false,
        moved: 0
      },
      {
        quadrant: 2,
        ring: 2,
        label: "jOOQ",
        active: false,
        moved: 0
      },
      {
        quadrant: 2,
        ring: 3,
        label: "Drools",
        active: false,
        moved: 0
      },
      {
        quadrant: 1,
        ring: 0,
        label: "Docker",
        active: false,
        link: "https://engineering.zalando.com/tags/docker.html",
        moved: 0
      },
      {
        quadrant: 1,
        ring: 0,
        label: "Hystrix",
        active: false,
        moved: 0
      },
      {
        quadrant: 1,
        ring: 0,
        label: "Kubernetes",
        active: false,
        link: "https://engineering.zalando.com/tags/kubernetes.html",
        moved: 0
      },
      {
        quadrant: 1,
        ring: 0,
        label: "Nginx",
        active: false,
        moved: 0
      },
      {
        quadrant: 1,
        ring: 0,
        label: "OpenTracing",
        active: false,
        moved: 1
      },
      {
        quadrant: 1,
        ring: 0,
        label: "Tomcat",
        active: false,
        moved: 0
      },
      {
        quadrant: 1,
        ring: 1,
        label: "Undertow",
        active: false,
        moved: 0
      },
      {
        quadrant: 1,
        ring: 2,
        label: "AWS Lambda",
        active: false,
        moved: 0
      },
      {
        quadrant: 0,
        ring: 0,
        label: "Go",
        active: true,
        link: "https://engineering.zalando.com/tags/golang.html",
        moved: 0
      },
      {
        quadrant: 0,
        ring: 0,
        label: "Java",
        active: true,
        link: "https://engineering.zalando.com/tags/java.html",
        moved: 0
      },
      {
        quadrant: 0,
        ring: 0,
        label: "JavaScript",
        active: true,
        link: "https://engineering.zalando.com/tags/javascript.html",
        moved: 0
      },
      {
        quadrant: 0,
        ring: 0,
        label: "OpenAPI (Swagger)",
        active: true,
        link: "https://engineering.zalando.com/tags/openapi.html",
        moved: 0
      },
      {
        quadrant: 0,
        ring: 0,
        label: "Python",
        active: true,
        link: "https://engineering.zalando.com/tags/python.html",
        moved: 0
      },
      {
        quadrant: 0,
        ring: 0,
        label: "Swift",
        active: true,
        link: "https://engineering.zalando.com/tags/swift.html",
        moved: 0
      },
      {
        quadrant: 0,
        ring: 1,
        label: "GraphQL",
        active: true,
        link: "https://engineering.zalando.com/tags/graphql.html",
        moved: 1
      },
      {
        quadrant: 0,
        ring: 1,
        label: "Kotlin",
        active: true,
        moved: 0
      },
      {
        quadrant: 0,
        ring: 1,
        label: "TypeScript",
        active: true,
        link: "https://engineering.zalando.com/tags/typescript.html",
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
        link: "https://engineering.zalando.com/tags/kafka.html",
        moved: 0
      },
      {
        quadrant: 3,
        ring: 1,
        label: "RabbitMQ",
        active: false,
        link: "https://engineering.zalando.com/tags/rabbitmq.html",
        moved: 0
      },
      {
        quadrant: 3,
        ring: 3,
        label: "ActiveMQ",
        active: false,
        moved: 0
      },
      {
        quadrant: 3,
        ring: 3,
        label: "HornetQ",
        active: false,
        moved: 0
      },
  ]
  //ENTRIES
});