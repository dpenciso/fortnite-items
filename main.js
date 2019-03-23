import { items } from './fortnite-api.js'

const legendaryitems = items.filter(legendaryitem => {
    return legendaryitem.rarity === 'legendary'
})

const epicitems = items.filter(epicitem => {
    return epicitem.rarity === 'epic'
})

const rareitems = items.filter(rareitem => {
    return rareitem.rarity === 'rare'
})

const uncommonitems = items.filter(uncommonitem => {
    return uncommonitem.rarity === 'uncommon'
})

const commonitems = items.filter(commonitem => {
    return commonitem.rarity === 'common'
})

// console.log(legendaryitems, epicitems, rareitems, uncommonitems, commonitems)

const simpleItems = items.map(it => {
    return {
        name: it.name,
        type: it.type,
        rarity: it.rarity,
        cost: it.cost,
    }

})

// console.log(simpleItems)

const itemWithPics = items.map(item => {
    item.imgURL = items.images
})

console.log(itemWithPics)

let pictureDiv = document.querySelector('.container')

itemWithPics.forEach(item => {
    let itemPic = document.createElement('img')
    let itemFig = document.createElement('figure')
    let itemCap = document.createElement('figcaption')
    itemCap.textContent = `${items.name}`
    itemPic.src = item.imgURL
    itemFig.appendChild(itemPic)
    itemFig.appendChild(itemCap)
    pictureDiv.appendChild(itemFig)
})