interface SubGroup{
  name: string;
  members : {
    id:string,
    fullName : string,
    mdxFile : string
  }[]
}

interface Team {
  id: string;
  name: string;
  subGroups: SubGroup[];
}

export const TeamData:Team[] = [
  {
    id:"council",
    name:"Board Council",
    subGroups:[
      {
        name:"President",
        members:[
          {
            id:"01",
            fullName:"Ashish Kumar Gupta",
            mdxFile:""
          }
        ]
      },
      {
        name:"Secretary",
        members:[
          {
            id:"01",
            fullName:"Unnati Agarwal",
            mdxFile:""
          }
        ]
      },
      {
        name:"Vice President",
        members:[
          {
            id:"01",
            fullName:"Aditya Ojha",
            mdxFile:""
          }
        ]
      },
      {
        name:"Joint Secretary",
        members:[
          {
            id:"01",
            fullName:"Yashica Chauhan",
            mdxFile:""
          }
        ]
      },
      {
        name:"Treasurer",
        members:[
          {
            id:"01",
            fullName:"Indu Banerjee",
            mdxFile:""
          }
        ]
      },
      {
        name:"Sergeant-at-Arms",
        members:[
          {
            id:"01",
            fullName:"Rohit Saini",
            mdxFile:""
          }
        ]
      },
    ]
  },
  {
    id:"directors",
    name:"Board of Directors",
    subGroups:[
      {
        name:"Club Service",
        members:[
          {
            id:"D01",
            fullName:"Ankita Shukla",
            mdxFile:""
          },
          {
            id:"D02",
            fullName:"Pratyaksh Kumar",
            mdxFile:""
          }
        ]
      },
      {
        name:"Community Service",
        members:[
          {
            id:"D03",
            fullName:"Divyanshu Katiyar",
            mdxFile:""
          },
          {
            id:"D04",
            fullName:"Yash Gupta",
            mdxFile:""
          },
          {
            id:"D05",
            fullName:"Yash Sharma",
            mdxFile:""
          }
        ]
      },
      {
        name:"Vocational Service",
        members:[
          {
            id:"D06",
            fullName:"Khushi Bhati",
            mdxFile:""
          },
          {
            id:"D07",
            fullName:"Sahil Bhatia",
            mdxFile:""
          }
        ]
      },
      {
        name:"International Service",
        members:[
          {
            id:"D08",
            fullName:"Aman Wadhwani",
            mdxFile:""
          },
          {
            id:"D09",
            fullName:"Sanket Gupta",
            mdxFile:""
          },
          {
            id:"D010",
            fullName:"Shivendra Pratap Singh",
            mdxFile:""
          }
        ]
      },
      {
        name:"Literary Service",
        members:[
          {
            id:"D11",
            fullName:"Aruhi Pallavi",
            mdxFile: ""
          },
          {
            id:"D12",
            fullName:"Niharika Srivastava",
            mdxFile:""
          }
        ]
      },
      {
        name:"Multimedia Service",
        members:[
          {
            id:"D18",
            fullName:"Areeb Ur Rub",
            mdxFile:""
          },
          {
            id:"D19",
            fullName:"Raunak Gupta",
            mdxFile:""
          },
          {
            id:"D20",
            fullName:"Ritik Varshney",
            mdxFile:""
          }
        ]
      },
      {
        name:"Public Relation Services",
        members:[
          {
            id:"D13",
            fullName:"Anurag Agrahari",
            mdxFile:""
          },
          {
            id:"D14",
            fullName:"Thakur Manu Chauhan",
            mdxFile:""
          },
          {
            id:"D15",
            fullName:"Srishti Yadav",
            mdxFile:""
          }
        ]
      },
      {
        name:"Photography Service",
        members:[
          {
            id:"D16",
            fullName:"Ayan Khalid",
            mdxFile:""
          },
          {
            id:"D17",
            fullName:"Anurag Kaushik",
            mdxFile:""
          }
        ]
      },
      {
        name:"Social Media",
        members:[
          {
            id:"D21",
            fullName:"Isha Srivastava",
            mdxFile:""
          },
          {
            id:"D12",
            fullName:"Tanay Mishra",
            mdxFile:""
          },
        ]
      }
    ]
  },
  // {
  //   id:"coordinators",
  //   name:"Coordinators",
  //   subGroups:[
  //     {
  //       name:"Club Service",
  //       members:[
  //         {
  //           id:"C01",
  //           fullName:"Ankita Shukla",
  //           mdxFile:""
  //         },
  //         {
  //           id:"C02",
  //           fullName:"Isha Srivastava",
  //           mdxFile:""
  //         }
  //       ]
  //     },
  //     {
  //       name:"Community Service",
  //       members:[
  //         {
  //           id:"C03",
  //           fullName: "Aman Wadhwani",
  //           mdxFile:""
  //         },
  //         {
  //           id:"C04",
  //           fullName:"Divyanshu Katiyar",
  //           mdxFile:""
  //         },
  //         {
  //           id:"C05",
  //           fullName:"Yash Gupta",
  //           mdxFile:""
  //         }
  //       ]
  //     },
  //     {
  //       name:"Vocational Service",
  //       members:[
  //         {
  //           id:"C06",
  //           fullName:"Yash Verma",
  //           mdxFile:""
  //         },
  //         {
  //           id:"C07",
  //           fullName:"Aruhi Pallavi",
  //           mdxFile:""
  //         }
  //       ]
  //     },
  //     {
  //       name:"International Service",
  //       members:[
  //         {
  //           id:"C08",
  //           fullName:"Shivendra Pratap Singh",
  //           mdxFile:""
  //         },
  //         {
  //           id:"C09",
  //           fullName:"Sanket Gupta",
  //           mdxFile:""
  //         }
  //       ]
  //     },
  //     {
  //       name:"Literary Service",
  //       members:[
  //         {
  //           id:"C10",
  //           fullName:"Tanay Mishra",
  //           mdxFile:""
  //         },
  //         {
  //           id:"C11",
  //           fullName:"Numair Pandit",
  //           mdxFile:""
  //         }
  //       ]
  //     },
  //     {
  //       name:"Multimedia Service",
  //       members:[
  //         {
  //           id:"C16",
  //           fullName:"Raunak Gupta",
  //           mdxFile:""
  //         },
  //         {
  //           id:"C17",
  //           fullName:"Areeb Ur Rub",
  //           mdxFile:""
  //         },
  //         {
  //           id:"C18",
  //           fullName:"Ritik Varshney",
  //           mdxFile:""
  //         }
  //       ]
  //     },
  //     {
  //       name:"Membership Growth",
  //       members:[
  //         {
  //           id:"C12",
  //           fullName:"Thakur Manu Chauhan",
  //           mdxFile:""
  //         },
  //         {
  //           id:"C13",
  //           fullName:"Srishti Yadav",
  //           mdxFile:""
  //         },
  //         {
  //           id:"C14",
  //           fullName:"Krishna Gupta",
  //           mdxFile:""
  //         }
  //       ]
  //     },
  //     {
  //       name:"Photography Service",
  //       members:[
  //         {
  //           id:"C15",
  //           fullName:"Shweta Yadav",
  //           mdxFile:""
  //         }
  //       ]
  //     }
  //   ]
  // }
  ]