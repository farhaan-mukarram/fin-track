import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
} from "@chakra-ui/react";

import NavbarLinks from "./NavbarLinks";

type NavbarDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

const NavbarDrawer = ({ isOpen, onClose }: NavbarDrawerProps) => {
  return (
    <Drawer
      colorScheme="teal"
      isOpen={isOpen}
      placement="top"
      onClose={onClose}
      size="sm"
    >
      <DrawerOverlay />

      <DrawerContent background="blue.500" paddingX="8" paddingBottom="8">
        <DrawerBody marginTop="88px" paddingX="0">
          <NavbarLinks />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default NavbarDrawer;
