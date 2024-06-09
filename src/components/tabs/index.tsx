import React, { useState, useEffect, useRef } from 'react';
type activeLineMode = 'auto' | 'full'
interface TabProps {
  tabs: string[];
  onTabChange: (index: number) => void;
  activeTabStyle?: React.CSSProperties;
  activeLineMode?: activeLineMode;
}
const DEFAULT_ACTIVE_LINE_MODE: activeLineMode = 'auto';
const tabBoxStyle: React.CSSProperties = {
  display: 'flex',
  cursor: 'pointer',
};
const tabStyle: React.CSSProperties = {
  color: 'gray', width: '33%'
};
const activeTabStyle: React.CSSProperties = {
  color: 'blue', fontWeight: 'bold'
};
const Tab: React.FC<TabProps> = ({ tabs, onTabChange, activeLineMode = DEFAULT_ACTIVE_LINE_MODE, }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollable, setScrollable] = useState<boolean>(false);
  const [activeKey, setActiveTab] = useState<number>(0);
  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const containerWidth = container.offsetWidth;
      const totalTabsWidth = tabs.reduce((acc, tab) => acc + (tab.length * 12), 0); // Assuming each character is 12px wide
      setScrollable(totalTabsWidth > containerWidth);
    }
  }, [tabs]);

  useEffect(() => {
    const container = containerRef.current;
    if (container && scrollable) {
      const activeTabElement = container.children[activeKey] as HTMLElement;
      const containerScrollLeft = container.scrollLeft;
      const activeTabOffsetLeft = activeTabElement.offsetLeft;
      const activeTabWidth = activeTabElement.offsetWidth;

      // Check if active tab is fully visible
      if (activeTabOffsetLeft < containerScrollLeft || activeTabOffsetLeft + activeTabWidth > containerScrollLeft + container.offsetWidth) {
        container.scrollLeft = activeTabOffsetLeft - (container.offsetWidth - activeTabWidth) / 2;
      }
    }
  }, [activeKey, scrollable]);

  const handleTabChange = (index: number) => {
    onTabChange(index);
    setActiveTab(index);
    // Handle tab change logic here
  };

  return (
    <div ref={containerRef} style={{ overflowX: 'hidden', whiteSpace: 'nowrap', position: 'relative' }}>
      {scrollable && (
        <div style={{ position: 'absolute', top: 0, left: 0, zIndex: 1, width: 50, height: '100%' }}></div>
      )}
      <div style={tabBoxStyle}>
        {tabs.map((tab, index) => (
          <div
            key={index}
            onClick={() => handleTabChange(index)}
            style={activeKey === index ? { ...tabStyle, ...activeTabStyle } : tabStyle}
          >
            {tab}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tab;
