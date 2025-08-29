'use client';

import { createPortal } from 'react-dom';
import { ChevronDown } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export interface DropdownItem {
  label: string;
  href?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  active?: boolean;
  activeClassName?: string;
}

type AnchorPosition = 
  | 'bottom-left' 
  | 'bottom-right' 
  | 'bottom-center'
  | 'top-left' 
  | 'top-right' 
  | 'top-center';

interface DropdownMenuProps {
  trigger: React.ReactNode;
  items: readonly DropdownItem[];
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
  anchorPosition?: AnchorPosition;
  offset?: { x?: number; y?: number };
  className?: string;
  dropdownClassName?: string;
  showChevron?: boolean;
  usePortal?: boolean; // Use createPortal for fixed positioned elements
}

export default function DropdownMenu({
  trigger,
  items,
  isOpen,
  onToggle,
  onClose,
  anchorPosition = 'bottom-left',
  offset = { x: 0, y: 8 },
  className = '',
  dropdownClassName = '',
  showChevron = true,
  usePortal = false
}: DropdownMenuProps) {
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  // Calculate dropdown position for portal
  useEffect(() => {
    if (usePortal && isOpen && triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      setPosition({
        top: rect.bottom + (offset.y || 0),
        left: rect.left + (offset.x || 0)
      });
    }
  }, [isOpen, usePortal, offset]);

  // Handle click outside to close dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        isOpen &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        (!usePortal || !triggerRef.current || !triggerRef.current.contains(event.target as Node))
      ) {
        onClose();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onClose, usePortal]);

  // Handle escape key
  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    }

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  const handleItemClick = (item: DropdownItem) => {
    if (item.onClick) {
      item.onClick();
    } else if (item.href && item.href.includes('#')) {
      // Handle anchor links - extract just the hash part
      const hash = item.href.includes('/#') ? item.href.split('/#')[1] : item.href.split('#')[1];
      const targetElement = document.querySelector(`#${hash}`);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
    onClose();
  };

  // Generate position classes based on anchor position
  const getPositionClasses = () => {
    const positions = {
      'bottom-left': 'top-full left-0',
      'bottom-right': 'top-full right-0',
      'bottom-center': 'top-full left-1/2 -translate-x-1/2',
      'top-left': 'bottom-full left-0',
      'top-right': 'bottom-full right-0',
      'top-center': 'bottom-full left-1/2 -translate-x-1/2'
    };
    return positions[anchorPosition];
  };

  // Generate offset styles
  const getOffsetStyles = () => {
    const isTop = anchorPosition.startsWith('top');
    const marginTop = isTop ? -(offset.y || 0) : (offset.y || 0);
    const marginLeft = offset.x || 0;
    
    return {
      marginTop: `${marginTop}px`,
      marginLeft: `${marginLeft}px`
    };
  };

  const renderDropdown = () => {
    if (!isOpen) return null;

    const dropdownContent = (
      <div 
        ref={dropdownRef}
        className={`${usePortal ? 'fixed' : 'absolute'} z-50 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg py-1 min-w-[200px] ${
          usePortal ? '' : getPositionClasses()
        } ${dropdownClassName}`}
        style={usePortal ? { top: position.top, left: position.left } : getOffsetStyles()}
      >
        {items.map((item, index) => (
          <button
            key={index}
            onClick={() => handleItemClick(item)}
            className={`w-full flex items-center space-x-3 px-4 py-2 text-left text-sm transition-colors ${
              item.active && item.activeClassName
                ? item.activeClassName
                : item.active
                ? 'text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/20'
                : 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-purple-600 dark:hover:text-purple-400'
            }`}
          >
            {item.icon && <span className="flex-shrink-0">{item.icon}</span>}
            <span>{item.label}</span>
          </button>
        ))}
      </div>
    );

    return usePortal && typeof window !== 'undefined' 
      ? createPortal(dropdownContent, document.body)
      : dropdownContent;
  };

  return (
    <div className="relative" ref={usePortal ? undefined : dropdownRef}>
      {/* Trigger Button */}
      <button
        ref={triggerRef}
        onClick={onToggle}
        className={`flex items-center transition-colors ${className}`}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {trigger}
        {showChevron && (
          <ChevronDown 
            className={`w-4 h-4 ml-1 transition-transform duration-200 text-gray-900 dark:text-gray-100 ${isOpen ? 'rotate-180' : ''}`} 
          />
        )}
      </button>

      {/* Dropdown Menu */}
      {renderDropdown()}
    </div>
  );
} 