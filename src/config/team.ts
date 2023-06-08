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
            fullName:"Prachee Singh",
            mdxFile:""
          }
        ]
      },
      {
        name:"Secretary",
        members:[
          {
            id:"01",
            fullName:"Rudransh Tripathi",
            mdxFile:""
          }
        ]
      },
      {
        name:"Vice President",
        members:[
          {
            id:"01",
            fullName:"Harshit Ratnam",
            mdxFile:""
          }
        ]
      },
      {
        name:"Joint Secretary",
        members:[
          {
            id:"01",
            fullName:"Vaishnav Sharan",
            mdxFile:""
          }
        ]
      },
      {
        name:"Treasurer",
        members:[
          {
            id:"01",
            fullName:"Kalash Gupta",
            mdxFile:""
          }
        ]
      },
      {
        name:"Sergeant-at-Arms",
        members:[
          {
            id:"01",
            fullName:"Rashi Srivastava",
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
            fullName:"Unnati Agarwal",
            mdxFile:""
          },
          {
            id:"D02",
            fullName:"Vidhi Tyagi",
            mdxFile:""
          }
        ]
      },
      {
        name:"Community Service",
        members:[
          {
            id:"D03",
            fullName:"Ashish Kumar Gupta",
            mdxFile:""
          },
          {
            id:"D04",
            fullName:"Hitesh Joshi",
            mdxFile:""
          }
        ]
      },
      {
        name:"Vocational Service",
        members:[
          {
            id:"D05",
            fullName:"Hasrshit Gunashekhar",
            mdxFile:""
          },
          {
            id:"D06",
            fullName:"Bhavya Tiwari",
            mdxFile:""
          }
        ]
      },
      {
        name:"International Service",
        members:[
          {
            id:"D07",
            fullName:"Shubham Srivastava",
            mdxFile:""
          },
          {
            id:"D08",
            fullName:"Rohit Saini",
            mdxFile:""
          },
          {
            id:"D08-1",
            fullName:"Vaishnavi Srivastava",
            mdxFile:""
          }
        ]
      },
      {
        name:"Literary Service",
        members:[
          {
            id:"D09",
            fullName:"Aditya Ojha",
            mdxFile: ""
          },
          {
            id:"D10",
            fullName:"Yashica Chauhan",
            mdxFile:""
          }
        ]
      },
      {
        name:"Membership Growth",
        members:[
          {
            id:"D11",
            fullName:"Avinash Rai",
            mdxFile:""
          },
          {
            id:"D12",
            fullName:"Sagar Malik",
            mdxFile:""
          },
          {
            id:"D13",
            fullName:"Adarsh Rai",
            mdxFile:""
          }
        ]
      },
      {
        name:"Photography Service",
        members:[
          {
            id:"D14",
            fullName:"Uday Varshney",
            mdxFile:""
          },
          {
            id:"D15",
            fullName:"Yuvraj Singh",
            mdxFile:""
          }
        ]
      },
      {
        name:"Multimedia Service",
        members:[
          {
            id:"D16",
            fullName:"Mirnalini Chauhan",
            mdxFile:""
          },
          {
            id:"D17",
            fullName:"Shruti Raj",
            mdxFile:""
          },
          {
            id:"D18",
            fullName:"Anushka Aggarwal",
            mdxFile:""
          }
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
            fullName:"Ankita Shukla",
            mdxFile:""
          },
          {
            id:"C02",
            fullName:"Isha Srivastava",
            mdxFile:""
          }
        ]
      },
      {
        name:"Community Service",
        members:[
          {
            id:"C03",
            fullName: "Aman Wadhwani",
            mdxFile:""
          },
          {
            id:"C04",
            fullName:"Divyanshu Katiyar",
            mdxFile:""
          },
          {
            id:"C05",
            fullName:"Yash Gupta",
            mdxFile:""
          }
        ]
      },
      {
        name:"Vocational Service",
        members:[
          {
            id:"C06",
            fullName:"Yash Verma",
            mdxFile:""
          },
          {
            id:"C07",
            fullName:"Aruhi Pallavi",
            mdxFile:""
          }
        ]
      },
      {
        name:"International Service",
        members:[
          {
            id:"C08",
            fullName:"Shivendra Pratap Singh",
            mdxFile:""
          },
          {
            id:"C09",
            fullName:"Sanket Gupta",
            mdxFile:""
          }
        ]
      },
      {
        name:"Literary Service",
        members:[
          {
            id:"C10",
            fullName:"Tanay Mishra",
            mdxFile:""
          },
          {
            id:"C11",
            fullName:"Numair Pandit",
            mdxFile:""
          }
        ]
      },
      {
        name:"Multimedia Service",
        members:[
          {
            id:"C16",
            fullName:"Raunak Gupta",
            mdxFile:""
          },
          {
            id:"C17",
            fullName:"Areeb Ur Rub",
            mdxFile:""
          },
          {
            id:"C18",
            fullName:"Ritik Varshney",
            mdxFile:""
          }
        ]
      },
      {
        name:"Membership Growth",
        members:[
          {
            id:"C12",
            fullName:"Thakur Manu Chauhan",
            mdxFile:""
          },
          {
            id:"C13",
            fullName:"Srishti Yadav",
            mdxFile:""
          },
          {
            id:"C14",
            fullName:"Krishna Gupta",
            mdxFile:""
          }
        ]
      },
      {
        name:"Photography Service",
        members:[
          {
            id:"C15",
            fullName:"Shweta Yadav",
            mdxFile:""
          }
        ]
      }
    ]
  }
  ]