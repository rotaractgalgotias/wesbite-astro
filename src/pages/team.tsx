import { TeamData } from "../config/team";

// sd

const TeamMemberComponent = ({ member, subGroupName }) => {
  return (
    <a
      href={'/team/' + member.fullName.toLowerCase().replace(/ /g, '-')}
      key={member.id}
      className={
        "col-span-3 flex flex-col items-center justify-center gap-3 md:col-span-2 xl:col-span-1"
      }
    >
      <img
        src={`/team/${member.fullName}.jpg`}
        alt={member.fullName}
        className={"hover:border-rose-500 border-4 border-transparent transition-all duration-200 cursor-pointer h-40 w-40 object-cover rounded-full"}
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
    <div className={"w-full container"}>
      {TeamData.map((group) => {
        return (
          <div id={group.id}>
            <div className={'flex flex-row gap-5 w-full items-center py-5'}>
              <h3 className={"flex-grow w-fit whitespace-nowrap text-3xl font-bold"}>{group.name}</h3>
              <div className={'h-1 mt-2 w-full bg-black'}></div>
            </div>
            <div className="grid grid-cols-6 gap-4 py-10 px-2 md:px-5 bg-gray-200">
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
