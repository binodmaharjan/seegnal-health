import { useState, useRef, useEffect } from "react";
import "./AutoComplete.scss";

interface AutoCompleteProps<T> {
  items: T[];
  value: string;
  onChange: (value: string) => void;
  onSelect: (item: T) => void;
  filterFn: (item: T, query: string) => boolean;
  renderItem: (item: T) => React.ReactNode;
  getItemKey: (item: T) => string | number;
  placeholder?: string;
  noResultsText?: string;
  minChars?: number;
  disabled?: boolean;
}

function AutoComplete<T>({
  items,
  value,
  onChange,
  onSelect,
  filterFn,
  renderItem,
  getItemKey,
  placeholder = "Search...",
  noResultsText = "No results found",
  minChars = 1,
  disabled = false,
}: AutoCompleteProps<T>) {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const filteredItems =
    value.length >= minChars
      ? items?.filter((item) => filterFn(item, value))
      : [];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    onChange(newValue);
    setIsOpen(true);
    setHighlightedIndex(-1);
  };

  const handleItemClick = (item: T) => {
    onSelect(item);
    setIsOpen(false);
    setHighlightedIndex(-1);
  };

  const handleFocus = () => {
    if (value.length >= minChars) {
      setIsOpen(true);
    }
  };

  const shouldShowDropdown = isOpen && value.length >= minChars;

  return (
    <div className="autocomplete" ref={containerRef}>
      <input
        ref={inputRef}
        type="text"
        className="autocomplete__input"
        value={value}
        onChange={handleInputChange}
        onFocus={handleFocus}
        placeholder={placeholder}
        disabled={disabled}
        autoComplete="off"
      />

      {shouldShowDropdown && (
        <ul className="autocomplete__dropdown">
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => (
              <li
                key={getItemKey(item)}
                className={`autocomplete__item ${
                  index === highlightedIndex
                    ? "autocomplete__item--highlighted"
                    : ""
                }`}
                onClick={() => handleItemClick(item)}
                onMouseEnter={() => setHighlightedIndex(index)}
              >
                {renderItem(item)}
              </li>
            ))
          ) : (
            <li className="autocomplete__no-results">{noResultsText}</li>
          )}
        </ul>
      )}
    </div>
  );
}

export default AutoComplete;
