async function authToken(req, res, next) {
    try {
        const token = req.cookies?.token || req.header
    } catch (error) {
        res.status(400).json({
            message: error.message || error,
            data: [],
            error: true,
            success: false
        })
    }
}

module.exports = authToken