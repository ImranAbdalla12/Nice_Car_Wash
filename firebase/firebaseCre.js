const MyCred = new Buffer.from(
  JSON.stringify({
    type: 'service_account',
    project_id: 'nice-car-wash',
    private_key_id: '6b8186c21d64bf210b5c9a541d66bbbe76a6b720',
    private_key:
      '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCT7uQaSZWygabg\nnZ9SWFC1jSRa7rh7O1H5/Tm/mwfYd2LRXRaw8punDf39ArN0GTTa8SCjIrVo5/l/\nHYeks0riKS3ZtClqWFHyc+bh5MLK+57TmLf4lAmDzxa0bfx3oioC1qW0NleyTGeB\nrLSgbfqCyDD0+8lPK+eK9EcQvG59x+/PAbZ2M05xYeFSQCRewAbLBFeemFc+StbV\nABHRgEywQclW4IVd+bcaN6gu9b0XKAlhos1x6975gJ1U/PjH7K9gARiozVOjw9Vx\nDsZu07nAoKglifzTUpeAExiefogF7tOOPnE4yB2EKYVLHYbnUr2CPvgvmVgcjwOk\nrCQGh40zAgMBAAECggEAALif7Q7hx3KBXUP3dF/Q2Om8vSK/zH4ACs90uh3n3mLK\nnQmupCMyphBX5iVeuZir3MtjJNh0+PN0kG2U7TUgjtSzkAWkVAvlLmDpRb2nQ3UR\nk6eBchlKqJVYX33PxseIG+Zu/V9scwaTVJsCcGvI1l1ie7dEhnnI0bEaLZc1lLBk\ncYn3CocUZ5hrwHmZxgh3TE+h1cYk5PgGCQ8DMNxJ+xAIWgvhKjmCTrMt/4j5LTP0\nZNSMYN6TI0YjZb9EsekLv6P0GKyUjaGYixuNNJXFUnUw+q/TI6SepKxscRQMiGDW\nGphFvb+MuOFMrwQnllMZiZmojrd/LYQsk0MLDcShLQKBgQDGyyPKPRelFq5srBlr\nfGjm0FYt+PnKGCCFZX5yOfHUTcZHPwmQK6w+avwna1sdowsPa1mEerlw7o3BpudS\now0FBuDV0L6jX1jAGDJnYSHrWDzmccIzECNNgfil/fX5GWaWwjktwamgZBU9QFqK\nxRcQieE8ilusWZcKdYDgJBn+nwKBgQC+gO98dE3LRGfcGAwU68Nt4Rics6hunGpq\nNWCSeSAGUz97nqpRqFkQWrXvkL9PlnY9CfaWwL/YVHFRjk1h5PsuZ8mJQHqs5IyY\nluG6r/eW8DDtd9fz2p07Vclt0WrSsCR+9JU4OzFXhdIghxXU45XtT4utuTqM5yTF\nJ3ZUdhys7QKBgDC9NXUsLVPoj7NNLp5Pzlho0/hJhtSpva93Bt1yn3vx5Z8qMWoL\nixtyl4gCpkBJ7ThGlZgJjtXFZzQHe8ei+lo1KYLCvzrG8beHNzRpeCt/Ys8NLRPf\n7QffydrIvTnppGFqFSLGzJPqddqioJBNai4/3907/uXuwT1rOcG6mDT5AoGBAJwF\nKR56ekQhkBYXs71mobXaBrhAA5AjlpvJf4A2p13GzFVISyF5iQf14s+DcsuR5OB0\nynoI/pYEApLSwtmMGZOV+N7p6g6zV9qYp+Knv1Tk/o1d+4WB5Af2aHQCcUSAckNv\nuM5G3FBcDw4I1H54rg+feDwdWbCQlfLKMQVXfoC5AoGBAIzgKG6tocULE+NXp9xl\nmCJqlGTWiJhw1hvOVmITtGiwCSy88nbkDR6IhWIekFn8z/GIHh8NU0VqP7ATNqDZ\nA7Rt+i/12k6NyAIxywr0l9XJhVY+dqKuD2MbmJ+ukN0qkEI3OkVlJc+muVut7r0E\n8NdckzMFWu7bblrPyspqKFdQ\n-----END PRIVATE KEY-----\n',
    client_email:
      'firebase-adminsdk-gk1x4@nice-car-wash.iam.gserviceaccount.com',
    client_id: '117085224630357520002',
    auth_uri: 'https://accounts.google.com/o/oauth2/auth',
    token_uri: 'https://oauth2.googleapis.com/token',
    auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
    client_x509_cert_url:
      'https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-gk1x4%40nice-car-wash.iam.gserviceaccount.com',
  })
).toString('base64');
console.log(MyCred);
// Buffer.from(
//   JSON.stringify({
//     type: 'service_account',
//     project_id: 'nice-car-wash',
//     private_key_id: '6b8186c21d64bf210b5c9a541d66bbbe76a6b720',
//     private_key:
//       '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCT7uQaSZWygabg\nnZ9SWFC1jSRa7rh7O1H5/Tm/mwfYd2LRXRaw8punDf39ArN0GTTa8SCjIrVo5/l/\nHYeks0riKS3ZtClqWFHyc+bh5MLK+57TmLf4lAmDzxa0bfx3oioC1qW0NleyTGeB\nrLSgbfqCyDD0+8lPK+eK9EcQvG59x+/PAbZ2M05xYeFSQCRewAbLBFeemFc+StbV\nABHRgEywQclW4IVd+bcaN6gu9b0XKAlhos1x6975gJ1U/PjH7K9gARiozVOjw9Vx\nDsZu07nAoKglifzTUpeAExiefogF7tOOPnE4yB2EKYVLHYbnUr2CPvgvmVgcjwOk\nrCQGh40zAgMBAAECggEAALif7Q7hx3KBXUP3dF/Q2Om8vSK/zH4ACs90uh3n3mLK\nnQmupCMyphBX5iVeuZir3MtjJNh0+PN0kG2U7TUgjtSzkAWkVAvlLmDpRb2nQ3UR\nk6eBchlKqJVYX33PxseIG+Zu/V9scwaTVJsCcGvI1l1ie7dEhnnI0bEaLZc1lLBk\ncYn3CocUZ5hrwHmZxgh3TE+h1cYk5PgGCQ8DMNxJ+xAIWgvhKjmCTrMt/4j5LTP0\nZNSMYN6TI0YjZb9EsekLv6P0GKyUjaGYixuNNJXFUnUw+q/TI6SepKxscRQMiGDW\nGphFvb+MuOFMrwQnllMZiZmojrd/LYQsk0MLDcShLQKBgQDGyyPKPRelFq5srBlr\nfGjm0FYt+PnKGCCFZX5yOfHUTcZHPwmQK6w+avwna1sdowsPa1mEerlw7o3BpudS\now0FBuDV0L6jX1jAGDJnYSHrWDzmccIzECNNgfil/fX5GWaWwjktwamgZBU9QFqK\nxRcQieE8ilusWZcKdYDgJBn+nwKBgQC+gO98dE3LRGfcGAwU68Nt4Rics6hunGpq\nNWCSeSAGUz97nqpRqFkQWrXvkL9PlnY9CfaWwL/YVHFRjk1h5PsuZ8mJQHqs5IyY\nluG6r/eW8DDtd9fz2p07Vclt0WrSsCR+9JU4OzFXhdIghxXU45XtT4utuTqM5yTF\nJ3ZUdhys7QKBgDC9NXUsLVPoj7NNLp5Pzlho0/hJhtSpva93Bt1yn3vx5Z8qMWoL\nixtyl4gCpkBJ7ThGlZgJjtXFZzQHe8ei+lo1KYLCvzrG8beHNzRpeCt/Ys8NLRPf\n7QffydrIvTnppGFqFSLGzJPqddqioJBNai4/3907/uXuwT1rOcG6mDT5AoGBAJwF\nKR56ekQhkBYXs71mobXaBrhAA5AjlpvJf4A2p13GzFVISyF5iQf14s+DcsuR5OB0\nynoI/pYEApLSwtmMGZOV+N7p6g6zV9qYp+Knv1Tk/o1d+4WB5Af2aHQCcUSAckNv\nuM5G3FBcDw4I1H54rg+feDwdWbCQlfLKMQVXfoC5AoGBAIzgKG6tocULE+NXp9xl\nmCJqlGTWiJhw1hvOVmITtGiwCSy88nbkDR6IhWIekFn8z/GIHh8NU0VqP7ATNqDZ\nA7Rt+i/12k6NyAIxywr0l9XJhVY+dqKuD2MbmJ+ukN0qkEI3OkVlJc+muVut7r0E\n8NdckzMFWu7bblrPyspqKFdQ\n-----END PRIVATE KEY-----\n',
//     client_email:
//       'firebase-adminsdk-gk1x4@nice-car-wash.iam.gserviceaccount.com',
//     client_id: '117085224630357520002',
//     auth_uri: 'https://accounts.google.com/o/oauth2/auth',
//     token_uri: 'https://oauth2.googleapis.com/token',
//     auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
//     client_x509_cert_url:
//       'https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-gk1x4%40nice-car-wash.iam.gserviceaccount.com',
//   })
// ).toString('base64');