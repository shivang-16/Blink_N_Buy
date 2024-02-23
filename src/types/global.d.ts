type UserType = {
    name: string,
    email: string,
}

type UserState = {
    loading: boolean,
    user: UserType,
    error ?: string,
    isAuthenticated: boolean
}