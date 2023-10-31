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
            fullName:"Aditya Kumar Ojha",
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
      {
        name:"Aid-to-President",
        members:[
          {
            id:"01",
            fullName:"Aadarsh Rai",
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
            fullName:"Areeb ur Rub",
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
            fullName:"Anurag Kumar Agrahari",
            mdxFile:""
          },
          {
            id:"D15",
            fullName:"Srishti Yadav",
            mdxFile:""
          },
          {
            id:"D15",
            fullName:"Shivansh Johari",
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
        ]
      },
      {
        name:"Management Team Head",
        members:[
          {
            id:"D21",
            fullName:"Arnav Katiyar",
            mdxFile:""
          },
          {
            id:"D12",
            fullName:"Saksham Gupta",
            mdxFile:""
          },
          
        ]
      },
      {
        name:"Performing Arts Head",
        members:[
          {
            id:"D21",
            fullName:"Bhavya Sinha",
            mdxFile:""
          },
          
        ]
      }
    ]
  },
  {
    id:"coordinators",
    name:"Coordinators",
    subGroups:[
      {
        name:"Club Service",
        members:[
          {
            id:"C01",
            fullName:"Abhay Singh",
            mdxFile:""
          },
          {
            id:"C02",
            fullName:"Ananya Gupta",
            mdxFile:""
          }
        ]
      },
      {
        name:"Community Service",
        members:[
          {
            id:"C03",
            fullName: "Shubham Pandey",
            mdxFile:""
          },
          {
            id:"C04",
            fullName:"Krishna Samrat Bajpai",
            mdxFile:""
          },
          {
            id:"C05",
            fullName:"Priyesh Singh",
            mdxFile:""
          }
        ]
      },
      {
        name:"Vocational Service",
        members:[
          {
            id:"C06",
            fullName:"Kritika Singh",
            mdxFile:""
          },
          {
            id:"C07",
            fullName:"Tripti",
            mdxFile:""
          }
        ]
      },
      {
        name:"International Service",
        members:[
          {
            id:"C09",
            fullName:"Rounak Sharma",
            mdxFile:""
          }
        ]
      },
      {
        name:"Literary Service",
        members:[
          {
            id:"C10",
            fullName:"Shivansh Nigam",
            mdxFile:""
          },
          {
            id:"C11",
            fullName:"Srishti Srivastava",
            mdxFile:""
          }
        ]
      },
      {
        name:"Multimedia Service",
        members:[
          {
            id:"C16",
            fullName:"Sonal Singh",
            mdxFile:""
          },
          {
            id:"C17",
            fullName:"Deepak Kushwaha",
            mdxFile:""
          },
          {
            id:"C18",
            fullName:"Pranav Raj",
            mdxFile:""
          }
        ]
      },
      {
        name:"Public Relation",
        members:[
          {
            id:"C12",
            fullName:"Naman Rusia",
            mdxFile:""
          },
          {
            id:"C13",
            fullName:"Ujjval Rajput",
            mdxFile:""
          },
          {
            id:"C14",
            fullName:"Devansh Srivastava",
            mdxFile:""
          }
        ]
      },
      {
        name:"Photography Service",
        members:[
          {
            id:"C15",
            fullName:"Ayaan Jaiswal",
            mdxFile:""
          },
          {
            id:"C15",
            fullName:"Shreyas Srivastava",
            mdxFile:""
          }
        ]
      },
      {
        name:"Social Media Services",
        members:[
          {
            id:"C16",
            fullName:"Aakanshi Garg",
            mdxFile:""
          },
          {
            id:"C17",
            fullName:"Urvashi Bajpai",
            mdxFile:""
          }
        ]
      },
      {
        name:"Management Team Coordinator",
        members:[
          {
            id:"C18",
            fullName:"Prachi Chaudhary",
            mdxFile:""
          },
          {
            id:"C19",
            fullName:"Dhruv Kumar Jha",
            mdxFile:""
          }
        ]
      },
      {
        name:"Performing Arts Coordinator",
        members:[
          {
            id:"C20",
            fullName:"Nandini Mittal",
            mdxFile:""
          },
          {
            id:"C21",
            fullName:"Samridh Kant Srivastava",
            mdxFile:""
          }
        ]
      }
    ]
  }
  ]
