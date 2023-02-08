const state = () => ({
  messages: [],
});

const getters = {
  getMessages: (state) => state.messages,
};

const mutations = {
  setMessages: (state, messages) => (state.messages = messages),
};

const actions = {
  async fetchMessages({ commit }) {
    // FETCH messages from firebase store
    },
    
    async addMessage({ commit }, message) { 
        // ADD message to firebase store
    }
};
