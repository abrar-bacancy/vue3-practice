import { FETCH_POST, FETCH_POSTS } from '../actions.type'
import { SAVE_POST, SET_POST, SET_POSTS, SET_SEL_TAG, SET_TAGS } from './../mutations.type'
import { PostsService } from './../../services/api.service'

const state = {
    posts: [],
    post: null,
    tags: [],
    selectedTag: null,
}

const getters = {
    posts(state) {
        return state.posts
    },
    post(state) {
        return state.post
    },
    tags(state) {
        return state.tags
    },
    selectedTag(state) {
        return state.selectedTag
    },
    postsWithTag(state) {
        return state.posts.filter(p => p.tags.includes(state.selectedTag))
    },
}

const mutations = {
    [SET_POSTS](state, posts) {
        state.posts = posts;
    },
    [SET_TAGS](state, tags) {
        state.tags = tags;
    },
    [SET_POST](state, post) {
        state.post = post;
    },
    [SET_SEL_TAG](state, selectedTag) {
        state.selectedTag = selectedTag;
    }
}

const actions = {
    async [FETCH_POSTS]({ commit }) {
        return PostsService.query().then((data) => {
            commit(SET_POSTS, data)

            const tagSet = new Set()
            data.forEach(item => {
                item.tags.forEach(tag => tagSet.add(tag))
            })
            commit(SET_TAGS, tagSet)
            
        }).catch(error => {
            console.log(error)
            throw new Error(error);
        })
    },
    async [FETCH_POST]({ commit }, data) {
        return PostsService.get(data.id).then((res) => {
            commit(SET_POST, res)
        }).catch(error => {
            console.log(error)
            throw new Error(error);
        })
    },
    async [SAVE_POST](context, data) {
        return PostsService.create(data).catch(error => {
            console.log(error)
            throw new Error(error);
        })
    }
}

export default {
    state,
    getters,
    actions,
    mutations
};
