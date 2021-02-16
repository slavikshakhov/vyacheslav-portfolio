export default (req, res) => {
    const {x} = req.body;
    console.log('------------------------------------------')
    
     res.status(200).json({ name: x })
}