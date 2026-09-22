const followModel = require("../model/follow.model");
const userModel = require("../model/user.model")

async function followUserController(req, res) {
  const followerUsername = req.user.username; //one who follow
  const followeeUsername = req.params.username; // getting follow /params


  //----------Check if someone following himself
  if (followeeUsername == followerUsername) {
    return res.status(400).json({
      message: "You cant follow yourself",
    });
  }

  // Check if user exist 
  const isFolloweeExist = await userModel.findOne({
    username:followeeUsername
  })
    
  if(!isFolloweeExist){
    return res.status(404).json({
        message: `User you are trying to follow does not exist`
    })
  }


  //----------Check if users following each other or not
  const isAlreadyFollowing = await followModel.findOne({
    follower: followerUsername,
    followee: followeeUsername,
  });

  if (isAlreadyFollowing) {
    return res.status(200).json({
      message: `You are already following ${followeeUsername}`,
      follow: isAlreadyFollowing,
    });
  }



  // after passing conditions creating document in followModel collection in DB

  const followRecord = await followModel.create({
    // use to create model
    follower: followerUsername,
    followee: followeeUsername,
  });

  res.status(201).json({
    message: `You are now following ${followeeUsername}`,
    follow: followRecord,
  });
}

async function unfollowUserController(req,res){

    const followerUsername = req.user.username
    const followeeUsername = req.params.username

    const isUserFollowing = await followModel.findOne({
        follower:followerUsername,
        followee:followeeUsername //one who get follow
    })

    if(!isUserFollowing){
        return res.status(200).json({
            message:`you are not following ${followeeUsername}`
        })
    }
    await followModel.findByIdAndDelete(isUserFollowing._id)
    res.status(200).json({
            message:`you have unfollowed ${isUserFollowing.followee}`
        })
}

module.exports = {
  followUserController,
  unfollowUserController
};
