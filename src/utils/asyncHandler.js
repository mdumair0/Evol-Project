const asyncHandler = (reqHandler) => {
    (req, res, next) => {
        Promise.resolve(reqHandler(req, res, next))
            .catch((err) => next(err))
    }
}

export { asyncHandler }

// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         res.state(err.code || 500).json({
//             success: false,
//             message: err.message
//         })
//     }
// }