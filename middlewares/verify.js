function verify(request, response, next) {

    const {id} = request.body;

    if (id || id != undefined) {
        next()
    }
    else {
        response.status(400).json({
            mensagem: "not found"
        })
    }
}

module.exports = verify;