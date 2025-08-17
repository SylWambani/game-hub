import { HStack, Switch, SwitchRoot, Text } from '@chakra-ui/react'
import { useColorMode } from './ui/color-mode'

const ColorModeSwitch = () => {
    const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Switch.Root
        colorPalette="green"
        checked={colorMode === "dark"}
        onChange={toggleColorMode}
      >
        <Switch.HiddenInput />
        <Switch.Control />
        <Switch.Label whiteSpace='nowrap'>Dark Mode</Switch.Label>
      </Switch.Root>
    </HStack>
  );
}

export default ColorModeSwitch