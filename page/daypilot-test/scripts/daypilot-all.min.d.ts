/* Copyright 2005 - 2021 Annpoint, s.r.o.
 Use of this software is subject to license terms.
 https://www.daypilot.org/
 */

type GlobalDate = Date;

export module DayPilot {

    class Scheduler extends SchedulerPropsAndEvents {
        v: string;
        events: {
            list: EventData[];

            add(e: DayPilot.Event): void;
            add(data: EventData): void;
            all(): DayPilot.Event[];
            edit(e: DayPilot.Event): void;
            filter(param: any): void;
            find(id: string | number): DayPilot.Event;
            find(filter: (data: DayPilot.Event) => boolean): DayPilot.Event;
            findAll(filter: (e: DayPilot.Event) => boolean): DayPilot.Event[];
            findAll(example: any): DayPilot.Event[];
            findRecurrent(masterId: string, time: DayPilot.Date | string): DayPilot.Event;
            focus(e: DayPilot.Event): void;
            forRange(start?: DayPilot.Date | string, end?: DayPilot.Date | string): DayPilot.Event[];
            load(url: string,
                 success: (args: { data: any; preventDefault(): void; }) => void,
                 error: (args: { request: XMLHttpRequest, exception: any; }) => void
            ): void;
            remove(e: DayPilot.Event): void;
            remove(data: EventData): void;
            remove(id: string | number): void;
            scrollIntoView(e: DayPilot.Event): void;
            update(e: DayPilot.Event): void;
            update(data: EventData): void;
        };
        cells: {
            all(): CellArray;
            findXy(x: number, y: number, grid?: string): CellArray;
            find(start: DayPilot.Date, resource: string): CellArray;
            findByPixels(x: number, y: number): CellArray;
        };
        infinite: {
            scrollTo(date: DayPilot.Date): void;
            shiftStart(days: number): void;
        };
        links: {
            add(link: DayPilot.Link): void;
            add(data: LinkData): void;
            find(id: string | number): DayPilot.Link;
            findByFromTo(from: DayPilot.Date | string, to: DayPilot.Date | string): DayPilot.Link;
            remove(link: DayPilot.Link): void;
            remove(data: LinkData): void;
            remove(id: string | number): void;
            load(url: string,
                 success: (args: { data: any; preventDefault(): void; }) => void,
                 error: (args: { request: XMLHttpRequest, exception: any; }) => void
            ): void;
            list: LinkData[];
        };
        multiselect: {
            add(e: DayPilot.Event, dontRedraw?: boolean): void;
            clear(dontRedraw?: boolean): void;
            events(): DayPilot.Event[];
            get(): DayPilot.Event[];
            isSelected(e: DayPilot.Event): boolean;
            redraw(): void;
            remove(e: DayPilot.Event, dontRedraw?: boolean): void;
            startRectangle(): void;
        };
        // legacy
        range: {
            all(): DayPilot.Selection[];
        };
        multirange: {
            add(sel: DayPilot.Selection): void;
            clear(): void;
            get(): DayPilot.Selection[];
        };
        rows: {
            add(data: ResourceData): void;
            all(): DayPilot.Row[];
            collapseAll(): void;
            each(f: () => DayPilot.Row): void;
            edit(row: DayPilot.Row): void;
            expand(level?: number): void;
            expandAll(): void;
            filter(param: any): void;
            find(filter: (row: DayPilot.Row) => boolean, startIndex?: number): DayPilot.Row;
            find(id: string | number, start?: DayPilot.Date | string): DayPilot.Row;
            headerHide(): void;
            headerShow(): void;
            headerToggle(): void;
            load(url: string,
                 success: (args: { data: any; preventDefault(): void; }) => void,
                 error: (args: { request: XMLHttpRequest, exception: any; }) => void
            ): void;
            remove(row: DayPilot.Row): void;
            remove(id: string | number): void;
            sort(spec?: string | { field: string, order?: "asc" | "desc" }): void;
            update(row: DayPilot.Row | ResourceData): void;
            visible(): DayPilot.Row[];

            selection: {
                add(row: DayPilot.Row): void;
                clear(): void;
                get(): DayPilot.Row[];
                isSelected(row: DayPilot.Row): boolean;
                remove(row: Row): void;
            };
        };
        zoom: {
            setActive(index: number, position?: "left" | "middle" | "right"): void;
            setActive(id: string, position?: "left" | "middle" | "right"): void;
            active: number;
        };

        constructor(id: string | HTMLElement, options?: SchedulerConfig);

        autoRefreshPause(): void;

        autoRefreshStart(force: boolean): void;

        clearSelection(): void;

        dispose(): void;

        exportAs(format?: "svg" | "png" | "jpeg", options?: any): Export;

        getCoords(): { x: number, y: number, row: DayPilot.Row, cell: DayPilot.Cell, time: DayPilot.Date, event: DayPilot.Event, eventOffset: { x: number, y: number } };

        getDate(pixels: number, precise?: boolean, isEnd?: boolean): DayPilot.Date;

        getScrollX(): number;

        getScrollY(): number;

        getViewPort(): { start: DayPilot.Date, end: DayPilot.Date, resources: string[] };

        hide(): void;

        init(): void;

        loadingStart(): void;

        loadingStop(): void;

        message(msg: string, options?: { delay?: number, cssClass?: string, rawHtml?: boolean }): void;

        scrollTo(date: string | DayPilot.Date): void;

        scrollTo(date: string | DayPilot.Date, animated: boolean | number | "fast" | "normal" | "slow" | "linear", position?: "left" | "middle" | "right"): void;

        scrollToResource(id: string | number | DayPilot.Row): void;

        selectTimeRange(start: DayPilot.Date | string, end: DayPilot.Date | string, resource: string | number, dontFireEvent?: boolean): void;

        setHeight(pixels: number): void;

        setScroll(scrollX: number, scrollY: number): void;

        setScrollX(scrollX: number): void;

        setScrollY(scrollY: number): void;

        show(): void;

        uiBlock(): void;

        uiUnblock(): void;

        update(options?: SchedulerConfig): void;

        visibleStart(): DayPilot.Date;

        visibleEnd(): DayPilot.Date;
    }

    class SchedulerPropsAndEvents {
        allowDefaultContextMenu?: boolean;
        allowEventOverlap?: boolean;
        allowMultiMove?: boolean;
        allowMultiRange?: boolean;
        allowMultiResize?: boolean;
        allowMultiSelect?: boolean;
        api?: number;
        autoRefreshCommand?: string;
        autoRefreshEnabled?: boolean;
        autoRefreshInterval?: number;
        autoRefreshMaxCount?: number;
        autoScroll?: "Drag" | "Always" | "Disabled";
        backendUrl?: string;
        beforeCellRenderCaching?: boolean;
        blockOnCallBack?: boolean;
        bubble?: DayPilot.Bubble;
        businessBeginsHour?: number;
        businessEndsHour?: number;
        businessWeekends?: boolean;
        cellBubble?: DayPilot.Bubble;
        cellDuration?: number;
        cellGroupBy?: GroupBy;
        cellSweeping?: boolean;
        cellSweepingCacheSize?: number;
        cellWidth?: number;
        cellWidthMin?: number;
        cellWidthSpec?: "Auto" | "Fixed";
        cellsMarkBusiness?: boolean;
        clientState?: any;
        contextMenu?: DayPilot.Menu;
        contextMenuLink?: DayPilot.Menu;
        contextMenuResource?: DayPilot.Menu;
        contextMenuSelection?: DayPilot.Menu;
        cornerHtml?: string;
        cornerText?: string;
        crosshairTimeHeaderLevel?: "Last" | number;
        crosshairType?: "Full" | "Header" | "Disabled";
        days?: number;
        doubleClickTimeout?: number;
        dragOutAllowed?: boolean;
        drawBlankCells?: boolean;
        durationBarHeight?: number;
        durationBarMode?: "Duration" | "PercentComplete";
        durationBarVisible?: boolean;
        dynamicEventRendering?: "Progressive" | "Disabled";
        dynamicEventRenderingCacheSize?: number;
        dynamicEventRenderingCacheSweeping?: boolean;
        dynamicEventRenderingMargin?: number;
        dynamicEventRenderingMarginX?: number;
        dynamicEventRenderingMarginY?: number;
        dynamicLoading?: boolean;
        eventClickHandling?: "Enabled" | "Disabled" | "CallBack" | "Edit" | "Select" | "ContextMenu" | "Bubble";
        eventDeleteHandling?: "Update" | "Disabled" | "CallBack";
        eventDoubleClickHandling?: "Enabled" | "Disabled" | "CallBack" | "Edit" | "Select" | "ContextMenu" | "Bubble";
        eventEditHandling?: "Disabled" | "Update" | "CallBack";
        eventEditMinWidth?: number;
        eventEndSpec?: "DateTime" | "Date";
        eventHeight?: number;
        eventHoverHandling?: "Bubble" | "Disabled";
        eventHtmlLeftMargin?: number;
        eventHtmlRightMargin?: number;
        eventMarginBottom?: number;
        eventMarginLeft?: number;
        eventMarginRight?: number;
        eventMinWidth?: number;
        eventMoveHandling?: "Update" | "Disabled" | "CallBack" | "Notify";
        eventMoveMargin?: number;
        eventMoveSkipNonBusiness?: boolean;
        eventMoveToPosition?: boolean;
        eventMovingStartEndEnabled?: boolean;
        eventMovingStartEndFormat?: string;
        eventResizeHandling?: "Update" | "Disabled" | "CallBack" | "Notify";
        eventResizeMargin?: number;
        eventResizingStartEndEnabled?: boolean;
        eventResizingStartEndFormat?: string;
        eventRightClickHandling?: "Enabled" | "Disabled" | "CallBack" | "Edit" | "Select" | "ContextMenu" | "Bubble";
        eventSelectHandling?: "Disabled" | "Update" | "CallBack";
        eventStackingLineHeight?: number;
        eventTapAndHoldHandling?: "Move" | "ContextMenu";
        eventTextWrappingEnabled?: boolean;
        eventUpdateInplaceOptimization?: boolean;
        eventVersionHeight?: number;
        eventVersionMargin?: number;
        eventVersionPosition?: "Above" | "Below";
        eventVersionsEnabled?: boolean;
        eventVersionsReserveSpace?: boolean;
        eventsLoadMethod?: "GET" | "POST";
        floatingEvents?: boolean;
        floatingTimeHeaders?: boolean;
        groupConcurrentEvents?: boolean;
        groupConcurrentEventsLimit?: number;
        headerHeight?: number;
        height?: number;
        heightSpec?: "Auto" | "Max" | "Fixed" | "Parent100Pct" | "Max100Pct";
        hideBorderFor100PctHeight?: boolean;
        hideUntilInit?: boolean;
        infiniteScrollingEnabled?: boolean;
        infiniteScrollingMargin?: number;
        infiniteScrollingStepDays?: number;
        initEventEnabled?: boolean;
        jointEventsMove?: boolean;
        jointEventsResize?: boolean;
        keyboardEnabled?: boolean;
        keyboardTarget?: "document" | "component";
        layout?: "DivBased" | "TableBased";
        linkBottomMargin?: number;
        linkCreateHandling?: "Disabled" | "Update" | "CallBack" | "Notify";
        linkPointSize?: number;
        linksLoadMethod?: "GET" | "POST";
        loadingLabelText?: string;
        loadingLabelHtml?: string;
        loadingLabelVisible?: boolean;
        locale?: string | DayPilot.Locale;
        messageBarPosition?: "Top" | "Bottom";
        messageHideAfter?: number;
        messageHideOnMouseOut?: boolean;
        moveBy?: "Full" | "Top" | "Left";
        multiMoveVerticalMode?: "Disabled" | "Master" | "All";
        //multiSelectRectangle?: "Disabled" | "Free" | "Row";
        rectangleSelectHandling?: "Disabled" | "Enabled" | "EventSelect";
        rectangleSelectMode?: "Free" | "Row";
        navigatorBackSync?: string | DayPilot.Navigator;
        notifyCommit?: "Immediate" | "Queue";
        overrideWheelScrolling?: boolean;
        progressiveRowRendering?: boolean;
        progressiveRowRenderingPreload?: number;
        resourceBubble?: DayPilot.Bubble;
        resourceCollapseHandling?: "Enabled" | "CallBack";
        resourceExpandHandling?: "Enabled" | "CallBack";
        resources?: ResourceData[];
        rowClickHandling?: "Enabled" | "Disabled" | "CallBack" | "Edit" | "Select";
        rowCreateHandling?: "Disabled" | "Enabled" | "CallBack";
        rowCreateHeight?: number;
        rowCreateHtml?: string;
        rowDoubleClickHandling?: "Disabled" | "Enabled" | "CallBack" | "Select" | "Edit";
        rowDragHandleWidth?: number;
        rowEditHandling?: "Update" | "CallBack";
        rowFilterParentsAlwaysVisible?: boolean;
        rowHeaderColumnDefaultWidth?: number;
        rowHeaderColumnResizedHandling?: "Update" | "CallBack";
        rowHeaderColumns?: { title?: string, text?: string, html?: string, width?: number, display?: string, sort?: string }[];
        rowHeaderColumnsMode?: "Tabular" | "Legacy";
        rowHeaderColumnsResizable?: boolean;
        rowHeaderHideIconEnabled?: boolean;
        rowHeaderScrolling?: boolean;
        rowHeaderSplitterWidth?: number;
        rowHeaderWidth?: number;
        rowHeaderWidthAutoFit?: boolean;
        rowHeaderWidthMarginRight?: number;
        rowMarginBottom?: number;
        rowMarginTop?: number;
        rowMinHeight?: number;
        rowMoveHandling?: "Disabled" | "Update" | "CallBack" | "Notify";
        rowMoveSameLevelOnly?: boolean;
        rowRightClickHandling?: "ContextMenu" | "Enabled" | "Disabled";
        rowSelectHandling?: "Update" | "CallBack" | "Notify";
        rowsLoadMethod?: "GET" | "POST";
        rowSortingMode?: "LeavesOnly" | "ParentsOnly";
        scale?: "Manual" | "CellDuration" | "Minute" | "Hour" | "Day" | "Week" | "Month" | "Year";
        scrollDelayCells?: number;
        scrollDelayDynamic?: number;
        scrollDelayEvents?: number;
        scrollDelayFloats?: number;
        scrollDelayRows?: number;
        scrollStep?: number;
        scrollX?: number;
        scrollY?: number;
        selectedRows?: string[] | number[];
        separators?: SeparatorData[];
        showCurrentTimeHeader?: boolean;
        showNonBusiness?: boolean;
        showToolTip?: boolean;
        snapToGrid?: boolean;
        snapToGridEventMoving?: boolean;
        snapToGridEventResizing?: boolean;
        snapToGridRectangleSelecting?: boolean;
        snapToGridTimeRangeSelecting?: boolean;
        sortDirections?: SortDirection[];
        startDate?: DayPilot.Date | string;
        syncResourceTree?: boolean;
        tapAndHoldTimeout?: number;
        theme?: string;
        timeFormat?: "Auto" | "Clock12Hours" | "Clock24Hours";
        timeHeaderClickHandling?: "Enabled" | "Disabled";
        timeHeaderTextWrappingEnabled?: boolean;
        timeHeaders?: TimeHeaderData[];
        timeRangeClickHandling?: "Enabled" | "Disabled";
        timeRangeDoubleClickHandling?: "Disabled" | "CallBack" | "Enabled";
        timeRangeRightClickHandling?: "ContextMenu" | "Enabled" | "Disabled";
        timeRangeSelectedHandling?: "Enabled" | "Disabled" | "CallBack";
        timeRangeSelectingStartEndEnabled?: boolean;
        timeRangeSelectingStartEndFormat?: string;
        timeline?: TimelineData[];
        treeAnimation?: boolean;
        treeAutoExpand?: boolean;
        treeEnabled?: boolean;
        treeImageMarginLeft?: number;
        treeImageMarginTop?: number;
        treeImageWidth?: number;
        treeImageHeight?: number;
        treeIndent?: number;
        treePreventParentUsage?: boolean;
        useEventBoxes?: "Always" | "Never" | "ShortEventsOnly";
        viewType?: "Days" | "Resources" | "Gantt";
        visible?: boolean;
        watchWidthChanges?: boolean;
        weekStarts?: "Auto" | number;
        width?: number;
        xssProtection?: "Enabled" | "Disabled";
        zoomLevels?: ZoomLevel[];
        zoomPosition?: "left" | "right" | "middle";

        onAfterEventRender?: EventHandler<SchedulerAfterEventRenderArgs>;
        onAfterRender?: EventHandler<SchedulerAfterRenderArgs>;
        onAfterUpdate?: EventHandler<SchedulerAfterUpdateArgs>;
        onAutoRefresh?: EventHandler<SchedulerAutoRefreshArgs>;
        onBeforeCellExport?: EventHandler<SchedulerBeforeCellExportArgs>;
        onBeforeCellRender?: EventHandler<SchedulerBeforeCellRenderArgs>;
        onBeforeCornerRender?: EventHandler<SchedulerBeforeCornerRenderArgs>;
        onBeforeCornerDomAdd?: EventHandler<SchedulerBeforeCornerDomAddArgs>;
        onBeforeCornerDomRemove?: EventHandler<SchedulerBeforeCornerDomRemoveArgs>;
        onBeforeEventExport?: EventHandler<SchedulerBeforeEventExportArgs>;
        onBeforeEventRender?: EventHandler<SchedulerBeforeEventRenderArgs>;
        onBeforeEventDomAdd?: EventHandler<SchedulerBeforeEventDomAddArgs>;
        onBeforeEventDomRemove?: EventHandler<SchedulerBeforeEventDomRemoveArgs>;
        onBeforeGridLineRender?: EventHandler<SchedulerBeforeGridLineRenderArgs>;
        onBeforeGroupRender?: EventHandler<SchedulerBeforeGroupRenderArgs>;
        onBeforeResHeaderRender?: EventHandler<SchedulerBeforeResHeaderRenderArgs>;
        onBeforeRowHeaderColumnRender?: EventHandler<SchedulerBeforeRowHeaderColumnRenderArgs>;
        onBeforeRowHeaderRender?: EventHandler<SchedulerBeforeRowHeaderRenderArgs>;
        onBeforeRowHeaderDomAdd?: EventHandler<SchedulerBeforeRowHeaderDomAddArgs>;
        onBeforeRowHeaderDomRemove?: EventHandler<SchedulerBeforeRowHeaderDomRemoveArgs>;
        onBeforeRowHeaderExport?: EventHandler<SchedulerBeforeRowHeaderExportArgs>;
        onBeforeTimeHeaderRender?: EventHandler<SchedulerBeforeTimeHeaderRenderArgs>;
        onBeforeTimeHeaderDomAdd?: EventHandler<SchedulerBeforeTimeHeaderDomAddArgs>;
        onBeforeTimeHeaderDomRemove?: EventHandler<SchedulerBeforeTimeHeaderDomRemoveArgs>;
        onBeforeTimeHeaderExport?: EventHandler<SchedulerBeforeTimeHeaderExportArgs>;
        onCallBackStart?: EventHandler<SchedulerCallBackStartArgs>;
        onCallBackEnd?: EventHandler<SchedulerCallBackEndArgs>;
        onCellMouseEnter?: EventHandler<SchedulerCellMouseEnterArgs>;
        onCellMouseLeave?: EventHandler<SchedulerCellMouseLeaveArgs>;
        onCellMouseOut?: EventHandler<SchedulerCellMouseOutArgs>;
        onCellMouseOver?: EventHandler<SchedulerCellMouseOverArgs>;
        onDimensionsChanged?: EventHandler<SchedulerDimensionsChangedArgs>;
        onEventClick?: EventHandler<SchedulerEventClickArgs>;
        onEventClicked?: EventHandler<SchedulerEventClickedArgs>;
        onEventDelete?: EventHandler<SchedulerEventDeleteArgs>;
        onEventDeleted?: EventHandler<SchedulerEventDeletedArgs>;
        onEventDoubleClick?: EventHandler<SchedulerEventDoubleClickArgs>;
        onEventDoubleClicked?: EventHandler<SchedulerEventDoubleClickedArgs>;
        onEventEdit?: EventHandler<SchedulerEventEditArgs>;
        onEventEdited?: EventHandler<SchedulerEventEditedArgs>;
        onEventFilter?: EventHandler<SchedulerEventFilterArgs>;
        onEventMouseEnter?: EventHandler<SchedulerEventMouseEnterArgs>;
        onEventMouseLeave?: EventHandler<SchedulerEventMouseLeaveArgs>;
        onEventMouseOut?: EventHandler<SchedulerEventMouseOutArgs>;
        onEventMouseOver?: EventHandler<SchedulerEventMouseOverArgs>;
        onEventMove?: EventHandler<SchedulerEventMoveArgs>;
        onEventMoved?: EventHandler<SchedulerEventMovedArgs>;
        onEventMoving?: EventHandler<SchedulerEventMovingArgs>;
        onEventResize?: EventHandler<SchedulerEventResizeArgs>;
        onEventResized?: EventHandler<SchedulerEventResizedArgs>;
        onEventResizing?: EventHandler<SchedulerEventResizingArgs>;
        onEventRightClick?: EventHandler<SchedulerEventRightClickArgs>;
        onEventRightClicked?: EventHandler<SchedulerEventRightClickedArgs>;
        onEventSelect?: EventHandler<SchedulerEventSelectArgs>;
        onEventSelected?: EventHandler<SchedulerEventSelectedArgs>;
        onGridMouseDown?: EventHandler<SchedulerGridMouseDownArgs>;
        onIncludeTimeCell?: EventHandler<SchedulerIncludeTimeCellArgs>;
        onLinkClick?: EventHandler<SchedulerLinkClickArgs>;
        onLinkClicked?: EventHandler<SchedulerLinkClickedArgs>;
        onLinkCreate?: EventHandler<SchedulerLinkCreateArgs>;
        onLinkCreated?: EventHandler<SchedulerLinkCreatedArgs>;
        onLoadNode?: EventHandler<SchedulerLoadNodeArgs>;
        onRectangleSelect?: EventHandler<SchedulerRectangleSelectArgs>;
        onRectangleSelected?: EventHandler<SchedulerRectangleSelectedArgs>;
        onRectangleSelecting?: EventHandler<SchedulerRectangleSelectingArgs>;
        onResourceCollapse?: EventHandler<SchedulerResourceCollapseArgs>;
        onResourceExpand?: EventHandler<SchedulerResourceExpandArgs>;
        onResourceHeaderClick?: EventHandler<SchedulerResourceHeaderClickArgs>;
        onResourceHeaderClicked?: EventHandler<SchedulerResourceHeaderClickedArgs>;
        onRowClick?: EventHandler<SchedulerRowClickArgs>;
        onRowClicked?: EventHandler<SchedulerRowClickedArgs>;
        onRowCreate?: EventHandler<SchedulerRowCreateArgs>;
        onRowCreated?: EventHandler<SchedulerRowCreatedArgs>;
        onRowDoubleClick?: EventHandler<SchedulerRowDoubleClickArgs>;
        onRowDoubleClicked?: EventHandler<SchedulerRowDoubleClickedArgs>;
        onRowEdit?: EventHandler<SchedulerRowEditArgs>;
        onRowEdited?: EventHandler<SchedulerRowEditedArgs>;
        onRowFilter?: EventHandler<SchedulerRowFilterArgs>;
        onRowHeaderColumnResized?: EventHandler<SchedulerRowHeaderColumnResizedArgs>;
        onRowHeaderResized?: EventHandler<SchedulerRowHeaderResizedArgs>;
        onRowMouseOver?: EventHandler<SchedulerRowMouseOverArgs>;
        onRowMouseOut?: EventHandler<SchedulerRowMouseOutArgs>;
        onRowMove?: EventHandler<SchedulerRowMoveArgs>;
        onRowMoved?: EventHandler<SchedulerRowMovedArgs>;
        onRowMoving?: EventHandler<SchedulerRowMovingArgs>;
        onRowSelect?: EventHandler<SchedulerRowSelectArgs>;
        onRowSelected?: EventHandler<SchedulerRowSelectedArgs>;
        onScroll?: EventHandler<SchedulerScrollArgs>;
        onTimeHeaderClick?: EventHandler<SchedulerTimeHeaderClickArgs>;
        onTimeHeaderClicked?: EventHandler<SchedulerTimeHeaderClickedArgs>;
        onTimeHeaderRightClick?: EventHandler<SchedulerTimeHeaderRightClickArgs>;
        onTimeHeaderRightClicked?: EventHandler<SchedulerTimeHeaderRightClickedArgs>;
        onTimeRangeClick?: EventHandler<SchedulerTimeRangeClickArgs>;
        onTimeRangeClicked?: EventHandler<SchedulerTimeRangeClickedArgs>;
        onTimeRangeDoubleClick?: EventHandler<SchedulerTimeRangeDoubleClickArgs>;
        onTimeRangeDoubleClicked?: EventHandler<SchedulerTimeRangeDoubleClickedArgs>;
        onTimeRangeRightClick?: EventHandler<SchedulerTimeRangeRightClickArgs>;
        onTimeRangeRightClicked?: EventHandler<SchedulerTimeRangeRightClickedArgs>;
        onTimeRangeSelect?: EventHandler<SchedulerTimeRangeSelectArgs>;
        onTimeRangeSelected?: EventHandler<SchedulerTimeRangeSelectedArgs>;
        onTimeRangeSelecting?: EventHandler<SchedulerTimeRangeSelectingArgs>;
    }

    class SchedulerConfig extends SchedulerPropsAndEvents {
        events?: EventData[];
        links?: LinkData[];
        zoom?: number | string;
    }

    namespace Scheduler {
        function makeDraggable(options: SchedulerMakeDraggableOptions): void;
        function registerDropTarget(options: SchedulerRegisterDropTargetOptions): void;
        function startDragging(options: any): void;
        function stopDragging(): void;
    }

    interface SchedulerRegisterDropTargetOptions {
        element: HTMLElement;
        onDrop?: EventHandler<SchedulerDropTargetDropArgs>;
        onDragOver?: EventHandler<SchedulerDropTargetDragOverArgs>;
        onDragLeave?: EventHandler<SchedulerDropTargetDragLeaveArgs>;
    }

    interface SchedulerDropTargetDropArgs {
        e: DayPilot.Event;
    }
    interface SchedulerDropTargetDragOverArgs {
        e: DayPilot.Event;
    }
    interface SchedulerDropTargetDragLeaveArgs {
        e: DayPilot.Event;
    }

    interface SchedulerMakeDraggableOptions {
        element: HTMLElement;
        keepElement?: boolean;
        remove?: HTMLElement;
        data?: any;
        id?: string | number;
        text?: string;
        duration?: number | DayPilot.Duration;
        externalHtml?: string;
        externalCssClass?: string;
    }

    interface SchedulerAfterEventRenderArgs {
        [x: string]: any
    }

    interface SchedulerAfterRenderArgs {
        [x: string]: any
    }

    interface SchedulerAfterUpdateArgs {
        [x: string]: any
    }

    interface SchedulerAutoRefreshArgs {
        [x: string]: any
    }

    interface SchedulerBeforeCellExportArgs {
        [x: string]: any
    }

    interface SchedulerBeforeCellRenderArgs {
        readonly control: Scheduler;
        readonly cell: Cell;

        getPixels(date: DayPilot.Date | "string"): number;

        [x: string]: any;
    }

    interface SchedulerBeforeCornerRenderArgs {
        [x: string]: any
    }

    interface SchedulerBeforeCornerDomAddArgs {
        [x: string]: any
    }

    interface SchedulerBeforeCornerDomRemoveArgs {
        [x: string]: any
    }

    interface SchedulerBeforeEventExportArgs {
        readonly e: DayPilot.Event;
        readonly areas: AreaData[];
        fontSize: string;
        fontFamily: string;
        fontColor: string;
        backColor: string;
        borderColor: string;
        horizontalAlignment: "left" | "center" | "right";
        verticalAlignment: "top" | "center" | "right";
        barHeigt: number;
        textPadding: number;
        textLeft: string;
        textRight: string;

        [x: string]: any;
    }

    interface SchedulerBeforeEventRenderArgs {
        [x: string]: any
    }

    interface SchedulerBeforeEventDomAddArgs {
        [x: string]: any
    }

    interface SchedulerBeforeEventDomRemoveArgs {
        [x: string]: any
    }

    interface SchedulerBeforeGridLineRenderArgs {
        readonly start?: DayPilot.Date;
        readonly end?: DayPilot.Date;
        readonly row?: DayPilot.Row;
        hidden: boolean;
        cssClass: string;
        readonly type: "HorizontalLine" | "VerticalLine" | "VerticalBreak";
    }

    interface SchedulerBeforeGroupRenderArgs {
        [x: string]: any
    }

    interface SchedulerBeforeResHeaderRenderArgs {
        [x: string]: any
    }

    interface SchedulerBeforeRowHeaderColumnRenderArgs {
        [x: string]: any
    }

    interface SchedulerBeforeRowHeaderRenderArgs {
        [x: string]: any
    }

    interface SchedulerBeforeRowHeaderDomAddArgs {
        [x: string]: any
    }

    interface SchedulerBeforeRowHeaderDomRemoveArgs {
        [x: string]: any
    }

    interface SchedulerBeforeRowHeaderExportArgs {
        [x: string]: any
    }

    interface SchedulerBeforeTimeHeaderRenderArgs {
        readonly control: Scheduler;
        readonly header: {
            readonly start: DayPilot.Date;
            readonly end: DayPilot.Date;
            text: string;
            html: string;
            toolTip: string;
            backColor: string;
            fontColor: string;
            readonly level: number;
            cssClass: string;
            [x: string]: any;
        };

        [x: string]: any;
    }

    interface SchedulerBeforeTimeHeaderDomAddArgs {
        [x: string]: any
    }

    interface SchedulerBeforeTimeHeaderDomRemoveArgs {
        [x: string]: any
    }

    interface SchedulerBeforeTimeHeaderExportArgs {
        [x: string]: any
    }

    interface SchedulerCallBackStartArgs {
        [x: string]: any
    }

    interface SchedulerCallBackEndArgs {
        [x: string]: any
    }

    interface SchedulerCellMouseEnterArgs {
        cell: DayPilot.Cell;
        [x: string]: any
    }

    interface SchedulerCellMouseLeaveArgs {
        cell: DayPilot.Cell;
        [x: string]: any
    }

    interface SchedulerCellMouseOutArgs {
        [x: string]: any
    }

    interface SchedulerCellMouseOverArgs {
        [x: string]: any
    }

    interface SchedulerDimensionsChangedArgs {
        [x: string]: any
    }

    interface SchedulerEventClickArgs {
        [x: string]: any
    }

    interface SchedulerEventClickedArgs {
        [x: string]: any
    }

    interface SchedulerEventDeleteArgs {
        [x: string]: any
    }

    interface SchedulerEventDeletedArgs {
        [x: string]: any
    }

    interface SchedulerEventDoubleClickArgs {
        [x: string]: any
    }

    interface SchedulerEventDoubleClickedArgs {
        [x: string]: any
    }

    interface SchedulerEventEditArgs {
        [x: string]: any
    }

    interface SchedulerEventEditedArgs {
        [x: string]: any
    }

    interface SchedulerEventFilterArgs {
        [x: string]: any
    }

    interface SchedulerEventMouseEnterArgs {
        e: DayPilot.Event;
        div: Element;
        [x: string]: any
    }

    interface SchedulerEventMouseLeaveArgs {
        e: DayPilot.Event;
        div: Element;
        [x: string]: any
    }

    interface SchedulerEventMouseOutArgs {
        [x: string]: any
    }

    interface SchedulerEventMouseOverArgs {
        [x: string]: any
    }

    interface SchedulerEventMoveArgs {
        [x: string]: any
    }

    interface SchedulerEventMovedArgs {
        [x: string]: any
    }

    interface SchedulerEventMovingArgs {
        [x: string]: any
    }

    interface SchedulerEventResizeArgs {
        [x: string]: any
    }

    interface SchedulerEventResizedArgs {
        [x: string]: any
    }

    interface SchedulerEventResizingArgs {
        [x: string]: any
    }

    interface SchedulerEventRightClickArgs {
        [x: string]: any
    }

    interface SchedulerEventRightClickedArgs {
        [x: string]: any
    }

    interface SchedulerEventSelectArgs {
        [x: string]: any
    }

    interface SchedulerEventSelectedArgs {
        [x: string]: any
    }

    interface SchedulerGridMouseDownArgs {
        [x: string]: any
    }

    interface SchedulerIncludeTimeCellArgs {
        [x: string]: any
    }

    interface SchedulerLinkClickArgs {
        [x: string]: any
    }

    interface SchedulerLinkClickedArgs {
        [x: string]: any
    }

    interface SchedulerLinkCreateArgs {
        [x: string]: any
    }

    interface SchedulerLinkCreatedArgs {
        [x: string]: any
    }

    interface SchedulerLoadNodeArgs {
        [x: string]: any
    }

    interface SchedulerRectangleSelectArgs {
        [x: string]: any
    }

    interface SchedulerRectangleSelectedArgs {
        [x: string]: any
    }

    interface SchedulerRectangleSelectingArgs {
        [x: string]: any
    }

    interface SchedulerResourceCollapseArgs {
        [x: string]: any
    }

    interface SchedulerResourceExpandArgs {
        [x: string]: any
    }

    interface SchedulerResourceHeaderClickArgs {
        [x: string]: any
    }

    interface SchedulerResourceHeaderClickedArgs {
        [x: string]: any
    }

    interface SchedulerRowClickArgs {
        [x: string]: any
    }

    interface SchedulerRowClickedArgs {
        [x: string]: any
    }

    interface SchedulerRowCreateArgs {
        [x: string]: any
    }

    interface SchedulerRowCreatedArgs {
        [x: string]: any
    }

    interface SchedulerRowDoubleClickArgs {
        [x: string]: any
    }

    interface SchedulerRowDoubleClickedArgs {
        [x: string]: any
    }

    interface SchedulerRowEditArgs {
        [x: string]: any
    }

    interface SchedulerRowEditedArgs {
        [x: string]: any
    }

    interface SchedulerRowFilterArgs {
        visible: boolean;
        readonly row: DayPilot.Row;
        readonly filterParam: any;
        readonly control: DayPilot.Scheduler;

        [x: string]: any;
    }

    interface SchedulerRowHeaderColumnResizedArgs {
        [x: string]: any
    }

    interface SchedulerRowHeaderResizedArgs {
        [x: string]: any
    }

    interface SchedulerRowMouseOverArgs {
        [x: string]: any
    }

    interface SchedulerRowMouseOutArgs {
        [x: string]: any
    }

    interface SchedulerRowMoveArgs {
        [x: string]: any
    }

    interface SchedulerRowMovedArgs {
        [x: string]: any
    }

    interface SchedulerRowMovingArgs {
        [x: string]: any
    }

    interface SchedulerRowSelectArgs {
        [x: string]: any
    }

    interface SchedulerRowSelectedArgs {
        [x: string]: any
    }

    interface SchedulerScrollArgs {
        [x: string]: any
    }

    interface SchedulerTimeHeaderClickArgs {
        readonly header: {
            readonly control: Scheduler;
            readonly start: DayPilot.Date;
            readonly end: DayPilot.Date;
            readonly level: number;
            [x: string]: any;
        }

        preventDefault(): void;

        [x: string]: any;
    }

    interface SchedulerTimeHeaderClickedArgs {
        readonly header: {
            readonly control: Scheduler;
            readonly start: DayPilot.Date;
            readonly end: DayPilot.Date;
            readonly level: number;
            [x: string]: any;
        }

        [x: string]: any;
    }

    interface SchedulerTimeHeaderRightClickArgs {
        [x: string]: any
    }

    interface SchedulerTimeHeaderRightClickedArgs {
        [x: string]: any
    }

    interface SchedulerTimeRangeClickArgs {
        [x: string]: any
    }

    interface SchedulerTimeRangeClickedArgs {
        [x: string]: any
    }

    interface SchedulerTimeRangeDoubleClickArgs {
        [x: string]: any
    }

    interface SchedulerTimeRangeDoubleClickedArgs {
        [x: string]: any
    }

    interface SchedulerTimeRangeRightClickArgs {
        [x: string]: any
    }

    interface SchedulerTimeRangeRightClickedArgs {
        [x: string]: any
    }

    interface SchedulerTimeRangeSelectArgs {
        [x: string]: any
    }

    interface SchedulerTimeRangeSelectedArgs {
        [x: string]: any
    }

    interface SchedulerTimeRangeSelectingArgs {
        readonly anchor: DayPilot.Date;
        start: DayPilot.Date;
        end: DayPilot.Date;
        readonly duration: DayPilot.Duration;
        readonly resource: number | string;
        readonly row: DayPilot.Row;
        allowed: boolean;
        readonly left: {
            html: string;
            enabled: boolean;
            space: number;
            width: number;
            height: number;
        };
        readonly right: {
            html: string;
            enabled: boolean;
            space: number;
            width: number;
            height: number;
        };
        readonly overlapping: boolean;
        html: string;
        cssClass: string;

        [x: string]: any
    }

    class Calendar extends CalendarPropsAndEvents {
        v: string;
        columns: {
            list: CalendarColumnData[];
            load(url: string,
                 success: (args: { data: any; preventDefault(): void; }) => void,
                 error: (args: { request: XMLHttpRequest, exception: any; }) => void
            ): void;
            filter(param: any): void;
        };
        events: {
            list: EventData[];
            add(e: DayPilot.Event | EventData): void;
            find(id: string): DayPilot.Event;
            findRecurrent(masterId: string, time: DayPilot.Date | string): DayPilot.Event;
            load(url: string,
                 success: (args: { data: any; preventDefault(): void; }) => void,
                 error: (args: { request: XMLHttpRequest, exception: any; }) => void
            ): void;
            remove(e: DayPilot.Event): void;
            remove(id: string | number): void;
            update(e: DayPilot.Event | EventData): void;
        };
        multiselect: {
            add(e: DayPilot.Event, dontRedraw?: boolean): void;
            clear(dontRedraw?: boolean): void;
            events(): DayPilot.Event[];
            redraw(): void;
            remove(e: DayPilot.Event, dontRedraw?: boolean): void;
        };

        constructor(id: string | HTMLElement, options?: CalendarConfig);

        clearSelection(): void;

        dispose(): void;

        exportAs(format?: "svg" | "png" | "jpeg", options?: any): Export;

        getSelection(): DayPilot.Selection;

        hide(): void;

        init(): void;

        message(msg: string, options?: { delay?: number, cssClass?: string, rawHtml?: boolean }): void;

        show(): void;

        update(options?: CalendarConfig): void;

        visibleStart(): DayPilot.Date;

        visibleEnd(): DayPilot.Date;

    }

    class CalendarPropsAndEvents {
        allDayEnd?: "DateTime" | "Date";
        allDayEventHeight?: number;
        allowEventOverlap?: boolean;
        allowMultiSelect?: boolean;
        api?: number;
        autoRefreshCommand?: string;
        autoRefreshEnabled?: boolean;
        autoRefreshInterval?: number;
        autoRefreshMaxCount?: number;
        autoScroll?: "Drag" | "Always" | "Disabled";
        backendUrl?: string;
        bubble?: DayPilot.Bubble;
        businessBeginsHour?: number;
        businessEndsHour?: number;
        cellDuration?: number;
        cellHeight?: number;
        clientState?: any;
        columnBubble?: DayPilot.Bubble;
        columnMarginRight?: number;
        columnsLoadMethod?: "POST" | "GET";
        columnWidthSpec?: "Auto" | "Fixed";
        contextMenu?: DayPilot.Menu;
        contextMenuSelection?: DayPilot.Menu;
        cornerHtml?: string;
        cornerText?: string;
        crosshairType?: "Header" | "Full";
        dayBeginsHour?: number;
        dayEndsHour?: number;
        days?: number;
        doubleClickTimeout?: number;
        durationBarVisible?: boolean;
        durationBarWidth?: number;
        dynamicEventRendering?: "Progressive" | "Disabled";
        dynamicEventRenderingMarginX?: number;
        dynamicEventRenderingMarginY?: number;
        eventArrangement?: "SideBySide" | "Cascade" | "Full";
        eventClickHandling?: "Enabled" | "Disabled" | "CallBack" | "Edit" | "Select" | "ContextMenu" | "Bubble";
        eventDeleteHandling?: "Update" | "Disabled" | "CallBack";
        eventDoubleClickHandling?: "Enabled" | "Disabled" | "CallBack" | "Edit" | "Select" | "Bubble";
        eventEditHandling?: "Update" | "CallBack";
        eventHoverHandling?: "Bubble" | "Disabled";
        eventMoveHandling?: "Update" | "CallBack" | "Notify" | "Disabled";
        eventResizeHandling?: "Update" | "CallBack" | "Notify" | "Disabled";
        eventRightClickHandling?: "ContextMenu" | "Disabled" | "CallBack" | "Bubble";
        eventSelectHandling?: "Update" | "CallBack" | "Disabled";
        eventTapAndHoldHandling?: "Move" | "ContextMenu";
        headerClickHandling?: "Enabled" | "CallBack";
        headerDateFormat?: string;
        headerHeight?: number;
        headerLevels?: number;
        height?: number;
        heightSpec?: "BusinessHours" | "BusinessHoursNoScroll" | "Fixed" | "Full" | "Parent100Pct";
        hideFreeCells?: boolean;
        hideUntilInit?: boolean;
        hourWidth?: number;
        initScrollPos?: number;
        loadingLabelText?: string;
        loadingLabelHtml?: string;
        loadingLabelVisible?: boolean;
        locale?: string;
        messageHideAfter?: number;
        moveBy?: "Full" | "Left" | "Top" | "Disabled" | "None";
        notifyCommit?: "Immediate" | "Queue";
        rtl?: boolean;
        scrollDelayCells?: number;
        scrollDelayEvents?: number;
        showAllDayEvents?: boolean;
        showAllDayEventStartEnd?: boolean;
        showCurrentTime?: boolean;
        showCurrentTimeMode?: "Day" | "Full";
        showCurrentTimeOffset?: number;
        showHeader?: boolean;
        showHours?: boolean;
        showToolTip?: boolean;
        sortDirections?: SortDirection[];
        startDate?: DayPilot.Date | string;
        theme?: string;
        timeFormat?: "Auto" | "Clock12Hours" | "Clock24Hours";
        timeHeaderCellDuration?: number;
        timeRangeDoubleClickHandling?: "Enabled" | "Disabled" | "CallBack";
        timeRangeSelectedHandling?: "Enabled" | "Disabled" | "CallBack";
        useEventBoxes?: "Always" | "Never" | "ShortEventsOnly";
        viewType?: "Day" | "Days" | "Week" | "WorkWeek" | "Resources";
        visible?: boolean;
        watchWidthChanges?: boolean;
        weekStarts?: "Auto" | number;
        width?: string;
        xssProtection?: "Enabled" | "Disabled";

        onAfterRender?: EventHandler<CalendarAfterRenderArgs>;
        onAfterEventRender?: EventHandler<CalendarAfterEventRenderArgs>;
        onAjaxError?: EventHandler<CalendarAjaxErrorArgs>;
        onBeforeCellRender?: EventHandler<CalendarBeforeCellRenderArgs>;
        onBeforeCornerDomAdd?: EventHandler<CalendarBeforeCornerDomAddArgs>;
        onBeforeCornerDomRemove?: EventHandler<CalendarBeforeCornerDomRemoveArgs>;
        onBeforeHeaderDomAdd?: EventHandler<CalendarBeforeHeaderDomAddArgs>;
        onBeforeHeaderDomRemove?: EventHandler<CalendarBeforeHeaderDomRemoveArgs>;
        onBeforeHeaderRender?: EventHandler<CalendarBeforeHeaderRenderArgs>;
        onBeforeTimeHeaderDomAdd?: EventHandler<CalendarBeforeTimeHeaderDomAddArgs>;
        onBeforeTimeHeaderDomRemove?: EventHandler<CalendarBeforeTimeHeaderDomRemoveArgs>;
        onBeforeTimeHeaderRender?: EventHandler<CalendarBeforeTimeHeaderRenderArgs>;
        onBeforeEventDomAdd?: EventHandler<CalendarBeforeEventDomAddArgs>;
        onBeforeEventDomRemove?: EventHandler<CalendarBeforeEventDomRemoveArgs>;
        onBeforeEventRender?: EventHandler<CalendarBeforeEventRenderArgs>;
        onEventClick?: EventHandler<CalendarEventClickArgs>;
        onEventClicked?: EventHandler<CalendarEventClickedArgs>;
        onEventDoubleClick?: EventHandler<CalendarEventDoubleClickArgs>;
        onEventDoubleClicked?: EventHandler<CalendarEventDoubleClickedArgs>;
        onEventEdit?: EventHandler<CalendarEventEditArgs>;
        onEventEdited?: EventHandler<CalendarEventEditedArgs>;
        onEventRightClick?: EventHandler<CalendarEventRightClickArgs>;
        onEventRightClicked?: EventHandler<CalendarEventRightClickedArgs>;
        onEventDelete?: EventHandler<CalendarEventDeleteArgs>;
        onEventDeleted?: EventHandler<CalendarEventDeletedArgs>;
        onEventMove?: EventHandler<CalendarEventMoveArgs>;
        onEventMoved?: EventHandler<CalendarEventMovedArgs>;
        onEventMoving?: EventHandler<CalendarEventMovingArgs>;
        onEventResize?: EventHandler<CalendarEventResizeArgs>;
        onEventResized?: EventHandler<CalendarEventResizedArgs>;
        onEventResizing?: EventHandler<CalendarEventResizingArgs>;
        onEventSelect?: EventHandler<CalendarEventSelectArgs>;
        onEventSelected?: EventHandler<CalendarEventSelectedArgs>;
        onHeaderClick?: EventHandler<CalendarHeaderClickArgs>;
        onHeaderClicked?: EventHandler<CalendarHeaderClickedArgs>;
        onTimeRangeSelect?: EventHandler<CalendarTimeRangeSelectArgs>;
        onTimeRangeSelected?: EventHandler<CalendarTimeRangeSelectedArgs>;
        onTimeRangeDoubleClick?: EventHandler<CalendarTimeRangeDoubleClickArgs>;
        onTimeRangeDoubleClicked?: EventHandler<CalendarTimeRangeDoubleClickedArgs>;
        onColumnFilter?: EventHandler<CalendarColumnFilterArgs>;

    }

    class CalendarConfig extends CalendarPropsAndEvents {
        events?: EventData[];
        columns?: CalendarColumnData[];
    }

    namespace Calendar {
        function makeDraggable(options: any): void;
    }

    interface CalendarAfterRenderArgs {
        [x: string]: any
    }

    interface CalendarAfterEventRenderArgs {
        [x: string]: any
    }

    interface CalendarAjaxErrorArgs {
        [x: string]: any
    }

    interface CalendarBeforeCellRenderArgs {
        [x: string]: any;
    }

    interface CalendarBeforeCornerDomAddArgs {
        [x: string]: any
    }

    interface CalendarBeforeCornerDomRemoveArgs {
        [x: string]: any
    }

    interface CalendarBeforeHeaderDomAddArgs {
        [x: string]: any
    }

    interface CalendarBeforeHeaderDomRemoveArgs {
        [x: string]: any
    }

    interface CalendarBeforeHeaderRenderArgs {
        [x: string]: any
    }

    interface CalendarBeforeTimeHeaderDomAddArgs {
        [x: string]: any
    }

    interface CalendarBeforeTimeHeaderDomRemoveArgs {
        [x: string]: any
    }

    interface CalendarBeforeTimeHeaderRenderArgs {
        [x: string]: any
    }

    interface CalendarBeforeEventDomAddArgs {
        [x: string]: any
    }

    interface CalendarBeforeEventDomRemoveArgs {
        [x: string]: any
    }

    interface CalendarBeforeEventRenderArgs {
        [x: string]: any
    }

    interface CalendarEventClickArgs {
        [x: string]: any
    }

    interface CalendarEventClickedArgs {
        [x: string]: any
    }

    interface CalendarEventDoubleClickArgs {
        [x: string]: any
    }

    interface CalendarEventDoubleClickedArgs {
        [x: string]: any
    }

    interface CalendarEventEditArgs {
        [x: string]: any
    }

    interface CalendarEventEditedArgs {
        [x: string]: any
    }

    interface CalendarEventRightClickArgs {
        [x: string]: any
    }

    interface CalendarEventRightClickedArgs {
        [x: string]: any
    }

    interface CalendarEventDeleteArgs {
        [x: string]: any
    }

    interface CalendarEventDeletedArgs {
        [x: string]: any
    }

    interface CalendarEventMoveArgs {
        [x: string]: any
    }

    interface CalendarEventMovedArgs {
        [x: string]: any
    }

    interface CalendarEventMovingArgs {
        readonly e: DayPilot.Event;
        readonly start: DayPilot.Date;
        readonly end: DayPilot.Date;
        readonly resource: string | number;
        html: string;
        cssClass: string;
        allowed: boolean;
        readonly external: boolean;
        top: CalendarPositionIndicatorProps;
        bottom: CalendarPositionIndicatorProps;

        [x: string]: any;
    }

    interface CalendarEventResizeArgs {
        [x: string]: any
    }

    interface CalendarEventResizedArgs {
        [x: string]: any
    }

    interface CalendarEventResizingArgs {
        readonly e: DayPilot.Event;
        readonly start: DayPilot.Date;
        readonly end: DayPilot.Date;
        readonly resource: string | number;
        html: string;
        cssClass: string;
        allowed: boolean;
        readonly external: boolean;
        top: CalendarPositionIndicatorProps;
        bottom: CalendarPositionIndicatorProps;

        [x: string]: any
    }

    interface CalendarEventSelectArgs {
        [x: string]: any
    }

    interface CalendarEventSelectedArgs {
        [x: string]: any
    }

    interface CalendarHeaderClickArgs {
        [x: string]: any
    }

    interface CalendarHeaderClickedArgs {
        [x: string]: any
    }

    interface CalendarTimeRangeSelectArgs {
        [x: string]: any
    }

    interface CalendarTimeRangeSelectedArgs {
        [x: string]: any
    }

    interface CalendarTimeRangeDoubleClickArgs {
        [x: string]: any
    }

    interface CalendarTimeRangeDoubleClickedArgs {
        [x: string]: any
    }

    interface CalendarColumnFilterArgs {
        [x: string]: any
    }


    interface CalendarPositionIndicatorProps {
        width: number;
        space: number;
        html: string;
        enabled: boolean;
    }

    class Month extends MonthPropsAndEvents {
        v: string;
        events: {
            list: EventData[];
            add(e: DayPilot.Event | EventData): void;
            find(id: string): DayPilot.Event;
            findRecurrent(masterId: string, time: DayPilot.Date | string): DayPilot.Event;
            forRange(start: DayPilot.Date | string, end: DayPilot.Date | string): DayPilot.Event[];
            remove(e: DayPilot.Event): void;
            update(e: DayPilot.Event): void;
        };
        multiselect: {
            add(e: DayPilot.Event, dontRedraw?: boolean): void;
            clear(dontRedraw?: boolean): void;
            events(): DayPilot.Event[];
            redraw(): void;
            remove(e: DayPilot.Event): void;
        };

        constructor(id: string | HTMLElement, options?: MonthConfig);

        clearSelection(): void;

        dispose(): void;

        exportAs(format?: "svg" | "png" | "jpeg", options?: any): Export;

        hide(): void;

        init(): void;

        message(msg: string, options?: { delay?: number, cssClass?: string, rawHtml?: boolean }): void;

        show(): void;

        update(options?: MonthConfig): void;

        visibleStart(): DayPilot.Date;

        visibleEnd(): DayPilot.Date;

    }

    class MonthPropsAndEvents {
        allowMultiSelect?: boolean;
        autoRefreshEnabled?: boolean;
        autoRefreshCommand?: string;
        autoRefreshInterval?: number;
        autoRefreshMaxCount?: number;
        backendUrl?: string;
        bubble?: DayPilot.Bubble;
        cellHeaderHeight?: number;
        cellHeight?: number;
        cellMarginBottom?: number;
        cellMode?: boolean;
        clientState?: any;
        contextMenu?: DayPilot.Menu;
        eventClickHandling?: "Enabled" | "Disabled" | "CallBack" | "Select" | "ContextMenu" | "Bubble";
        eventDoubleClickHandling?: "Enabled" | "Disabled" | "CallBack" | "Select" | "Bubble";
        eventEndTime?: boolean;
        eventHeight?: number;
        eventDeleteHandling?: "Update" | "CallBack" | "Disabled";
        eventHoverHandling?: "Bubble" | "Disabled";
        eventMoveHandling?: "Update" | "CallBack" | "Notify" | "Disabled";
        eventMoveToPosition?: boolean;
        eventResizeHandling?: "Update" | "CallBack" | "Notify" | "Disabled";
        eventRightClickHandling?: "ContextMenu" | "Enabled" | "Disabled" | "CallBack" | "Bubble";
        eventSelectHandling?: "Update" | "CallBack" | "Disabled";
        eventStartTime?: boolean;
        headerClickHandling?: "Enabled" | "Disabled" | "CallBack";
        headerHeight?: number;
        hideUntilInit?: boolean;
        lineSpace?: number;
        loadingLabelText?: string;
        loadingLabelHtml?: string;
        loadingLabelVisible?: boolean;
        locale?: string;
        messageHideAfter?: number;
        notifyCommit?: "Immediate" | "Queue";
        showWeekend?: boolean;
        showToolTip?: boolean;
        startDate?: DayPilot.Date | string;
        theme?: string;
        timeFormat?: "Auto" | "Clock12Hours" | "Clock24Hours";
        timeRangeDoubleClickHandling?: "Enabled" | "Disabled" | "CallBack";
        timeRangeSelectedHandling?: "Enabled" | "Disabled" | "CallBack";
        viewType?: "Month" | "Weeks";
        visible?: boolean;
        weekStarts?: "Auto" | number;
        weeks?: number;
        width?: string;
        xssProtection?: "Enabled" | "Disabled";

        onAjaxError?: EventHandler<MonthAjaxErrorArgs>;
        onAfterEventRender?: EventHandler<MonthAfterEventRenderArgs>;
        onAfterRender?: EventHandler<MonthAfterRenderArgs>;
        onBeforeCellRender?: EventHandler<MonthBeforeCellRenderArgs>;
        onBeforeEventRender?: EventHandler<MonthBeforeEventRenderArgs>;
        onBeforeHeaderRender?: EventHandler<MonthBeforeHeaderRenderArgs>;
        onEventClick?: EventHandler<MonthEventClickArgs>;
        onEventClicked?: EventHandler<MonthEventClickedArgs>;
        onEventDoubleClick?: EventHandler<MonthEventDoubleClickArgs>;
        onEventDoubleClicked?: EventHandler<MonthEventDoubleClickedArgs>;
        onEventSelect?: EventHandler<MonthEventSelectArgs>;
        onEventSelected?: EventHandler<MonthEventSelectedArgs>;
        onEventRightClick?: EventHandler<MonthEventRightClickArgs>;
        onEventRightClicked?: EventHandler<MonthEventRightClickedArgs>;
        onEventMove?: EventHandler<MonthEventMoveArgs>;
        onEventMoved?: EventHandler<MonthEventMovedArgs>;
        onEventResize?: EventHandler<MonthEventResizeArgs>;
        onEventResized?: EventHandler<MonthEventResizedArgs>;
        onTimeRangeSelect?: EventHandler<MonthTimeRangeSelectArgs>;
        onTimeRangeSelected?: EventHandler<MonthTimeRangeSelectedArgs>;
        onHeaderClick?: EventHandler<MonthHeaderClickArgs>;
        onHeaderClicked?: EventHandler<MonthHeaderClickedArgs>;
        onTimeRangeDoubleClick?: EventHandler<MonthTimeRangeDoubleClickArgs>;
        onTimeRangeDoubleClicked?: EventHandler<MonthTimeRangeDoubleClickedArgs>;
    }

    class MonthConfig extends MonthPropsAndEvents {
        events?: EventData;
    }

    interface MonthAjaxErrorArgs {
        [x: string]: any
    }

    interface MonthAfterEventRenderArgs {
        [x: string]: any
    }

    interface MonthAfterRenderArgs {
        [x: string]: any
    }

    interface MonthBeforeCellRenderArgs {
        [x: string]: any
    }

    interface MonthBeforeEventRenderArgs {
        [x: string]: any
    }

    interface MonthBeforeHeaderRenderArgs {
        [x: string]: any
    }

    interface MonthEventClickArgs {
        [x: string]: any
    }

    interface MonthEventClickedArgs {
        [x: string]: any
    }

    interface MonthEventDoubleClickArgs {
        [x: string]: any
    }

    interface MonthEventDoubleClickedArgs {
        [x: string]: any
    }

    interface MonthEventSelectArgs {
        [x: string]: any
    }

    interface MonthEventSelectedArgs {
        [x: string]: any
    }

    interface MonthEventRightClickArgs {
        [x: string]: any
    }

    interface MonthEventRightClickedArgs {
        [x: string]: any
    }

    interface MonthEventMoveArgs {
        [x: string]: any
    }

    interface MonthEventMovedArgs {
        [x: string]: any
    }

    interface MonthEventResizeArgs {
        [x: string]: any
    }

    interface MonthEventResizedArgs {
        [x: string]: any
    }

    interface MonthTimeRangeSelectArgs {
        [x: string]: any
    }

    interface MonthTimeRangeSelectedArgs {
        [x: string]: any
    }

    interface MonthHeaderClickArgs {
        [x: string]: any
    }

    interface MonthHeaderClickedArgs {
        [x: string]: any
    }

    interface MonthTimeRangeDoubleClickArgs {
        [x: string]: any
    }

    interface MonthTimeRangeDoubleClickedArgs {
        [x: string]: any
    }

    class Kanban extends KanbanPropsAndEvents {
        v: string;
        cards: {
            list: CardData[];
            add(c: DayPilot.Card): void;
            remove(c: DayPilot.Card): void;
            update(c: DayPilot.Card): void;
        };
        columns: {
            list: KanbanColumnData[];
        };
        swimlanes: {
            list: SwimlaneData[];
        };

        constructor(id: string, options?: KanbanConfig);

        hide(): void;

        init(): void;

        dispose(): void;

        message(msg: string, options?: { delay?: number, cssClass?: string }): void;

        show(): void;

        update(options?: KanbanConfig): void;

    }

    class KanbanPropsAndEvents {
        barWidth?: number;
        cardDeleteHandling?: "Disabled" | "Update";
        cardMarginBottom?: number;
        cardMarginLeft?: number;
        cardMarginRight?: number;
        cardMoveHandling?: "Update" | "Disabled";
        cellMarginBottom?: number;
        cellMarginTop?: number;
        columnHeaderHeight?: number;
        columnMoveHandling?: "Disabled" | "Update";
        columnWidthSpec?: "Auto" | "Fixed";
        crosshairColor?: string;
        height?: number;
        heightSpec?: "Auto" | "Max" | "Fixed" | "Parent100Pct";
        rowMinHeight?: number;
        swimlaneCollapsingEnabled?: boolean;
        swimlaneHeaderWidth?: number;
        swimlaneMoveHandling?: "Disabled" | "Update";
        theme?: string;
        visible?: boolean;

        onCardClick?: EventHandler<KanbanCardClickArgs>;
        onCardClicked?: EventHandler<KanbanCardClickedArgs>;
        onCardDelete?: EventHandler<KanbanCardDeleteArgs>;
        onCardDeleted?: EventHandler<KanbanCardDeletedArgs>;
        onCardMove?: EventHandler<KanbanCardMoveArgs>;
        onCardMoved?: EventHandler<KanbanCardMovedArgs>;
        onColumnMove?: EventHandler<KanbanColumnMoveArgs>;
        onColumnMoved?: EventHandler<KanbanColumnMovedArgs>;
        onHeightChanged?: EventHandler<KanbanHeightChangedArgs>;
        onSwimlaneMove?: EventHandler<KanbanSwimlaneMoveArgs>;
        onSwimlaneMoved?: EventHandler<KanbanSwimlaneMovedArgs>;
    }

    class KanbanConfig extends KanbanPropsAndEvents {
        cards?: CardData[];
        columns?: KanbanColumnData[];
        swimlanes?: SwimlaneData[];
    }

    interface KanbanCardClickArgs {
        [x: string]: any
    }

    interface KanbanCardClickedArgs {
        [x: string]: any
    }

    interface KanbanCardDeleteArgs {
        [x: string]: any
    }

    interface KanbanCardDeletedArgs {
        [x: string]: any
    }

    interface KanbanCardMoveArgs {
        [x: string]: any
    }

    interface KanbanCardMovedArgs {
        [x: string]: any
    }

    interface KanbanColumnMoveArgs {
        [x: string]: any
    }

    interface KanbanColumnMovedArgs {
        [x: string]: any
    }

    interface KanbanHeightChangedArgs {
        [x: string]: any
    }

    interface KanbanSwimlaneMoveArgs {
        [x: string]: any
    }

    interface KanbanSwimlaneMovedArgs {
        [x: string]: any
    }

    class Gantt extends GanttPropsAndEvents {
        v: string;
        links: {
            list: LinkData[];
            add(link: DayPilot.Link): void;
            find(id: string): DayPilot.Link;
            findByFromTo(from: DayPilot.Date | string, to: DayPilot.Date | string): DayPilot.Link;
            remove(link: DayPilot.Link): void;
        };
        rows: {
            selection: {
                add(task: DayPilot.Task): void;
                clear(): void;
                get(): DayPilot.Task[];
            };
        };
        tasks: {
            list: TaskData[];
            add(task: DayPilot.Task): void;
            find(id: string): DayPilot.Task;
            remove(task: DayPilot.Task): void;
            update(task: DayPilot.Task): void;
        };

        constructor(id: string | HTMLElement, options?: GanttConfig);

        commandCallBack(command: string, data?: any): void;

        init(): void;

        dispose(): void;

        message(html: string): void;

        scrollTo(date: DayPilot.Date, animated?: "fast" | "normal" | "slow" | "linear" | number, position?: "left" | "middle" | "right"): void;

        scrollTo(date: string, animated?: "fast" | "normal" | "slow" | "linear" | number, position?: "left" | "middle" | "right"): void;

        scrollTo(pixels: number, animated?: "fast" | "normal" | "slow" | "linear" | number, position?: "left" | "middle" | "right"): void;

        setHeight(pixels: number): void;

        update(options?: GanttConfig): void;

    }

    class GanttPropsAndEvents {
        autoRefreshCommand?: string;
        autoRefreshEnabled?: boolean;
        autoRefreshInterval?: number;
        autoRefreshMaxCount?: number;
        autoScroll?: "Drag" | "Always" | "Disabled";
        bubbleCell?: DayPilot.Bubble;
        bubbleRow?: DayPilot.Bubble;
        bubbleTask?: DayPilot.Bubble;
        cellDuration?: number;
        cellGroupBy?: GroupBy;
        cellWidth?: number;
        cellWidthSpec?: "Auto" | "Fixed";
        columns?: GanttColumnData[];
        completeBarHeight?: number;
        completeBarVisible?: boolean;
        contextMenuTask?: DayPilot.Menu;
        contextMenuLink?: DayPilot.Menu;
        contextMenuRow?: DayPilot.Menu;
        cornerText?: string;
        cornerHtml?: string;
        crosshairType?: "Full" | "Header" | "Disabled";
        days?: number;
        doubleClickTimeout?: number;
        floatingTasks?: boolean;
        floatingTimeHeaders?: boolean;
        headerHeight?: number;
        height?: number;
        heightSpec?: "Auto" | "Max" | "Fixed" | "Parent100Pct" | "Max100Pct";
        hideUntilInit?: boolean;
        linkBottomMargin?: number;
        linkCreateHandling?: "Disabled" | "Update" | "CallBack" | "Notify";
        linkPointSize?: number;
        loadingLabelText?: string;
        loadingLabelHtml?: string;
        loadingLabelVisible?: boolean;
        locale?: string | DayPilot.Locale;
        messageBarPosition?: "Top" | "Bottom";
        messageHideAfter?: number;
        progressiveRowRendering?: boolean;
        progressiveRowRenderingPreload?: number;
        progressiveTaskRendering?: "Progressive" | "Disabled";
        progressiveTaskRenderingMargin?: number;
        progressiveTaskRenderingCacheSize?: number;
        progressiveTaskRenderingCacheSweeping?: boolean;
        rowClickHandling?: "Enabled" | "Disabled" | "CallBack" | "Edit" | "Select";
        rowCreateHandling?: "Disabled" | "Enabled" | "CallBack";
        rowDoubleClickHandling?: "Disabled" | "Enabled" | "CallBack" | "Select" | "Edit";
        rowEditHandling?: "Update" | "CallBack";
        rowHeaderHideIconEnabled?: boolean;
        rowHeaderScrolling?: boolean;
        rowHeaderSplitterWidth?: number;
        rowHeaderWidth?: number;
        rowHeaderWidthAutoFit?: boolean;
        rowHeaderWidthAutoFitShrink?: boolean;
        rowMarginBottom?: number;
        rowMinHeight?: number;
        rowMoveHandling?: "Disabled" | "Update" | "CallBack" | "Notify";
        rowSelectHandling?: "Update" | "CallBack" | "Notify";
        scale?: "Manual" | "CellDuration" | "Minute" | "Hour" | "Day" | "Week" | "Month" | "Year";
        scrollDelayCells?: number;
        scrollDelayTasks?: number;
        scrollDelayFloats?: number;
        selectedRows?: string[] | number[];
        separators?: SeparatorData[];
        snapToGrid?: boolean;
        startDate?: DayPilot.Date | string;
        tapAndHoldTimeout?: number;
        taskClickHandling?: "Enabled" | "Disabled" | "CallBack" | "Edit" | "Select" | "ContextMenu" | "Bubble";
        taskDoubleClickHandling?: "Enabled" | "Disabled" | "CallBack" | "Edit" | "Select" | "ContextMenu" | "Bubble";
        taskGroupMode?: "Auto" | "Manual";
        taskHeight?: number;
        taskHtmlLeftMargin?: number;
        taskHtmlRightMargin?: number;
        taskMoveHandling?: "Update" | "Disabled" | "CallBack" | "Notify";
        taskMovingStartEndEnabled?: boolean;
        taskMovingStartEndFormat?: boolean;
        taskResizeHandling?: "Update" | "Disabled" | "CallBack" | "Notify";
        taskResizeMargin?: number;
        taskResizingStartEndEnabled?: boolean;
        taskResizingStartEndFormat?: boolean;
        taskRightClickHandling?: "Enabled" | "Disabled" | "CallBack" | "Edit" | "Select" | "ContextMenu" | "Bubble";
        tasksLoadMethod?: "GET" | "POST";
        taskVersionHeight?: number;
        taskVersionMargin?: number;
        taskVersionPosition?: "Above" | "Below";
        taskVersionsEnabled?: boolean;
        theme?: string;
        timeHeaders?: TimeHeaderData[];
        timeline?: TimelineData[];
        treeAutoExpand?: boolean;
        treeIndent?: number;
        treeImageMarginLeft?: number;
        treeImageMarginTop?: number;
        treeImageMarginRight?: number;
        treeImageWidth?: number;
        treeImageHeight?: number;
        useEventBoxes?: "Always" | "Never" | "ShortEventsOnly";
        visible?: boolean;
        xssProtection?: "Enabled" | "Disabled";


        onAfterRender?: EventHandler<GanttAfterRenderArgs>;
        onBeforeCellRender?: EventHandler<GanttBeforeCellRenderArgs>;
        onBeforeCornerRender?: EventHandler<GanttBeforeCornerRenderArgs>;
        onBeforeRowHeaderRender?: EventHandler<GanttBeforeRowHeaderRenderArgs>;
        onBeforeTaskRender?: EventHandler<GanttBeforeTaskRenderArgs>;
        onBeforeTimeHeaderRender?: EventHandler<GanttBeforeTimeHeaderRenderArgs>;
        onColumnResized?: EventHandler<GanttColumnResizedArgs>;
        onLinkCreate?: EventHandler<GanttLinkCreateArgs>;
        onLinkCreated?: EventHandler<GanttLinkCreatedArgs>;
        onRowClick?: EventHandler<GanttRowClickArgs>;
        onRowClicked?: EventHandler<GanttRowClickedArgs>;
        onRowCreate?: EventHandler<GanttRowCreateArgs>;
        onRowCreated?: EventHandler<GanttRowCreatedArgs>;
        onRowDoubleClick?: EventHandler<GanttRowDoubleClickArgs>;
        onRowDoubleClicked?: EventHandler<GanttRowDoubleClickedArgs>;
        onRowEdit?: EventHandler<GanttRowEditArgs>;
        onRowEdited?: EventHandler<GanttRowEditedArgs>;
        onRowMove?: EventHandler<GanttRowMoveArgs>;
        onRowMoved?: EventHandler<GanttRowMovedArgs>;
        onRowMoving?: EventHandler<GanttRowMovingArgs>;
        onRowSelect?: EventHandler<GanttRowSelectArgs>;
        onRowSelected?: EventHandler<GanttRowSelectedArgs>;
        onTaskClick?: EventHandler<GanttTaskClickArgs>;
        onTaskClicked?: EventHandler<GanttTaskClickedArgs>;
        onTaskDoubleClick?: EventHandler<GanttTaskDoubleClickArgs>;
        onTaskDoubleClicked?: EventHandler<GanttTaskDoubleClickedArgs>;
        onTaskMove?: EventHandler<GanttTaskMoveArgs>;
        onTaskMoved?: EventHandler<GanttTaskMovedArgs>;
        onTaskMoving?: EventHandler<GanttTaskMovingArgs>;
        onTaskResize?: EventHandler<GanttTaskResizeArgs>;
        onTaskResized?: EventHandler<GanttTaskResizedArgs>;
        onTaskResizing?: EventHandler<GanttTaskResizingArgs>;
        onTaskRightClick?: EventHandler<GanttTaskRightClickArgs>;
        onTaskRightClicked?: EventHandler<GanttTaskRightClickedArgs>;
    }

    class GanttConfig extends GanttPropsAndEvents {
        tasks?: TaskData[];
        links?: LinkData[];
    }

    interface GanttColumnData {
        title?: string;
        width?: number;
        property?: string;
    }

    interface GanttAfterRenderArgs {
        [x: string]: any
    }

    interface GanttBeforeCellRenderArgs {
        [x: string]: any
    }

    interface GanttBeforeCornerRenderArgs {
        [x: string]: any
    }

    interface GanttBeforeRowHeaderRenderArgs {
        [x: string]: any
    }

    interface GanttBeforeTaskRenderArgs {
        [x: string]: any
    }

    interface GanttBeforeTimeHeaderRenderArgs {
        [x: string]: any
    }

    interface GanttColumnResizedArgs {
        [x: string]: any
    }

    interface GanttLinkCreateArgs {
        [x: string]: any
    }

    interface GanttLinkCreatedArgs {
        [x: string]: any
    }

    interface GanttRowClickArgs {
        [x: string]: any
    }

    interface GanttRowClickedArgs {
        [x: string]: any
    }

    interface GanttRowCreateArgs {
        [x: string]: any
    }

    interface GanttRowCreatedArgs {
        [x: string]: any
    }

    interface GanttRowDoubleClickArgs {
        [x: string]: any
    }

    interface GanttRowDoubleClickedArgs {
        [x: string]: any
    }

    interface GanttRowEditArgs {
        [x: string]: any
    }

    interface GanttRowEditedArgs {
        [x: string]: any
    }

    interface GanttRowMoveArgs {
        [x: string]: any
    }

    interface GanttRowMovedArgs {
        [x: string]: any
    }

    interface GanttRowMovingArgs {
        [x: string]: any
    }

    interface GanttRowSelectArgs {
        [x: string]: any
    }

    interface GanttRowSelectedArgs {
        [x: string]: any
    }

    interface GanttTaskClickArgs {
        [x: string]: any
    }

    interface GanttTaskClickedArgs {
        [x: string]: any
    }

    interface GanttTaskDoubleClickArgs {
        [x: string]: any
    }

    interface GanttTaskDoubleClickedArgs {
        [x: string]: any
    }

    interface GanttTaskMoveArgs {
        [x: string]: any
    }

    interface GanttTaskMovedArgs {
        [x: string]: any
    }

    interface GanttTaskMovingArgs {
        [x: string]: any
    }

    interface GanttTaskResizeArgs {
        [x: string]: any
    }

    interface GanttTaskResizedArgs {
        [x: string]: any
    }

    interface GanttTaskResizingArgs {
        [x: string]: any
    }

    interface GanttTaskRightClickArgs {
        [x: string]: any
    }

    interface GanttTaskRightClickedArgs {
        [x: string]: any
    }


    class Queue extends QueuePropsAndEvents {
        constructor(id: string | HTMLElement, options?: QueueConfig);

        v: string;

        init(): void;
        dispose(): void;
        update(options?: QueueConfig): void;

        events: {
            list: QueueData[];
            add(item: QueueData): void;
            add(e: DayPilot.Event): void;
            find(id: string): DayPilot.Event;
            find(id: number): DayPilot.Event;
            remove(id: string): void;
            remove(id: number): void;
            remove(data: QueueData): void;
            remove(e: DayPilot.Event): void;
            update(item: QueueData): void;
            update(e: DayPilot.Event): void;
        };

        multiselect: {
            add(e: DayPilot.Event): void;
            clear(): void;
            get(): DayPilot.Event[];
        };

    }

    class QueuePropsAndEvents {
        contextMenu?: DayPilot.Menu;
        eventClickHandling?: "Enabled" | "Disabled" | "Select";
        eventRightClickHandling?: "ContextMenu" | "Enabled" | "Disabled";
        eventSelectHandling?: "Update" | "Disabled";
        eventHeight?: number;
        eventTextWrappingEnabled?: boolean;
        lineSpace?: number;
        theme?: string;

        onBeforeEventRender?: EventHandler<any>;
        onEventClick?: EventHandler<any>;
        onEventClicked?: EventHandler<any>;
        onEventRightClick?: EventHandler<any>;
        onEventRightClicked?: EventHandler<any>;
        onEventMove?: EventHandler<any>;
        onEventMoved?: EventHandler<any>;
        onEventSelect?: EventHandler<any>;
        onEventSelected?: EventHandler<any>;
    }

    class QueueConfig extends QueuePropsAndEvents {
        events?: QueueData[];
    }

    class QueueData {
        start?: string | DayPilot.Date;
        end?: string | DayPilot.Date;
        duration?: number | DayPilot.Duration;
        id: string | number;
        text: string;
    }

    class Navigator extends NavigatorPropsAndEvents {
        v: string;
        events: {
            list: EventDataShort[];
        };

        constructor(id: string | HTMLElement, options?: NavigatorConfig);

        init(): void;

        dispose(): void;

        update(options?: NavigatorConfig): void;

        select(date: DayPilot.Date | string): void;

        hide(): void;

        show(): void;

        visibleEnd(): DayPilot.Date;

        visibleStart(): DayPilot.Date;
    }

    class NavigatorPropsAndEvents {
        bound?: string;
        cellHeight?: number;
        cellWidth?: number;
        command?: string;
        dayHeaderHeight?: number;
        freeHandSelectionEnabled?: boolean;
        locale?: string;
        orientation?: "Vertical" | "Horizontal";
        rowsPerMonth?: "Auto" | "Six";
        selectionDay?: DayPilot.Date;
        selectionEnd?: DayPilot.Date;
        selectionStart?: DayPilot.Date;
        selectMode?: "Day" | "Week" | "Month" | "None";
        showMonths?: number;
        showWeekNumbers?: boolean;
        skipMonths?: number;
        startDate?: DayPilot.Date | string;
        theme?: string;
        titleHeight?: number;
        weekStarts?: "Auto" | number;
        weekNumberAlgorithm?: "Auto" | "US" | "ISO8601";
        timeRangeSelectedHandling?: "Bind" | "None";
        visibleRangeChangedHandling?: "Enabled" | "Disabled" | "CallBack";

        onAjaxError?: EventHandler<NavigatorAjaxErrorArgs>;
        onBeforeCellRender?: EventHandler<NavigatorBeforeCellRenderArgs>;
        onTimeRangeSelect?: EventHandler<NavigatorTimeRangeSelectArgs>;
        onTimeRangeSelected?: EventHandler<NavigatorTimeRangeSelectedArgs>;
        onVisibleRangeChange?: EventHandler<NavigatorVisibleRangeChangeArgs>;
        onVisibleRangeChanged?: EventHandler<NavigatorVisibleRangeChangedArgs>;
    }

    class NavigatorConfig extends NavigatorPropsAndEvents {
        events?: EventData[];
    }

    interface NavigatorAjaxErrorArgs {
        [x: string]: any
    }

    interface NavigatorBeforeCellRenderArgs {
        [x: string]: any
    }

    interface NavigatorTimeRangeSelectArgs {
        [x: string]: any
    }

    interface NavigatorTimeRangeSelectedArgs {
        [x: string]: any
    }

    interface NavigatorVisibleRangeChangeArgs {
        [x: string]: any
    }

    interface NavigatorVisibleRangeChangedArgs {
        [x: string]: any
    }


    class Bubble extends BubblePropsAndEvents {
        v: string;

        constructor(options?: BubbleConfig);

        hide(): void;

        showEvent(e: DayPilot.Event): void;

        showHtml(html: string, element?: HTMLElement): void;
    }

    class BubblePropsAndEvents {
        animated?: boolean;
        animation?: "fast" | "slow" | "jump";
        hideAfter?: number;
        hideOnClick?: boolean;
        hideOnHover?: boolean;
        loadingText?: string;
        position?: "Above" | "Mouse" | "EventTop";
        showAfter?: number;
        showLoadingLabel?: boolean;
        theme?: string;
        zIndex?: number;

        onLoad?: EventHandler<BubbleLoadArgs>;
        onDomAdd?: EventHandler<BubbleDomAddArgs>;
        onDomRemove?: EventHandler<BubbleDomRemoveArgs>;
    }

    class BubbleConfig extends BubblePropsAndEvents {
    }

    namespace Bubble {
        function hide(): void;

        function getActive(): DayPilot.Bubble;
    }

    interface BubbleLoadArgs {
        [x: string]: any
    }

    interface BubbleDomAddArgs {
        [x: string]: any
    }

    interface BubbleDomRemoveArgs {
        [x: string]: any
    }

    class Locale {
        datePattern: string;
        dateTimePattern: string;
        dayNames: string[];
        dayNamesShort: string[];
        monthNames: string[];
        monthNamesShort: string[];
        timeFormat: "Clock12Hours" | "Clock24Hours";
        timePattern: string;
        weekStarts: number;

        constructor(id: string, properties: {
            dayNames: string[];
            dayNamesShort: string[];
            monthNames: string[];
            monthNamesShort: string[];
            timePattern: string;
            datePattern: string;
            dateTimePattern: string;
            timeFormat: "Clock12Hours" | "Clock24Hours";
            weekStarts: number;
        });
    }

    namespace Locale {
        function register(locale: DayPilot.Locale): void;

        function find(id: string): DayPilot.Locale;
    }

    class Menu {
        v: string;
        //className: string;
        hideOnMouseOut: boolean;
        items: MenuItemData[];
        menuTitle: string;
        showMenuTitle: boolean;
        zIndex: number;
        theme: string;

        constructor(options?: {
            hideOnMouseOut?: boolean;
            items?: MenuItemData[];
            menuTitle?: string;
            onShow?: EventHandler<MenuShowArgs>;
            showMenuTitle?: boolean;
            zIndex?: number;
            theme?: string;
        });

        show(target?: any): void;

        hide(): void;
    }

    interface MenuShowArgs {
        [x: string]: any
    }

    namespace Menu {
        function hide(): void;
    }

    class MenuBar {
        items: any[];

        constructor(id: string, options?: any);

        init(): void;

        dispose(): void;
    }

    class Date {
        constructor(str?: string | DayPilot.Date);
        constructor(date: GlobalDate, isLocal?: boolean);

        addDays(days: number): DayPilot.Date;

        addHours(hours: number): DayPilot.Date;

        addMilliseconds(millis: number): DayPilot.Date;

        addMinutes(minutes: number): DayPilot.Date;

        addMonths(months: number): DayPilot.Date;

        addSeconds(seconds: number): DayPilot.Date;

        addTime(ticks: number): DayPilot.Date;
        addTime(duration: DayPilot.Duration): DayPilot.Date;

        addYears(years: number): DayPilot.Date;

        dayOfWeek(): number;

        dayOfWeekISO(): number;

        dayOfYear(): number;

        daysInMonth(): number;

        daysInYear(): number;

        equals(another: DayPilot.Date): boolean;

        firstDayOfMonth(): DayPilot.Date;

        firstDayOfWeek(locale?: string | DayPilot.Locale): DayPilot.Date;
        firstDayOfWeek(firstDayOfWeek?: number): DayPilot.Date;

        firstDayOfYear(): DayPilot.Date;

        getDatePart(): DayPilot.Date;

        getDay(): number;

        getDayOfWeek(): number;

        getYear(): number;

        getHours(): number;

        getMilliseconds(): number;

        getMinutes(): number;

        getMonth(): number;

        getSeconds(): number;

        getTime(): number;

        getTimePart(): number;

        getTotalTicks(): number;

        getYear(): number;

        lastDayOfMonth(): DayPilot.Date;

        toDate(): GlobalDate;

        toDateLocal(): GlobalDate;

        toString(pattern?: string, locale?: string | DayPilot.Locale): string;

        toStringSortable(): string;

        weekNumber(): number;

        weekNumberISO(): number;
    }

    namespace Date {
        function fromYearMonthDay(year: number, month: number, day: number): DayPilot.Date;

        function parse(input: string, pattern: string, locale?: string | DayPilot.Locale): DayPilot.Date;

        function today(): DayPilot.Date;

        function now(): DayPilot.Date;

        namespace Cache {
            function clear(): void;
        }
    }

    namespace Util {
        function overlaps(start1: DayPilot.Date, end1: DayPilot.Date, start2: DayPilot.Date, end2: DayPilot.Date): boolean;
        function overlaps(start1: number, end1: number, start2: number, end2: number): boolean;
    }

    class Duration {

        ticks: number;

        constructor(ticks: number);

        constructor(start: DayPilot.Date | string, end: DayPilot.Date | string);

        toString(pattern?: string): string;

        totalMilliseconds(): number;

        totalSeconds(): number;

        totalMinutes(): number;

        totalHours(): number;

        totalDays(): number;

        milliseconds(): number;

        seconds(): number;

        minutes(): number;

        hours(): number;

        days(): number;

        add(d: DayPilot.Duration): DayPilot.Duration;
    }

    namespace Duration {
        function ofWeeks(i: number): DayPilot.Duration;

        function ofDays(i: number): DayPilot.Duration;

        function ofHours(i: number): DayPilot.Duration;

        function ofMinutes(i: number): DayPilot.Duration;

        function ofSeconds(i: number): DayPilot.Duration;
    }

    class Event {
        data: any;

        constructor(data: EventData);

        start(): DayPilot.Date;
        start(newStart: DayPilot.Date): void;

        end(): DayPilot.Date;
        end(newEnd: DayPilot.Date): void;

        id(): string;

        text(): string;
        text(newText: string): void;

        resource(): string;
        resource(newResource: string): void;

        duration(): DayPilot.Duration;
    }

    class Task {
        data: TaskData;
        row: {
            expand(): void;
            expanded(): boolean;
            collapse(): void;
            toggle(): void;
        }

        constructor(data: TaskData);

        id(): string | number;

        id(newId: string): void;

        text(): string;

        text(newText: string): void;

        start(): DayPilot.Date;

        start(newStart: DayPilot.Date | string): void;

        end(): DayPilot.Date;

        end(newEnd: DayPilot.Date | string): void;

        complete(): number;

        complete(newComplete: number): void;

        type(): TaskType;

        type(newType: TaskType): void;

        children(): DayPilot.Task[];
    }

    class Card {
        data: CardData;

        constructor(data: CardData);
    }

    class Link {
        data: LinkData;

        constructor(data: LinkData);
    }

    class Row {
        events: {
            all(): DayPilot.Event[];
            isEmpty(): boolean;
            forRange(start: string | DayPilot.Date, end: string | DayPilot.Date): DayPilot.Event[];
            totalDuration(): DayPilot.Duration;
        };
        cells: {
            all(): CellArray;
            forRange(start: string | DayPilot.Date, end: string | DayPilot.Date): CellArray;
            totalDuration(): DayPilot.Duration;
        };
        groups: {
            all(): EventGroup[];
            collapseAll(): void;
            collapsed(): EventGroup[];
            expandAll(): void;
            expanded(): EventGroup[];
        };
        id: string;
        name: string;
        start: DayPilot.Date;
        data: any;
        index: number;
        displayY: number;
        hidden: boolean;
        hiddenUsingFilter: boolean;

        addClass(className: string): void;

        children(): DayPilot.Row[];

        parent(): DayPilot.Row;

        remove(): void;

        collapse(): void;

        column(i: number): RowHeaderColumn;

        expand(): void;

        removeClass(className: string): void;

        toggle(): void;
    }

    class Selection {
        start: DayPilot.Date;
        end: DayPilot.Date;
        resource: string;
    }

    class Export {
        toElement(): HTMLElement;

        toHtml(): string;

        toDataUri(): string;

        toBlob(): Blob;

        print(options?: any): void;

        download(filename?: string): void;

        dimensions(): { width: number, height: number };
    }

    interface CardData {
        id: string | number;
        name: string;
        text?: string;
        html?: string;
        column: string | number;
        swimlane?: string | number;
        barColor?: string;
    }

    interface KanbanColumnData {
        id: string | number;
        name: string;
        barColor?: string;
    }

    interface SwimlaneData {
        id: string | number;
        name: string;
        collapsed?: boolean;
    }

    interface RowHeaderColumn {
        html(newHtml?: string): string | void;
    }

    interface EventGroup {
        expand(): void;

        collapse(): void;
    }

    interface CalendarColumnData {
        name: string;
        id?: string;
        start?: DayPilot.Date | string;
        html?: string;
        toolTip?: string;
        children?: CalendarColumnData[];
    }

    type GroupBy = "Minute" | "Hour" | "Day" | "Week" | "Month" | "Quarter" | "Year" | "Cell" | "None";
    type SortDirection = "asc" | "desc";
    type TaskType = "Task" | "Milestone" | "Group";
    type LinkType = "FinishToStart" | "FinishToFinish" | "StartToStart" | "StartToFinish";

    interface ZoomLevel {
        properties: any;

        [prop: string]: any;
    }

    interface TimelineData {
        start: DayPilot.Date | string;
        end: DayPilot.Date | string;
        width?: number;
    }

    interface TimeHeaderData {
        groupBy: GroupBy;
        format?: string;
        height?: number;
    }

    interface MenuItemData {
        action?: "CallBack" | "PostBack";
        command?: string;
        cssClass?: string;
        disabled?: boolean;
        hidden?: boolean;
        href?: string;
        icon?: string;
        image?: string;
        items?: MenuItemData[];
        onClick?: EventHandler<MenuItemClickArgs>;
        tags?: any;
        target?: string;
        text?: string;
        html?: string;
    }

    interface MenuItemClickArgs {
        [x: string]: any
    }

    interface SeparatorData {
        location: DayPilot.Date | string;
        color?: string;
        layer?: "AboveEvents" | "BelowEvents";
        opacity?: number;
        width?: number;
        cssClass?: string;
    }

    interface CellArray extends Array<Cell> {
        addClass(className: string): CellArray;

        removeClass(className: string): CellArray;

        html(html: string): CellArray;

        invalidate(): CellArray;
    }

    interface Cell {
        start: DayPilot.Date;
        end: DayPilot.Date;
        resource: string;
        isParent: boolean;
        div: HTMLElement;
        properties: CellProperties;
        x: number;
        y: number;
        displayY: number;
        grid: GridId;

        update(): void;

        utilization(name?: string): number;

        events(): DayPilot.Event[];
    }

    interface CellProperties {
        areas: AreaData[];
        backColor: string;
        backImage: string;
        backRepeat: string;
        business: boolean;
        cssClass: string;
        disabled: boolean;
        html: string;
    }

    type GridId = "top" | "main" | "bottom";

    interface EventDataShort {
        start: string | DayPilot.Date;
        end: string | DayPilot.Date;
    }

    interface EventData {
        start: string | DayPilot.Date;
        end: string | DayPilot.Date;
        id: string | number;
        text: string;
        resource?: string | number;

        areas?: AreaData[];
        backColor?: string;
        backImage?: string;
        backRepeat?: string;
        borderColor?: string;
        bubbleHtml?: string;
        clickDisabled?: boolean;
        contextMenu?: DayPilot.Menu;
        cssClass?: string;
        deleteDisabled?: boolean;
        doubleClickDisabled?: boolean;
        fontColor?: string;
        hidden?: boolean;
        html?: string;
        moveDisabled?: boolean;
        recurrent?: boolean;
        recurrentMasterId?: boolean;
        resizeDisabled?: boolean;
        rightClickDisabled?: boolean;
        sort?: string[];
        tags?: any;
        toolTip?: string;

        // scheduler
        barBackColor?: string;
        barColor?: string;
        barHidden?: boolean;
        complete?: number;
        container?: number | string;
        height?: number;
        htmlLeft?: string;
        htmlRight?: string;
        moveVDisabled?: boolean;
        moveHDisabled?: boolean;
        versions?: VersionData[];

        // calendar
        allday?: boolean;
    }

    interface VersionData {
        start: string | DayPilot.Date;
        end: string | DayPilot.Date;
        id?: string | number;
        text?: string;
        html?: string;
        areas?: AreaData[];
        backColor?: string;
        fontColor?: string;
        borderColor?: string;
        backImage?: string;
        backRepeat?: string;
        complete?: number;
        barColor?: string;
        barBackColor?: string;
        barImageUrl?: string;
        barHidden?: boolean;
        htmlRight?: string;
        htmlLeft?: string;
        cssClass?: string;
        toolTip?: string;
    }

    interface LinkData {
        from: string;
        to: string;
        id?: string;
        type?: LinkType;
        width?: number;
        color?: string;
        style?: string;
        cssClass?: string;
        layer?: "Above" | "Below";
    }

    interface TaskData {
        id: string;
        text: string;
        start: DayPilot.Date | string;
        end?: DayPilot.Date | string;
        type?: TaskType;
        complete?: number;
        children?: TaskData[];
        tags?: any;

        box?: {
            areas?: AreaData[];
            backColor?: string;
            backImage?: string;
            backRepeat?: string;
            barBackColor?: string;
            barColor?: string;
            barHidden?: boolean;
            bubbleHtml?: string;
            clickDisabled?: boolean;
            contextMenu?: DayPilot.Menu;
            cssClass?: string;
            doubleClickDisabled?: boolean;
            html?: string;
            htmlLeft?: string;
            htmlRight?: string;
            moveDisabled?: boolean;
            resizeDisabled?: boolean;
            rightClickDisabled?: boolean;
            toolTip?: string;
        };

        row?: {
            areas?: AreaData[];
            backColor?: string;
            collapsed?: boolean;
            contextMenu?: DayPilot.Menu;
            cssClass?: string;
            hidden?: boolean;
            html?: string;
            marginBottom?: number;
            minHeight?: number;
            toolTip?: string;
        };
    }

    interface ResourceData {
        id: string | number;
        name?: string;

        areas?: AreaData[];
        ariaLabel?: string;
        backColor?: string;
        bubbleHtml?: string;
        fontColor?: string;
        cellsAutoUpdated?: boolean;
        cellsDisabled?: boolean;
        children?: ResourceData[];
        columns?: { text?: string, html?: string; cssClass?: string; backColor?: string }[];
        cssClass?: string;
        contextMenu?: Menu;
        dynamicChildren?: boolean;
        eventHeight?: number;
        eventStackingLineHeight?: number;
        expanded?: boolean;
        frozen?: "top" | "bottom";
        html?: string;
        marginBottom?: number;
        marginTop?: number;
        minHeight?: number;
        moveDisabled?: boolean;
        tags?: any;
        toolTip?: string;

        [prop: string]: any;
    }

    interface AreaData {
        action?: "Default" | "None" | "JavaScript" | "ContextMenu" | "HoverMenu" | "ResizeEnd" | "ResizeStart" | "Move" | "Bubble";
        backColor?: string;
        background?: string;
        bottom?: number;
        bubble?: Bubble;
        cssClass?: string;
        end?: Date | string;
        fontColor?: string;
        height?: number;
        horizontalAlignment?: "left" | "right" | "bottom";
        html?: string;
        icon?: string;
        id?: string | number;
        image?: string;
        left?: number;
        menu?: Menu | string;
        offsetX?: number;
        onClick?: (args: any) => void;
        onClicked?: (args: any) => void;
        onMouseEnter?: (args: any) => void;
        onMouseLeave?: (args: any) => void;
        padding?: number;
        right?: number;
        start?: Date | string;
        style?: string;
        symbol?: string;
        text?: string;
        toolTip?: string;
        top?: number;
        verticalAlignment?: "top" | "bottom" | "center";
        visibility?: "Hover" | "Visible" | "TouchVisible";
        width?: number;
    }

    function guid(): string;

    interface EventHandler<T> {
        (args: T): void;
    }

    // modal

    export class Modal extends ModalPropsAndEvents {
        constructor(options?: ModalConfig)

        close(result?: any): void;

        closeSerialized(): void;

        showHtml(html: string | HTMLElement): void;

        showUrl(url: string): void;

        stretch(): void;
    }

    export class ModalPropsAndEvents {
        autoFocus?: boolean;
        autoStretch?: boolean;
        autoStretchFirstLoadOnly?: boolean;
        container?: HTMLElement;
        disposeOnClose?: boolean;
        dragDrop?: boolean;
        focus?: string | { id: string, value: string | number };
        height?: number;
        left?: number;
        loadingHtml?: string;
        maxHeight?: number;
        scrollWithPage?: boolean;
        theme?: string;
        top?: number;
        useIframe?: boolean;
        width?: number;
        zIndex?: number;

        onClose?: EventHandler<ModalCloseArgs>;
        onClosed?: EventHandler<ModalClosedArgs>;
        onShow?: EventHandler<ModalShowArgs>;
    }

    export namespace Modal {
        function close(): void;

        function opener(): void;

        function prompt(message: string, defaultValue?: string, options?: ModalPromptConfig): Promise<ModalClosedArgs>;

        function alert(message: string, options?: ModalAlertConfig): Promise<ModalClosedArgs>;

        function confirm(message: string, options?: ModalConfirmConfig): Promise<ModalClosedArgs>;

        function form(form?: ModalFormItem[], data?: any, options?: ModalFormConfig): Promise<ModalClosedArgs>;
    }

    export class ModalConfig extends ModalPropsAndEvents {
    }

    export class ModalAlertConfig extends ModalConfig {
        okText?: string;
    }

    export class ModalConfirmConfig extends ModalConfig {
        okText?: string;
        cancelText?: string;
    }

    export class ModalPromptConfig extends ModalConfig {
        okText?: string;
        cancelText?: string;
    }

    export class ModalFormConfig extends ModalConfig {
        okText?: string;
        cancelText?: string;
        locale?: string;
        plugins?: any;
    }

    export interface ModalCloseArgs {
        canceled: boolean;
        result: any;
        backgroundClick: boolean;

        preventDefault(): void;
    }

    export interface ModalClosedArgs {
        canceled: boolean;
        result: any;
        backgroundClick: boolean;
    }

    export interface ModalShowArgs {
        root: Node
    }


    export interface ModalFormItem {
        id?: string;
        name?: string;
        type?: "text" | "date" | "searchable" | "select" | "radio" | "checkbox" | "table" | "title" | "image" | "html" | "textarea" | "scrollable" | string;
        image?: string;
        dateFormat?: string;
        disabled?: boolean;
        cssClass?: string;
        options?: ModalFormOption[];
        children?: ModalFormItem[];
        columns?: ModalFormTableColumns[];
        onValidate?: EventHandler<ModalFormItemValidationArgs>;
        onNewRow?: EventHandler<ModalFormTableItemNewRowArgs>;
        height?: number;
        text?: string;
        html?: string;
    }

    export interface ModalFormOption {
        id: string | number;
        name?: string;
        children?: ModalFormItem[];
    }

    export interface ModalFormTableColumns {
        id: string;
        name: string;
        type?: "text" | "number" | "select";
        options?: ModalFormOption[];
    }

    export interface ModalFormItemValidationArgs {
        value: any;
        result: any;
        valid: boolean;
        message: string;
    }

    export interface ModalFormTableItemNewRowArgs {
        value: any;
        result: any;
    }

}
