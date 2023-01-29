import { useState } from "react";

import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import { Box, Flex, Heading } from "@chakra-ui/layout";

import NavbarDrawer from "./NavbarDrawer";
import NavbarLinks from "./NavbarLinks";

const Navbar = () => {
  // For controlling the state of the mobile version drawer
  const [isNavbarDrawerOpen, setIsNavbarDrawerOpen] = useState(false);

  return (
    <Flex
      as="nav"
      alignItems="center"
      justifyContent="space-between"
      background="blue.500"
      paddingX={{ base: "8", md: "20" }}
      paddingY="6"
      width="100%"
      position="relative"
      zIndex="9999"
    >
      <Heading as="h1" fontWeight="extrabold" fontSize="3xl" textColor="white">
        FinTrack
      </Heading>

      <Box display={{ base: "none", md: "flex" }}>
        <NavbarLinks />
      </Box>

      <Box display={{ base: "flex", md: "none" }}>
        <IconButton
          aria-label="hamburger menu"
          icon={
            isNavbarDrawerOpen ? (
              <CloseIcon color="blue.500" />
            ) : (
              <HamburgerIcon color="blue.500" />
            )
          }
          backgroundColor="white"
          onClick={() => setIsNavbarDrawerOpen((current) => !current)}
        />
        <NavbarDrawer
          isOpen={isNavbarDrawerOpen}
          onClose={() => setIsNavbarDrawerOpen(false)}
        />
      </Box>
    </Flex>
  );
};

export default Navbar;
