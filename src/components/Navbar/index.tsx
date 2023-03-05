import { useState } from "react";

import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { IconButton, useMediaQuery } from "@chakra-ui/react";
import { Box, Flex, Heading } from "@chakra-ui/layout";

import NavbarDrawer from "./NavbarDrawer";
import NavbarLinks from "./NavbarLinks";

const Navbar = () => {
  // For controlling the state of the mobile version drawer
  const [isNavbarDrawerOpen, setIsNavbarDrawerOpen] = useState(false);

  const [isTablet] = useMediaQuery("(max-width: 767px)");

  return (
    <Flex
      as="nav"
      alignItems="center"
      justifyContent="space-between"
      width="100%"
      position="sticky"
      top="0"
      zIndex="9999"
      paddingX={{ base: "8", lg: "20" }}
      paddingY="6"
      background="blue.500"
    >
      <Heading as="h1" fontWeight="extrabold" fontSize="3xl" textColor="white">
        FinTrack
      </Heading>

      <Box display={{ base: "none", md: "flex" }}>
        <NavbarLinks />
      </Box>

      {isTablet ? (
        <Box>
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
      ) : null}
    </Flex>
  );
};

export default Navbar;
