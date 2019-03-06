import User from './../../models'
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
