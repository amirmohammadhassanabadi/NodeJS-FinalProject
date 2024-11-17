exports.addCategory = (req, rep) => {
    console.log(req.body.test);
    rep.send("done");
}