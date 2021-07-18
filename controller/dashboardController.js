const getPerson = (req,res)=>{
    return res.status(200).json({success : true,data : data})
}
const createPerson =(req,res) => {
    const {name} = req.body
    if(!name){
        return res.status(400).json({success:false,message : "Please provide name value"})
    }
    return   res.status(201).json({success : true,data : name})
}

const updatePerson = (req,res)=>{
    const {id} =  req.params
    const {name} = req.body
    const person  = data.find((item)=> item.id === Number(id));
    if(!person){
        return res.status(404).json({success:false,message : `No person  with ${id} found`})
    }
    const newData = data.map((item)=>{

        if(item.id === Number(id)){
            item.name = name
        }
        return item
    })
    return  res.status(200).json({success : true,data : newData})

}

const deletePerson = (req,res)=>{
    const {id} =  req.params
    const person  = data.find((item)=> item.id === Number(id));
    if(!person){
        return res.status(404).json({success:false,message : `No person  with ${id} found`})
    }
        const newData = data.filter((item)=> item.id !== Number(id))
        return res.status(200).json({success : true,data : newData})

    }

    module.exports = {
        getPerson,
        createPerson,
        updatePerson,
        deletePerson
    }