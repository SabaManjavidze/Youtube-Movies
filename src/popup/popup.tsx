import React from "react";
import { createRoot } from "react-dom/client";

export const popup = <h1>What's up World</h1>;

const container = document.createElement("div");
document.body.appendChild(container);
const root = createRoot(container);
root.render(popup);
