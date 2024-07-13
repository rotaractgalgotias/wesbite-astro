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
            fullName:"Ananya Gupta",
            mdxFile:""
          },
          {
            id:"D02",
            fullName:"Prachi Singh",
            mdxFile:""
          }
        ]
      },
      {
        name:"Community Service",
        members:[
          {
            id:"D03",
            fullName:"Dhruv Jha",
            mdxFile:""
          },
          {
            id:"D04",
            fullName:"Priyesh Singh",
            mdxFile:""
          },
          {
            id:"D05",
            fullName:"Shubham Pandey",
            mdxFile:""
          }
        ]
      },
      {
        name:"Vocational Service",
        members:[
          {
            id:"D06",
            fullName:"Kritika Singh",
            mdxFile:""
          },
          {
            id:"D07",
            fullName:"Aditya Garg",
            mdxFile:""
          }
        ]
      },
      {
        name:"International Service",
        members:[
          {
            id:"D08",
            fullName:"Shubham Singh",
            mdxFile:""
          },
          {
            id:"D09",
            fullName:"Rashi Gupta",
            mdxFile:""
          },
          {
            id:"D010",
            fullName:"Prashant Joshi",
            mdxFile:""
          }
        ]
      },
      {
        name:"Literary Service",
        members:[
          {
            id:"D11",
            fullName:"Shrishti Shrivastava",
            mdxFile: ""
          },
          {
            id:"D12",
            fullName:"Shivansh Nigam",
            mdxFile:""
          }
        ]
      },
      {
        name:"Multimedia Service",
        members:[
          {
            id:"D18",
            fullName:"Akansha Choudhary",
            mdxFile:""
          },
          {
            id:"D19",
            fullName:"Pranav Raj",
            mdxFile:""
          },
          {
            id:"D20",
            fullName:"Anirudh Singh",
            mdxFile:""
          }
        ]
      },
      {
        name:"Public Relation Services",
        members:[
          {
            id:"D13",
            fullName:"Devansh Shrivasava",
            mdxFile:""
          },
          {
            id:"D15",
            fullName:"Sanskar Jaiswal",
            mdxFile:""
          },
          {
            id:"D15",
            fullName:"Vikas Singh",
            mdxFile:""
          }
        ]
      },
      {
        name:"Photography Service",
        members:[
          {
            id:"D16",
            fullName:"Shreyash Srivastava",
            mdxFile:""
          },
          {
            id:"D17",
            fullName:"Rachit Katiyar",
            mdxFile:""
          }
        ]
      },
      {
        name:"Social Media",
        members:[
          {
            id:"D21",
            fullName:"Urvashi Bajpai",
            mdxFile:""
          },
          {
            id:"D22",
            fullName:"Aakanshi Garg",
            mdxFile:""
          }
        ]
      },
      {
        name:"Management Team Head",
        members:[
          {
            id:"D21",
            fullName:"Krishna Samrat Bajpai",
            mdxFile:""
          },
          {
            id:"D12",
            fullName:"Abhishek Singh",
            mdxFile:""
          },
          
        ]
      },
      {
        name:"Performing Arts Head",
        members:[
          {
            id:"D21",
            fullName:"Samridh Srivastava",
            mdxFile:""
          },
          {
            id:"D23",
            fullName:"Nandani Mittal",
            mdxFile:""
          }          
        ]
      },
      {
        name:"Techincal Services",
        members:[
          {
            id:"D24",
            fullName:"Utkarsh Khare",
            mdxFile:""
          }
        ]
      }
    ]
  }
  ]
