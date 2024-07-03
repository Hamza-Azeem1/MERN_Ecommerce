const backendDomin = import.meta.env.VITE_API_URL

const SummaryApi = {
    signUp: {
        url: `${backendDomin}/api/signup`,
        method: "post"
    },
    signIn: {
        url: `${backendDomin}/api/signin`,
        method: "post"
    },
    current_user: {
        url: `${backendDomin}/api/user-details`,
        method: "get"
    },
    Logout_user: {
        url: `${backendDomin}/api/userLogout`,
        method: "get"
    },
}

export default SummaryApi