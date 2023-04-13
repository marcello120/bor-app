import React from 'react'
import WineCard from '@/components/WineCard'

const wine_card = () => {
    return (
        <div>
            <WineCard
                termek="Ats Karoly Ats Cuvee"
                evjarat={2020}
                szin="fehér"
                karakter="édes"
                kategoria="cuvée"
                borvidek="Tokaj"
                kiszereles={0.5}
                ar={6690}
                imageUrl="https://borhalo.com/shop/image/cache/catalog/Mesz_Kadarka_Premium_17_0,75-572x800.png"
            />
            <WineCard
                            termek={wine.termek}
                            evjarat={wine.evjarat}
                            szin={wine.szin}
                            karakter={wine.karakter}
                            kategoria={wine.kategoria}
                            borvidek={wine.borvidek}
                            kiszereles={wine.kiszereles}
                            ar={wine.ar}
                            imageUrl="https://borhalo.com/shop/image/cache/catalog/Mesz_Kadarka_Premium_17_0,75-572x800.png"
                        />
        </div>
    )
}

export default wine_card