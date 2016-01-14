declare namespace NwJs {

	interface MenuItem {
		//
	}

	interface MenuItemConstructor {
		new (options: any): MenuItem;
	}

	interface Menu {
		append(item: any): void;
		popup(x: number, y: number): void;
	}

	interface MenuConstructor {
		new (): Menu;
	}

	interface NW {
		Menu: MenuConstructor;
		MenuItem: MenuItemConstructor;
	}
}

declare module 'nw.gui' {
	const nw: NwJs.NW;
	export = nw;
}

declare var nw: NwJs.NW;
