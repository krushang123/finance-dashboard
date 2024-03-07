import { type IconProps } from "@chakra-ui/icons"
import { type ComponentWithAs } from "@chakra-ui/system"
import { type IconType } from "react-icons"
import { MdDashboard } from "react-icons/md"
import { BsBuildingsFill } from "react-icons/bs"
import { RiMenu3Fill, RiSettings3Line } from "react-icons/ri"
import { HiOutlinePresentationChartLine } from "react-icons/hi2"
import { FiUsers } from "react-icons/fi"
import { IoCalendarOutline } from "react-icons/io5"
import { LuFileSpreadsheet } from "react-icons/lu"

export interface SidebarIcon {
  icon: IconType | ComponentWithAs<"svg", IconProps>
  label: string
}

export const sidebarIcons: SidebarIcon[] = [
  {
    icon: MdDashboard,
    label: "General Bank",
  },
  {
    icon: BsBuildingsFill,
    label: "Client Based",
  },
  {
    icon: RiMenu3Fill,
    label: "Stage/Folder",
  },
  {
    icon: HiOutlinePresentationChartLine,
    label: "Activities",
  },
  {
    icon: RiSettings3Line,
    label: "Operational",
  },
  {
    icon: FiUsers,
    label: "Teams",
  },
  {
    icon: IoCalendarOutline,
    label: "Calendar",
  },
  {
    icon: LuFileSpreadsheet,
    label: "Reporting",
  },
]
