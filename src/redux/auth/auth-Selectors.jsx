export const selectIsLoggedIn=state => state.auth.isLoggedIn;
export const selectUserName = state => state.auth.user.name;
export const selectRefresh = state => state.auth.isRefreshing;

// const authSelectors={
//     selectIsLoggedIn,
//    selectUserName 
// }

// export default authSelectors

