import { Button, Flex, Menu } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrder: string;
}

const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="ghost" backgroundColor="gray.600">
          <Flex align="center" gap="2">
            Order by: {currentSortOrder?.label || "Relevance"}
            <BsChevronDown />
          </Flex>
        </Button>
      </Menu.Trigger>
      <Menu.Positioner>
        <Menu.Content>
          {sortOrders.map((order) => (
            <Menu.Item
              onClick={() => onSelectSortOrder(order.value)}
              key={order.value}
              value={order.value}
            >
              {order.label}
            </Menu.Item>
          ))}
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  );
};

export default SortSelector;
