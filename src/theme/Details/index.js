import React, {useRef, useState} from 'react';
import clsx from 'clsx';
import useBrokenLinks from '@docusaurus/useBrokenLinks';
import useIsBrowser from '@docusaurus/useIsBrowser';
import {useCollapsible, Collapsible} from '@docusaurus/theme-common';
import styles from './styles.module.css';

// Should we have a custom details/summary comp in Infima instead of reusing
// alert classes?
const InfimaClasses = 'alert alert--info';

function isInSummary(node) {
  if (!node) {
    return false;
  }
  return node.tagName === 'SUMMARY' || isInSummary(node.parentElement);
}

function hasParent(node, parent) {
  if (!node) {
    return false;
  }
  return node === parent || hasParent(node.parentElement, parent);
}

// Forked from @docusaurus/theme-common's Details component: the original
// calls e.stopPropagation() for every click anywhere inside the details
// content, which blocks document-level click listeners (e.g. the
// docusaurus-plugin-image-zoom lightbox) from ever seeing clicks on images
// nested inside a <details>. Here we only stop propagation for clicks that
// originate inside the <summary>, which is enough to keep nested
// details/summary isolated without breaking unrelated content.
export default function Details({summary, children, ...props}) {
  useBrokenLinks().collectAnchor(props.id);

  const isBrowser = useIsBrowser();
  const detailsRef = useRef(null);

  const {collapsed, setCollapsed} = useCollapsible({
    initialState: !props.open,
  });
  const [open, setOpen] = useState(props.open);

  const summaryElement = React.isValidElement(summary) ? (
    summary
  ) : (
    <summary>{summary ?? 'Details'}</summary>
  );

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
    <details
      {...props}
      ref={detailsRef}
      open={open}
      data-collapsed={collapsed}
      className={clsx(
        InfimaClasses,
        styles.details,
        isBrowser && styles.isBrowser,
        props.className,
      )}
      onMouseDown={(e) => {
        const target = e.target;
        if (isInSummary(target) && e.detail > 1) {
          e.preventDefault();
        }
      }}
      onClick={(e) => {
        const target = e.target;
        const inSummary = isInSummary(target);
        if (inSummary) {
          // For isolation of multiple nested details/summary
          e.stopPropagation();
        }
        const shouldToggle = inSummary && hasParent(target, detailsRef.current);
        if (!shouldToggle) {
          return;
        }
        e.preventDefault();
        if (collapsed) {
          setCollapsed(false);
          setOpen(true);
        } else {
          setCollapsed(true);
          // Don't do this, it breaks close animation!
          // setOpen(false);
        }
      }}>
      {summaryElement}

      <Collapsible
        lazy={false}
        collapsed={collapsed}
        onCollapseTransitionEnd={(newCollapsed) => {
          setCollapsed(newCollapsed);
          setOpen(!newCollapsed);
        }}>
        <div className={styles.collapsibleContent}>{children}</div>
      </Collapsible>
    </details>
  );
}
