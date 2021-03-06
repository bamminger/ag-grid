import { BeanStub } from "./context/beanStub";
import { Column } from "./entities/column";
import { CellPosition } from "./entities/cellPosition";
import { RowNode } from "./entities/rowNode";
import { AbstractHeaderWrapper } from "./headerRendering/header/abstractHeaderWrapper";
import { HeaderPosition } from "./headerRendering/header/headerPosition";
import { ColumnGroup } from "./entities/columnGroup";
import { GridCore } from "./gridCore";
export declare class FocusController extends BeanStub {
    private readonly columnController;
    private readonly headerNavigationService;
    private readonly columnApi;
    private readonly gridApi;
    private readonly rowRenderer;
    private readonly rowPositionUtils;
    private readonly rangeController;
    private gridCore;
    private focusedCellPosition;
    private focusedHeaderPosition;
    private static keyboardModeActive;
    private static instancesMonitored;
    /**
     * Adds a gridCore to the list of the gridCores monitoring Keyboard Mode
     * in a specific HTMLDocument.
     *
     * @param doc {Document} - The Document containing the gridCore.
     * @param gridCore {GridCore} - The GridCore to be monitored.
     */
    private static addKeyboardModeEvents;
    /**
     * Removes a gridCore from the list of the gridCores monitoring Keyboard Mode
     * in a specific HTMLDocument.
     *
     * @param doc {Document} - The Document containing the gridCore.
     * @param gridCore {GridCore} - The GridCore to be removed.
     */
    private static removeKeyboardModeEvents;
    /**
     * This method will be called by `keydown` and `mousedown` events on all Documents monitoring
     * KeyboardMode. It will then fire a KEYBOARD_FOCUS, MOUSE_FOCUS on each gridCore present in
     * the Document allowing each gridCore to maintain a state for KeyboardMode.
     *
     * @param event {KeyboardEvent | MouseEvent | TouchEvent} - The event triggered.
     */
    private static toggleKeyboardMode;
    private init;
    registerGridCore(gridCore: GridCore): void;
    unregisterGridCore(gridCore: GridCore): void;
    onColumnEverythingChanged(): void;
    isKeyboardMode(): boolean;
    getFocusCellToUseAfterRefresh(): CellPosition | null;
    private getGridCellForDomElement;
    clearFocusedCell(): void;
    getFocusedCell(): CellPosition;
    setFocusedCell(rowIndex: number, colKey: string | Column, floating: string | undefined, forceBrowserFocus?: boolean): void;
    isCellFocused(cellPosition: CellPosition): boolean;
    isRowNodeFocused(rowNode: RowNode): boolean;
    isHeaderWrapperFocused(headerWrapper: AbstractHeaderWrapper): boolean;
    clearFocusedHeader(): void;
    getFocusedHeader(): HeaderPosition;
    setFocusedHeader(headerRowIndex: number, column: ColumnGroup | Column): void;
    focusHeaderPosition(headerPosition: HeaderPosition, direction?: 'Before' | 'After', fromTab?: boolean, allowUserOverride?: boolean, event?: KeyboardEvent): boolean;
    isAnyCellFocused(): boolean;
    isRowFocused(rowIndex: number, floating: string): boolean;
    findFocusableElements(rootNode: HTMLElement, exclude?: string, onlyUnmanaged?: boolean): HTMLElement[];
    focusInto(rootNode: HTMLElement, up?: boolean, onlyUnmanaged?: boolean): boolean;
    findNextFocusableElement(rootNode: HTMLElement, onlyManaged?: boolean, backwards?: boolean): HTMLElement;
    isFocusUnderManagedComponent(rootNode: HTMLElement): boolean;
    findTabbableParent(node: HTMLElement, limit?: number): HTMLElement;
    private onCellFocused;
    focusGridView(column?: Column, backwards?: boolean): boolean;
    focusNextGridCoreContainer(backwards: boolean): boolean;
}
