import User from './../../models/User'
export default async ctx => {
  User.find({ userId: req.params.userId }, (err, links) => {

    if (err) {
      console.log(err);
    }
    else {
      res.json(links);
    }
  });
}
