import { Item, GildedRose } from "../app/gilded-rose";


describe('GildedRose', () => {
    it('decreases quality and sellIn for normal items', () => {
        const items = [new Item('Normal Item', 10, 20)];
        const gildedRose = new GildedRose(items);

        gildedRose.updateQuality();

        expect(items[0].sellIn).toBe(9);
        expect(items[0].quality).toBe(19);
    });

    it('quality degrades twice as fast after sellIn date passes', () => {
        const items = [new Item('Normal Item', 0, 20)];
        const gildedRose = new GildedRose(items);

        gildedRose.updateQuality();

        expect(items[0].sellIn).toBe(-1);
        expect(items[0].quality).toBe(18);
    });

    it('quality never goes below zero', () => {
        const items = [new Item('Normal Item', 5, 0)];
        const gildedRose = new GildedRose(items);

        gildedRose.updateQuality();

        expect(items[0].quality).toBe(0);
    });

    it('Aged Brie increases in quality', () => {
        const items = [new Item('Aged Brie', 10, 30)];
        const gildedRose = new GildedRose(items);

        gildedRose.updateQuality();

        expect(items[0].quality).toBe(31);
    });

    it('Aged Brie quality increases twice as fast after sellIn date passes', () => {
        const items = [new Item('Aged Brie', 0, 30)];
        const gildedRose = new GildedRose(items);

        gildedRose.updateQuality();

        expect(items[0].quality).toBe(32);
    });

    it('quality of Aged Brie never goes above 50', () => {
        const items = [new Item('Aged Brie', 10, 50)];
        const gildedRose = new GildedRose(items);

        gildedRose.updateQuality();

        expect(items[0].quality).toBe(50);
    });

    it('Sulfuras never changes quality or sellIn', () => {
        const items = [new Item('Sulfuras, Hand of Ragnaros', 10, 80)];
        const gildedRose = new GildedRose(items);

        gildedRose.updateQuality();

        expect(items[0].sellIn).toBe(10);
        expect(items[0].quality).toBe(80);
    });

    it('Backstage Passes increase in quality as sellIn approaches', () => {
        const items = [new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20)];
        const gildedRose = new GildedRose(items);

        gildedRose.updateQuality();

        expect(items[0].quality).toBe(21);
    });

    it('Backstage Passes increase in quality by 2 when 10 days or less remain', () => {
        const items = [new Item('Backstage passes to a TAFKAL80ETC concert', 10, 20)];
        const gildedRose = new GildedRose(items);

        gildedRose.updateQuality();

        expect(items[0].quality).toBe(22);
    });

    it('Backstage Passes increase in quality by 3 when 5 days or less remain', () => {
        const items = [new Item('Backstage passes to a TAFKAL80ETC concert', 5, 20)];
        const gildedRose = new GildedRose(items);

        gildedRose.updateQuality();

        expect(items[0].quality).toBe(23);
    });

    it('Backstage Passes drop to 0 quality after concert', () => {
        const items = [new Item('Backstage passes to a TAFKAL80ETC concert', 0, 20)];
        const gildedRose = new GildedRose(items);

        gildedRose.updateQuality();

        expect(items[0].quality).toBe(0);
    });

    it('Conjured items degrade in quality twice as fast', () => {
        const items = [new Item('Conjured', 10, 20)];
        const gildedRose = new GildedRose(items);

        gildedRose.updateQuality();

        expect(items[0].quality).toBe(18);
    });

    it('Conjured items degrade in quality four times as fast after sellIn passes', () => {
        const items = [new Item('Conjured', 0, 20)];
        const gildedRose = new GildedRose(items);

        gildedRose.updateQuality();

        expect(items[0].quality).toBe(16);
    });
});
