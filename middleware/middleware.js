app.use(function(req, res, next){
    var a = parseInt(req.query.a),
    b = parseInt(req.query.b);
    if (!a || !b || isNaN(a) || isNaN(b)){
      return res.status(422).end("You must specify two numbers as query params, A and B");
    }
    req.a = a;
    req.b = b;
    return next();
  });