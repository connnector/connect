import { useColorModeValue } from "@chakra-ui/color-mode";
import { Stack } from "@chakra-ui/layout";
import React from "react";
import MobileNavItem from "./MobileNavItem";
import { NAV_ITEMS } from "./NavItems";

interface MobileNavProps {}

const MobileNav: React.FC<MobileNavProps> = () => {
  return (
    <>
      <Stack
        bg={useColorModeValue("white", "gray.800")}
        p={4}
        display={{ md: "none" }}
      >
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    </>
  );
};
export default MobileNav;
