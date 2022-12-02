import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import ContentScript from "./contentScript";

const main = () => {
  const renderContent = (cont: Element) => {
    const appContainer = document.createElement("div");
    cont.insertBefore(appContainer, cont.firstChild);
    const root = createRoot(appContainer);
    root.render(<ContentScript />);
  };

  setTimeout(() => {
    const shadowRoot = document.querySelector("#shadow-root");
    if (shadowRoot) return;
    const cont: HTMLDivElement = document.querySelector(
      "#primary > ytd-section-list-renderer > #contents"
    );
    if (cont) {
      renderContent(cont);
    }
  }, 1000);
};
main();
