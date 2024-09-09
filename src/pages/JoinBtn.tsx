import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    FormInputIcon,
  Mail,
  MessageCircle,
  MessageSquare,
  PlusCircle,
  School,
  University,
  UserPlus,
} from "lucide-react";

export default function JoinBtn() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <button className="group relative rounded-md bg-slate-700 px-4 py-2 font-dmSans text-sm font-bold text-white transition-all duration-200 hover:bg-rose-500 md:text-lg">
          Join
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Select Institution</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <School className="mr-2 h-4 w-4" />
            <span>Galgotias College</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              <DropdownMenuItem>
                <FormInputIcon className="mr-2 h-4 w-4" />
                <span>Get Membership</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <MessageCircle className="mr-2 h-4 w-4" />
                <span>Join Updates Group</span>
              </DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <University className="mr-2 h-4 w-4" />
            <span>Galotias University</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              <DropdownMenuItem>
                <FormInputIcon className="mr-2 h-4 w-4" />
                <span>Get Membership</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <MessageCircle className="mr-2 h-4 w-4" />
                <span>Join Updates Group</span>
              </DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
