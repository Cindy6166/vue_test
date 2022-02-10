/* eslint-disable no-undef */
import axios from 'axios'
import { nanoid } from 'nanoid'
export default {
    namespaced: true,
    actions: {
        addMemberW(context, value) {
            if (value.name.indexOf('w') == 0) {
                context.commit('ADD_MEMBER', value)
            } else {
                alert('prefix must be "w"')
            }
        },
        addMemberServer(context) {
            axios.get('http://localhost:8080/myApi/students').then(
                response => {
                    const member = response.data.map(m => m.name)
                    context.commit('ADD_MEMBER', {id:nanoid(),name:member[1]})
                },
                error => {
                    alert(error.message)
                }
            )
        }
    },
    mutations: {
        ADD_MEMBER(state, value) {
            state.membersList.unshift(value)
        }
    },
    state: {
        membersList: [
            { id: '001', name: 'Tom' }
        ]
    },
    getters: {
        firstMemberName(state) {
            return state.membersList[0].name
        }
    }
}