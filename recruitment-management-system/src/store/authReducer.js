import { createAction, createReducer } from "@reduxjs/toolkit"

const signIn = createAction("SIGN_IN")
const setRole = createAction("SET_ROLE")
const signOut = createAction("SIGN_OUT")

const authReducer = createReducer({ isAuthenticated: false, userRole: "" }, (builder) => {
    builder.addCase(signIn, (state) => { state.isAuthenticated = true })
    builder.addCase(setRole, (state, action) => { state.userRole = action.payload })
    builder.addCase(signOut, (state, action) => { state.isAuthenticated = false })
})

export { authReducer as default, signIn, setRole, signOut }