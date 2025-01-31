import { DataArray, DataArrayPartial, Optgroup, OptgroupOptional, Option } from './store';
export default class Select {
    select: HTMLSelectElement;
    listen: boolean;
    onSelectChange?: (data: DataArrayPartial) => void;
    onValueChange?: (value: string[]) => void;
    private observer;
    constructor(select: HTMLSelectElement);
    enable(): void;
    disable(): void;
    hideUI(): void;
    showUI(): void;
    changeListen(on: boolean): void;
    addSelectChangeListener(func: (data: DataArrayPartial) => void): void;
    removeSelectChangeListener(): void;
    addValueChangeListener(func: (value: string[]) => void): void;
    removeValueChangeListener(): void;
    valueChange(ev: Event): boolean;
    private observeWrapper;
    private addObserver;
    private connectObserver;
    private disconnectObserver;
    getData(): DataArrayPartial;
    getDataFromOptgroup(optgroup: HTMLOptGroupElement): OptgroupOptional;
    getDataFromOption(option: HTMLOptionElement): Option;
    getSelectedValues(): string[];
    setSelected(value: string[]): void;
    updateSelect(id?: string, style?: string, classes?: string[]): void;
    updateOptions(data: DataArray): void;
    createOptgroup(optgroup: Optgroup): HTMLOptGroupElement;
    createOption(info: Option): HTMLOptionElement;
    destroy(): void;
}
