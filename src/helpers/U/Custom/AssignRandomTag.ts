import readAllUnasignedTags from "../../R/Many/AllUnassignedTags";

const assignRandomTag = async () =>{


    const tags = await readAllUnasignedTags()    


    return tags[Math.floor(Math.random()* tags.length)];

}

export default assignRandomTag;