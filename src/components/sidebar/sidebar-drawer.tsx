import { type LegacyRef, useRef } from "react"

import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react"

import { IconButton } from "@chakra-ui/button"
import { FiMenu } from "react-icons/fi"

import Sidebar from "./sidebar"

interface SidebarDrawerProps {
  openSidebarDrawer: () => void
  closeSidebarDrawer: () => void
  isSidebarDrawerOpen: boolean
}

const SidebarDrawer = (props: SidebarDrawerProps) => {
  const { openSidebarDrawer, closeSidebarDrawer, isSidebarDrawerOpen } = props

  const btnRef: LegacyRef<HTMLButtonElement> = useRef(null)

  return (
    <>
      <IconButton
        ref={btnRef}
        variant='ghost'
        color='black'
        icon={<FiMenu fontSize='2xl' />}
        aria-label='Open Menu'
        onClick={openSidebarDrawer}
      />

      <Drawer
        placement='right'
        onClose={closeSidebarDrawer}
        isOpen={isSidebarDrawerOpen}
        size='xs'
      >
        <DrawerOverlay />

        <DrawerContent>
          <DrawerCloseButton color='white' />

          <DrawerBody p={0}>
            <Sidebar />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default SidebarDrawer
