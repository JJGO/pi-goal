import { type Input } from "@earendil-works/pi-tui";
import type { MenuKeybindings, MenuScreenComponentOptions } from "./contracts.js";
export declare function renderFrame<ScreenId extends string, ActionId extends string>(title: string, lines: readonly string[], content: readonly string[], destination: "back" | "close", width: number, options: MenuScreenComponentOptions<ScreenId, ActionId>, confirmAction?: string): string[];
export declare function menuHint(keybindings: MenuKeybindings, destination: "back" | "close", confirmAction: string): string;
export declare function safeMenuText(value: unknown): string;
export declare function handleSearchInput(input: Input, data: string): void;
export declare function replaceTerminalControls(value: unknown): string;
