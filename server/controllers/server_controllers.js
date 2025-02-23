import User from "../user_template/User.js";

export const createUser = async(req, res) => {
    try {
        const {name, email, age, profession} = req.body;
        const user = new User(name, email, age, profession);
        await user.save();
        res.send({
            status: 201,
            statusMessage: "OK",
            message: "User saved successfully"
        })
    }
    catch (error) {
        res.send({
            status: 500,
            statusMessage: "Error",
            message: error.message
        })
    }
}

export const readUser = async(req, res) => {
    try{
        const users = await User.search();
        res.send({
            status: 200,
            statusMessage: "Ok",
            message: users
        })
    }
    catch (error) {
        res.send({
            status: 500,
            statusMessage: "Error",
            message: error.message
        })
    }
}

export const updateUser = async(req, res) => {
    try {
        const id = req.params.id;
        
        const {name, email, age, profession} = req.body;
        const user = new User(name, email, age, profession);
        await user.change(id);

        res.send({
            status: 202,
            statusMessage: "OK",
            message: "Successfully updated a user"
        })
    }
    catch (error) {
        res.send({
            status: 500,
            statusMessage: "Error",
            message: error.message
        })
    }
}

export const deleteUser = async(req, res) => {
    try {
        const id = req.params.id
        await User.delete(id);
        res.send({
            statusCode: 200,
            statusMessage: 'Ok',
            message: 'Successfully deleted a user.',
        })
    }
    catch (error) {
        res.send({
            status: 500,
            statusMessage: "Internal server error",
            message: error.message
        })
    }
}