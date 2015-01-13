/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	retrieveUserInfoByEmail: function(req, res) {
		if (req.param('email')) {
			User.findByEmail(req.param('email')).exec(function(err,theUser){
				return res.view('user/userinfo', {
					user: theUser[0]
				});
			});
		}
	}
};

