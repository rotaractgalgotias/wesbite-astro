import FaceCenteredImage from "../components/FaceCenteredImg";
import { TeamData } from "../config/team";

const TeamMemberComponent = ({ member, subGroupName }) => {
  // console.log(member);
  return (
    <a
      href={"/team/" + member.fullName.toLowerCase().replace(/ /g, "-")}
      key={member.id}
      className={
        "col-span-3 flex flex-col items-center justify-center gap-3 md:col-span-2 xl:col-span-1"
      }
    >
      {/* <img
        src={`/team/${member.fullName}.jpg`}
        alt={member.fullName}
        className={
          "h-40 w-40 cursor-pointer rounded-full border-4 border-transparent object-cover transition-all duration-200 hover:border-rose-500"
        }
      /> */}
      <FaceCenteredImage
        src={`/team/${member.fullName}.jpg`}
        alt={member.fullName}
        className={
          "h-40 w-40 cursor-pointer rounded-full border-4 border-transparent object-cover transition-all duration-200 hover:border-rose-500"
        }
      />
      <div className={"flex flex-col items-center justify-center"}>
        <span className={"text-center font-dmSans text-sm font-bold"}>
          Rtr. {member.fullName}
        </span>
        <span className={"font-dmSans text-xs"}>{subGroupName}</span>
      </div>
    </a>
  );
};

const Team = () => {
  return (
    <div className={"container w-full"}>
      {TeamData.map((group) => {
        return (
          <div id={group.id}>
            <div className={"flex w-full flex-row items-center gap-5 py-5"}>
              <h3
                className={
                  "w-fit flex-grow whitespace-nowrap text-3xl font-bold"
                }
              >
                {group.name}
              </h3>
              <div className={"mt-2 h-1 w-full bg-black"}></div>
            </div>
            <div className="grid grid-cols-6 gap-4 bg-gray-200 px-2 py-10 md:px-5">
              {group.subGroups.map((subGroup) =>
                subGroup.members.map((member) => (
                  <TeamMemberComponent
                    key={member.id}
                    member={member}
                    subGroupName={subGroup.name}
                  />
                ))
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Team;
