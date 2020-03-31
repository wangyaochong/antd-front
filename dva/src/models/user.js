export default {
    namespace: 'user',
    state: {name:"abc",age:18},
    reducers: {
        changeName(state) {
            return {name:"efg",age:18};
        },
    },
    subscriptions: {
        setup({ dispatch, history }) {
            return history.listen(({ pathname, query }) => {
                console.log(history);
            });
        },
    },
};
