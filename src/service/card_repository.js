import { fireBaseDataBase } from "./firebase";

class CardRepository{

    syncCard(userId,onUpdate){  
        const ref = fireBaseDataBase.ref(`${userId}/cards/`)
        ref.on('value',snapshop => {
            const value = snapshop.val()
            value && onUpdate(value)
        })
        return () => ref.off()
    }
    saveCard(userId,card){
        fireBaseDataBase.ref(`${userId}/cards/${card.id}`).set(card)
    }
    removeCard(userId,card){
        fireBaseDataBase.ref(`${userId}/cards/${card.id}`).remove()
    }
}

export default CardRepository