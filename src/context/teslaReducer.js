export const initialState = {
    sidebarOpen: false
}

const teslaReducer = (state, action) => {
    const { type, payload } = action

    switch (type) {
        case 'TOGGLE_SIDEBAR':
            return { ...state, sidebarOpen: payload}

        default:
            return state
    }
}

export default teslaReducer