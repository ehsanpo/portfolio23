const data = [
  {
    id: "1",
    title: "Total commits this year",
    desciption: "1100",
    icon: (
      <svg
        width={24}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block w-8 h-8 stroke-current"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 10V3L4 14h7v7l9-11h-7z"
        ></path>
      </svg>
    ),
  },
  {
    id: "1",
    title: "Most productive during",
    desciption: "Daytime",
    icon: (
      <svg
        width={24}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block w-8 h-8 stroke-current"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 10V3L4 14h7v7l9-11h-7z"
        ></path>
      </svg>
    ),
  },
  {
    id: "1",
    title: "Most productive on",
    desciption: "Tuesdays",
    icon: (
      <svg
        width={24}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block w-8 h-8 stroke-current"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 10V3L4 14h7v7l9-11h-7z"
        ></path>
      </svg>
    ),
  },
  {
    id: "1",
    title: "naming variables",
    desciption: "snake_case",
    icon: (
      <svg
        width={24}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block w-8 h-8 stroke-current"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 10V3L4 14h7v7l9-11h-7z"
        ></path>
      </svg>
    ),
  },
];

export default function stats() {
  return (
    <div className="stats shadow">
      {data.map((stat, index) => (
        <div className="stat" key={index}>
          <div className="stat-figure text-primary">{stat.icon}</div>
          <div className="stat-title">{stat.title}</div>
          <div className="stat-value text-primary">{stat.desciption}</div>
        </div>
      ))}
    </div>
  );
}
