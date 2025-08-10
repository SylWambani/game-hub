import { Button, Flex, Menu, MenuItem } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";

const PlatFormSelector = () => {
  const { data, error } = usePlatforms();

  if (error) return null;
  
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="ghost" backgroundColor="gray.600">
          <Flex align="center" gap="2">
            Platforms
            <BsChevronDown />
          </Flex>
        </Button>
      </Menu.Trigger>
      <Menu.Positioner>
        <Menu.Content>
          {data.map(platform=><Menu.Item key={platform.id}>{platform.name}</Menu.Item>)}
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  );
};

export default PlatFormSelector;
