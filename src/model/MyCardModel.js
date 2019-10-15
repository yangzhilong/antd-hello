export default {
    namespace: 'myCard',
    state: {
        cardList: [
            {
                id: 1,
                setup: 'card-2 1',
                punchline: 'punchline 2-1'
            },{
                id: 2,
                setup: 'card-2 2',
                punchline: 'punchline 2-2'
            }
        ],
        index: 2
    },
    reducers: {
        handlerClick(state, {payload: newCard}) {
            let nextIndex = state.index+1;
            newCard.setup = newCard.setup.concat(nextIndex);
            newCard.punchline = newCard.punchline.concat(nextIndex);

            let newCardWithId = {...newCard, id:nextIndex};
            let nexData = state.cardList.concat(newCardWithId);
            return {
                cardList: nexData,
                index: nextIndex
            }
        },
        handlerClick2(state) {
            let nextIndex = state.index+1;
            let newCard = {
                id: nextIndex,
                setup: 'card-2 '+nextIndex,
                punchline: 'punchline 2-'+nextIndex
            }
            let nexData = state.cardList.concat(newCard);
            return {
                cardList: nexData,
                index: nextIndex
            }
        }
    }
}