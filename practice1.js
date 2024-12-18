
  
console.log(camelCaseKeys({ total_questions: 200, total_users: 10000 }))
// // => { totalQuestions: 200, totalUsers: 10000 }

console.log(camelCaseKeys({
    total_questions: 200,
    social_handles: { youtube_channel: 'youtube.com/devtoolstech' },
  }))

// // // => { totalQuestions: 200, socialHandles: { youtubeChannel: 'youtube.com/devtoolstech' } }

console.log(
    camelCaseKeys([
      { total_questions: 200 },
      { total_users: 10000, social_handles: { youtube_channel: 'youtube.com/devtoolstech' }}
    ]))

/*
[
  { totalQuestions: 200 },
  { totalUsers: 10000, socialHandles: { youtubeChannel: 'youtube.com/devtoolstech' }}
]
*/

