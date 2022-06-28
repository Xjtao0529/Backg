export const validatePassword = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('密码不能为空'))
  } else if (value < 6) {
    callback(new Error('密码不能小于6位'))
  } else {
    callback()
  }
}
