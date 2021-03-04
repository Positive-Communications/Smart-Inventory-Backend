import addPresetMeta from "../helpers/C/singles/AddPresetMeta";
import savePresets from "../helpers/C/singles/SavePresets";
import saveSections from "../helpers/C/singles/SaveSections";
import readAllPresets from "../helpers/R/Many/ReadAllPresets";
import readAllSections from "../helpers/R/Many/ReadAllSections";
import updatePresetByGate from "../helpers/U/ByID/UpdatePresetMetaByGateID";

class SectionManager{

    async registerSection(req, res){
        const section = await  saveSections(req.body)
         res.json({data: section });
    }

    async savePreset(req, res){
        const preset = await savePresets(req.body)
        res.json({ preset: preset});
    }

    async getAllPresets(req, res){
        const presets= await readAllPresets();
        res.json({presets: presets});

    }

    async getAllSections(req, res){
        const sections = await readAllSections();
        res.json({sections: sections})
    }

    async savePresetMeta(req, res){
        const presetMeta = await addPresetMeta(req.body);
        res.json({presetMeta: presetMeta});
    }

    async updatePresetMeta(req, res){
        const presetMeta = await updatePresetByGate(req.params.id,req.body);
    }

}

export default SectionManager;