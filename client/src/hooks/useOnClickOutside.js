import { useEffect } from 'react';

export default function useOnClickOutside(ref, isOpen, setIsOpen) {
  useEffect(() => {
    const handleClick = (event) => {
      if (isOpen && ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
      isOpen;
    };
  }, [ref, isOpen]);
}