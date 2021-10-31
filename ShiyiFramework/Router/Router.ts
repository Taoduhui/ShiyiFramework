import { ShiyiPageBase } from "../ShiyiPage/Base/ShiyiPageBase";

export enum PageName {
    DbDetail, DbSelector, Dictionary, index, MyFavorDb, recite, RichText, SearchWord, CreateDb, SearchDb
}

export interface PageMapItem {
    name: PageName,
    children: Array<PageMapItem>,
}

export class Router {
    /**
     * 仅嵌套目录需要在此定义
     */
    public static PageMap: Array<PageMapItem> = []

    public static TryGetMapPath(name: PageName, CurrentPath: string, map: Array<PageMapItem>): string {
        for (let i = 0; i < map.length; i++) {
            let Res = Router.TryGetMapPath(name, CurrentPath + "/" + PageName[map[i].name], map[i].children);
            if (Res) {
                return Res;
            }
            if (map[i].name == name) {
                return CurrentPath + "/" + PageName[map[i].name] + "/" + PageName[map[i].name];
            }
        }
        return "";
    }

    private static GetPagePath(name: PageName): string {
        let Path = Router.TryGetMapPath(name, "/pages", Router.PageMap);
        if (Path) {
            return Path;
        } else {
            return "/pages/" + PageName[name] + "/" + PageName[name];
        }
    }

    public static PageStacks: Array<ShiyiPageBase> = new Array<ShiyiPageBase>();

    private static RegisteredDataObservers: Map<ShiyiPageBase, Array<(page: ShiyiPageBase) => void>>
        = new Map<ShiyiPageBase, Array<(page: ShiyiPageBase) => void>>();

    public static PageLoad(page: ShiyiPageBase): void {
        Router.PageStacks.push(page);
    }
    public static PageUnload(): void {
        let Observers = Router.RegisteredDataObservers.get(Router.CurrentPage);
        if (Observers) {
            for (let Notification of Observers) {
                Notification(Router.CurrentPage)
            }
        }
        Router.PageStacks.pop();
    }
    public static RegisterPageUnLoaded(page: ShiyiPageBase,notification:(page: ShiyiPageBase) => void): void {
        let Observers = Router.RegisteredDataObservers.get(page);
        if (!Observers) {
            Observers = new Array<(page: ShiyiPageBase) => void>();
        }
        Observers.push(notification);
        Router.RegisteredDataObservers.set(page, Observers);
    }

    public static NavigateParam: any
    public static NavigateTo(name: PageName, param?: any): void {
        Router.NavigateParam = param ? param : undefined;
        wx.navigateTo({
            url: Router.GetPagePath(name)
        });
    }

    public static NavigateBack() {
        wx.navigateBack();
    }

    public static readonly CurrentPage: ShiyiPageBase;
    public get CurrentPage(): ShiyiPageBase {
        return Router.PageStacks[Router.PageStacks.length - 1];
    }
}
