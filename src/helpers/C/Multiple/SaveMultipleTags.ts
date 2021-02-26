import saveTags from "../singles/SaveTags";

const saveMultipleTags = async (tagsArray)=>{

    let tags = [];

    for (let tag of tagsArray){
     
        tags.push(await saveTags(tag));
    }

    return tags;
    
}

export default saveMultipleTags;