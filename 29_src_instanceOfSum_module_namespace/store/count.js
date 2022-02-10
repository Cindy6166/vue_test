export default {
    namespaced: true,
    state: {
        sum: 0,
        school: 'LaLa',
        subject: 'Frontend',
    },
    actions: {
        plusOdd(context, value) {
            if (context.state.sum % 2) {
                context.commit('PLUS', value)
            }
        },
        plusWait(context, value) {
            setTimeout(() => {
                context.commit('PLUS', value)
            }, 500);
        },
    },
    mutations: {
        PLUS(state, value) {
            // console.log('mu',state,value)
            state.sum += value
        },
        MINUS(state, value) {
            // console.log('mu',state,value)
            state.sum -= value
        },
    },
   
    getters: {
        bigSum(state) {
            return state.sum * 10
        }
    }
}