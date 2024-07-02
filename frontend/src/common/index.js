const backendDomin = import.meta.env.VITE_API_URL

const SummaryApi = {
    signUp: {
        url: `${backendDomin}/api/signup`,
        method: "post"
    },
}

export default SummaryApi