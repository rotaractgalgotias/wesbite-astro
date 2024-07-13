interface SubGroup {
  name: string;
  members: {
    id: string;
    fullName: string;
    mdxFile: string;
  }[];
}

interface Team {
  id: string;
  name: string;
  subGroups: SubGroup[];
}

export const TeamData: Team[] = [
  {
    id: "council",
    name: "Board Council 2023-24",
    subGroups: [
      {
        name: "President",
        members: [
          {
            id: "01",
            fullName: "Ashish Kumar Gupta",
            mdxFile: "",
          },
        ],
      },
      {
        name: "Secretary",
        members: [
          {
            id: "01",
            fullName: "Unnati Agarwal",
            mdxFile: "",
          },
        ],
      },
      {
        name: "Vice President",
        members: [
          {
            id: "01",
            fullName: "Aditya Kumar Ojha",
            mdxFile: "",
          },
        ],
      },
      {
        name: "Joint Secretary",
        members: [
          {
            id: "01",
            fullName: "Yashica Chauhan",
            mdxFile: "",
          },
        ],
      },
      {
        name: "Treasurer",
        members: [
          {
            id: "01",
            fullName: "Indu Banerjee",
            mdxFile: "",
          },
        ],
      },
      {
        name: "Sergeant-at-Arms",
        members: [
          {
            id: "01",
            fullName: "Rohit Saini",
            mdxFile: "",
          },
        ],
      },
      {
        name: "Aid-to-President",
        members: [
          {
            id: "01",
            fullName: "Aadarsh Rai",
            mdxFile: "",
          },
        ],
      },
    ],
  },
  {
    id: "council",
    name: "Board Council 2022-23",
    subGroups: [
      {
        name: "President",
        members: [
          {
            id: "01",
            fullName: "Prachee Singh",
            mdxFile: "",
          },
        ],
      },
      {
        name: "Secretary",
        members: [
          {
            id: "01",
            fullName: "Rudransh Tripathi",
            mdxFile: "",
          },
        ],
      },
      {
        name: "Vice President",
        members: [
          {
            id: "01",
            fullName: "Harshit Ratnam",
            mdxFile: "",
          },
        ],
      },
      {
        name: "Joint Secretary",
        members: [
          {
            id: "01",
            fullName: "Vaishnav Sharan",
            mdxFile: "",
          },
        ],
      },
      {
        name: "Treasurer",
        members: [
          {
            id: "01",
            fullName: "Kalash Gupta",
            mdxFile: "",
          },
        ],
      },
      {
        name: "Sergeant-at-Arms",
        members: [
          {
            id: "01",
            fullName: "Rashi Srivastava",
            mdxFile: "",
          },
        ],
      },
    ],
  },
  {
    id: "council",
    name: "Board Council 2021-22",
    subGroups: [
      {
        name: "President",
        members: [
          {
            id: "01",
            fullName: "Bhavyaa Shree",
            mdxFile: "",
          },
        ],
      },
      {
        name: "Secretary",
        members: [
          {
            id: "01",
            fullName: "Kajol Malik",
            mdxFile: "",
          },
        ],
      },
      {
        name: "Vice President",
        members: [
          {
            id: "01",
            fullName: "Diksha Arora",
            mdxFile: "",
          },
        ],
      },
      {
        name: "Joint Secretary",
        members: [
          {
            id: "01",
            fullName: "Rishabh Singh",
            mdxFile: "",
          },
        ],
      },
      {
        name: "Treasurer",
        members: [
          {
            id: "01",
            fullName: "Shivam Kanaujia",
            mdxFile: "",
          },
        ],
      },
      {
        name: "Sergeant-at-Arms",
        members: [
          {
            id: "01",
            fullName: "Prateek Dayal",
            mdxFile: "",
          },
        ],
      },
      {
        name: "Public Relation Officer",
        members: [
          {
            id: "01",
            fullName: "Asghar Abbas",
            mdxFile: "",
          },
        ],
      },
    ],
  },
];
