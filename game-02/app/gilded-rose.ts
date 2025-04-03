export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}
interface UpdatableItem {
    update(): void;
}

class NormalItem implements UpdatableItem {
    constructor(protected item: Item) {}

    update(): void {
        this.decreaseQuality();
        this.item.sellIn--;

        if (this.item.sellIn < 0) {
            this.decreaseQuality();
        }
    }

    protected decreaseQuality(): void {
        if (this.item.quality > 0) {
            this.item.quality--;
        }
    }

    protected increaseQuality(): void {
        if (this.item.quality < 50) {
            this.item.quality++;
        }
    }
}


class AgedBrie extends NormalItem {
    update(): void {
        this.increaseQuality();
        this.item.sellIn--;

        if (this.item.sellIn < 0) {
            this.increaseQuality();
        }
    }

    increaseQuality(): void {
        if (this.item.quality < 50) {
            this.item.quality++;
        }
    }
}

class Sulfuras implements UpdatableItem {
    constructor(private item: Item) {}

    update(): void {
       
    }
}

class BackstagePasses extends NormalItem {
    update(): void {
        this.increaseQuality();

        if (this.item.sellIn < 11) {
            this.increaseQuality();
        }
        if (this.item.sellIn < 6) {
            this.increaseQuality();
        }

        this.item.sellIn--;

        if (this.item.sellIn < 0) {
            this.item.quality = 0;
        }
    }
}

class ConjuredItem extends NormalItem {
    update(): void {
        this.decreaseQuality();
        this.decreaseQuality();
        this.item.sellIn--;

        if (this.item.sellIn < 0) {
            this.decreaseQuality();
            this.decreaseQuality();
        }
    }
}

export class GildedRose {
    items: Item[];
    private updatableItems: UpdatableItem[];

    constructor(items: Item[]) {
        this.items = items;
        this.updatableItems = items.map(GildedRose.createUpdatableItem);
    }

    private static createUpdatableItem(item: Item): UpdatableItem {
        switch (item.name) {
            case 'Aged Brie':
                return new AgedBrie(item);
            case 'Sulfuras, Hand of Ragnaros':
                return new Sulfuras(item);
            case 'Backstage passes to a TAFKAL80ETC concert':
                return new BackstagePasses(item);
            case 'Conjured':
                return new ConjuredItem(item);
            default:
                return new NormalItem(item);
        }
    }

    updateQuality(): Item[] {
        this.updatableItems.forEach(item => item.update());
        return this.items;
    }
}
