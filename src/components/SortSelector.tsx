import { Button, Flex, Menu } from '@chakra-ui/react';
import React from 'react'
import { BsChevronDown } from 'react-icons/bs';

const SortSelector = () => {
  return (
        <Menu.Root>
          <Menu.Trigger asChild>
            <Button variant="ghost" backgroundColor="gray.600">
              <Flex align="center" gap="2">
                Order by: Relevance
                <BsChevronDown />
              </Flex>
            </Button>
          </Menu.Trigger>
          <Menu.Positioner>
            <Menu.Content>
              <Menu.Item>Relevance</Menu.Item>
              <Menu.Item>Date added</Menu.Item>
              <Menu.Item>Name</Menu.Item>
              <Menu.Item>Release date</Menu.Item>
              <Menu.Item>Popularity</Menu.Item>
              <Menu.Item>Average rating</Menu.Item>
            </Menu.Content>
          </Menu.Positioner>
        </Menu.Root>
      );
  
}

export default SortSelector