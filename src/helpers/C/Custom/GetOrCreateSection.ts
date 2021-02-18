import { getConnection } from "typeorm";
import Sections from "../../../entity/Sections";
import saveSections from "../singles/SaveSections";

const getOrCreateSection =async(section)=>{

    try{

        let _section = await getConnection()
                .createQueryBuilder()
                .select('section')
                .from(Sections, 'section')
                .where('section.name =:section', {section:section})
                .getOne();

        if(_section === null || _section === undefined ){

            return await saveSections(section);

        }else return _section;
    }catch(e){
        console.log(e);
        
    }

}

export default getOrCreateSection;