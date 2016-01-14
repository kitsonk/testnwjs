export = function main(document: Document, console: Console) {
	const menu = new nw.Menu();

	menu.append(new nw.MenuItem({
		label: 'Item A',
		click() {
			alert('You have clicked at "Item A"');
		}
	}));
	menu.append(new nw.MenuItem({ label: 'Item B' }));
	menu.append(new nw.MenuItem({ type: 'separator' }));
	menu.append(new nw.MenuItem({ label: 'Item C' }));

	document.body.addEventListener('contextmenu', (evt) => {
		evt.preventDefault();
		console.log(evt);
		menu.popup(evt.x, evt.y);

		return false;
	}, false);
}
