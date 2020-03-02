import { AppFilterModel, AppFilterContentModel } from '../models/app';
import { ControlActionType } from '../shared/lib';

export class FilterTemplate {
    protected onlyShowSubCategory: boolean;
    public appFilter: Array<AppFilterModel>;
    constructor() {
        this.onlyShowSubCategory = true;
        this.appFilter = new Array<AppFilterModel>();
    }

    applyCall(headerName: string, contentName: string): void {

        this.appFilter.find(x => x.name == headerName)
        .content.find((x: { name: string; isSelected: boolean }) => { if (x.name === contentName) x.isSelected = !x.isSelected; });
        
        console.log(headerName, contentName);
    }

    loadFilters(): void {
        let catogerys: Array<{}> = [];
        catogerys.push({
            name: "Fruits",
            label: "Fresh Fruits",
            url: ['./', 'fruits'],
            isCallFun: true,
            isSelected: false,
            type: ControlActionType.checkbox
        });
        catogerys.push({
            name: "Vegetables",
            isCallFun: true,
            isSelected: false,
            label: "Fresh Vegetables",
            url: ['./', 'vegetables'],
            type: ControlActionType.checkbox
        });
        let discount: Array<AppFilterContentModel> = [];
        discount.push({
            label: "Upto 5%",
            isCallFun: false,
            name: "discount_upto_5",
            type: ControlActionType.checkbox
        });
        discount.push({
            label: "5% - 10%",
            isCallFun: false,
            name: "discount_5_10",
            type: ControlActionType.checkbox
        });
        discount.push({
            label: "10% - 15%",
            isCallFun: false,
            name: "discount_10_15",
            type: ControlActionType.checkbox
        });
        discount.push({
            label: "15% - 20%",
            isCallFun: false,
            name: "discount_15_20",
            type: ControlActionType.checkbox
        });
        discount.push({
            label: "20% - 25%",
            isCallFun: false,
            name: "discount_20_25",
            type: ControlActionType.checkbox
        });
        discount.push({
            label: "More than 25%",
            isCallFun: false,
            name: "discount_morethan_25",
            type: ControlActionType.checkbox
        });
        this.appFilter.push({
            active: true,
            name: "category",
            header: "Category",
            content: catogerys
        });
        this.appFilter.push({
            active: true,
            name: "brands",
            header: "Brands",
            content: ""
        });
        this.appFilter.push({
            active: true,
            name: "prices",
            header: "Prices",
            content: ""
        });
        this.appFilter.push({
            active: true,
            name: "discounts",
            header: "Discounts",
            content: discount
        });
    }
}