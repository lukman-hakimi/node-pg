const { 
    add, 
    read, 
    findById, 
    remove, updateTB, 
    addResturent, 
    findOwnerRest, 
} = require("../../models/dbhelpers")

const addOwner = async (req, res) => {
    try {
        const data = await add(req.body);
        if (!data) res.status(400).json({ msg: "oooopss!!" })

        res.status(200).json({ msg: data })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

const getOwners = async (req, res) => {
    try {
        const data = await read();
        if (!data) return res.status(400).json({ msg: "oooopss!!" })

        res.status(200).json({ msg: data })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

const getSingleOwner = async (req, res) => {
    const { id } = req.params;

    try {
        const data = await findById(id);
        if (!data) return res.status(400).json({ msg: "oooopss!!" })

        res.status(200).json({ msg: data })
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

const deleteOwner = async (req, res) => {
    const { id } = req.params;

    try {
        const data = await remove(id);
        if (!data) return res.status(400).json({ msg: "oooopss!!" })

        res.status(200).json({ msg: data })
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

const updateOwner = async (req, res) => {
    const { id } = req.params;
    try {
        const data = await updateTB(id, req.body)
        if (!data) return res.status(400).json({ msg: "ooopss!!!" })

        res.status(200).json({ msg: data })
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

const addRest = async (req, res) => {
    const { id } = req.params;
    const message = req.body
    if (!message.owner_id) message.owner_id = Number(id)
    try {
        const data = await addResturent(message)
        if (!data) return res.status(400).json({ msg: "ooopss!!!" })

        res.status(200).json({ msg: data })
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

const findOwnerResturent = async (req, res) => {
    const { id } = req.params;
    try {
        const data = await findOwnerRest(id)
        if(!data) return res.status(400).json({ msg: "ooopss!!!" })
        res.status(200).json({ msg: data })
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

module.exports = {
    addOwner,
    getOwners,
    getSingleOwner,
    deleteOwner,
    updateOwner,
    addRest,
    findOwnerResturent
}