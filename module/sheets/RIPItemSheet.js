export default class RIPItemSheet extends ItemSheet {
    get template() {
        return 'systems/foundry-ripts/templates/sheets/${this.item.data.type}-sheet.html';
    }
}