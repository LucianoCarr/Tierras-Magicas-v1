module.exports = async (req, res) => {
    try {

        return res.render('editCharacter')

    } catch (error) {
        console.log(error);
    }
}