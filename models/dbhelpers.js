const db = require("../data/dbConfig");

const add = async (info) => {
    const id = await db("owners").insert(info);
    if(id) return findById(id)
}

const read = async () => {
    const data = await db("owners");
    return data;
}

const findById = async (id) => {
    return await db("owners").where({ id }).first()
}

const remove = async (id) => {
    const owner = await findById(id);
    const data = await db("owners").where({ id }).del();
    if(data) return owner
}

const updateTB = async (id, changes) => {
    const data = await db("owners").where({ id }).update(changes)
    if(data) return findById(id)
}

const addResturent = async (message) => {
    const id = await db("resturents").insert(message);
    if(id) return findRestById(id)
}

const findRestById = async (id) => {
    return db("resturents").where({id}).first()
}

const findOwnerRest = (owner_id)=> {
    return db("resturents as rest")
    .join("owners as ow", "rest.owner_id","ow.id")
    .select(
        "ow.id as owner_id",
        "ow.name as owner_name",
        "rest.name as rest_name",
        "rest.location as rest_location"
    ).where({ owner_id })
}

module.exports = {
    add,
    read,
    findById,
    remove,
    updateTB,
    addResturent,
    findRestById,
    findOwnerRest
}