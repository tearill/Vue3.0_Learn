/**
 * @file store
 * @author caigang
 */
import {createStore} from 'vuex';

export const store = createStore({
    state() {
        return {
            count: 100
        };
    },
    mutations: {
        add(state) {
            state.count++;
        }
    }
});