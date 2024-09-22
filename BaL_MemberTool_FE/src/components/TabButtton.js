import { Button } from '@chakra-ui/react';

export default function TabButton({ children, onSelect, isSelected }) {
  return (
    <li>
      <Button colorScheme='teal' variant='link' className={isSelected ? 'active' : undefined} onClick={onSelect} mr={5}>
        {children}
      </Button>
    </li>
  );
}
