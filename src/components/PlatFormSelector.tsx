import { Button, Flex, Menu, MenuItem } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms, { Platform } from "../hooks/usePlatforms";

interface Props{
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}
const PlatFormSelector = ({onSelectPlatform, selectedPlatform}:Props) => {
  const { data, error } = usePlatforms();

  if (error) return null;

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="ghost" backgroundColor="gray.600">
          <Flex align="center" gap="2">
            {selectedPlatform?.name||"Platforms"}
            <BsChevronDown />
          </Flex>
        </Button>
      </Menu.Trigger>
      <Menu.Positioner>
        <Menu.Content>
          {data.map(platform=><Menu.Item onClick={()=>onSelectPlatform(platform)} key={platform.id}>{platform.name}</Menu.Item>)}
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  );
};

export default PlatFormSelector;
